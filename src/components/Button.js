import './button.scss';

export const Button = ({ text, colors, clickHandler }) => {
  const style = {
    backgroundColor: colors.buttonBackground,
    color: colors.buttonText,
  };

  return (
    <button
      className="button" style={style}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};