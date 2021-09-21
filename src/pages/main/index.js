import './main-page.scss';
import { useEffect } from 'react';
import backgroundImage from '../../assets/images/main/background.svg';
import routeArea from '../../assets/images/main/route-area.svg';
import {
  binaryxSpaceship,
  digitalAgencySpaceship,
  easeSpaceship,
  foodexSpaceship,
  powercodeSpaceship,
} from '../../assets/images/main/spaceships';
import {
  setRandomMovementTo,
  makeDraggable,
} from '../../js/gsap';
import { areElementsIntersect } from '../../js/coordinates';
import { useHistory } from 'react-router';


export const MainPage = () => {

  const history = useHistory();

  const onDragEnd = (event) => {
    if (areElementsIntersect('.route-area', event.target)) {
      const { category } = event.target.dataset;
      history.push(`/${category}`);
    }
  };

  useEffect(() => {
    makeDraggable('.spaceship', onDragEnd);
    setRandomMovementTo('.spaceship');
  }, []);

  return (
    <>
      <img className="background-image" src={backgroundImage} alt="" />

      <div className="main-page">
        <img className="route-area" src={routeArea} alt="" />

        <div className="spaceship-container">

          <div>
            <div className="spaceship" data-category="foodex">
              <img src={foodexSpaceship} alt=""/>
            </div>
            <div className="spaceship" data-category="powercode">
              <img src={powercodeSpaceship} alt=""/>
            </div>
          </div>

          <div>
            <div className="spaceship" data-category="digital-agency">
              <img src={digitalAgencySpaceship} alt=""/>
            </div>
          </div>

          <div>
            <div className="spaceship" data-category="binaryx">
              <img src={binaryxSpaceship} alt=""/>
            </div>
            <div className="spaceship" data-category="ease">
              <img src={easeSpaceship} alt=""/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};