import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmergencyBanner from "../../cards/EmerContact";
const EmerContact = [
  {
    id: "1",
    name: "แจ้งเหตุด่วนเหตุร้าย",
    callNum: "191",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "2",
    name: "หน่วยกู้ชีพวชิรพยาบาล",
    callNum: "1554",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "3",
    name: "แพทย์ฉุกเฉิน",
    callNum: "1669",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "4",
    name: "อุบัติเหตุทางน้ำ",
    callNum: "1196",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "5",
    name: "ศูนย์เอราวัณ",
    callNum: "1646",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "17",
    name: "สถานีวิทยุร่วมด้วยช่วยกัน",
    callNum: "1677",
    image:
      "https://obs.line-scdn.net/0hOBGuBXhqEG16DDycHJhvOkZJHgANIhYlAjlcWQ1bTlQFNFVoRD5eCgoORl8HNFY5R2laWA1bT11V",
  },
  {
    id: "18",
    name: "สถานีวิทยุ จส.100",
    callNum: "*1808",
    image:
      "https://static.mytuner.mobi/media/tvos_radios/TxRQrBB7gg.jpg",
  },
  {
    id: "19",
    name: "แจ้งเพลิงไหม้ดับเพลิง",
    callNum: "199",
    image:
      "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/276988791_101207139218059_5903094721086429325_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGkVIV9HNBELAHdLerNyBd-78H5hY_aFM3vwfmFj9oUzVx29p978AibEq9mkGWSN7njngaKCzODxUbAyt2wk7aW&_nc_ohc=tkCDtmlPRoIAX9L7dpR&_nc_oc=AQmwmGuqisPicltDvkV5-tRNkWA2EW-O2GYwUHHlqwfrFlKCJes3eRVDO3syzY569no&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfD6yG5SGDniBHL6-5OMEZKZu_ItpljDSs04Owo8K-ht3A&oe=64104003",
  },
  {
    id: "23",
    name: "หน่วยแพทย์กู้ชีพกรุงเทพมหานคร",
    callNum: "1555",
    image:
      "http://vajirafoundation.org/wp-content/uploads/2021/11/smart.jpg",
  },
];
function Accident() {
    return (
      <main>
      <Row>
        {EmerContact.map((data) => (
          <Col sm={4} key={data.id}>
            <EmergencyBanner
              images={data.image}
              Name={data.name}
              callNum={data.callNum}
            />
          </Col>
        ))}
      </Row>
    </main>
    );
  }
  
  export default Accident;