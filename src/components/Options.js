import './options.scss';
import { Button } from '../components/Button';
import { useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  getButtonTextColorByCategory,
  getButtonColorByCategory,
} from '../js/color';

export const Options = ({
  setShowAnswer,
  setShowModal,
  currentQuestion,
  corectAnswers,
}) => {
  const { category, questionIndex} = useParams();

  const [checked, setChecked] = useState(null);

  const handleChange = (index) => () => {
    setChecked(index);
  };

  const handleClick = () => {
    if (checked === null) return;
    if (corectAnswers.find((answer) => answer.id === currentQuestion.options[checked].id)) {
      setShowAnswer(true);
    } else {
      setShowModal(true);
    }
  };

  const options = currentQuestion && currentQuestion.options.map((option, index) => (
    <label key={option.id} className="checkbox-container">{option.option}
      <input
        type="checkbox"
        onChange={handleChange(index)}
        checked={index === checked ? true : false}
      />
      <span className="checkmark"></span>
    </label>
  ));

  return (
    <div className="options-content">
      <p className="question">
      <span className="question-number">{`0${+questionIndex + 1}`}</span>
        {currentQuestion ? currentQuestion.question : ''}
      </p>
      <div className="options">
        <ul>{options}</ul>
      </div>
      <Button
        text="ANSWER"
        colors={{
          buttonBackground: getButtonColorByCategory(category),
          buttonText: getButtonTextColorByCategory(category),
        }}
        clickHandler={handleClick}
      />
    </div>
  );
};