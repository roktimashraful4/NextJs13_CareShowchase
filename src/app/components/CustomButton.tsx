'use client';
import React from 'react'
import { CustomButtonProps } from '../types';

const CustomButton = (props:CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={props.btnType??"button"}
        className={`custom-btn ${props.containerStyle}`}
        onClick={props.handleClick}
    >
        <span className={'flex-1'}>
          {props.title}  
        </span>
    </button>
  )
}

export default CustomButton