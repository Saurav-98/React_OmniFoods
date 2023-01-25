import React from 'react'
import "./Feature.css"
import { ImInfinite } from "react-icons/im"
import { AiOutlinePause } from "react-icons/ai"

import {  RiLeafLine } from "react-icons/ri"
import { IoNutritionOutline } from "react-icons/io5";

const Feature = () => {
  return (
    <>
      <div className="feature">
    <ImInfinite className='featured-icon' />
      <p className="feature-title">Never Cook again!</p>
      <p className="feature-text">Our subscriptions cover 365 days per year, even including major holidays.</p>
    </div>

    <div className="feature">
    <IoNutritionOutline className='featured-icon' />
      <p className="feature-title">Local and organic</p>
      <p className="feature-text">Our cooks only use local, fresh, and organic products to prepare your meals.</p>
    </div>

    <div className="feature">
    <RiLeafLine className='featured-icon' />
      <p className="feature-title">No waste</p>
      <p className="feature-text">All our partners only use reusable containers to package all your meals.</p>
    </div>

    <div className="feature">
    <AiOutlinePause className='featured-icon' />
      <p className="feature-title">Pause anytime</p>
      <p className="feature-text">Going on vacation? Just pause your subscription, and we refund unused days.</p>
    </div>
    </>
  )
}

export default Feature
