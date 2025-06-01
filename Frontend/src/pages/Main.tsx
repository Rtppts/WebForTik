import { useState } from "react";
import Loader from "../component/third-patry/Loader";
import Mylogo from "../assets/MyLogo.png"
import LogoTiktok from "../assets/LogoTiktok.png"
import LogoDscord from "../assets/LogoDiscord.png"
import QrDonate from "../assets/Donate.png"
import LogoEasyDonate from "../assets/LogoEasyDanate.jpg"
import { useNavigate } from "react-router-dom";

function UserMain() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClickToDiscord = () => {
    setLoading(true);  // เริ่มแสดง Loader
    setTimeout(() => {
      window.open('https://discord.gg/FhVQaJ77');  //Start Link 1/6/2568   20:21
    }, 900);  // ดีเลย์ 2 วินาที

  };

  const ClickToDonate = () => {
    setLoading(true);  // เริ่มแสดง Loader
    setTimeout(() => {
      window.open('https://ezdn.app/shonkbwsozb');
    }, 900);  // ดีเลย์ 2 วินาที

  };

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at center, rgba(0,123,255,0.3) 0%, transparent 70%), radial-gradient(circle at center, rgba(0,123,255,0.15) 30%, transparent 90%), #0d1a33', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', zIndex: -1 }} />
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', padding: 20, flexDirection: 'column', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(30px, 5vw, 40px)', margin: '0 0 20px 0' }}>เว็ปไซต์ของพี่เอง</h1>
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={Mylogo} alt="" style={{ borderRadius: '50%', width: 'clamp(80px, 14vw, 150px)', height: 'clamp(80px, 14vw, 150px)', objectFit: 'cover' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <img src={LogoTiktok} alt="" style={{ marginTop: '0.5vw', width: 'clamp(24px, 2.5vw, 40px)', height: 'auto' }} />
            <h1 style={{ margin: 0, fontSize: 'clamp(18px, 2.5vw, 32px)' }}>shonkbwsozb</h1>
          </div>
        </span>

        <button onClick={handleClickToDiscord} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "20px", padding: "12px 24px", backgroundColor: "#5865F2", border: "none", borderRadius: 12, color: "white", fontWeight: "600", fontSize: 16, cursor: "pointer", boxShadow: "0 0 10px 2px #5865F2", transition: "box-shadow 0.3s ease", userSelect: "none" }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px 6px #5865F2"} onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 10px 2px #5865F2"}>
          <img src={LogoDscord} alt="" style={{ width: 'clamp(24px, 2.5vw, 40px)', }} />
          Discord Minecraft Server 1
        </button>

        <h1 style={{ fontSize: 'clamp(23px, 2vw, 40px)', margin: '50px 0 20px 0' }}>โดเนทขึ้นจอขั้นต่ำ 5 บาท</h1>
        <h1 style={{ fontSize: 'clamp(18px, 1.5vw, 25px)', margin: '0px 0 20px 0' }}>สแกน Qrcode หรือ คลิกที่ปุ่มก็ได้</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={QrDonate} alt="" style={{ width: '140px', height: 'auto', borderRadius: '12px' }} />
          <h1 style={{ fontSize: 'clamp(20px, 1.5vw, 40px)', margin: '50px 0 20px 0' }}></h1>
        </div>

        <button onClick={ClickToDonate} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "30px", padding: "12px 24px", backgroundColor: "#ffffff", border: "none", borderRadius: 12, color: "#5865F2", fontWeight: "700", fontSize: 18, cursor: "pointer", boxShadow: "0 0 10px 2px #a3b0ff", transition: "box-shadow 0.3s ease", userSelect: "none" }} onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 20px 6px #5865F2"; e.currentTarget.style.color = "#3949ab" }} onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 10px 2px #a3b0ff"; e.currentTarget.style.color = "#5865F2" }}>
          ไปยังหน้า Donate
        </button>


        {loading && <Loader />}


      </div>
    </>

  );



}
export default UserMain;