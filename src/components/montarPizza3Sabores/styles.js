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
export const Mesa = styled.div`
  width: 100%;
  height: 88px;
  background: url("https://static.expressodelivery.com.br/media/0.01.001/img/mesa2.jpg") center no-repeat #6c0f00;
  position: absolute;
  z-index: 5;
`;

export const Prato = styled.div`
  width: 270px;
  height: 270px;
  display: inline-block;
  position: relative;
  margin-top: 285px;
  z-index: 10;
  background-image: url("https://static.expressodelivery.com.br/media/0.01.001/img/forma_3.png");
  
`
export const TopoPrato = styled.div`
    right: 24%;
    width: 51%;
    height: 51%;
    z-index: 99;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -10.8%;
    overflow: hidden;
    -webkit-border-top-left-radius: 100%;
    -moz-border-radius-topleft: 100%;
    border-top-left-radius: 100%;
    position: absolute;  
`
export const bgTaboa = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    float: left;
    width: 200%;
    height: 200%;
    background-position: -11px -16px;
    background: url("../../assets/staticImages/forma_meio.png") top center no-repeat;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    display: block;
`

export const EsquerdaPrato = styled.div`
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
`
export const DireitaPrato = styled.div`
  background-position: right bottom;
  right: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
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


export const RemoverSaborDir = styled.div`
    width: 31px;
    height: 31px;
    display: none;
    position: absolute;
    z-index: 999;
    background: url("https://static.expressodelivery.com.br/media/0.01.001/img/remov-sabor.png") no-repeat center;
    cursor: pointer;
    top: 62%;
    right: 0;
`

export const RemoverSaborEsq = styled.div`
    width: 31px;
    height: 31px;
    display: none;
    position: absolute;
    z-index: 999;
    background: url("https://static.expressodelivery.com.br/media/0.01.001/img/remov-sabor.png") no-repeat center;
    cursor: pointer;
    top: 62%;
`

export const RemoverSaborTopo = styled.div`
    width: 31px;
    height: 31px;
    display: none;
    position: absolute;
    z-index: 999;
    background: url("https://static.expressodelivery.com.br/media/0.01.001/img/remov-sabor.png") no-repeat center;
    cursor: pointer;
    top: 4%;
    left: 40%;
`