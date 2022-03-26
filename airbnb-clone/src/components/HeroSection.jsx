import React from "react";
import HeroContent from "./HeroSectionContent";
import HeroImage from "./HeroSectionImage";

export default function () {
  return (
    <section className="main--hero--section--container">
      <HeroImage />
      <HeroContent />
    </section>
  );
}
