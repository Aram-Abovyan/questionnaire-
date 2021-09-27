import './answer.scss';
import { useState } from 'react';
import emoji from '../../../assets/images/answer/emoji.svg';
import { Button } from '../../../components/Button';
import {
  getButtonTextColorByCategory,
  getButtonColorByCategory,
} from '../../../js/color';
import {
  useParams,
  useHistory,
} from 'react-router-dom';

export const Answer = ({
  count,
  text,
  image,
  setShowAnswer,
  setCurrentIndex,
}) => {
  const history = useHistory();
  const { category, questionIndex } = useParams();

  const handleClick = () => {
    setShowAnswer(false);
    setCurrentIndex(+questionIndex + 1)
    history.push(questionIndex === '5' ? `/${category}/complete` : `/${category}/${+questionIndex + 1}`);
  };

  return (
    <>
      <div className="answer">
        <img
          className="emoji"
          src={emoji}
          alt=""
        />
        <p>{text}</p>
        <img
          className="answer-image"
          src={image}
          alt=""
        />

        <Button
          text="NEXT"
          colors={{
            buttonBackground: getButtonColorByCategory(category),
            buttonText: getButtonTextColorByCategory(category),
          }}
          clickHandler={handleClick}
        />
      </div>
    </>
  );
}