import styled from "styled-components"

export const ContainerButton = styled.button`
    border: none;
    font-weight: 500;
    color: white;
    width: 180px;
    height: 40px;
    background: #9758a6;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 5px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &:active{
        opacity: 0.6;
    }
`