import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Img = styled.img`
    height: 155px;
`

export const LoginImage = styled.img`
    height: 70%;
`

export const ConteinerItens = styled.div`
    background-color: #373737;
    border-radius: 0px 10px 10px 0px;
    height: 70%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        color: white;
        font-size: 24px;
        font-weight: 500px;
        font-style: normal;
        line-height: 28px;
        text-align: center;
        margin-top: 20px;
    }

    form{
        display: flex;
        flex-direction: column;
    }
`

export const Label = styled.p`
    color: white;
    font-style: normal;
    font-weight: 500px;
    font-size: 12px;
    line-height: 14px;
    margin-top: 10px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    border: ${props => (props.error ? "2px solid #f00101ff" : "none")};
    width: 350px;
    height: 35px;
    background: white;
    border-radius: 5px;
    padding-left: 10px;
`

export const SingInLink = styled.p`
    font-weight: 500;
    a{
        text-decoration: underline;
        color: #001affff;
    }

    a:hover{
        cursor: pointer;
        opacity: 0.7;
    }

    a:active{
        opacity: 0.5;
    }
`
