import './background.scss';

export const Background = ({ data }) => {
  const backgroundStyle = {
    backgroundImage: `url(${data.image})`,
  };

  const backgroundTopStyle = {
    backgroundImage: `url(${data.top})`,
    backgroundColor: data.color,
  };

  return (
    <>
      <div className="background-image" style={data.image ? backgroundStyle : {background: data.color}}></div>

      {data.top ? <div className="background-top" style={data.top ? backgroundTopStyle : null}></div> : ''}

      {data.components && data.components.length > 1 ? (<>
      
        <img
          className="background-right background-component"
          src={data.components[0]}
          alt=""
        />

        <img
          className="background-left background-component"
          src={data.components[1]}
          alt=""
        />
      
      </>) : data.components ? (<img
        className="background-image"
        src={data.components[0]}
        alt=""
      />) : null}
    </>
  );
};