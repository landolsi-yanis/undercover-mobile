import React, {useEffect, useState} from "react";
import "./ShowWinnersPage.css";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import MessageBox from "../../components/MessageBox/MessageBox";
import citizenPicture from "../../assets/citizen.png";
import undercoverPicture from "../../assets/undercover.png";
import mrWhitePicture from "../../assets/mrWhite.png";
import Button from "../../components/Button/Button";
import {Player} from "../../types/Player";
import {useNavigate} from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import PlayerBoxContainer from "../../components/PlayerBoxContainer/PlayerBoxContainer";
import PlayerBox from "../../components/PlayerBox/PlayerBox";

interface Props
{
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    mrWhiteState: boolean;
    citizensWords: string;
    setCitizensWords: React.Dispatch<React.SetStateAction<string>>;
    undercoversWords: string;
    setUndercoversWords: React.Dispatch<React.SetStateAction<string>>;
    hasSeenWord: string[];
    setHasSeenWord: React.Dispatch<React.SetStateAction<string[]>>;
    selectedPlayer: string;
    setSelectedPlayer: React.Dispatch<React.SetStateAction<string>>;
    winners: string;
    setWinners: React.Dispatch<React.SetStateAction<string>>;
    playerWhoStarts: string;
    setPlayerWhoStarts: React.Dispatch<React.SetStateAction<string>>;
}

const ShowWinnersPage: React.FC<Props> = (props) => {
    const [secretWordInputValue, setSecretWordInputValue] = useState<string>("");

    const handleTextInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSecretWordInputValue(event.target.value);
    };

    const navigate = useNavigate();

    useEffect(() => {
        props.setPlayers(
            props.players.map((playerEntry) => {
                let score = 0;
                console.log('Player Entry  : ', playerEntry.role, playerEntry.eliminated);
                if (
                    (playerEntry.role === props.winners &&
                        playerEntry.eliminated === false) || playerEntry.role === 'Mr White' && props.winners === 'Mr White'
                )
                {
                    console.log('Entering IF :: ', playerEntry.role);

                    switch (playerEntry.role)
                    {
                        case "Mr White":
                            score = 50;
                            console.log('Mr White :: ', playerEntry.role);
                            break;
                        case "Undercover":
                            score = 30;
                            console.log('Undercover :: ', playerEntry.role);
                            break;
                        case "Citizen":
                            console.log('Citizen :: ', playerEntry.role);
                            score = 20;
                            break;
                    }
                }
                return {
                    ...playerEntry,
                    score: (playerEntry.score += score),
                };
            })
        );
    }, []);

    const okSubmit = () => {
        props.setPlayers(
            props.players.map((playerEntry) => {
                return {
                    ...playerEntry,
                    eliminated: false,
                    role: "",
                };
            })
        );
        props.setSelectedPlayer("");
        props.setHasSeenWord([]);
        props.setPlayerWhoStarts("");
        props.setCitizensWords("");
        props.setUndercoversWords("");
        navigate("/");
    };

    const getRole = () => {
        return props.players.find((player) => player.name === props.selectedPlayer)
            ?.role;
    };

    const getRolePicture = () => {
        if (props.winners === "Undercover")
        {
            return undercoverPicture;
        } else if (props.winners === "Citizen")
        {
            return citizenPicture;
        } else if (props.winners === "Mr White")
        {
            return mrWhitePicture;
        }
        return undefined;
    };


    const getAnyRolePicture = (onePlayer: Player) => {
        console.log("OnePlayer : ", onePlayer);
        if (onePlayer.role === "Undercover")
        {
            return undercoverPicture;
        } else if (onePlayer.role === "Citizen")
        {
            return citizenPicture;
        } else if (onePlayer.role === "Mr White")
        {
            return mrWhitePicture;
        }
    };

    const tryToGuessSecretWord = () => {
        console.log(secretWordInputValue);
        if (secretWordInputValue.trim() !== "")
        {
            secretWordInputValue.trim() === props.citizensWords
                ? console.log("Word Guessed")
                : console.log("Word not Guessed");
        }
    };


    return (
        <PageWrapper
            mainContent={
                <>
                    <MessageBox
                        largeHeight={false}
                        headerContent={
                            <div className='showEliminatedPlayerPagePlayerRolePictureContainer'>
                                <div className='showWinnerPlayerPageRolePictureGoldContainer'>
                                    <img
                                        src={getRolePicture()}
                                        alt='Role picture'
                                        className='showWinnerPlayerPageRolePicture'
                                    />
                                </div>
                            </div>
                        }
                        mainContent={
                            <div className='showEliminatedPlayerPageRole'>
                <span className='showEliminatedPlayerPageRoleTextBold'>
                  {props.winners}
                </span>
                                <br/> Won <br/>
                                <div className='showWinnersPagePlayerList'>
                                    <PlayerBoxContainer>
                                        {props.players
                                            .sort((a, b) => b.score - a.score) // Trie par score décroissant askip
                                            .map((playerEntry, index) => (
                                                <PlayerBox
                                                    key={index}
                                                    pbValue={playerEntry.name}
                                                    pbRightValue={playerEntry.score}
                                                    pbEye={false}
                                                    pbImage={getAnyRolePicture(playerEntry)}
                                                    pbType={
                                                        playerEntry.role !== props.winners
                                                            ? "pbDisabled"
                                                            : (playerEntry.eliminated === true ? "pbDisabled" : "")
                                                    }
                                                />
                                            ))}
                                    </PlayerBoxContainer>
                                </div>
                            </div>
                        }
                        footerContent={
                            getRole() === "Mr White" && props.winners !== "Mr White" ? (
                                <>
                                    <TextInput
                                        textInputType={
                                            "textInput textInputFlexResize textInputCenteredtext textInputMarginBottom"
                                        }
                                        placeholderValue='Secret word'
                                        textInputChange={handleTextInputChange}
                                        textInputValue={secretWordInputValue}
                                    />
                                    <Button
                                        buttonType={"button btOrange"}
                                        buttonAction={tryToGuessSecretWord}
                                    >
                                        Try
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        buttonType={"button btOrange"}
                                        buttonAction={okSubmit}
                                    >
                                        Ok !
                                    </Button>
                                </>
                            )
                        }
                        mainCentered={true}
                    />
                </>
            }
        />
    );
};

export default ShowWinnersPage;
