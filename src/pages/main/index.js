import './main-page.scss';
import backgroundImage from '../../assets/images/main/background.svg';
import routeArea from '../../assets/images/main/route-area.svg';
import {
  binaryxSpaceship,
  digitalAgencySpaceship,
  easeSpaceship,
  foodexSpaceship,
  powercodeSpaceship,
} from '../../assets/images/main/spaceships';

export const MainPage = () => {
  return (
    <>
      <img className="background-image" src={backgroundImage} alt="" />

      <div className="main-page">
        <img className="route-area" src={routeArea} alt="" />

        <div className="spaceship-container">
          <div>
            <img src={foodexSpaceship} alt=""/>
            <img src={powercodeSpaceship} alt=""/>
          </div>

          <div>
            <img src={digitalAgencySpaceship} alt=""/>
          </div>

          <div>
            <img src={binaryxSpaceship} alt=""/>
            <img src={easeSpaceship} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};