import './main-page.scss';
import backgroundImage from '../../assets/images/main/background.svg';
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
        <img src={binaryxSpaceship} alt=""/>
        <img src={digitalAgencySpaceship} alt=""/>
        <img src={easeSpaceship} alt=""/>
        <img src={foodexSpaceship} alt=""/>
        <img src={powercodeSpaceship} alt=""/>
      </div>
    </>
  );
};