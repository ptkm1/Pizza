import styled from 'styled-components';

export const Container1 = styled.div`
     width: 100%;
    height: 100vh;
    z-index: 10;
    position: fixed;
    background: rgba(0,0,0,0.3);

    display: flex;
    justify-content: center;
`;

export const Conteudo = styled.div`
    z-index: 10;
    position: fixed;
    width: 70%;
    background: #F4F5F9;
    margin-top: 70px; 
    padding: 10px;
    border: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;

    span{
        color: #820E0E; 
        margin-right: 5px; 
    }
`

export const Close = styled.div`
    
    display: flex;
    flex-direction: row-reverse;

    span{
        color: #820E0E; 
        size: 20px; 
        cursor: pointer; 
    } 
`