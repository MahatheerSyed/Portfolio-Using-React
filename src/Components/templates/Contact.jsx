import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/Contact.module.css";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
let Contact = () => {
  let ContactArray = [
    {
      icon: faPhone,
      name: "phone",
      value: "+91 79360 4374",
    },
    {
      icon: faEnvelope,
      name: "E-Mail",
      value: "sdmahatheer123@gmail.com",
    },
    {
      icon: faMapMarkerAlt,
      name: "Adress",
      value: "kavali,Nellore District,Andhra pradesh,India",
    },
  ];
  console.log(ContactArray);
  return (
    <section className={style.ContactPage}>
      <div className={style.ContactContent}>
        <h1>Let&apos;s Work Together</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          blanditiis perspiciatis unde illo voluptas mollitia ad doloremque? At,
          debitis, harum dignissimos expedita consequatur beatae excepturi et ex
          nulla porro distinctio.
        </p>

        {ContactArray.map((item, index) => {
          return (
            <div key={index}>
              <h2>
                <FontAwesomeIcon icon={item.icon} />
              </h2>
              <p>
                <span>{item.name}</span>
                <span id={style.AboutSpan}>{item.value}</span>
              </p>
            </div>
          );
        })}
      </div>
      <div className={style.ContactForm}>
        <h1>
          Contact <span>Me!</span>
        </h1>
        <form action="" className={style.FormTOsubmit}>
          <div>
            <input type="text" placeholder="Full Name " required />
            <input type="E-mail" placeholder="E-Mail Adress" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="E-mail" placeholder="E-MAIL Subject" required />
          </div>
          <textarea name="" id="" placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
