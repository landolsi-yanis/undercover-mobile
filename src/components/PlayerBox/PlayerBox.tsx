import React, {ReactNode} from "react";
import "./PlayerBox.css";
import playerPicture from "../../assets/playerPicture.png";
import playerPictureSelected from "../../assets/selectedPlayerPicture.png";
import eyeIcon from "../../assets/eye.png";

interface Props
{
    pbType?: string;
    pbValue?: string;
    pbRightValue?: ReactNode;
    pbEye?: boolean;
    pbSelected?: boolean;
    pbAction?: React.MouseEventHandler;
    pbImage?: string;
}

const PlayerBox: React.FC<Props> = (props) => {
    return (
        <div
            className={
                "playerBox " +
                props.pbType +
                (props.pbSelected === true ? " pbSelected" : "")
            }
            onClick={props.pbAction}
        >
            <div className='pbLeftSide'>
                <img
                    src={props.pbImage === "" || props.pbImage === undefined ? (
                        props.pbSelected === true ? playerPictureSelected : playerPicture) : props.pbImage
                    }
                    alt='Player Profile'
                    className='pbPlayerPicture'
                />
                {props.pbValue}
            </div>
            <div className='pbRightSide'>
                {props.pbEye === true && (
                    <img src={eyeIcon} alt='Eye' className='pbEye'/>
                )}
                {props.pbRightValue}
            </div>
        </div>
    );
};
export default PlayerBox;
