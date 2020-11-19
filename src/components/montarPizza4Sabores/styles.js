import styled from "styled-components";
//Itens referentes a Mesa..
export const AreaMontarPrato = styled.section`
  background: tomato;
  width: 100%;
  height: 517px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
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
  background-image: url("https://static.expressodelivery.com.br/media/0.01.001/img/forma_4.png");
`;

export const bgTaboa = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  float: left;
  width: 200%;
  height: 200%;
  background-position: -11px -16px;
  background: url("../../assets/staticImages/forma_meio.png") top center
    no-repeat;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display: block;
`;

export const EsquerdaCima = styled.div`
  background-position: top left;
  left: 0;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
`;
export const EsquerdaBaixo = styled.div`
  background-position: bottom left;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
`;

export const DireitaCima = styled.div`
  background-position: top right;
  right: 0;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
`;

export const DireitaBaixo = styled.div`
  background-position: bottom right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
`;

export const Container = styled.div`
  width: 100%;
 
`;
//BOTAO PEQUENO DE REMOVER SABOR
export const RemoverSaborTopEsq = styled.div`
  display: ${prop => prop.display || "none" };
  width: 31px;
    height: 31px;
    display: none;
    position: absolute;
    z-index: 999;
    background: url("https://static.expressodelivery.com.br/media/0.01.001/img/remov-sabor.png") no-repeat center;
    cursor: pointer;
    top: 16%;
    left: 8%;
`

export const RemoverSaborTopDir = styled.div`
    width: 31px;
    height: 31px;
    display: none;
    position: absolute;
    z-index: 999;
    background: url("https://static.expressodelivery.com.br/media/0.01.001/img/remov-sabor.png") no-repeat center;
    cursor: pointer;
    top: 16%;
    right: 8%;
`

export const RemoverSaborBaixoEsq = styled.div`
    width: 31px;
    height: 31px;
    display: none;
    position: absolute;
    z-index: 999;
    background: url("https://static.expressodelivery.com.br/media/0.01.001/img/remov-sabor.png") no-repeat center;
    cursor: pointer;
    left: 8%;
    top: 72%;
`

export const RemoverSaborBaixoDir = styled.div`
    width: 31px;
    height: 31px;
    display: none;
    position: absolute;
    z-index: 999;
    background: url("https://static.expressodelivery.com.br/media/0.01.001/img/remov-sabor.png") no-repeat center;
    cursor: pointer;
    right: 8%;
    top: 72%;
`
//AREA DA PIZZA
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
`;
