import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Banner from "../components/banner";
import Services from "../components/services";
import ContactInfo from "../components/contactInfo";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting at BDT 5000"
        >
          <Link to="/rooms" className="btn btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <ContactInfo />
    </>
  );
}
