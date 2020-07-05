import { opacify } from 'polished';

import styled from '../../styles/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.active};

  height: calc(100vh - 123px);

  padding: 24px;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-weight: normal;
    text-align: center;

    border: 2px solid ${({ theme }) => theme.colors.secondaryText};
    border-radius: 4px;

    margin: auto;
    padding: 24px;

    background: ${({ theme }) => opacify(-0.4, theme.colors.background)};

    svg {
      margin-bottom: 24px;
    }
  }
`;
