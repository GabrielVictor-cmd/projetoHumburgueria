import styled from "styled-components";

export const OffersContainer = styled.div`
    background-color: white;
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

export const OffersImg = styled.img`
    

`

export const OffersItems = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
        color: #424242;
    }
`

export const Image = styled.img`
    width: 250px;
    border-radius: 10px;
`

export const Button = styled.button`
    margin-top: 13px;
    width: 250px;
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