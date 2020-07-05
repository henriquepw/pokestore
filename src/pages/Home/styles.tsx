import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;

  margin: 104px auto;
  padding: 0 24px;
`;

export const PokeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  grid-gap: 80px;
  grid-row-gap: 128px;
`;
