import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItems';
import bunnerImg from '../image/bunner.jpg';

export const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;
const Bunner = styled.div`
    width: 1060px;
    height: 200px;
    margin-left: 100px;
    margin-top: 0;
    margin-bottom: 30px
`
const ImgBunner = styled.img`
    width: 100%;
    height: 100%;   
`;
const SectionMenu = styled.section`
    padding: 30px;
`

export const Menu = () => (
    <MenuStyled>
        <Bunner>
            <ImgBunner src={bunnerImg} alt='logo' />

        </Bunner>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </SectionMenu>



    </MenuStyled>
);