import React, { useState } from "react";
import "./SetupPlayersPage.css";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import PlayerBoxContainer from "../../components/PlayerBoxContainer/PlayerBoxContainer";

const SetupPlayersPage = () => {
  const [playerNameInputValue, setPlayerNameInputValue] = useState<string>("");
  const [players, setPlayers] = useState<string[]>([]);
  const [minimumPlayers, setMinimumPlayers] = useState<number>(3);
  const [buttonStartState, setButtonStartState] =
    useState<string>("btDisabled");

  const addPlayer = () => {
    if (playerNameInputValue.trim() !== "") {
      if (minimumPlayers <= 3 && minimumPlayers > 1) {
        setMinimumPlayers(minimumPlayers - 1);
        console.log(minimumPlayers);
      } else {
        setButtonStartState("btOrange");
        setMinimumPlayers(0);
        console.log(minimumPlayers);
      }
      setPlayers([...players, playerNameInputValue]);
      setPlayerNameInputValue("");
    }
  };

  return (
    <div className="pageWrap">
      <div className="headerWrap">
        <Header />
        <div className="addPlayerContainer">
          <div className="addPlayerContainer80">
            <TextInput
              placeholderValue="Set players"
              textInputValue={playerNameInputValue}
              textInputChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPlayerNameInputValue(event.target.value);
              }}
            />
          </div>
          <div className="addPlayerContainer20">
            <Button
              buttonType="btPurple"
              buttonValue="ADD +"
              buttonAction={addPlayer}
            />
          </div>
        </div>
      </div>
      <div className="bodyWrap">
        <PlayerBoxContainer>
          {players.map((player, index) => (
            <PlayerBox
              key={index}
              pbType="PlayerBox"
              pbValue={player}
              pbEye={false}
            />
          ))}
          {Array.from({ length: minimumPlayers }).map((_, index) => (
            <PlayerBox
              key={index}
              pbType="PlayerBox pbDisabled pbDashedBorder"
              pbValue=""
              pbEye={false}
            />
          ))}
        </PlayerBoxContainer>
      </div>
      <div className="footerWrap">
        <Button buttonType={buttonStartState} buttonValue="START" />
      </div>
    </div>
  );
};

export default SetupPlayersPage;
