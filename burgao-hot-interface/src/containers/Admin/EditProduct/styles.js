import styled from "styled-components"
import Button from "../../../components/Button"


export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background-color: #565656;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`

export const Label = styled.p`
    color: white;
    margin-bottom: 5px;
    font-size: 15px;
`

export const Input = styled.input`
    height: 40px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    padding-left: 10px;
    min-width: 280px;
    width: 100%;
`

export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 20px;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #1f1f1f;
    border-radius: 4px;
    padding: 10px;
    gap: 10px;

    input{
        background-color: red;
        opacity: 0;
        width: 1px;
    }
`
export const ConteinerInput = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;

    input{
        cursor: pointer;
        height: 16px;
        width: 16px;

    }
`