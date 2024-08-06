import React, { ReactNode } from 'react'
import './MessageBox.css'

interface Props {
  headerContent: ReactNode;
  mainContent: ReactNode;
  footerContent: ReactNode;
  mainCentered: boolean;
  largeHeight:boolean
}

const MessageBox: React.FC<Props> = (props) => {

    return (
      <div className='messageBoxContainer'>
        <div className={'messageBox' + (props.largeHeight ? ' messageBoxLargeHeight' : '')}>
          <div className='messageBoxHeader'>{props.headerContent}</div>
          <div className='messageBoxMain'>{props.mainCentered ? <div className='messageBoxMaintContentCentered'>{props.mainContent}</div> : props.mainContent}</div>
          <div className='messageBoxFooter'>{props.footerContent}</div>
        </div>
      </div>
    )
}
export default MessageBox
