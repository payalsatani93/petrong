// pages/Home/Home.jsx
import Hero from "./Hero"
import Partnership from "./Partnership";
import Testomonial from "./Testomonial";
import PetrongPacioli from "./PetrongPacioli";
import OurPromise from "./OurPromise";
import Ourcoresrv from "./Ourcoresrv";
import Navforhome from "./Navforhome";

export default function Home() {
  return (
    <>
      <Navforhome/>
      <Hero />
      <Ourcoresrv/>
      <Partnership/>
      <Testomonial/>
      <PetrongPacioli/>
       <OurPromise/>     
    </>
  );
}

 