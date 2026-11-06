import tempfile
from pathlib import Path
import unittest
import qrcode
from PIL import Image
from tools.prn_poster_qa import check_poster,sha

URL="https://www.paranormalresponsenetwork.org/events/example-test"


class PosterTests(unittest.TestCase):
    def setUp(self):
        temp=tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.root=Path(temp.name)
        self.source=self.root/"authentic-source.jpg"
        Image.new("RGB",(1200,900),"white").save(self.source)
        self.logo=self.root/"official-source.png"
        Image.new("RGBA",(150,150),"blue").save(self.logo)
        self.poster=self.root/"poster.jpg"
        image=Image.new("RGB",(1400,1000),"white")
        qr=qrcode.make(URL).convert("RGB").resize((500,500),Image.Resampling.NEAREST)
        image.paste(qr,(850,440))
        image.save(self.poster,quality=100,subsampling=0)

    def check(self,**options):
        return check_poster(workspace=self.root,poster=str(self.poster),
            source_photo=str(self.source),official_logo=str(self.logo),
            expected_logo_sha256=sha(self.logo),expected_url=URL,
            rights_cleared=True,**options)

    def test_real_qr_decode_matches_url(self):
        r=self.check()
        self.assertEqual(r["decision"],"PASS_QR_AND_EXPORT_ONLY")
        self.assertEqual(r["decoded_qr_url"],URL)
        self.assertFalse(r["ready_to_publish"])
        self.assertFalse(r["actual_composited_logo_human_verified"])

    def test_wrong_qr_url_is_rejected(self):
        r=check_poster(workspace=self.root,poster=str(self.poster),
            source_photo=str(self.source),official_logo=str(self.logo),
            expected_logo_sha256=sha(self.logo),
            expected_url="https://www.paranormalresponsenetwork.org/wrong",
            rights_cleared=True)
        self.assertEqual(r["decision"],"REJECT")

    def test_missing_rights_refused(self):
        with self.assertRaises(PermissionError):
            check_poster(workspace=self.root,poster=str(self.poster),
                source_photo=str(self.source),official_logo=str(self.logo),
                expected_logo_sha256=sha(self.logo),expected_url=URL,rights_cleared=False)

    def test_unrecognised_logo_source_refused(self):
        with self.assertRaises(ValueError):
            check_poster(workspace=self.root,poster=str(self.poster),
                source_photo=str(self.source),official_logo=str(self.logo),
                expected_logo_sha256="0"*64,expected_url=URL,rights_cleared=True)

    def test_nonjpeg_refused(self):
        alt=self.root/"poster.png"
        Image.new("RGB",(1200,800),"white").save(alt)
        with self.assertRaises(ValueError):
            check_poster(workspace=self.root,poster=str(alt),
                source_photo=str(self.source),official_logo=str(self.logo),
                expected_logo_sha256=sha(self.logo),expected_url=URL,rights_cleared=True)

    def test_linked_file_refused(self):
        link=self.root/"linked.jpg"
        link.symlink_to(self.poster)
        with self.assertRaises(ValueError):
            check_poster(workspace=self.root,poster=str(link),
                source_photo=str(self.source),official_logo=str(self.logo),
                expected_logo_sha256=sha(self.logo),expected_url=URL,rights_cleared=True)

    def test_low_resolution_refused(self):
        with self.assertRaises(ValueError):
            self.check(minimum_width=2500)


if __name__=="__main__":
    unittest.main()
