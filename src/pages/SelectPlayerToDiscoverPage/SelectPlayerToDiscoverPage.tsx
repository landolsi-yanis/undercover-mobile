import React from 'react'
import './SelectPlayerToDiscoverPage.css'
import PlayerBoxContainer from '../../components/PlayerBoxContainer/PlayerBoxContainer'
import PlayerBox from '../../components/PlayerBox/PlayerBox'

const SelectPlayerToDiscoverPage = () => {
  return (
    <div className="pageWrap">
      <div className="textWrap">Select your name to discover your word </div>

      <div className="playersWrap">
        <PlayerBoxContainer>
          <PlayerBox pbType="PlayerBox " pbValue="Obamaster" pbEye={true} />
          <PlayerBox pbType="PlayerBox" pbValue="Staline" pbEye={true} />
          <PlayerBox
            pbType="PlayerBox pbDisabled"
            pbValue="The Queen"
            pbEye={true}
          />
          <PlayerBox pbType="PlayerBox" pbValue="Otter" pbEye={true} />
        </PlayerBoxContainer>
      </div>
    </div>
  )
}

export default SelectPlayerToDiscoverPage
