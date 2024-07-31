import React from "react";

import "./PlayerBox.css";

import playerPicture from "../../assets/PlayerPicture.png";

interface Props {
  pbValue: string;
  pbType: string;
}

const PlayerBox: React.FC<Props> = (props) => {
  return (
    <div className={props.pbType}>
      <img
        src={playerPicture}
        alt="Player Profile"
        className="pbPlayerPicture"
      />{" "}
      {props.pbValue}
    </div>
  );
};
export default PlayerBox;
