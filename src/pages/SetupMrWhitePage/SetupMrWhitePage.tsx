import React from 'react'
import './SetupMrWhitePage.css'
import Button from '../../components/Button/Button'

const SetupMrWhitePage = () => {
  return (
    <div className="pageWrap">
      <div className="questionWrap">Do you want to play ?</div>
      <div className="buttonWrap">
        <p>
          <Button buttonType="btPurple" buttonValue="With Mr White" />
        </p>
        <Button buttonType="btPurple" buttonValue="Without Mr White" />
      </div>
    </div>
  )
}

export default SetupMrWhitePage
