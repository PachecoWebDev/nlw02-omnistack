import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  #search-teachers {
    margin-top: 3.2rem;

    button {
      width: 100%;
      height: 5.6rem;
      background: var(--color-secundary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.6rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;
      margin-top: 3.2rem;

      &:hover {
        background-color: var(--color-secundary-dark);
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }
  }
`;
