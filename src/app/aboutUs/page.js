'use client';
import React from 'react';
import './styles.css';
import Menu from '@/components/Menu';
import Animais from '@/components/Animals';

export default function AboutUs() {
  return (
    <>
      <Menu />
      <Animais title="Conheça a Animais UFCG" />

      <section className="section">
        <div className="container-major">
          <div className="container-image">
            <div className="image-wrapper">
              <img src="/images/historyImage.png" />
            </div>
            <div className="small-box text-small-box">
              <h3>História</h3>
            </div>
          </div>
          <div className="box text-box">
            <p>
              A Animais UFCG surgiu como uma solução para melhorar a vida dos
              bichinhos que habitam o campus da Universidade Federal de Campina
              Grande. Diante da crescente população de animais em situação de
              vulnerabilidade, um grupo de voluntários apaixonados por animais
              decidiu se unir para proporcionar melhores condições de vida a
              esses seres tão especiais.
            </p>
          </div>
        </div>

        <div className="container-major">
          <div className="container-image">
            <div className="image-wrapper">
              <img src="/images/paws.png" />
            </div>
            <div className="small-box text-small-box">
              <h3>Missão</h3>
            </div>
          </div>
          <div className="box box-2 text-box">
            <p>
              Nossa missão é dedicar-nos aos cuidados, resgate e promoção do
              bem-estar dos animais da Universidade Federal de Campina Grande
              (UFCG). Acreditamos que todos os seres vivos merecem amor,
              respeito e cuidados adequados. Nossa equipe trabalha
              incansavelmente para garantir que os animais em situação de
              vulnerabilidade tenham acesso a adoção, alimentação e cuidados.
            </p>
          </div>
        </div>

        <div className="box text-box">
          <p>
            O cuidado com os animais é uma responsabilidade que todos devemos
            assumir. Eles são seres que sentem dor, alegria e amor, e merecem
            ser tratados com respeito e dignidade. O abandono e a negligência
            são realidades tristes que muitos animais enfrentam diariamente. É
            fundamental conscientizar a sociedade sobre a importância de não
            abandonar os pets e garantir que eles recebam os cuidados adequados.
            A Animais UFCG surgiu com a vontade de cuidar desses seres tão
            preciosos. Junte-se a nós nessa causa e ajude a criar um mundo
            melhor para os animais!
          </p>
        </div>
      </section>
    </>
  );
}
