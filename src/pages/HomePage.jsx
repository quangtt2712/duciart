import { Link } from "react-router-dom";
import { GiSevenPointedStar } from "react-icons/gi";

import img1 from "../assets/images/Trọng Khanh_6 tuổi_Học viên khóa trung cấp.png";
import img2 from "../assets/images/Trọng Khoa_5 tuổi_Học viên khóa trung cấp.png";
import img3 from "../assets/images/Hòa Bình_5 tuổi_Học viên khóa trung cấp.png";
import img4 from "../assets/images/Hoàng Anh_13 tuổi_Học viên khóa tĩnh vật chì.png";
import Decoration from "../components/Decoration";

const HomePage = () => {
  return (
    <>
      <div>
        <Decoration />
      </div>
      <section id="content">
        <div className="container_12">
          <div className="grid_4 bot-1">
            <div className="art" />
            <h2
              className="top-1 p2"
              style={{ marginTop: "75px" }}
            >
              Lý do nên tham gia Duci Art
            </h2>

            <p className="text-2">
              <GiSevenPointedStar /> Miễn phí toàn bộ họa cô khi đăng kí học
            </p>
            <p className="text-2">
              <GiSevenPointedStar /> Chương trình khuyến mãi 15% cho tất cả khoá
              học vẫn diễn ra trong suốt tháng 5.
            </p>
            <p className="text-2">
              <GiSevenPointedStar /> Các bé được trải nghiệm học THỬ 2 buổi với
              những dụng cũ mỹ thuật chuyên dụng, cao cấp cùng với thầy cô giáo
              chuyên môn.
            </p>
            <p className="text-1">
              Còn chờ gì nữa mà không đến ngay Duci! Cùng ngắm lại những khoảng
              khắc, kỉ niệm của các trẻ với Duci Art nha.
            </p>
          </div>
          <div className="grid_8">
            <div className="pad-1">
              <h2 style={{ margin: "0" }}>Đây là Duci Art</h2>
              <p className="text-1">
                Trung tâm Mỹ Thuật từ cơ bản đến nâng cao dành cho trẻ từ 4 tuổi
                trở lên. <br />
                Duci Art đặt các giá trị sáng tạo lên hàng đầu nhằm tạo ra những
                tài năng Mỹ thuật tương lai.
              </p>
            </div>
            <div className="block-1">
              <div className="block-1-shadow1">
                <h2
                  className="clr-6 p4"
                  style={{ margin: "0" }}
                >
                  Tranh của học viên
                </h2>
                <div className="box-1">
                  <div className="img-border">
                    <img
                      src={img1}
                      alt=""
                    />
                  </div>
                  <p className="text-2">Trọng Khanh, 6 tuổi</p>
                </div>
                <div className="box-1 last">
                  <div className="img-border">
                    <img
                      src={img2}
                      alt=""
                    />
                  </div>
                  <p className="text-2">Trọng Khoa, 5 tuổi</p>
                </div>
                <div className="clear p5" />
                <div className="box-1">
                  <div className="img-border">
                    <img
                      src={img3}
                      alt=""
                    />
                  </div>
                  <p className="text-2">Hòa Bình, 5 tuổi</p>
                </div>
                <div className="box-1 last">
                  <div className="img-border">
                    <img
                      src={img4}
                      alt=""
                    />
                  </div>
                  <p className="text-2">Hoàng Anh, 13 tuổi</p>
                </div>

                <div className="clear" />
                <div className="pad-2">
                  <Link
                    to="/gallery"
                    className="link-3"
                  >
                    Thư viện
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
