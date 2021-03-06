import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src='/images/logo.svg'></img>
            </a>
            <Menu>
                {cars &&
                    cars.map((car, index) => (
                        <a key={index} href='#'>
                            {car}
                        </a>
                    ))}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <ShowModelsName>
                    {cars &&
                        cars.map((car, index) => (
                            <li key={index}>
                                <a href='#'>{car}</a>
                            </li>
                        ))}
                </ShowModelsName>
                <li>
                    <a href='#'>Existing Inventory</a>
                </li>
                <li>
                    <a href='#'>Used Inventory</a>
                </li>
                <li>
                    <a href='#'>Trade-in</a>
                </li>
                <li>
                    <a href='#'>CyberTruck</a>
                </li>
                <li>
                    <a href='#'>Roadster</a>
                </li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
`;
const Menu = styled.div`
    display: flex;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;
const ShowModelsName = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 2;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${(props) =>
        props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
