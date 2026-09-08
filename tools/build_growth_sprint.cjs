const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const sharp = require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, 'sharp'));

const root = path.resolve(__dirname, '..');
const manifestPath = process.argv[2] || path.join(root, 'campaigns', '2026-09-growth-sprint.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const logoPath = path.join(root, 'assets', 'images', '00_brand_marks', 'PRN_logo_MASTER.png');
const framesRoot = path.join(root, 'assets', 'images', 'publish-ready', '2026-09-growth-sprint');
const videosRoot = path.join(root, 'assets', 'videos', 'publish-ready', '2026-09-growth-sprint');

fs.mkdirSync(framesRoot, { recursive: true });
fs.mkdirSync(videosRoot, { recursive: true });

const specs = {
  facebook: { width: 1080, height: 1350, headline: 62, support: 32, logo: 126, top: 116, left: 84, duration: 6.0 },
  instagram: { width: 1080, height: 1920, headline: 72, support: 36, logo: 146, top: 220, left: 92, duration: 6.0 },
  tiktok: { width: 1080, height: 1920, headline: 78, support: 36, logo: 142, top: 250, left: 84, duration: 5.8 },
};

const escapeXml = (value) => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&apos;');

function wrap(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textLines(lines, x, y, size, leading, weight = 700, fill = '#FFFFFF', anchor = 'start') {
  return lines.map((line, i) => `<text x="${x}" y="${y + i * leading}" text-anchor="${anchor}" font-family="DejaVu Sans, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${escapeXml(line)}</text>`).join('\n');
}

async function renderCampaign(campaign, platform) {
  const spec = specs[platform];
  const w = spec.width;
  const h = spec.height;
  const sourcePath = path.resolve(root, campaign.source);
  const stem = `${campaign.date}_${campaign.category_code}_${campaign.slug}_${platform}`;
  const backgroundPath = path.join(framesRoot, `${stem}_background.jpg`);
  const overlayPath = path.join(framesRoot, `${stem}_overlay.png`);
  const endPath = path.join(framesRoot, `${stem}_end.png`);
  const outputPath = path.join(videosRoot, `${stem}_video_v01.mp4`);

  const tint = campaign.lane === 'folklore' ? '#20160F' : '#010308';
  const backgroundSvg = Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${tint}" stop-opacity="0.12"/><stop offset="0.52" stop-color="#010308" stop-opacity="0.20"/><stop offset="1" stop-color="#010308" stop-opacity="0.96"/></linearGradient>
      <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2A78BC" stop-opacity="0.24"/><stop offset="0.5" stop-color="#010308" stop-opacity="0"/><stop offset="1" stop-color="#B03910" stop-opacity="0.18"/></linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#shade)"/><rect width="${w}" height="${h}" fill="url(#edge)"/>
    <path d="M0 ${h - 86} H${w}" stroke="#2A78BC" stroke-opacity="0.42" stroke-width="2"/><path d="M${w - 180} 0 V${h}" stroke="#B03910" stroke-opacity="0.18" stroke-width="2"/>
  </svg>`);

  await sharp(sourcePath)
    .resize(w, h, { fit: 'cover', position: campaign.focus || 'centre' })
    .modulate({ brightness: 0.73, saturation: campaign.lane === 'folklore' ? 0.78 : 0.67 })
    .composite([{ input: backgroundSvg }])
    .jpeg({ quality: 91, chromaSubsampling: '4:4:4' })
    .toFile(backgroundPath);

  const maxChars = platform === 'facebook' ? 23 : (platform === 'tiktok' ? 18 : 20);
  const headline = wrap(campaign.hook.toUpperCase(), maxChars).slice(0, 4);
  const support = wrap(campaign.support, platform === 'facebook' ? 44 : 38).slice(0, 3);
  const headlineY = platform === 'facebook' ? Math.round(h * 0.54) : Math.round(h * 0.54);
  const labelY = headlineY - 76;
  const headlineSvg = Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${spec.left}" y="${labelY - 32}" width="${Math.min(460, campaign.category.length * 16 + 66)}" height="46" rx="5" fill="#1B4E7A" fill-opacity="0.94"/>
    <text x="${spec.left + 20}" y="${labelY}" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="2.5" fill="#FFFFFF">${escapeXml(campaign.category.toUpperCase())}</text>
    <rect x="${spec.left}" y="${headlineY + headline.length * (spec.headline * 1.02) + 24}" width="86" height="6" fill="#B03910"/>
    ${textLines(headline, spec.left, headlineY, spec.headline, Math.round(spec.headline * 1.02), 800)}
    ${textLines(support, spec.left, headlineY + headline.length * Math.round(spec.headline * 1.02) + 92, spec.support, Math.round(spec.support * 1.32), 400, '#E2E8F0')}
    <text x="${spec.left}" y="${h - (platform === 'facebook' ? 52 : 205)}" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="2" fill="#AEB8C3">PARANORMAL RESPONSE NETWORK</text>
  </svg>`);
  const logo = await sharp(logoPath).resize(spec.logo, spec.logo).png().toBuffer();
  await sharp({ create: { width: w, height: h, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: headlineSvg, top: 0, left: 0 },
      { input: logo, top: spec.top, left: platform === 'facebook' ? w - spec.left - spec.logo : spec.left },
    ])
    .png().toFile(overlayPath);

  const endTitle = wrap(campaign.end_title.toUpperCase(), platform === 'facebook' ? 24 : 22).slice(0, 3);
  const route = campaign.route.length > 58 ? campaign.section_label : campaign.route;
  const endSvg = Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="blue"><stop offset="0" stop-color="#2A78BC" stop-opacity="0.36"/><stop offset="1" stop-color="#010308" stop-opacity="0"/></radialGradient>
      <radialGradient id="coral"><stop offset="0" stop-color="#B03910" stop-opacity="0.34"/><stop offset="1" stop-color="#010308" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#010308"/><ellipse cx="170" cy="${Math.round(h*0.48)}" rx="420" ry="620" fill="url(#blue)"/><ellipse cx="${w-170}" cy="${Math.round(h*0.52)}" rx="420" ry="620" fill="url(#coral)"/>
    ${textLines(endTitle, w/2, Math.round(h*0.66), platform === 'facebook' ? 58 : 68, platform === 'facebook' ? 66 : 78, 800, '#FFFFFF', 'middle')}
    <text x="${w/2}" y="${Math.round(h*0.84)}" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="${platform === 'facebook' ? 31 : 36}" font-weight="800" letter-spacing="2" fill="#FFFFFF">PARANORMALRESPONSENETWORK.ORG</text>
    <text x="${w/2}" y="${Math.round(h*0.89)}" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="${platform === 'facebook' ? 24 : 27}" font-weight="500" fill="#B8C2CC">${escapeXml(route)}</text>
  </svg>`);
  const endLogoSize = platform === 'facebook' ? 360 : 430;
  const endLogo = await sharp(logoPath).resize(endLogoSize, endLogoSize).png().toBuffer();
  await sharp({ create: { width: w, height: h, channels: 3, background: '#010308' } })
    .composite([{ input: endSvg, top: 0, left: 0 }, { input: endLogo, top: Math.round(h * 0.13), left: Math.round((w-endLogoSize)/2) }])
    .png().toFile(endPath);

  const heroSeconds = platform === 'tiktok' ? 4.0 : 4.15;
  const fadeSeconds = 0.45;
  const totalSeconds = spec.duration;
  const frames = Math.round((heroSeconds + fadeSeconds) * 30);
  const zoom = platform === 'tiktok' ? "min(zoom+0.0007,1.045)" : "min(zoom+0.00045,1.035)";
  const frequency = campaign.audio_frequency + (platform === 'facebook' ? -4 : platform === 'tiktok' ? 5 : 0);
  const filter = `[0:v]zoompan=z='${zoom}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${w}x${h}:fps=30,format=yuv420p[bg];` +
    `[1:v]format=rgba[ov];[bg][ov]overlay=0:0:shortest=1,format=yuv420p[hero];` +
    `[2:v]fps=30,format=yuv420p[end];[hero][end]xfade=transition=fade:duration=${fadeSeconds}:offset=${heroSeconds},trim=duration=${totalSeconds},setpts=PTS-STARTPTS[v]`;
  // Keep the restrained ambient bed clearly audible on phone speakers without
  // competing with the on-screen copy or creating a jump-scare peak.
  const audioExpr = `0.090*sin(2*PI*${frequency}*t)*(0.82+0.18*sin(2*PI*0.22*t))+0.035*sin(2*PI*${frequency*1.5}*t)`;
  const args = [
    '-y', '-loop', '1', '-framerate', '30', '-t', String(heroSeconds + fadeSeconds), '-i', backgroundPath,
    '-loop', '1', '-framerate', '30', '-t', String(heroSeconds + fadeSeconds), '-i', overlayPath,
    '-loop', '1', '-framerate', '30', '-t', String(totalSeconds - heroSeconds + fadeSeconds), '-i', endPath,
    '-f', 'lavfi', '-i', `aevalsrc=${audioExpr}:s=48000:d=${totalSeconds}`,
    '-filter_complex', filter,
    '-map', '[v]', '-map', '3:a', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-profile:v', 'high', '-level:v', '4.1', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '144k', '-ac', '2', '-ar', '48000', '-af', `afade=t=in:st=0:d=0.35,afade=t=out:st=${totalSeconds-0.8}:d=0.8`,
    '-movflags', '+faststart', '-shortest', outputPath,
  ];
  const run = spawnSync('ffmpeg', args, { encoding: 'utf8' });
  if (run.status !== 0) throw new Error(`ffmpeg failed for ${stem}: ${run.stderr}`);
  return { campaign: campaign.slug, platform, output: path.relative(root, outputPath) };
}

(async () => {
  const built = [];
  for (const campaign of manifest.campaigns) {
    for (const platform of ['facebook', 'instagram', 'tiktok']) {
      built.push(await renderCampaign(campaign, platform));
    }
  }
  process.stdout.write(JSON.stringify({ built }, null, 2) + '\n');
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
