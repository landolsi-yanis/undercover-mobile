import React from 'react'
import './ShowEliminatedPlayerPage.css'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import MessageBox from '../../components/MessageBox/MessageBox'
import citizenPicture from '../../assets/citizen.png'
import Button from '../../components/Button/Button'

const ShowEliminatedPlayerPage = () => {
  return (
    <PageWrapper 
      mainContent={
        <>
          <MessageBox 
          largeHeight={false} 
          headerContent={<div className='showEliminatedPlayerPagePlayerRolePictureContainer'><img src={citizenPicture} alt='Role picture' className='showEliminatedPlayerPageRolePicture'/></div>}
          mainContent={<div className='showEliminatedPlayerPageRole'>Otter was<br /><span className='showEliminatedPlayerPageRoleTextBold'>CITIZEN</span></div>} 
          footerContent={<Button buttonType={'button btOrange'}>Ok !</Button>} 
          mainCentered={true} />
        </>} />
      
  )
}

export default ShowEliminatedPlayerPage
