import React, {useEffect, useState} from "react";
import "./ShowEliminatedPlayerPage.css";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import MessageBox from "../../components/MessageBox/MessageBox";
import citizenPicture from "../../assets/citizen.png";
import undercoverPicture from "../../assets/undercover.png";
import mrWhitePicture from "../../assets/mrWhite.png";
import Button from "../../components/Button/Button";
import {Player} from "../../types/Player";
import {useNavigate} from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";

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

const ShowEliminatedPlayerPage: React.FC<Props> = (props) => {
    const [secretWordInputValue, setSecretWordInputValue] = useState<string>("");

    const handleTextInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setSecretWordInputValue(event.target.value);
    };

    const navigate = useNavigate();
    const okSubmit = () => {
        props.setSelectedPlayer("");
        navigate("/SelectPlayerToEliminate");
    };

    const getRole = () => {
        return props.players.find((player) => player.name === props.selectedPlayer)
            ?.role;
    };

    const getRolePicture = () => {
        if (getRole() === "Undercover")
        {
            return undercoverPicture;
        } else if (getRole() === "Citizen")
        {
            return citizenPicture;
        } else if (getRole() === "Mr White")
        {
            return mrWhitePicture;
        }
        return undefined;
    };

    const tryToGuessSecretWord = () => {
        console.log(secretWordInputValue);
        if (secretWordInputValue.trim() !== "")
        {
            console.log(props.citizensWords);
            secretWordInputValue.trim() === props.citizensWords
                ? (props.setWinners("Mr White"), navigate("/ShowWinnersPage"))
                : navigate("/SelectPlayerToEliminate");
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
                                <img
                                    src={getRolePicture()}
                                    alt='Role picture'
                                    className='showEliminatedPlayerPageRolePicture'
                                />
                            </div>
                        }
                        mainContent={
                            <div className='showEliminatedPlayerPageRole'>
                                {props.selectedPlayer} was
                                <br/>
                                <span className='showEliminatedPlayerPageRoleTextBold'>
                  {getRole()}
                </span>
                                {getRole() === "Mr White" && (
                                    <>
                                        <br/>
                                        Try to guess
                                    </>
                                )}
                            </div>
                        }
                        footerContent={
                            getRole() === "Mr White" ? (
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

export default ShowEliminatedPlayerPage;
