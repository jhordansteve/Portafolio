import styled from 'styled-components';

export const ContainerFotter = styled.footer`
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: var(--bg);
  .img {
    margin-right: 35px;
  }
  @media(max-width: 767px) {
    .img {
      display: none;
    }
  }
`;
