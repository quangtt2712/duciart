import imgHome from "../assets/images/page2-img1.jpg";
import imgVision from "../assets/images/vision.png";
import imgDuty from "../assets/images/duty.png";

const AboutPage = () => {
  return (
    <section id="content">
      <div className="container_12">
        <div className="block-1 top-5">
          <div className="block-1-shadow2">
            <p className="clr-6 text-1 border-Top-Bottom">
              Duci Art không chỉ dạy vẽ luyện thi mà còn tập trung vào việc
              truyền cảm hứng và những kỹ năng căn bản nhất về hội họa cho tất
              cả các em nhỏ. Chúng mình tin rằng: khi các bạn nhỏ hiểu bản chất
              vấn đề, bằng khả năng và sự sáng tạo, sẽ tự chinh phục được những
              đỉnh cao sau này.
            </p>
            <p
              className="clr-6"
              style={{ fontSize: "30px" }}
            >
              <strong>
                Duci Art CHÍNH THỨC gia nhập đường đua nghệ thuật ! 🔥
              </strong>
            </p>
            <p className="clr-6 text-4">
              Vậy là sau 5 tháng ấp ủ thì cũng đã đến lúc nhà "Đu xì" thực hiện
              giấc mơ của mình. Với sứ mệnh nuôi nấng những tâm hồn nghệ thuật
              bên trong của mỗi cá thể, Duci Art sẽ cùng bạn hoà mình vào nét vẽ
              của thực tại, để bạn thoả sức sáng tạo với niềm đam mê của bản
              thân.
            </p>
            <div className="pad-3">
              <img
                src={imgHome}
                alt=""
                className="img-border img-indent"
              />
              <div className="extra-wrap clr-6">
                <p className="text-4">
                  Chúng mình có lộ trình học cụ thể, từ cơ bản đến nâng cao ở
                  các lớp màu bột, màu nước, kí hoạ, minh hoạ, tĩnh vật chì và
                  các lớp mỹ thuật thiếu nhi cho các bạn nhỏ.
                </p>
              </div>
            </div>
            <p className="clr-6 text-4">
              Nhưng mong rằng, khi đến với Duci thì ai cũng giống nhau, không
              lấy tuổi tác, vị thế làm rào cản. Vì chúng ta đều mang trong mình
              một tâm hồn nghệ thuật rất riêng ! <br />
              ☘️ Hãy cùng Duci Art chăm sóc và ươm mầm cho vườn hoa bên trong
              bạn. Để từ đó sinh sôi những gam màu tuyệt vời nhất !
            </p>
            <p
              className="clr-4"
              style={{
                fontSize: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={imgVision}
                style={{ height: "64px", marginRight: "10px" }}
              />
              <strong>Tầm nhìn</strong>
            </p>
            <p className="clr-6 text-4 text-decoration">
              <p>
                • Tại Duci Art, chúng tôi mong muốn xây dựng một thế giới nơi
                mọi trẻ em đều có thể khám phá và thể hiện sự sáng tạo của mình
                một cách tự do.
              </p>
              <p>
                • Chúng tôi hướng đến việc nuôi dưỡng một thế hệ những nghệ sĩ
                trẻ có thể nhìn thế giới qua lăng kính của sự sáng tạo và đổi
                mới, mang màu sắc và trí tưởng tượng đến mọi khía cạnh của cuộc
                sống.
              </p>
              <p>
                • Mục tiêu của chúng tôi là tạo ra một môi trường bao dung,
                truyền cảm hứng và nuôi dưỡng, nơi trẻ em có thể phát triển tài
                năng nghệ thuật, xây dựng sự tự tin và khám phá niềm vui của
                việc thể hiện nghệ thuật.
              </p>
            </p>
            <p
              className="clr-4"
              style={{
                fontSize: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={imgDuty}
                style={{ height: "64px", marginRight: "10px" }}
              />
              <strong>Sứ mệnh</strong>
            </p>
            <p className="clr-6 text-4 text-decoration">
              <p>
                • Sứ mệnh của chúng tôi tại Duci Art là truyền cảm hứng và trao
                quyền cho trẻ em thông qua nghệ thuật.
                <p>
                  • Chúng tôi cam kết cung cấp giáo dục mỹ thuật chất lượng cao,
                  giúp phát triển khả năng sáng tạo và niềm đam mê học hỏi suốt
                  đời. Thông qua chương trình học có cấu trúc nhưng linh hoạt,
                  chúng tôi cung cấp một loạt các lớp học vẽ ở nhiều lĩnh vực
                  khác nhau, từ vẽ chì, sáp dầu, màu bột đến kí họa.
                </p>
              </p>
              <p>
                • Ngoài việc dạy các kỹ năng nghệ thuật cơ bản, chúng tôi còn nỗ
                lực tạo ra một cộng đồng hỗ trợ nơi trẻ em cảm thấy được trân
                trọng và truyền cảm hứng.
                <p>
                  • Chúng tôi cam kết làm cho nghệ thuật trở nên dễ tiếp cận với
                  tất cả trẻ em, bất kể hoàn cảnh của các em, và nuôi dưỡng tiềm
                  năng nghệ thuật trong mỗi em. Thông qua các chương trình của
                  mình, chúng tôi hy vọng sẽ khơi dậy niềm đam mê nghệ thuật,
                  điều sẽ tiếp tục phát triển trong suốt cuộc đời của các em.
                </p>
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
