import React from "react";
import "./assets/css/layout.min.css";
import Navbar from "./containers/NavBar";
import Slider from "./containers/Slider";
import Services from "./containers/Services";
import AboutUs from "./containers/AboutUs";
import Support from "./containers/Support";
import WhyUs from "./containers/WhyUs";
import QuestionForm from "./containers/QuestionForm";
import Footer from "./containers/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <AboutUs />
      <Support />
      <WhyUs />
      <QuestionForm />
      <Footer />
    </div>
  );
}
