import logo from "../../../assets/logo.svg"
import "./Header.css"

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
    </div>
  );
}
