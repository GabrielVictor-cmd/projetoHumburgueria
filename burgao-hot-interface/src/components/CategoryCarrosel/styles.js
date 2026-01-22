import styled from "styled-components"
import { Link } from "react-router-dom"

export const CategoryContainer = styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 25px 0;

    .rec.rec-arrow{
        background-color: #9758A6;
        color: #efefef;
        border: none;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover{
        border: 1px solid #9758A6;
        background-color: #efefef;
        color: #9758A6;
    }

    .rec.rec-arrow:disabled{
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`

export const CategoryImg = styled.img`
    

`

export const ConteinerItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-top: 13px;
    width: 282px;
    height: 50px;
    gap: 10px;
    border-radius: 8px;
    border: none;
    background: #9758A6;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-style: normal;
    line-height: 100%;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    color: white;

    :hover{
        opacity: 0.8;
    }

    :active{
        opacity: 0.5;
    }
`