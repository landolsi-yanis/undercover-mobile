import React from 'react'
import './ShowWordPage.css'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import MessageBox from '../../components/MessageBox/MessageBox'
import playerPicture from '../../assets/playerPicture.png'
import Button from '../../components/Button/Button'

const ShowWordPage = () => {
  return (
    <PageWrapper 
      mainContent={
        <>
          <MessageBox 
          largeHeight={true} 
          headerContent={<><div className='showWWordPagePlayerIdentity'><img src={playerPicture} alt='Player Picture' className='showWWordPagePlayerPicture'/>Otter</div><div className='showWWordPagePlayerInfo'>Memorize your word<br/> 
(you will never see it again)</div></>}
          mainContent={<div className='showWWordPageWord'>JARDIN</div>} 
          footerContent={<Button buttonType={'button btOrange'}>Ok !</Button>} 
          mainCentered={true} />
        </>} />
      
  )
}

export default ShowWordPage
