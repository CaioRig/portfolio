import styled from 'styled-components';

export const MainHomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 10%;
`
export const MainHomeButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const MainHomeButtons = styled.button`
    position: absolute;
    width: 300px;
    height: 80px;
    left: 101px;
    top: 457px;

    background: #FAFF00;
    border-radius: 50px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;

    filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.5));
    :hover{
        cursor: pointer;
        background-color: #c9cc00;
    }
    `
export const HomeText = styled.h1`
    position: absolute;
    width: 913px;
    height: 183px;
    left: 85px;
    top: 177px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`