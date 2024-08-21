import React, {useEffect} from "react";
import "./SelectPlayerToDiscoverPage.css";
import PlayerBoxContainer from "../../components/PlayerBoxContainer/PlayerBoxContainer";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import {Player} from "../../types/Player";
import {useNavigate} from "react-router-dom";
import wordsData from "../../data/words.json";

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
    playerWhoStarts: string;
    setPlayerWhoStarts: React.Dispatch<React.SetStateAction<string>>;
}

const SelectPlayerToDiscoverPage: React.FC<Props> = (props) => {
    const navigate = useNavigate();

    console.log(props.players);

    const addRoles = () => {
        if (
            props.players.some((player) => player.role === "") ||
            props.players.some((player) => player.role === undefined)
        )
        {
            const availableRoles = [];

            //Adding Undercover Roles
            props.players.length <= 5 && availableRoles.push("Undercover");
            props.players.length >= 6 &&
            props.players.length <= 8 &&
            availableRoles.push("Undercover") &&
            availableRoles.push("Undercover");
            props.players.length > 9 &&
            availableRoles.push("Undercover") &&
            availableRoles.push("Undercover") &&
            availableRoles.push("Undercover");

            //Adding MrWhite Role
            props.mrWhiteState === true && availableRoles.push("Mr White");

            //Counting and adding Citizens Roles
            const numberOfCitizen = props.players.length - availableRoles.length;

            for (let i = 0; i < numberOfCitizen; i++)
            {
                availableRoles.push("Citizen");
            }

            //Randomizing Roles
            const shuffledAvailableRoles = availableRoles.sort(
                () => Math.random() - 0.5
            );

            //Building New Players Array with Roles
            const updatedPlayersArray = props.players.map((player, index) => ({
                ...player,
                role: shuffledAvailableRoles[index], // Assigning a role from the shuffled roles
                eliminated: false,
            }));

            //Updating Roles
            props.setPlayers(updatedPlayersArray);
        }
    };

    const getRandomPlayer = () => {
        const randomIndex = Math.floor(Math.random() * props.players.length);
        return props.players[randomIndex];
    };
    useEffect(addRoles, []);

    useEffect(() => {
        if (props.citizensWords === "" && props.undercoversWords === "")
        {
            // Sélectionner une combinaison aléatoire
            const randomIndex = Math.floor(
                Math.random() * wordsData.combinations.length
            );
            props.setCitizensWords(wordsData.combinations[randomIndex].citizen);
            props.setUndercoversWords(wordsData.combinations[randomIndex].undercover);
        }
    }, []);

    useEffect(() => {
        if (props.hasSeenWord.length === props.players.length)
        {
            props.setPlayerWhoStarts(getRandomPlayer().name);
            navigate("/SelectPlayerToEliminate");
        }
    });

    const showRole = (player: string) => {
        !props.hasSeenWord.includes(player) && navigate("/ShowWordPage"),
            props.setSelectedPlayer(player);
    };

    return (
        <PageWrapper
            mainContent={
                <>
                    <div className='textWrap'>
                        Select your name to discover your word{" "}
                    </div>

                    <div className='playersWrap'>
                        <PlayerBoxContainer>
                            {props.players.map((playerEntry, index) => (
                                <PlayerBox
                                    key={index}
                                    pbValue={playerEntry.name}
                                    pbEye={
                                        props.hasSeenWord.includes(playerEntry.name) ? false : true
                                    }
                                    pbAction={() => showRole(playerEntry.name)}
                                    pbType={
                                        props.hasSeenWord.includes(playerEntry.name)
                                            ? "pbDisabled"
                                            : ""
                                    }
                                />
                            ))}
                        </PlayerBoxContainer>
                    </div>
                </>
            }
        />
    );
};

export default SelectPlayerToDiscoverPage;
