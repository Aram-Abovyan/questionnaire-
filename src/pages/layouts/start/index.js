import './start-page.scss';
import { Background } from "../../../components/Background";
import { getBackgroundImageByPageName } from "../../../js/background";
import { getLogoByPageName } from '../../../js/logo';
import backgroundTop from '../../../assets/images/start/background-top.png';
import startEmoji from '../../../assets/images/start/emoji.svg';
import { StartPageText } from '../../../components/StartPageText';
import { Button } from '../../../components/Button';

export const StartingPage = ({ pageName }) => {
  return (
    <>
      <Background
        backgroundImage={getBackgroundImageByPageName(pageName)}
        backgroundTop={backgroundTop}
      />

      <div className="start-page-content">
          <img
            className="emoji"
            src={startEmoji}
            alt=""
          />

          <img
            className="logo"
            src={getLogoByPageName(pageName)}
            alt=""
          />

          <StartPageText
            color="white"
          />

          <Button
            text="ANSWER"
          />
      </div>
    </>
  );
};