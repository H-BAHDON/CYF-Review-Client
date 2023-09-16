import { useState } from "react";
import './countLike.css'

const CountLikes = () => {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const handleCounterUp = () => {
    setCountUp(countUp + 1);
  };
  const handleCounterDown = () => {
    setCountDown(countDown - 1);
  };
  return (
    <div className="manCount">
      <button className="up" onClick={handleCounterUp}>
        <img
          alt="tumb-up_picture"
          className="tumb-up"
          src="https://icon-library.com/images/white-thumbs-up-icon/white-thumbs-up-icon-26.jpg"
        ></img>
      </button>
      <button className="down" onClick={handleCounterDown}>
        <img
          alt="tumb-down_picture"
          className="tumb-down"
          src="https://icon-library.com/images/white-thumbs-up-icon/white-thumbs-up-icon-26.jpg"
        ></img>
        <span></span>
      </button>
    </div>
  );
};

export default CountLikes;
