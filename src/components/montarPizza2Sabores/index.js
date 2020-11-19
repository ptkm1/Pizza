/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Container, AreaMontarPrato, Prato, EsquerdaPrato, DireitaPrato, Areapizza} from './styles.js'

import { Container1, Conteudo, Close } from '../modalPizza/styles'
import {RiCloseCircleFill} from 'react-icons/ri';

import pizzas from '../../services/apifake';

export default function MontarPizza2Sabores() {

  const [ pizza, setPizza ] = useState("")
  const [ Lado1Prato, setLado1Prato ] = useState("");

  //Modal da Direita
  const ModalPizzas1 = ({ id = 'modal' ,onClose = () => {} } ) => {
    const clickFora = (e) => {
      if(e.target.id === id) onClose();
    };


  function getValue1(){
    let value = document.getElementById('listPizzas').value;
    return setLado1Prato(JSON.parse(value));
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
    return setPizza(JSON.parse(value));
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

  return (
    
    <Container>
      {isModalVisible ? (
        <ModalPizzas onClose={() => setIsModalVisible(false)} />
      ) : null}

      {isModalVisible1 ? (
        <ModalPizzas1 onClose={() => setIsModalVisible1(false)} />
      ) : null}

      <h1>2 sabores</h1>
      <AreaMontarPrato>
       
        <Prato>
          <Areapizza>
            <EsquerdaPrato 
            style={{ backgroundImage: `url(${pizza.img})` }}
            onClick={() => setIsModalVisible(true)}>


            </EsquerdaPrato>
            <DireitaPrato
            style={{ backgroundImage: `url(${Lado1Prato.img})` }}
            onClick={() => setIsModalVisible1(true)}>


            </DireitaPrato>
          </Areapizza>
        </Prato>
      </AreaMontarPrato>
      
    </Container>
    );
}
