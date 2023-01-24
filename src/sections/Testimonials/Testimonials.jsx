import React from 'react';
import dave from '../../assets/customers/dave.jpg';
import steve from '../../assets/customers/steve.jpg';
import hannah from '../../assets/customers/hannah.jpg';
import ben from '../../assets/customers/ben.jpg';
import './Testimonials.css';
import Gallery from '../../components/Gallery/Gallery';

const Testimonials = () => {
  return (
    <section className="section-testimonials ">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>
        <div className="testimonials">
          <figure className="testimonial">
            <img
              className="testimonial-image"
              src={dave}
              alt="picture of customer Dave Bryson"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-image"
              src={ben}
              alt="picture of customer Ben Hadley"
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>
          <figure className="testimonial">
            <img
              className="testimonial-image"
              src={steve}
              alt="picture of customer Steve Miller"
            />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>
          <figure className="testimonial">
            <img
              className="testimonial-image"
              src={hannah}
              alt="picture of customer Hannah Smith"
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <Gallery />
    </section>
  );
};

export default Testimonials;
