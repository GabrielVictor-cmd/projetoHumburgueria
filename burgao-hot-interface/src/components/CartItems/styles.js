import styled from "styled-components"

export const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    width: 100%;
    max-width: 740px;
    box-sizing: border-box;
`
export const Header = styled.div`
    display: grid;
    grid-template-columns: 120px 1.5fr 1fr 140px 1fr 64px;
    padding: 15px;
    border-bottom: 1px solid #b5b5b5;
    align-items: center;

    p{
        font-size: 16px;
        color: black;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: 120px 1.5fr 1fr 140px 1fr 64px;
    padding: 15px;
    grid-gap: 10px 15px;
    align-items: center;

    img{
        border-radius: 12px;
        width: 100px;
        height: 80px;
        object-fit: cover;
    }

    p{
        font-size: 16px;
        color: black;
        margin-top: 5px;
    }

    .quantity-container{
        display: flex;
        gap: 16px;

    }

    button{
        height: 30px;
        background: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    .delete-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        padding: 6px;
        border-radius: 8px;
        cursor: pointer;
    }

    .delete-btn:hover{
        background: rgba(0,0,0,0.04);
    }
`

export const EmptyCart = styled.p`
    text-align: center;
    padding: 20px;
    font-weight: bold;
    color: black;
`

export const Lixeira = styled.img`
    width: 26px;
    height: 26px;
    object-fit: contain;
    display: block;
    pointer-events: none;
`