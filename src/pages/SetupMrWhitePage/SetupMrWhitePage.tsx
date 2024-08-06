import React from 'react'
import './SetupMrWhitePage.css'
import Button from '../../components/Button/Button'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

const SetupMrWhitePage = () => {
  return (
    <PageWrapper mainContent={<><div className="questionWrap">Do you want to play ?</div>
      <div className="buttonWrap">
        <Button buttonType="button btPurple">With Mr White</Button>
        <Button buttonType="button btPurple">Without Mr White</Button>
      </div>
    </>}  />
      
  )
}

export default SetupMrWhitePage
