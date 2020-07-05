import { opacify } from 'polished';

import styled from '../../styles/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 24px;

  width: 100%;
  max-width: 640px;

  @media (max-width: 520px) {
    max-width: 350px;
  }
`;

export const PokemonList = styled.ul`
  margin-top: 128px;

  li + li {
    margin-top: 32px;
  }

  @media (max-width: 520px) {
    margin-top: 64px;
  }
`;

export const NoItemSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.primaryText};

  h1 {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;

    margin: 24px 0 -40px;

    @media (max-width: 520px) {
      font-size: 1.75rem;
    }
  }
`;

export const FinishSection = styled.section`
  margin-top: 102px;
  padding: 24px 32px;

  color: ${({ theme }) => theme.colors.primaryText};
  background: ${({ theme }) => opacify(-0.4, theme.colors.background)};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 4px;

  @media (max-width: 520px) {
    margin-top: 64px;
  }

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
`;

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 24px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.primaryText};

    &:hover {
      background: ${({ theme }) => theme.colors.disabled};
      transform: translateZ(0);
    }
  }
`;
