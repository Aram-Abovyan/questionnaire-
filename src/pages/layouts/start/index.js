import './start-page.scss';
import { useState } from 'react';
import { Background } from "../../../components/Background";
import { getStartBackgroundImage } from "../../../js/background";
import { getLogo } from '../../../js/logo';
import {
  getButtonColorByCategory,
  getStartPageTextColorByCategory,
  getButtonTextColorByCategory,
} from '../../../js/color';
import backgroundTop from '../../../assets/images/start/background-top.png';
import startEmoji from '../../../assets/images/start/emoji.svg';
import { StartPageText } from '../../../components/StartPageText';
import { Button } from '../../../components/Button';
import {
  useRouteMatch,
  useHistory,
  useParams,
} from 'react-router-dom';

export const StartingPage = () => {
  const { category } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);

  const backgroundData = {
    image: getStartBackgroundImage(category),
    top: backgroundTop,
    color: category === 'powercode' ? 'linear-gradient(202.7deg, #13274F 5.6%, #031335 100.53%)' : '',
  };

  const colors = {
    buttonBackground: getButtonColorByCategory(category),
    buttonText: getButtonTextColorByCategory(category),
  };

  const { url, path } = useRouteMatch();
  const history = useHistory();

  const clickHandler = () => {
    history.push(path.includes('complete') ? '/' : `${url}/${questionIndex}`);
  };

  return (
    <>
      <Background
        data={backgroundData}
      />

      <div className="start-page-content">
          <img
            className="emoji"
            src={startEmoji}
            alt=""
          />

          <img
            className="logo"
            src={getLogo(category)}
            alt=""
          />

          <StartPageText color={getStartPageTextColorByCategory(category)}/>

          <Button
            text={path.includes('complete') ? 'GO TO WEBSITE' : 'LETS START'}
            colors={colors}
            clickHandler={clickHandler}
          />
      </div>
    </>
  );
};