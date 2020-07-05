import { Link } from 'react-router-dom';

import styled from '../../styles/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 24px 32px 16px;

  img {
    height: 80px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;

    width: 100px;
    height: 3px;

    bottom: 0;

    background: ${({ theme }) => theme.colors.active};
  }

  &::before {
    left: 0;
    transform: translateX(-50%);
  }

  &::after {
    right: 0;
    transform: translateX(50%);
  }
`;

export const CartButton = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
  transition: color 0.2s;

  svg {
    margin-right: 16px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    border-radius: 4px;
    margin-left: 16px;

    font-size: 1rem;
    background: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.background};
    transition: background 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryText};

    span {
      background: ${({ theme }) => theme.colors.secondaryText};
    }
  }
`;
