import './start-page.scss';
import { useState } from 'react';
import { Background } from "../../../components/Background";
import { getBackgroundImageByPageName } from "../../../js/background";
import { getLogoByPageName } from '../../../js/logo';
import {
  getButtonColorByPageName,
  getStartPageTextColorByPageName,
  getButtonTextColorByPageName,
} from '../../../js/color';
import backgroundTop from '../../../assets/images/start/background-top.png';
import startEmoji from '../../../assets/images/start/emoji.svg';
import { StartPageText } from '../../../components/StartPageText';
import { Button } from '../../../components/Button';
import {
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

export const StartingPage = ({ pageName }) => {

  const [questions, setQuestions] = useState(localStorage.getItem(pageName));

  const background = {
    image: getBackgroundImageByPageName(pageName),
    top: backgroundTop,
  };

  const colors = {
    buttonBackground: getButtonColorByPageName(pageName),
    buttonText: getButtonTextColorByPageName(pageName),
  };

  const { path, url } = useRouteMatch();
  const history = useHistory();

  const clickHandler = (pageName) => () => {
    history.push(`${url}/0`);
  };

  return (
    <>
      <Background
        data={background}
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
            color={getStartPageTextColorByPageName(pageName)}
          />

          <Button
            text="LETS START"
            colors={colors}
            clickHandler={clickHandler(pageName)}
          />
      </div>
    </>
  );
};