import './main-page.scss';
import { useEffect, useRef } from 'react';
import backgroundImage from '../../assets/images/main/background.jpg';
import { Background } from '../../components/Background';
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
import { areIntersect } from '../../js/coordinates';
import { useHistory } from 'react-router';


export const MainPage = () => {

  const background = {
    image: backgroundImage,
  };

  const history = useHistory();

  const tl = useRef(null);

  const onDragEnd = (event) => {
    tl.current.play();
    
    if (areIntersect('.route-area', event.target)) {
      const { category } = event.target.dataset;
      history.push(`/${category}`);
    }
  };

  const onDragStart = ( ) => {
    tl.current.pause();
  }

  useEffect(() => {
    makeDraggable('.spaceship', onDragEnd, onDragStart);
    tl.current = setRandomMovementTo('.spaceship');
  });

  return (
    <>
      <Background data={background} />

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