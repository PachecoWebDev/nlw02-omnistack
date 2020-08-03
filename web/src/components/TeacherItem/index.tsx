import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container, Header, Footer } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <article>
        <Header>
          <img
            src="https://avatars1.githubusercontent.com/u/12235370?s=460&u=1e4d49d385dbf5a15cc000377f8757a39822c554&v=4"
            alt="Anderson Pacheco"
          />
          <div>
            <strong>Anderson Pacheco</strong>
            <span>Química</span>
          </div>
        </Header>

        <p>
          Entusiata das melhores tecnologias de química avançada.
          <br />
          <br />
          Apaixonado por explodir coisas em laboratório e por mduar a vida das
          pessoas através de esperiências. Mais de 200.00 pessoas já passaram
          por uma das minhas explosões.
        </p>

        <Footer>
          <p>
            Preço/hora
            <strong>R$ 100,00</strong>
          </p>

          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </Footer>
      </article>
    </Container>
  );
};

export default TeacherItem;
