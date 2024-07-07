import scheduleImg from "../assets/images/schedule.png";

const SchedulePage = () => {
  return (
    <section
      id="content"
      style={{ background: "none" }}
    >
      <div className="rule-container">
        <h1 className="rule-title">
          HỌC VẼ CÙNG DUCI – NHỮNG QUY ĐỊNH CẦN NHỚ
        </h1>

        <div className="rule-content">
          <h1>I. NỘI QUY LỚP HỌC</h1>
          <p>
            1. Đi học đúng giờ, đúng ca đăng ký. <br />
            Các trường hợp đi trễ Học viên vui lòng báo trước Trung Tâm trễ nhất
            <strong> 30 phút </strong> trước buổi học.
            <br />
            <strong>Đi trễ 5-15 phút:</strong> Học Viên vẫn được tham gia lớp
            học buổi hôm đó và ra về đúng ca học.
          </p>
          <p>2. Tôn trọng, lễ phép với Thầy Cô và các bạn trong lớp.</p>
          <p>
            3. Có ý thức giữ gìn tài sản, dụng cụ của lớp học.
            <br />
            <em>
              *Nếu Học Viên có những hành vi phá hoại, làm hư hỏng tài sản của
              Trung Tâm, Trung Tâm sẽ báo Phụ huynh để đền bù thiệt hại.
            </em>
          </p>
          <h1>II. CHÍNH SÁCH HỌC VIÊN</h1>
          <p>
            <strong>1. HỦY BUỔI HỌC</strong> - vui lòng báo Trung Tâm trước{" "}
            <strong>1 tiếng</strong> buổi học đã đăng ký và báo buổi học tiếp
            theo Học Viên sẽ tham gia. Nếu Học Viên <strong>không</strong> báo
            hủy buổi học, Trung Tâm vẫn sẽ tính buổi học đó, không hoàn tiền và
            không bù buổi học khác.
          </p>
          <p>
            <strong>2. THỜI HẠN</strong> khóa học - Học viên học đủ số buổi đã
            đăng ký 8 buổi cho 1 tháng, 16 buổi cho 2 tháng (Trừ những trường
            hợp nghỉ lễ, Tết dài hạn thì thời hạn khóa học sẽ được điều chỉnh
            phù hợp).
          </p>
          <p>
            <strong>3. KHÔNG CHUYỂN NHƯỢNG</strong> khóa học cho người khác.
          </p>
          <p>
            <strong>4. BẢO LƯU</strong> - Học Viên được bảo lưu tối đa 3 tháng.
            Mỗi Học Viên chỉ được bảo lưu 1 lần trong 1 khóa học.
          </p>
          <p>
            <strong>5. HOÀN TRẢ</strong> - Các chi phí thanh toán sẽ không được
            trả lại. Trừ những trường hợp bất khả kháng (điều kiện bất lợi về
            sức khỏe có giấy bác sĩ).
          </p>
        </div>
      </div>
      <div className="container_12">
        <img
          src={scheduleImg}
          style={{ width: "100%", marginBottom: "40px" }}
        />
        <div className="support-student">
          <h1>Quý phụ huynh cần hỗ trợ vui lòng liên hệ:</h1>
          <p>
            <strong>Fanpage:</strong> Duci Art
          </p>
          <p>
            <strong>Hotline:</strong> 0903 997 907
          </p>
          <p>
            <strong>Group lớp trên Zalo</strong>
          </p>
        </div>
        <p className="hope-in-course">
          Hi vọng Duci Art và bạn sẽ có cơ hội cùng nhau trải nghiệm và đắm chìm
          trong hội họa!
        </p>
      </div>
    </section>
  );
};

export default SchedulePage;
