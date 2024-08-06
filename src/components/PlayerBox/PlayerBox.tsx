import React from 'react'
import './PlayerBox.css'
import playerPicture from '../../assets/playerPicture.png'
import playerPictureSelected from '../../assets/selectedPlayerPicture.png'
import eyeIcon from '../../assets/eye.png'


interface Props {
  pbType?: string
  pbValue?: string
  pbEye?: boolean
  pbSelected?: boolean
}

const PlayerBox: React.FC<Props> = (props) => {
    return (
      <div className={('playerBox ' + props.pbType) + (props.pbSelected === true ? ' pbSelected' : '')}>
        <div className='pbLeftSide'>
          <img
            src={props.pbSelected === true ? playerPictureSelected : playerPicture}
            alt="Player Profile"
            className='pbPlayerPicture'
          />
          {props.pbValue}
        </div>
        <div className='pbRightSide' >
          {props.pbEye === true && <img src={eyeIcon} alt="Eye" className='pbEye'/>}
        </div>
      </div>
    )
}
export default PlayerBox
