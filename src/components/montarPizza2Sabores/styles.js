import styled from 'styled-components';

//Itens referentes a Mesa..
export const AreaMontarPrato = styled.section`
  background: tomato;
  width: 100%;
  height: 517px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Prato = styled.div`
  width: 270px;
  height: 270px;
  display: inline-block;
  position: relative;
  background-image: url("https://static.expressodelivery.com.br/media/0.01.001/img/forma_2.png");
`
export const EsquerdaPrato = styled.div`
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    :hover{
      background-color: rgb(0, 0, 0,0.3);
  }
`
export const DireitaPrato = styled.div`
  background-position: right bottom;
  right: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  :hover{
    background-color: rgb(0, 0, 0,0.3);
  }
`
export const Container = styled.div`
  width: 100%;
`

export const Areapizza = styled.div`
    width: 240px;
    height: 240px;
    margin: 15px 9px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    cursor: pointer;
`
        