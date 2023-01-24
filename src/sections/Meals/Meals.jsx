import React from 'react';
import './Meals.css';
import meal1 from '../../assets/meals/meal-1.jpg';
import meal2 from '../../assets/meals/meal-2.jpg';

import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';

const Meals = () => {
  return (
    <section className="meals">
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3--cols">
        <div className="meal">
          <img className="meal-image" src={meal1} alt="Japanese Gyozas" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                {' '}
                <MdOutlineLocalFireDepartment className="meal-icons" />
                <strong>650</strong>
                calories
              </li>
              <li className="meal-attribute">
                <GiKnifeFork className="meal-icons" /> NutriScore &reg;
                <strong>74</strong>
              </li>
              <li className="meal-attribute">
                <AiOutlineStar className="meal-icons" /> <strong>4.9</strong>
                rating (537){' '}
              </li>
            </ul>
          </div>
        </div>

        <div className="meal">
          <img className="meal-image" src={meal2} alt="Avocado Salad" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegan">Vegan</span>
              <span className="tag tag--paleo">Paleo</span>
            </div>
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                {' '}
                <MdOutlineLocalFireDepartment className="meal-icons" />
                <strong>400</strong>
                calories
              </li>
              <li className="meal-attribute">
                <GiKnifeFork className="meal-icons" />
                NutriScore &reg;
                <strong>92</strong>
              </li>
              <li className="meal-attribute">
                <AiOutlineStar className="meal-icons" />
                <strong>4.8</strong>
                rating (441){' '}
              </li>
            </ul>
          </div>
        </div>

        <div className="list">List of Diets</div>
      </div>
    </section>
  );
};

export default Meals;
