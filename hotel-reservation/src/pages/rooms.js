import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Banner from "../components/banner";

import Room from "../components/room";

class Rooms extends React.Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms" subtitle="">
            <Link to="/" className="btn btn-primary">
              return to home
            </Link>
          </Banner>
        </Hero>
        <Room />
      </>
    );
  }
}

export default Rooms;
