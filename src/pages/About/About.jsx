import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import Ourteams from "./Ourteams";
import Ourvalue from "./Ourvalue";
import Servicescard from "./Servicescard";

export default function About() {
  return (
    <>
      <Navbar/>
      <AboutUs />
      <Servicescard />
      <Ourvalue />
      <Ourteams />
    </>
  );
}
