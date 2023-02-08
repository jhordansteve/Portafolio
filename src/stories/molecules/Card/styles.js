import styled from 'styled-components';

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 60px 0;
  gap: 60px;

  .box {
    position: relative;
    width: 300px;
    height: 350px;
    background:  var(--bg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box::before {
    content: '';
    position: absolute;
    inset: -10px 50px;
    border-top: 4px solid var(--clr);
    border-bottom: 4px solid var(--clr);
    z-index: -1;
    transform: skew(15deg);
    transition: 0.5s ease-in-out;
  }

  .box:hover::before {
     transform: skew(0deg);
     inset: -10px 40px;
  }

  .box::after {
    content: '';
    position: absolute;
    inset: 60px -10px;
    border-left: 4px solid var(--clr);
    border-right: 4px solid var(--clr);
    z-index: -1;
    transform: skew(15deg);
    transition: 0.5s ease-in-out;
  }

  .box:hover::after {
     transform: skew(0deg);
     inset: 40px -10px;
  }

  .box .content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .box .content .icon {
    color: var(--clr);
    width: 80px;
    height: 80px;
    box-shadow: 0 0 0 4px  var(--bg), 0 0 0 6px var(--clr);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5em;
    background:  var(--bg);
    transition: 0.5s ease-in-out;
  }

  .box:hover .content .icon {
    /*background: var(--clr);*/
    color:  var(--bg);
    box-shadow: 0 0 0 4px  var(--bg), 0 0 0 300px var(--clr);
  }

  .box .content .text {
    transition: 0.5s ease-in-out;
  }

  .box:hover .content .text {
    color:  var(--bg)
  }
`;
