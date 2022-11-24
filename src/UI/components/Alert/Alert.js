import { useEffect, useState } from "react";
import { WARNING, ERROR, SUCCESS } from "../../../logic/constants/Constants";

import "./alert-style.css";

/// props : message , type
const Alert = (props) => {
  const { message, type } = props;

  const [color, setColor] = useState();

  useEffect(() => {
    if (type === ERROR) {
      setColor("red");
    } else if (type === SUCCESS) {
      setColor("green");
    } else {
      setColor("black");
    }
  }, []);

  if (type)
    return (
      <div className="container" style={{ backgroundColor: color }}>
        {message}
      </div>
    );
};

export default Alert;
