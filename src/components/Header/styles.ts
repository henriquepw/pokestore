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
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.5rem;

  svg {
    margin-right: 16px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.background};
    font-size: 1rem;

    width: 24px;
    height: 24px;

    border-radius: 4px;
    margin-left: 16px;
  }
`;
