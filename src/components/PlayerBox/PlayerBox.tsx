import React from 'react'

import './PlayerBox.css'

import playerPicture from '../../assets/playerPicture.png'
import eyeIcon from '../../assets/eye.png'

interface Props {
  pbValue: string
  pbType: string
  pbEye: boolean
}

const PlayerBox: React.FC<Props> = (props) => {
  if (props.pbEye === true) {
    return (
      <div className={props.pbType}>
        <div className="pbLeft">
          <img
            src={playerPicture}
            alt="Player Profile"
            className="pbPlayerPicture"
          />{' '}
          {props.pbValue}
        </div>
        <div className="pbRight">
          <img src={eyeIcon} alt="Eye" className="pbEye" />
        </div>
      </div>
    )
  } else {
    return (
      <div className={props.pbType}>
        <div className="pbLeft">
          <img
            src={playerPicture}
            alt="Player Profile"
            className="pbPlayerPicture"
          />{' '}
          {props.pbValue}
        </div>
        <div className="pbRight"></div>
      </div>
    )
  }
}
export default PlayerBox
