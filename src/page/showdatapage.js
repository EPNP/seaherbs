import React from "react";
import HerbCard from "../components/Databox";

const ShowDataPage = () => {
    const herbData1 = {
        ชื่อวิทยาศาสตร์: "ZINGIBERACEAE",
        ชื่อในภาษาอังกฤษ: "GINGER",
        ชื่อในภาษาไทย: "ขิง",
        ชื่ออื่น : "ขิงแกลง, ขิงแดง, ขิงเผือก, สะเอ",
      };
    
      const herbData2 = {
        ข้อมูลทางพฤษศาสตร: "พืชล้มลุก มีเหง้าใต้ดินขึ้นเป็นกอ แทงหน่อใหม่ออกทางด้านข้างด้านนอกสุด เหง้าหรือลำต้นแท้จะเป็นข้อๆ เนื้อในสีขาวหรือเหลืองอ่อน สุดของข้อจะเป็นยอดหรือต้นเทียม สูงพ้นพื้นดินขึ้นมา 50-100 ซม. ลำต้นเทียมมีกาบหรือโคนใบหุ้มใบเป็นใบเดี่ยว ออกเรียงสลับกันเป็นสองแถว ใบรูปหอกเกลี้ยงๆ หลังใบห่อจีบเป็นรูปรางน้ำ ปลายใบสอบเรียวแหลม โคนใบสอบแคบและจะเป็นกาบหุ้มลำต้นเทียม ตรงช่วงต่อระหว่างกาบกับตัวใบจะหักโค้งเป็นข้อศอก ดอกลีขาว ออกเป็นช่อรูปเห็ดหรือกระบองซึ่งแทงขึ้นมาจากเหง้า ทุกๆ ดอกมีกาบสีเขียวปนแดงรูปโค้งๆ ห่อรองรับกลีบดอกและกลีบเลี้ยงมีอย่างละ 3 กลีบ อุ้มน้ำและหลุดร่วงไว โคนกลีบดอกม้วนห่อ ล่วนปลายกลีบผายกว้างออก เกสรผู้มี 6 อัน ผลกลมแข็งโต",
      };
    
      const herbData3 = {
        สรรพคุณ: "บรรเทาอาการปวดไมเกรน สามารถใช้รักษาอาการปวดศีรษะได้ทั้งชนิดปวดแบบสองข้าง และข้างเดียวหรือไมเกรน สารเคมีที่อยู่ในขิงจะสามารถปรับสารไอโคซานอยด์ ทำให้อาการปวดศีรษะบรรเทาลง",
      };
      
  return (
    <div className="app-container">
      <div className="flex-container">
        <img
          src="./logoseaherbs.png"
          alt="Logo Sea Herbs"
          className="logo"
          style={{ width: "400px", height: "auto" }}
        />
        <div className="container">
          <div className="scrollable-container">
            <div className="search-container" style={{ textAlign: "center" }}>
              <input
                type="text"
                placeholder="SEARCH"
                className="input"
                style={{
                  background: "transparent",
                  border: "1px solid black",
                  borderRadius: "11px",
                  outline: "none",
                  width: "700px",
                  height: "50px",
                  fontWeight: "100",
                  fontSize: "24px",
                  transition: "0.8s",
                  padding: "20px",
                  marginTop: "50px",
                  marginBottom: "20px",
                  fontFamily: "Prompt, sans-serif",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "48px",
                    fontFamily: "Prompt, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Herb Name
                </p>
                <div
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      "https://images.unsplash.com/photo-1561407958-54aa9fa49a21?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt={`Card`}
                    style={{
                      width: "800px",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "15px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                gap: "5px",
                justifyContent: "center",
                marginTop:"30px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ marginRight: "50px" }}>
                  <HerbCard 
                    data={herbData1}
                  />
                </div>
                <div>
                  <HerbCard
                    data={herbData2}
                  />
                </div>
              </div>
              <div>
                <HerbCard
                  data={herbData3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDataPage;