/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Container,
  AreaMontarPrato,
  Prato,
  EsquerdaPrato,
  DireitaPrato,
  Areapizza,
  TopoPrato,
  bgTaboa,
  RemoverSaborDir,
  RemoverSaborEsq,
  RemoverSaborTopo,
  Mesa
} from "./styles.js";

import { Container1, Conteudo, Close } from '../modalPizza/styles'
import {RiCloseCircleFill} from 'react-icons/ri';

import pizzas from "../../services/apifake";

export default function MontarPizza3Sabores() {
  const [LadoEsquerdo, setLadoEsquerdo] = useState("");
  const [LadoDireito, setLadoDireito] = useState("");
  const [topoPrato, setTopoPrato] = useState("");
  
  
  //ModaIS
  const ModalPizzas1 = ({ id = 'modal' ,onClose = () => {} } ) => {
    const clickFora = (e) => {
      if(e.target.id === id) onClose();
    };


  function getValue1(){
    let value = document.getElementById('listPizzas').value;
    return setLadoEsquerdo(JSON.parse(value));
  }

  
    return (
      <Container1 id={id} onClick={clickFora}>
        <Conteudo>
          <Close>
            <span>
              <RiCloseCircleFill onClick={onClose} />
            </span>
          </Close>

        

          <select id="listPizzas" onChange={() => getValue1()}>
            <option value={JSON.stringify(pizzas.Sabores.default)}>
              Escolha um sabor
            </option>
            <option value={JSON.stringify(pizzas.Sabores.Calabresa)}>
              Calabresa
            </option>
            <option value={JSON.stringify(pizzas.Sabores.Chocolate)}>
              Chocolate
            </option>
          </select>
        </Conteudo>
      </Container1>
    );
  }

  //MODAL PARA ESCOLHER SABOR da Esquerda
  const ModalPizzas = ({ id = 'modal' ,onClose = () => {} } ) => {
    const clickFora = (e) => {
      if(e.target.id === id) onClose();
    };


  function getValue1(){
    let value = document.getElementById('listPizzas').value;
    return setLadoDireito(JSON.parse(value));
  }
  
    return (
      <Container1 id={id} onClick={clickFora}>
        <Conteudo>
          <Close>
            <span>
              <RiCloseCircleFill onClick={onClose} />
            </span>
          </Close>
  
          <select id="listPizzas" onChange={() => getValue1()}>
         <option value={JSON.stringify(pizzas.Sabores.default)}>Escolha um sabor</option>
          <option value={JSON.stringify(pizzas.Sabores.Calabresa)}>
            Calabresa
          </option>
          <option value={JSON.stringify(pizzas.Sabores.Chocolate)}>Chocolate</option>
        </select>

        </Conteudo>
      </Container1>
  );
  }

  //Modal pra pizza de baixo
  const ModalPizzas2 = ({ id = 'modal' ,onClose = () => {} } ) => {
    const clickFora = (e) => {
      if(e.target.id === id) onClose();
    };


  function getValue1(){
    let value = document.getElementById('listPizzas').value;
    return setTopoPrato(JSON.parse(value));
  }
  
    return (
      <Container1 id={id} onClick={clickFora}>
        <Conteudo>
          <Close>
            <span>
              <RiCloseCircleFill onClick={onClose} />
            </span>
          </Close>
  
          <select id="listPizzas" onChange={() => getValue1()}>
         <option value={JSON.stringify(pizzas.Sabores.default)}>Escolha um sabor</option>
          <option value={JSON.stringify(pizzas.Sabores.Calabresa)}>
            Calabresa
          </option>
          <option value={JSON.stringify(pizzas.Sabores.Chocolate)}>Chocolate</option>
        </select>

        </Conteudo>
      </Container1>
  );
  }

  //STATE VARS
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  return (
    <Container>
      {isModalVisible ? (
        <ModalPizzas onClose={() => setIsModalVisible(false)} />
      ) : null}

      {isModalVisible1 ? (
        <ModalPizzas1 onClose={() => setIsModalVisible1(false)} />
      ) : null}
      {isModalVisible2 ? (
        <ModalPizzas2 onClose={() => setIsModalVisible2(false)} />
      ) : null}

      <h1>3 sabores</h1>
      <AreaMontarPrato>
        {/* PRATO, ONDE FICARÁ O VISUAL DA PIZZA */}
        <Prato>
          <RemoverSaborTopo style={{display:  topoPrato? "inline" : "none"  }} />
          <RemoverSaborDir style={{display: LadoDireito? "inline" : "none"  }}/>
          <RemoverSaborEsq style={{display:  LadoEsquerdo? "inline" : "none"  }} />

          <Areapizza>
            <TopoPrato 
              style={{ backgroundImage: `url(${topoPrato.img})` }}
              onClick={() => setIsModalVisible2(true)}
            >
            </TopoPrato>

            <EsquerdaPrato
              style={{ backgroundImage: `url(${LadoEsquerdo.img})` }}
              onClick={() => setIsModalVisible1(true)}
            ></EsquerdaPrato>
            
            <DireitaPrato
              style={{ backgroundImage: `url(${LadoDireito.img})` }}
              onClick={() => setIsModalVisible(true)}
            ></DireitaPrato>
            
          </Areapizza>
        </Prato>
      </AreaMontarPrato>
      <Mesa />
    </Container>
  );
}
