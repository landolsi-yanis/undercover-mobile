import React from 'react'
import './SelectPlayerToDiscoverPage.css'
import PlayerBoxContainer from '../../components/PlayerBoxContainer/PlayerBoxContainer'
import PlayerBox from '../../components/PlayerBox/PlayerBox'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

const SelectPlayerToDiscoverPage = () => {
  return (
    <PageWrapper mainContent={<><div className="textWrap">Select your name to discover your word </div>

      <div className="playersWrap">
        <PlayerBoxContainer>
          <PlayerBox pbValue="Obamaster" pbEye={true} />
          <PlayerBox pbValue="Staline" pbEye={true} />
          <PlayerBox
            pbType="pbDisabled"
            pbValue="The Queen"
            pbEye={true}
          />
          <PlayerBox pbType="pbDisabled" pbValue="Otter" pbEye={true} />
        </PlayerBoxContainer>
      </div></>}  />
      
  )
}

export default SelectPlayerToDiscoverPage
