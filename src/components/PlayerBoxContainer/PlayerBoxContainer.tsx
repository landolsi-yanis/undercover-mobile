import React, { ReactNode } from 'react'
import './PlayerBoxContainer.css'

interface Props {
  children?: ReactNode
}

const PlayerBoxContainer: React.FC<Props> = (props) => {
  return <div className='playerBoxContainer'>{props.children}</div>
}
export default PlayerBoxContainer
