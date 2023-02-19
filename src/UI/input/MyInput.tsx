import React from 'react'
import '../../styles/App.css'

export const MyInput = ({...props}) => {
  return (
    <input className='myInput' {...props} />
  )
}
