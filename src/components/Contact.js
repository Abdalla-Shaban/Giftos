import Form from "./Form";
import Map from "./Map";

function Contact() {
  return (
    <section className="contact py-20">
      <h1 className="text-4xl uppercase font-bold text-center mb-12">
        Contact Us
      </h1>
      <div className="contact-info flex flex-col md:flex-row">
        <Map />
        <Form />
      </div>
    </section>
  );
}

export default Contact;
