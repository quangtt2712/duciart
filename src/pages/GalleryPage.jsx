import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import T01 from "../assets/pictures/1.jpg";
import T02 from "../assets/pictures/2.jpg";
import T03 from "../assets/pictures/3.jpg";
import T04 from "../assets/pictures/4.jpg";
import T05 from "../assets/pictures/5.jpg";
import T06 from "../assets/pictures/6.jpg";
import T08 from "../assets/pictures/8.jpg";
import T10 from "../assets/pictures/10.jpg";
import T11 from "../assets/pictures/11.jpg";
import T12 from "../assets/pictures/12.jpg";

const itemData = [
  {
    img: T01,
    author: "Bình An, 5 tuổi",
    class: "Lớp vẽ sáp dầu",
  },
  {
    img: T02,
    author: "Minh Thuận, 6 tuổi",
    class: "Lớp vẽ màu",
  },
  {
    img: T03,
    author: "Yến Nhi, 10 tuổi",
    class: "Lớp vẽ màu",
  },
  {
    img: T04,
    author: "Ngọc Mai, 6 tuổi",
    class: "Lớp vẽ sáp dầu",
  },
  {
    img: T05,
    author: "Bảo Châu, 11 tuổi",
    class: "Lớp vẽ kí họa",
  },
  {
    img: T06,
    author: "Minh Hiếu - Minh Đức, 6 tuổi",
    class: "Lớp vẽ kí họa",
  },

  {
    img: T08,
    author: "Ngọc Thảo, 6 tuổi",
    class: "Lớp vẽ kí họa",
  },

  {
    img: T10,
    author: "Hồng Quân, 6 tuổi",
    class: "Lớp vẽ kí họa",
  },
  {
    img: T11,
    author: "Hòa Bình, 6 tuổi",
    class: "Lớp vẽ màu",
  },
  {
    img: T12,
    author: "Khánh Ngọc, 8 tuổi",
    class: "Lớp màu sáp dầu",
  },
];

const GalleryPage = () => {
  return (
    <section id="content1">
      <div className=" top-5">
        <div style={{ paddingBottom: "50px" }}>
          <h2 className="clr-6 p4">Tranh của học viên</h2>
          <ImageList>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                style={{ margin: "40px" }}
              >
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: "10px" }}
                />
                <p className="text-5">{item.author}</p>
                <p className="text-6">{item.class}</p>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
