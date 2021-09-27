import { useState, useEffect } from 'react';
import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { Options } from '../../../components/Options';
import { Answer } from '../answer';
import { Modal } from '../modal';
import { answerImages } from '../../../assets/answers';
import { getHeaderLogo } from '../../../js/logo';
import {
  useParams,
  useHistory,
} from 'react-router-dom';
import {
  getQuestionBackground,
} from '../../../js/background';

export const QuestionPage = () => {
  const { category, questionIndex } = useParams();
  const [showAnswer, setShowAnswer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  const questions = JSON.parse(localStorage.getItem(category));
  const currentQuestion = questions[currentIndex];
  const corectAnswers = currentQuestion ? currentQuestion.options.filter(({ isCorect }) => isCorect) : '';

  return (
    <>
      {showAnswer ? (<Answer
        text={currentQuestion.answer}
        image={answerImages[category][questionIndex]}
        setShowAnswer={setShowAnswer}
        setCurrentIndex={setCurrentIndex}
      />) : (<Options
        setShowAnswer={setShowAnswer}
        setShowModal={setShowModal}
        currentQuestion={currentQuestion}
        corectAnswers={corectAnswers}
        questions={questions}
      />)}

      {showModal ? (<Modal
        category={category}
        text="Alas... The answer is wrong."
        link="Let's try again!"
      />) : null}

      <Background data={getQuestionBackground(category)} />
      {showAnswer || showModal ? null : <Header logo={getHeaderLogo(category)} />}
    </>
  );
};