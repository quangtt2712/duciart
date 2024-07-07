import ContactForm from "../components/ContactForm";
import Decoration from "../components/Decoration";

const ContactsPage = () => {
  return (
    <>
      <Decoration />
      <section id="content">
        <div className="container_12">
          <div className="grid_4 bot-1">
            <h2 className="top-6">Fanpage</h2>
            <div className="map">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fduciart&tabs=timeline&width=250px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <dl>
              <dt>
                100E/14 Đường N1, Phường Bình Thọ, <br />
                TP. Thủ Đức.(Khu Moonlight Residences)
              </dt>
              <dd>
                <span>Phone: </span>0903 997 907
              </dd>
            </dl>
          </div>
          <div className="grid_8">
            <div className="block-1 top-5">
              <div className="block-1-shadow1">
                <h2 className="clr-6">Liên hệ</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
