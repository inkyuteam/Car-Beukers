import React from "react";
import "./MenuBar.css";

export const MenuBar = ({ labels, icons, size }) => {
  return (
    <div className={`menubar-${size}`}>
      {(labels || icons).map((item, index) => {
        return (
          <div key={index} className="item">
            {labels?.length ? <div className={`item-${size}`}>{item}</div> : ""}
            {icons?.length ? (
              <div>
                <img src={icons[index]} alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
