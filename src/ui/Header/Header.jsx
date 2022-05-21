import React from 'react';
import s from './Header.module.css';
import gitLogo from '../assets/github-icon.svg';
import search from '../assets/search.svg'

export const Header =()=>{
    return (
        <div className={s.container}>
            <img className={s.icon} src={gitLogo} alt="git logo" />
            <div className={s.inputContainer}>
                <img className={s.searchLogo} src={search} alt="search github user"/>
                <input className={s.input} type='text' placeholder={'Enter GitHub username'}/>
            </div>
        </div>
    )
}