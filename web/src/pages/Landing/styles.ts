import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  @media (min-width: 1100px) {
  }
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;

  > img {
    width: 100%;
  }

  .total-connections {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';

    img {
      grid-area: hero;
      justify-self: end;
    }

    .total-connections {
      grid-area: total;
      justify-self: end;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    img {
      height: 100%;
    }

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font-weight: 700;
    font-size: 2rem;
    font-family: Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    & + a {
      margin-right: 0;
    }

    img {
      width: 4rem;
    }
  }

  .study {
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  .give-classes {
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;

      img {
        margin-right: 2.4rem;
      }
    }
  }
`;
