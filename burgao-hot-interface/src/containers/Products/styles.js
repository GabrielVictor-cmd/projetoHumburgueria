import styled from "styled-components"

export const Container = styled.div`
    background: #e5e5e5;
    min-height: calc(100vh - 70px);
`

export const ProductsImg = styled.img`
    width: 100%;
    height: 390px;
    border-radius: 2px;
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 10px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${props => props.isActiveCategory && "2px solid #9758A6"};
    color: ${props => props.isActiveCategory ? "#9758A6" : "gray"};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`

export const ProductsConteiner = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 40px;
    justify-items: center;
    margin-top: 15px;
`