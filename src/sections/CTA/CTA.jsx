import React from 'react';
import "./CTA.css";

const CTA = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
          <h2 className="heading-secondary">
            Get your first meal for free
          </h2>
          <p className="cta-text">
            Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
          </p>
          <form  className="cta-form" action='#'>
          <div>
            <label htmlFor="fullName">Full Name </label>
            <input required id="fullName" type="text" placeholder="Mark Ross" />
          </div>
           <div>
             <label htmlFor="email">Email </label>
            <input required id="email" type="email" placeholder='mark2@gmail.com' />
           </div>

            <div>
              <label htmlFor="select-where">Where did you hear from us?</label>
            <select required name="select-where" id="select-where">
              <option value="">Please choose one:</option>
              <option value="Friends and Family">Friends and Family</option>
              <option value="Youtube">Youtube</option>
              <option value="Podcast">Podcast</option>
              <option value="Newsletter">Newsletter</option>
              <option value="Ads">Ads</option>
              <option value="Others">Others</option>
            </select>
            </div>
            <button className="btn">Sign up now</button>
          </form>

          </div>
        <div className="cta-img-box" role="img" aria-label="woman enjoying food">CTA IMAGE BOX</div>
        </div>
      </div>
    </section>
  )
}

export default CTA
