import React from "react";
import Sidebar2 from "../components/Sidebar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Jump from "../../src/assets/Poto/jump.jpg";
import Cheep from "../../src/assets/Poto/cheep.jpg";
import Pete from "../../src/assets/Poto/pete.jpg";
import Ing from "../../src/assets/Poto/siripen.png";
import Aum from "../../src/assets/Poto/suppawong.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Footer from "../components/Footer";

// import "../css/AboutUs.css"


const Contact = [
  {
    id: "1",
    name: "Chancheep Mahacharoensuk",
    linkin: "https://www.linkedin.com/in/chancheep-mcs/",
    role: "สมาชิก",
    image: Cheep,
  },
  {
    id: "2",
    name: "Kantapong Matangkarat",
    linkin: "https://www.linkedin.com/in/kantapong-matangkarat-550338207/",
    role: "สมาชิก",
    image: Jump,
  },
  {
    id: "3",
    name: "Pattadon \nSinghajan",
    linkin: "https://www.linkedin.com/in/pattadon-singhajan/",
    role: "สมาชิก",
    image: Pete,
  },
  {
    id: "4",
    name: "Lect. Dr. Siripen Pongpaichet",
    linkin: "https://www.linkedin.com/in/siripenpongpaichet/",
    role: "อาจารย์ที่ปรึกษา",
    image: Ing,
  },
  {
    id: "5",
    name: "Assoc. Prof. Dr. Suppawong Tuarob",
    linkin: "https://www.linkedin.com/in/suppawong-tuarob-phd-2461b022/",
    role: "อาจารย์ที่ปรึกษาร่วม",
    image: Aum,
  },
];
const ContactUs = () => {
  return (
    <main>
      <div id="outer-container">
        <Sidebar2
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <Container style={{ fontFamily: "Kanit" ,paddingLeft:"5%",paddingRight:"5%"}}>
        <Row >
          <Col sm className="d-flex justify-content-center">
            <h1
              style={{ marginTop: "5%", color: "#479B5F", fontWeight: "900" }}
            >
              คำขอบคุณ
            </h1>
          </Col>
          <text>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ทีมพัฒนาโครงการ “คาเมล๊อน:
            การติดตามและประมาณการอาชญากรรมและอุบัติเหตุจากบทความข่าวออนไลน์”
            ขอกราบขอบพระคุณความกรุณาของโครงการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่
            25 (NSC 2023) จากสำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ
            ที่ได้มอบทุนอุดหนุนในการพัฒนา ทำให้โครงการสำเร็จลุล่วงไปได้ด้วยดี
            คณะเทคโนโลยีสารสนเทศและการสื่อสาร
            มหาวิทยาลัยมหิดลที่ได้เอื้อเฟื้ออุปกรณ์และสถานที่ในการทำโครงการ และ
            ขอขอบพระคุณอาจารย์ที่ปรึกษา อาจารย์ ดร. ศิริเพ็ญ พงษ์ไพเชฐ และ รศ.
            ดร. ศุภวงศ์ ทั่วรอบ
            ที่คอยให้คำปรึกษาและคอยช่วยเหลือในการพัฒนาโครงการนี้เป็นอย่างดีเสมอมา
          </text>
        </Row>

        <br />
        <br />
        <Row style={{ backgroundColor: "#479B5F25"}}>
          <Col sm className="d-flex justify-content-center">
            <h3 style={{ color: "#479B5F", fontWeight: "900",marginTop:"2%" }}>
              แรงบันดาลใจของคาเมล๊อน
            </h3>
          </Col>
          <text style={{marginBottom:"2%"}}>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ปัญหาอาชญากรรมนั้นเป็นปัญหาที่ส่งผลกระทบอย่างมากต่อสังคม
            แม้จะมีความพยายามของรัฐบาลทั่วโลก
            แต่อาชญากรรมยังคงเป็นปัญหาต่อเนื่องที่ต้องใช้แนวทางการแก้ไขในหลากหลายมิติ
            เพื่อที่จะทำให้การประมาณการและติดตามสถานการณ์อาชญากรรมในแต่ละพื้นที่อย่างมีประสิทธิภาพ
            จึงจำเป็นอย่างยิ่งที่จะต้องเข้าใจปัจจัยพื้นฐานทางเศรษฐกิจและสังคมที่เป็นปัจจัยของการเกิดอาชญากรรม
            ด้วยเหตุนี้จึงต้องใช้ข้อมูลจำนวนมากที่เกี่ยวข้องกับอาชญากรรมเพื่อนำมาศึกษาและติดตามอย่างใกล้ชิด
            แต่ทว่าน่าเสียดายที่การเข้าถึงข้อมูลอาชญากรรมนั้นไม่ว่าจะเป็นตัวบุคคลหรือรัฐบาลก็ตามเป็นสิ่งที่ถูกจำกัดไม่ให้สามารถเข้าถึงได้ง่ายในหลายๆประเทศ
            รวมถึงประเทศไทยด้วย
            ในส่วนของภาคตำรวจนั้นมีความจำเป็นอย่างมากที่ต้องมีการพัฒนาเครื่องมือและแพลตฟอร์มที่ดีกว่านี้
            เพื่อช่วยรวบรวมและประมวลผลข้อมูลดิจิตอลให้ดียิ่งขึ้น
            เพื่อแก้ปัญหาต่างๆที่เกิดขึ้น ทางคณะผู้จัดทำขอแนะนำ
            คาเมล๊อน(CAMELON)
            เว็ปแอพลิเคชันที่ให้ข้อมูลเชิงลึกแก่บุคคลทั่วไปเกี่ยวกับอัตราอาชญากรรมในท้องถิ่นและแนวโน้มในชุมชนต่างๆ
            โดยที่แอพลิเคชันนั้นจะทำการรวบรวมข่าวอาชญากรรมและอุบัติเหตุจากสื่อออนไลน์ของไทยและนำเสนอออกมาในรูปแบบการแสดงข้อมูลเชิงโต้ตอบ
            เช่น แผนที่ ตาราง และกราฟ
            การสร้างภาพข้อมูลเหล่านี้จะสามารถช่วยให้ผู้ใช้งานสามารถเห็นความสัมพันธ์และความถี่ของอาชญากรรมในพื้นที่ของตนและปรับแต่งการแสดงข้อมูลตามความต้องการของผู้ใช้งานได้
            นอกจากนี้ คาเมล๊อน ยังมีเครื่องวัดอาชญากรรม(Crimenometer)
            ที่วัดอัตราการเกิดอาชญากรรมในแต่ละช่วงเวลาและในแต่ละเขตในประเทศไทยได้
            เครื่องวัดตัวนี้จะสามารถช่วยให้ผู้ใช้งานทราบได้อย่างง่ายดายว่าในเขตพื้นที่อาศัยนั้นมีอัตราการเกิดเหตุอาชญากรรมมากน้อยแค่ไหนเพื่อที่จะนำไปประกอบการตัดสินใจและความปลอดภัยของผู้ใช้งานได้
            คาเมล๊อนนั้นยังมีคุณสมบัติที่มีประโยชน์มากมายซึ่งออกแบบมาโดยเฉพาะสำหรับผู้ที่มีความกังวลเกี่ยวกับอาชญากรรมในชุมชน
            เจ้าหน้าที่ตำรวจและรัฐบาลอีกด้วย กล่าวโดยสรุปนั้น
            โครงการนี้มุ่งสร้างความอุ่นใจด้วยการนำเสนอแนวทางที่ครอบคลุมเพื่อทำความเข้าใจแนวโน้มอาชญากรรม
            คาเมล๊อนนั้นยังให้อำนาจแก่ผู้คนในการตัดสินใจอย่างชาญฉลาดเกี่ยวกับความปลอดภัยและเพื่อใช้แนวทางเชิงรุกเพื่อแก้ไขปัญหาอาชญากรรมในพื้นที่ของตนได้
          </text>
        </Row>

        <Container style={{ marginTop: "2%", marginBottom: "2%" }}>
          <Row>
            <Col
              style={{ marginBottom: "2%" }}
              sm
              className="d-flex justify-content-center"
            >
              <h1 style={{ color: "#479B5F", fontWeight: "900" }}>
                ทีมพัฒนาโครงการ
              </h1>
            </Col>
          </Row>
          <Row>
            {Contact.map((data) => (
              <Col sm key={data.id}>
                <div style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={data.image} />
                  <Card.Body>
                    <Card.Title style={{}}>{data.name}</Card.Title>
                    <Card.Body>{data.role}</Card.Body>
                    <Card.Link href={data.linkin}>
                      <AiFillLinkedin style={{ display: "inline" }} />
                    </Card.Link>
                    <Card.Link href={data.linkin}>
                      <AiFillGithub
                        style={{
                          display: "inline",
                          marginLeft: "2%",
                          color: "#000000",
                        }}
                      />
                    </Card.Link>
                  </Card.Body>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer></Footer>
      </Container>
    </main>
  );
};

export default ContactUs;
