import React, {useEffect, useState} from "react";
import "./SelectPlayerToEliminate.css";
import PlayerBoxContainer from "../../components/PlayerBoxContainer/PlayerBoxContainer";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Button from "../../components/Button/Button";
import {Player} from "../../types/Player";
import {useNavigate} from "react-router-dom";
import undercoverPicture from "../../assets/undercover.png";
import citizenPicture from "../../assets/citizen.png";
import mrWhitePicture from "../../assets/mrWhite.png";

interface Props
{
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    mrWhiteState: boolean;
    setMrWhiteState: React.Dispatch<React.SetStateAction<boolean>>;
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

const SelectPlayerToEliminate: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const [pbSelected, setPbSelected] = useState<string>("");

    const getRolesLeft = (roleToCount: string) => {
        return props.players.filter(
            (player) => player.role === roleToCount && !player.eliminated
        ).length;
    };

    const getRolePicture = (onePlayer: Player) => {
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
        return undefined;
    };

    const [remainingUndercovers, setRemainingUndercovers] = useState(
        getRolesLeft("Undercover")
    );
    const [remainingCitizens, setRemainingCitizens] = useState(
        getRolesLeft("Citizen")
    );

    const [remainingMrWhite, setRemainingMrWhite] = useState(
        getRolesLeft("Mr White")
    );

    useEffect(() => {
        setRemainingUndercovers(getRolesLeft("Undercover"));
        setRemainingCitizens(getRolesLeft("Citizen"));
        setRemainingCitizens(getRolesLeft("Mr White"));

        if (props.players.length === 3 && props.mrWhiteState)
        {
            if (remainingUndercovers === 0)
            {
                props.setWinners("Citizen");
                navigate("/ShowWinnersPage");

            } else if (remainingCitizens === 0)
            {
                props.setWinners("Undercover");
                navigate("/ShowWinnersPage");
            }
        } else if (props.players.length === 3 && !props.mrWhiteState)
        {
            if (remainingUndercovers === 0)
            {
                props.setWinners("Citizen");
                navigate("/ShowWinnersPage");

            } else if (remainingCitizens === 1)
            {
                props.setWinners("Undercover");
                navigate("/ShowWinnersPage");
            }
        } else
        {
            if (remainingUndercovers === 0 && remainingMrWhite === 0)
            {
                props.setWinners("Citizen");
                navigate("/ShowWinnersPage");

            } else if (remainingCitizens === 1)
            {
                props.setWinners("Undercover");
                navigate("/ShowWinnersPage");
            }
        }

    }, []);

    const toEliminate = () => {
        if (pbSelected !== "")
        {
            props.setSelectedPlayer(pbSelected);
            console.log("pbSelected to be eliminated", pbSelected);
            props.setPlayers((prevPlayers) =>
                prevPlayers.map((player) =>
                    player.name === pbSelected ? {...player, eliminated: true} : player
                )
            );
            navigate("/ShowEliminatedPlayerPage");
        }
    };

    return (
        <PageWrapper
            mainContent={
                <>
                    <div className='textWrap'>
                        Time to play !
                        <br/>
                        At the end of the round select player to eliminate{" "}
                    </div>

                    <div className='playersWrap'>
                        <PlayerBoxContainer>
                            {props.players.map((playerEntry, index) => (
                                <PlayerBox
                                    key={index}
                                    pbValue={
                                        playerEntry.name +
                                        (playerEntry.eliminated === true
                                            ? " (" + playerEntry.role + ")"
                                            : "")
                                    }
                                    pbEye={false}
                                    pbAction={() =>
                                        playerEntry.eliminated === false &&
                                        setPbSelected(playerEntry.name)
                                    }
                                    pbType={playerEntry.eliminated === true ? "pbDisabled" : ""}
                                    pbSelected={pbSelected === playerEntry.name ? true : false}
                                    pbRightValue={playerEntry.name === props.playerWhoStarts ?
                                        <div className="playerWhoStartsLabel">You Start</div> : ""}
                                    pbImage={playerEntry.eliminated === true ? getRolePicture(playerEntry) : ""}
                                />
                            ))}
                        </PlayerBoxContainer>
                    </div>
                </>
            }
            footerContent={
                <Button buttonType={"button btOrange"} buttonAction={toEliminate}>
                    Eliminate
                </Button>
            }
        />
    );
};

export default SelectPlayerToEliminate;
