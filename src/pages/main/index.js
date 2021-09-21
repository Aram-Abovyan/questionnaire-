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

export const MainPage = () => {

  useEffect(() => {
    makeDraggable('.spaceship');
    setRandomMovementTo('.spaceship');
    
  }, []);

  return (
    <>
      <img className="background-image" src={backgroundImage} alt="" />

      <div className="main-page">
        <img className="route-area" src={routeArea} alt="" />

        <div className="spaceship-container">

          <div>
            <div className="spaceship">
              <img src={foodexSpaceship} alt=""/>
            </div>
            <div className="spaceship">
              <img src={powercodeSpaceship} alt=""/>
            </div>
          </div>

          <div>
            <div className="spaceship">
              <img src={digitalAgencySpaceship} alt=""/>
            </div>
          </div>

          <div>
            <div className="spaceship">
              <img src={binaryxSpaceship} alt=""/>
            </div>
            <div className="spaceship">
              <img src={easeSpaceship} alt=""/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};