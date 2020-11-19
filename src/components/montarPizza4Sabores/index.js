/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Container,
  AreaMontarPrato,
  Prato,
  EsquerdaCima,
  DireitaCima,
  EsquerdaBaixo,
  DireitaBaixo,
  Areapizza,
  Mesa,
  RemoverSaborTopEsq,
  RemoverSaborTopDir,
  RemoverSaborBaixoEsq,
  RemoverSaborBaixoDir
} from "./styles.js";

import {RiCloseCircleFill} from 'react-icons/ri';

import { Container1, Conteudo, Close } from '../modalPizza/styles'

import pizzas from "../../services/apifake";


export default function MontarPizza4Sabores() {
  //STATE
  const [ LadoDireitaCima, setDireitaCima ] = useState("");
  const [ LadoDireitaBaixo, setDireitaBaixo ] = useState("");
  const [ LadoEsquerdaCima, setEsquerdaCima ] = useState("");
  const [ LadoEsquerdaBaixo, setEsquerdaBaixo ] = useState("");


  //Modal da Direita
  const ModalPizzas1 = ({ id = 'modal' ,onClose = () => {} } ) => {
    const clickFora = (e) => {
      if(e.target.id === id) onClose();
    };


  function getValue1(){
    let value = document.getElementById('listPizzas').value;
    return setDireitaCima(JSON.parse(value));
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
    return setDireitaBaixo(JSON.parse(value));
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

  //MODAL PARA ESCOLHER SABOR da Esquerda
  const ModalPizzas2 = ({ id = 'modal' ,onClose = () => {} } ) => {
    const clickFora = (e) => {
      if(e.target.id === id) onClose();
    };


  function getValue1(){
    let value = document.getElementById('listPizzas').value;
    return setEsquerdaCima(JSON.parse(value));
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

    //MODAL PARA ESCOLHER SABOR da Esquerda
    const ModalPizzas3 = ({ id = 'modal' ,onClose = () => {} } ) => {
      const clickFora = (e) => {
        if(e.target.id === id) onClose();
      };
  
  
    function getValue1(){
      let value = document.getElementById('listPizzas').value;
      return setEsquerdaBaixo(JSON.parse(value));
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


  //State vars
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
 
  
return(
  <>
    <Container>


    { //Ativar modais
    isModalVisible ? (
        <ModalPizzas onClose={() => setIsModalVisible(false)} />
      ) : null}

      {isModalVisible1 ? (
        <ModalPizzas1 onClose={() => setIsModalVisible1(false)} />
      ) : null}

      {isModalVisible2 ? (
        <ModalPizzas2 onClose={() => setIsModalVisible2(false)} />
      ) : null}

      {isModalVisible3 ? (
        <ModalPizzas3 onClose={() => setIsModalVisible3(false)} />
      ) : null}

        <AreaMontarPrato>
        <Prato>
          
        <RemoverSaborTopEsq style={{display:  LadoEsquerdaCima? "inline" : "none"  }} />
          <RemoverSaborTopDir style={{display:  LadoDireitaCima? "inline" : "none"  }} />
          <RemoverSaborBaixoEsq style={{display:  LadoEsquerdaBaixo? "inline" : "none"  }} />
          <RemoverSaborBaixoDir style={{display:  LadoDireitaBaixo? "inline" : "none"  }} />
          
          <Areapizza>
           <EsquerdaCima style={{backgroundImage: `url(${LadoEsquerdaCima.img})`}}
            onClick={() => setIsModalVisible2(true)}>
           

           </EsquerdaCima>
           <DireitaCima style={{backgroundImage: `url(${LadoDireitaCima.img})`}}
            onClick={() => setIsModalVisible1(true)}>
           

           </DireitaCima>
           <EsquerdaBaixo style={{backgroundImage: `url(${LadoEsquerdaBaixo.img})`}}
            onClick={() => setIsModalVisible3(true)}>
           

           </EsquerdaBaixo>
           <DireitaBaixo style={{backgroundImage: `url(${LadoDireitaBaixo.img})`}}
            onClick={() => setIsModalVisible(true)}>
           

           </DireitaBaixo>


          </Areapizza>
        </Prato>
      </AreaMontarPrato>
      <Mesa />
    </Container>
    </>
  );
}
