import logo from "../../../assets/logo.svg"
import "./Header.css"
import threeLine from "../../../assets/threeLine.png";

export const Header = ({menus}) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        {menus.map((item, index) => {
          return <div key={index} className="item">{item}</div>;
        })}
      </div>
      <div className="leak-menu">
        <img src={threeLine} alt="" />
      </div>
    </div>
  );
}
