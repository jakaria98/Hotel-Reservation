import React, { Component } from "react";
import Title from "./title";
import { FaHiking, FaShuttleVan } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GiBoatFishing } from "react-icons/gi";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "We will provide a guide for hiking. You can go for hiking when you want. The guide will show you every single place.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "You will get free shuttle service. Showing nearby places is our responsibility.",
      },
      {
        icon: <CgGym />,
        title: "Workout Facility",
        info:
          "We have a huge place for workout. We do care of your health. You can exercise at any time. You don't need to think about extra cost.",
      },
      {
        icon: <GiBoatFishing />,
        title: "Fishing",
        info:
          "You can get boat for fishing. You just need to set your mind for fishing and other responsibilities are ours.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
