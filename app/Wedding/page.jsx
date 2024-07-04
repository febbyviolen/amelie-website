import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import WhyUs from "./WhyUs";
import PaketWedding from "./PaketWedding";
import BookAppointment from "../(component)/BookAppointment";

const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Services />
      <WhyUs />
      <PaketWedding />
      {/* <BookAppointment /> */}
    </div>
  );
};

export default page;
