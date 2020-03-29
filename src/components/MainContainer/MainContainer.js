import React from 'react';
import NavBar from '../NavBar/NavBar';
import ColumnContainer from '../ColumnContainer/ColumnContainer';
import './MainContainer.scss';
import AsideMenu from '../AsideMenu/AsideMenu';

const MainContainer = () => (
    <div className='main-container'>
        <div className='main-nav'>
        <NavBar></NavBar>
        </div>
        <div className='main-under-nav'>
        <ColumnContainer></ColumnContainer>
        <AsideMenu></AsideMenu>
        </div>
        
        
        
    </div>
)


export default MainContainer;