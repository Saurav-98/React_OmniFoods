import React from 'react';
import './Meals.css';
import meal1 from '../../assets/meals/meal-1.jpg';
import meal2 from '../../assets/meals/meal-2.jpg';

import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import { AiOutlineStar, AiOutlineCheck } from 'react-icons/ai';

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

        <div className="diets">
          <h3 className="heading-tertiary"> Works with any diet: </h3>
          <ul className="list">
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Vegetarian{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Vegan{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Pescatarian{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Gluten-free{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Lactose-free{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Keto{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Paleo{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Low FODMAP{' '}
            </li>
            <li className="list-item">
              {' '}
              <AiOutlineCheck className="list-icon" /> Kid-friendly{' '}
            </li>
          </ul>
        </div>
      </div>

      <div className="container all-recepies">
        <a href="#" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
};

export default Meals;
