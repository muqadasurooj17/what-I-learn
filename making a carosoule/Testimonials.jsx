import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import  girl from "../../img/shirley.png";
import men1 from "../../img/theo.png";
import men2 from "../../img/daniel.png";
import "./testimonials.css";

export default class Testimonials extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className ="tm-heading">Every client matters</div>
       <div className="tm-subheading">
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        praesentium nostrum doloribus, aut nobis iusto. Omnis quam rem aliquid, <br></br>
        molestias blanditiis fuga quisquam 
      voluptas dignissimos animi voluptate velit eos distinctio.
       </p></div>
        
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={girl} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={men1} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>
        <div>
          <img src={girl} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={men2} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
      </div>
    );
  }
}