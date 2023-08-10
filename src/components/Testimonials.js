import { Splide } from "@splidejs/react-splide";
import Testimoinal from "./Testimoinal";

function Testimonials() {
  return (
    <section className="testimonials py-20">
      <h1 className="text-4xl uppercase font-bold text-center mb-2">
        Testimonials
      </h1>
      <Splide aria-label="testimonials">
        <Testimoinal
          name="Morijorch"
          title="Default model text"
          description="editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various"
        />
        <Testimoinal
          name="Brad Johns"
          title="Default model text"
          description="Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various"
        />
        <Testimoinal
          name="Rochak"
          title="Default model text"
          description="Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        />
      </Splide>
    </section>
  );
}

export default Testimonials;
