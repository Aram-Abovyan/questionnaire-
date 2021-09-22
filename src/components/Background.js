import './background.scss';

export const Background = ({ backgroundImage, backgroundTop }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const backgroundTopStyle = {
    backgroundImage: `url(${backgroundTop})`,
  };

  return (
    <>
      <div className="background-image" style={backgroundStyle}></div>
      <div className="background-top" style={backgroundTopStyle}></div>
    </>
  );
};