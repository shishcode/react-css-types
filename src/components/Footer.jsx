import React from 'react'
import logo from '../assets/react-logo-footer.svg'
import happyMan from '../assets/happy-woman.svg'
import happyWoman from '../assets/happy-man.svg'
import style from '../styles/newGeneration.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
           <p className={style.niceBigWhite}>All rights reserved</p>
           <p className={style.smallYellow}>Copyright 2023</p>
           <div className={style.footerImages}>
            <img className={style.footerLogo} src={happyMan} alt="logo" />
            <img className={style.footerLogo} src={happyWoman} alt="logo" />
           </div>
        </div>
    )
}