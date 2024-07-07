import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";

function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState(
    "Bộ phận xử lý đơn sẽ trả lời đơn/ email của bạn trong vòng 24h"
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uifporr", "template_krt2go8", form.current, {
        publicKey: "dyh_xG655S4zhdEnh",
      })
      .then(
        () => {
          setMessage("Đơn của bạn đã được gửi thành công!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          setMessage("Đã có sự cố xảy ra. Hãy thử lại trong giây lát.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      id="form"
      ref={form}
      onSubmit={sendEmail}
    >
      <fieldset style={{ borderWidth: "0px" }}>
        <label>
          <strong>Name: </strong>
          <input
            type="text"
            name="from_name"
          />
          <strong className="clear" />
        </label>
        <label>
          <strong>Phone: </strong>
          <input
            type="text"
            name="from_phone"
          />
          <strong className="clear" />
        </label>

        <div className="button-send-contact">
          <label>
            <strong>Message</strong>
            <textarea name="message" />
          </label>
          <button
            type="submit"
            value="Send"
            className="link-2"
          >
            GỬI <FaArrowRight style={{ fontSize: "80%" }} />
          </button>
          {message && <p className="message-notify">{message}</p>}
        </div>
      </fieldset>
      {/* {message} */}
    </form>
  );
}
export default ContactForm;
