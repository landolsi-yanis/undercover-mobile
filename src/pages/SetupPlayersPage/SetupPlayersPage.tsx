import React, {useEffect, useState} from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import logo from "../../assets/logo.png";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import PlayerBoxContainer from "../../components/PlayerBoxContainer/PlayerBoxContainer";
import "./SetupPlayersPage.css";
import {useNavigate} from "react-router-dom";
import {Player} from "../../types/Player";

interface Props
{
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

const SetupPlayersPage: React.FC<Props> = (props) => {
    const [playerNameInputValue, setPlayerNameInputValue] = useState<string>("");

    const [minimumPlayers, setMinimumPlayers] = useState<number>(3);
    const minimumPlayersLeft = Array.from({length: minimumPlayers});
    const [addPlayerButtonState, setAddPlayerButtonState] =
        useState<boolean>(false);
    const navigate = useNavigate();

    const handleTextInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setPlayerNameInputValue(event.target.value);
    };

    const addPlayer = () => {
        if (
            playerNameInputValue.trim() !== "" &&
            !props.players.some((player) => player.name === playerNameInputValue)
        )
        {
            const newPlayer: Player = {
                name: playerNameInputValue,
                score: 0,
                eliminated: false,
            };
            props.setPlayers([...props.players, newPlayer]);
            setPlayerNameInputValue("");
            minimumPlayers <= 3 &&
            minimumPlayers > 0 &&
            setMinimumPlayers(minimumPlayers - 1);
            minimumPlayers === 1 && setAddPlayerButtonState(true);
        }
    };

    const startGame = () => {
        if (minimumPlayers === 0 || props.players.length >= 3)
        {
            navigate("setupMrWhitePage");
        }
    };

    return (
        <PageWrapper
            headerContent={
                <>
                    <img src={logo} alt='Logo' className='logo'/>
                    <div className='addPlayerContainer'>
                        <TextInput
                            textInputType='textInput textInputFlexResize'
                            placeholderValue='Set players'
                            textInputChange={handleTextInputChange}
                            textInputValue={playerNameInputValue}
                        />
                        <Button
                            buttonType={"button btPurple btFlexResize"}
                            buttonAction={addPlayer}
                        >
                            ADD +
                        </Button>
                    </div>
                </>
            }
            mainContent={
                <PlayerBoxContainer>
                    {props.players.map((playerEntry, index) => (
                        <PlayerBox
                            key={index}
                            pbValue={playerEntry.name}
                            pbEye={false}
                            pbType={
                                playerNameInputValue === playerEntry.name ? "pbShake" : ""
                            }
                        />
                    ))}
                    {props.players.length >= 3
                        ? ""
                        : minimumPlayersLeft.map((_, index) => (
                            <PlayerBox
                                key={index}
                                pbType='pbDashedBorder'
                                pbValue=''
                                pbEye={false}
                            />
                        ))}
                </PlayerBoxContainer>
            }
            footerContent={<>
                <div className={"minimumPlayersLabel" + ((props.players.length >= 3 || addPlayerButtonState)
                    ? " minimumPlayersLabelReached"
                    : "")}>Requires a minimum of 3 players
                </div>
                <Button
                    buttonType={
                        "button btFlexResize" +
                        (props.players.length >= 3 || addPlayerButtonState
                            ? " btOrange"
                            : " btDisabled")
                    }
                    buttonAction={startGame}
                >
                    Start
                </Button>
            </>
            }
        />
    );
};

export default SetupPlayersPage;
