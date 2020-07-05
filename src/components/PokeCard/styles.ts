import styled from '../../styles/styled';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primaryText};

  width: 100%;
  max-width: 248px;
  margin: auto;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;

  transition: border 0.3s, transform 0.3s;
  cursor: default;

  img {
    height: 136px;
    margin-top: -40%;

    transition: transform 0.3s ease;
  }

  h1 {
    color: ${({ theme }) => theme.colors.active};
    letter-spacing: 0.1em;
    font-weight: normal;
    font-size: 1.75rem;

    margin-top: 16px;
    text-transform: capitalize;
  }

  ul,
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    margin: 8px 0 24px;
    text-transform: capitalize;

    li + li {
      margin-left: 32px;
    }
  }

  div {
    width: 100%;
  }

  strong {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-weight: normal;
    font-size: 1.5rem;
    margin-right: 16px;
    flex: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.active};
    transform: translateY(-5px);

    img {
      transform: scale(1.1) translateY(-5px) translateZ(0);
    }
  }
`;
