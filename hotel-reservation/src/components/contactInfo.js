import React, { Component } from "react";
import Title from "./title";
export default class ContactInfo extends Component {
  render() {
    return (
      <section className="contact">
        <Title title="Contact Us" />
        <div className="contact-center">
          <article>
            <p>Mobile: 01XXX-XXXXXX</p>
            <br />
            <p>Email: xyz@gmail.com</p>
          </article>
        </div>
      </section>
    );
  }
}
