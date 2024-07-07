import QrCode from "../assets/images/qrzalo.png";
import borderImage from "../assets/images/7GfXl.png";
// import FacebookIcon from "../assets/images/facebookIcon.png";
import "@fontsource/philosopher/700.css"; // Bold weight

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h1 className="feedback-title">GÓP Ý CHO MỸ THUẬT DUCI ART TẠI</h1>
        <div className="QR-Zalo">
          <img
            src={QrCode}
            alt="QR Code feedback"
            style={{ width: "8%" }}
          />
        </div>
        <div className="link-facebook-feedback">
          <a
            href="https://www.facebook.com/duciart"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/duciart
          </a>
        </div>

        <div>
          <img
            src={borderImage}
            style={{ width: "20%" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 className="feedback-title">LỚP MỸ THUẬT DUCI ART</h1>

          {/* <a
            href="https://www.facebook.com/duciart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              style={{ width: "10%" }}
            />
          </a> */}
        </div>
        <p>
          📌 Địa điểm: 100E/14 Đường N1, Phường Bình Thọ, TP. Thủ Đức (Khu
          Moonlight Residences)
          <br /> 📌 Hotline: 0903 997 907
        </p>

        <div className="class-kids">
          <p>Lớp vẽ cho bé </p>
          <p>Lớp vẽ chì </p>
          <p>Lớp vẽ màu bột </p>
          <p>Lớp vẽ màu nước </p>
          <p>Lớp vẽ kí họa </p>
          <p>Lớp vẽ sáp dầu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
