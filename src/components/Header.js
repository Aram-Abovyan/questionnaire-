import './header.scss';

export const Header = ({logo}) => {
  return (
    <div className="header">
      <img
        src={logo}
        className="header-logo"
        alt=""
      />
    </div>
  );
};