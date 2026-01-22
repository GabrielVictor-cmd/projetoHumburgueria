import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    height: 72px;
    background: white;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img{
        height: 27px;
    }
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: ${props => props.isActive ? "underline" : "none"};
    text-underline-position: ${props => props.isActive ? "under" : "none"};
    color: ${props => props.isActive ? "#9758a6" : "#555555"};
    line-height: 19px;
    font-size: 16px;
    font-weight: ${props => props.isActive ? "bold" : "normal"};

    
`

export const ContainerText = styled.div`
    p{
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #555555;
    }

`
export const Line = styled.div`
    height: 40px;
    border-right: 0.5px solid #bababa;
`

export const PageLinkExit = styled(Link)`
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #9758a6;

`