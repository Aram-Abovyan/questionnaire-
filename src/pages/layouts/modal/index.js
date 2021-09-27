import './modal.scss';
import { getModalEmoji } from '../../../js/modal';

export const Modal = ({
  category,
  text,
  link,
}) => {

  return (
    <div className={`modal-page ${category}`}>
      <div className="modal">
        <img
          className="modal-emoji"
          src={getModalEmoji(category)}
          alt=""
        />
        <p>{text}</p>
        <a href={`/${category}`}>{link}</a>
      </div>
    </div>
  );
}