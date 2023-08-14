import "./about.css";

const fluffFacts = [
  {
    title: "Fluffology",
    content:
      "The study of fluffs, known as 'fluffology,' is a respected scientific field dedicated to understanding the various types, colors, and textures of fluffs found in nature. Fluffologists analyze fluff samples to determine their origins and properties, contributing to fields like ecology and material science.",
  },
  {
    title: "Flufftopia",
    content:
      "In an alternate reality, there exists a hidden land called 'Flufftopia.' This magical realm is entirely composed of soft, floating fluff. The inhabitants, known as Fluffians, use these natural resources to build their homes and create unique, fluffy technology that allows them to soar through the skies.",
  },
  {
    title: "Fluff communication",
    content:
      "Fluffs possess an advanced form of communication that humans can't directly perceive. By emitting gentle vibrations at specific frequencies, fluffs exchange intricate information about their environment, emotions, and even share stories from their fluff ancestry.",
  },
  {
    title: "Fluff-based energy",
    content:
      "In an eco-friendly future, scientists have harnessed the power of fluffs to create a renewable energy source. Fluff generators extract energy from the static electricity naturally produced by rubbing fluffs together, providing a clean and sustainable alternative to traditional power sources.",
  },
  {
    title: "Fluff camouflage",
    content:
      "Certain species of animals in a distant galaxy have evolved a unique defense mechanism known as 'fluff camouflage.'' These creatures can instantly transform their fur or feathers into fluffy, cloud-like patterns that perfectly blend into their surroundings, making them nearly invisible to predators or prey.",
  },
];

export default function Page() {
  return (
    <section className="aboutContainer">
      <h1>5 Surprising Facts about Fluffs</h1>
      <figure className="figureAbout">
        <div>
          <img src="/images/CryptoFluff_0090.jpg" alt="Fluff" />
        </div>
        <figcaption>
          Originally from <span>Fluff.com</span>
        </figcaption>
      </figure>
      <ol className="factsList">
        {fluffFacts.map(({ title, content }) => (
          <li key={title}>
            <h3 className="headerFact">{title}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
