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
import { gsap, Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export const MainPage = () => {

  useEffect(() => {
    Draggable.create('.spaceship', {
      bounds: 'body',
    });

    gsap.timeline()
    .to('.spaceship',{
      x: "random(-20, 20, 5)",
      y: "random(-20, 10, 3)",
      duration:1,
      ease:"none",
      repeat:-1,
      repeatRefresh:true,
    });
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