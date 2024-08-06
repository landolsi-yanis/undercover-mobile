import React from 'react'
import './SelectPlayerToEliminate.css'
import PlayerBoxContainer from '../../components/PlayerBoxContainer/PlayerBoxContainer'
import PlayerBox from '../../components/PlayerBox/PlayerBox'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Button from '../../components/Button/Button'

const SelectPlayerToEliminate = () => {
  return (
    <PageWrapper mainContent={<><div className="textWrap">Follow this order.<br /> 
At the end of the round select player to eliminate </div>

      <div className="playersWrap">
        <PlayerBoxContainer>
          <PlayerBox pbValue="Obamaster" pbEye={false} pbSelected={true}/>
          <PlayerBox pbValue="Staline" pbEye={true} />
          <PlayerBox
            pbType="pbDisabled"
            pbValue="The Queen"
            pbEye={true}
          />
          <PlayerBox pbType="pbDisabled" pbValue="Otter" pbEye={true} />
        </PlayerBoxContainer>
      </div></>}  footerContent={<Button buttonType={'button btOrange'}>Elminate</Button>}/>
      
  )
}

export default SelectPlayerToEliminate
