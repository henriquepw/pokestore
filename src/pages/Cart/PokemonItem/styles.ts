import { darken } from 'polished';

import styled from '../../../styles/styled';

export const Container = styled.li`
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

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.colors.secondaryText)};
        transform: scale(1.1) translateZ(0);
      }

      &:active {
        background: ${({ theme }) => theme.colors.secondaryText};
        transform: scale(1) translateZ(0);
      }
    }
  }
`;
