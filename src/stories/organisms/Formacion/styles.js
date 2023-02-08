import styled from 'styled-components';

export const ContainerCards = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 350px));
  justify-content: center;
`;


export const ContainerFormacion = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20vh;
  z-index: 5;
`;
