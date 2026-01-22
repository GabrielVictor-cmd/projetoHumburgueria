import styled from "styled-components"

export const Container = styled.div`
    background: white;
    padding: 10px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
    max-width: 320px;
    flex: 0 0 320px;
    box-sizing: border-box;
    align-self: flex-start;

    .Conteiner-Top{
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 10px 20px;
        align-items: center;

    }

    .title {
        grid-column: 1 / -1;
        margin-bottom: 18px;
    }

    .items {
        margin-bottom: 8px;
    }

    .items-price {
        margin-left: auto;

    }

    .delivery {
        
    }

    .delivery-price {
        margin-left: auto;
    }

    .Conteiner-Bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 21px;
        margin-top: 25px;
    }
`
