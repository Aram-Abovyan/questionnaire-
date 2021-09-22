import './background.scss';

export const Background = ({ data }) => {
  const backgroundStyle = {
    backgroundImage: `url(${data.image})`,
  };

  const backgroundTopStyle = {
    backgroundImage: `url(${data.top})`,
  };

  return (
    <>
      <div className="background-image" style={backgroundStyle}></div>

      {
        data.top ? <div className="background-top" style={backgroundTopStyle}></div> : ''
      }
    </>
  );
};