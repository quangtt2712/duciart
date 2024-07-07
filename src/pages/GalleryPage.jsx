import T01 from "../assets/images/gallery-big-1.jpg";
import T02 from "../assets/images/gallery-big-2.jpg";

const List_Image = [
  {
    id: 1,
    image_src: T01,
    alt: "Phương, 10 years",
    owner: "Phương, 10 years",
  },
  {
    id: 2,
    image_src: T02,
    alt: "Hiếu, 10 years",
    owner: "Phương, 10 years",
  },
];

const GalleryPage = () => {
  return (
    <section id="content">
      <div className="container_12">
        <div className="block-1 top-5">
          <div className="block-1-shadow">
            <h2 className="clr-6 p4">Tranh của học viên</h2>
            <div className="pag">
              <div style={{ paddingBottom: "10px" }}>
                <ul>
                  {List_Image.map((image) => (
                    <li key={image.id}>
                      <span>
                        <div className="text-3">{image.owner}</div>
                        <img
                          className="img-border img-gallery"
                          src={image.image_src}
                          alt={image.alt}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
