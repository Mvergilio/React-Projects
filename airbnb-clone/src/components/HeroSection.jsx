import React from "react";
import HeroContent from "./HeroSectionContent";
import HeroImage from "./HeroSectionImage";

export default function () {
  return (
    <div className="main--hero--section--container">
      <HeroImage />
      <HeroContent />
    </div>
  );
}
