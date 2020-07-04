import styled from '../../styles/styled';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primaryText};

  width: 100%;
  max-width: 224px;
  margin: auto;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;

  transition: border 0.3s, transform 0.3s;
  cursor: default;

  img {
    height: 136px;
    margin-top: -40%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.active};
    letter-spacing: 0.1em;
    font-weight: normal;
    font-size: 1.75rem;
  }

  ul,
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    margin: 8px 0 24px;

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
  }

  button {
    cursor: pointer;
    font-size: 1rem;

    flex: 1;
    height: 36px;

    border: 0;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.active};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.active};
    transform: translateY(-5px);
  }
`;
