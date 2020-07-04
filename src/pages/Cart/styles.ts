import styled from '../../styles/styled';

export const Container = styled.div`
  margin: 0 auto;

  width: 100%;
  max-width: 640px;
`;

export const PokemonList = styled.ul`
  margin-top: 128px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 2rem;
    color: ${({ theme }) => theme.colors.active};

    border: 2px solid ${({ theme }) => theme.colors.secondaryText};
    border-radius: 4px;

    padding: 24px 24px 16px;

    img {
      height: 96px;

      margin-top: -40px;
      margin-left: -16px;
    }

    p {
      flex: 1;
      text-transform: capitalize;

      margin: -8px 24px 0;
    }

    div {
      display: flex;
      align-items: center;
      margin-top: -8px;

      span {
        margin: 0 24px;
      }

      button {
        width: 24px;
        height: 24px;
        font-size: 1.125rem;
        background: ${({ theme }) => theme.colors.secondaryText};
      }
    }
  }

  li + li {
    margin-top: 32px;
  }
`;

export const FinishSection = styled.section`
  margin-top: 102px;
  padding: 24px 32px;

  color: ${({ theme }) => theme.colors.primaryText};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 4px;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;

    font-size: 1.5rem;
  }

  strong {
    font-size: 1.75rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  button {
    width: 100%;
    margin-top: 24px;

    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;
