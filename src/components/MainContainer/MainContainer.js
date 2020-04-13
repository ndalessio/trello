import React from 'react';
import NavBar from '../NavBar/NavBar';
import ColumnContainer from '../ColumnContainer/ColumnContainer';
import Modal from '../Modal/Modal';
import AsideMenu from '../AsideMenu/AsideMenu';
import './MainContainer.scss';


const MainContainer = () => (
    <div className='main-container'>
        <div className='main-nav'>
        <NavBar></NavBar>
        </div>
        <div className='main-under-nav'>
        <ColumnContainer></ColumnContainer>
        <Modal></Modal>
        <AsideMenu></AsideMenu>
        </div>  
    </div>
)


export default MainContainer;