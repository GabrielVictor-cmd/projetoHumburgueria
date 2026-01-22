import styled from "styled-components";

export const Conteiner = styled.div`
    background: white;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    display: flex;
    padding: 16px;
    gap: 12px;
    width: max-content;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
export const Image = styled.img`
    width: 150px;
    border-radius: 10px;
`

export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 19px;
    color: black;
`

export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: black;
`