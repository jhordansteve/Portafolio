import styled from 'styled-components';

export const CardStyle = styled.div`
  position: relative;
  display: flex;
  padding: 80px 40px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;

  .card {
    position: relative;
    width: 350px;
    height: 180px;
    background: #333;
    transition: 0.5s;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
  .card:hover {
    height: 450px;
  }
  .card .lines {
    position: absolute;
    inset: 0;
    background: var(--bg);
    overflow: hidden;
  }
  .card .lines::before {
    content: '';
    position: absolute;
    top: 12%;
    left: 50%;
    width: 600px;
    height: 120px;
    background: linear-gradient(transparent, var(--colorS), var(--colorS), var(--colorS), transparent);
    animation: animate 4s linear infinite;
    animation-play-state: paused;
  }
  .card:hover .lines::before {
    animation-play-state: running;
  }
  @keyframes animate{
    0% {
      transform: translate(-50%,50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%,50%) rotate(360deg);
    }
  }
  .card .lines::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: var(--secondary);
  }

  .card .imgBx {
    position: absolute;
    top: -60px;
    left: 50%;
    width: 150px;
    height: 150px;
    transform: translateX(-50%);
    background: var(--bg);
    transition: 0.5s;
    z-index: 10;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }

  .card:hover .imgBx {
    top: 25px;
    width: 200px;
    height: 200px;
  }

  .card .imgBx::before {
    content: '';
    position: absolute;
    top: -50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, 50%);
    background: linear-gradient(transparent, var(--colorP), var(--colorP), var(--colorP), transparent);
    animation: animate2 6s linear infinite;
    animation-play-state: paused;
  }
  .card:hover .imgBx::before {
    animation-play-state: running;
  }
  @keyframes animate2{
    0% {
      transform: translate(-50%,50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%,50%) rotate(0deg);
    }
  }
  .card .imgBx::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: var(--secondary);
  }

  .card .imgBx img {
    position: absolute;
    width: 100px;
    z-index: 1;
    filter: var(--filter);
    opacity: 0.5;
    transition: 0.5s;
  }

  .card:hover .imgBx img {
    width: 150px;
    opacity: 1;
  }

  .card .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
  }

  .card .content .details {
    padding: 30px 20px;
    text-align: center;
    width: 100%;
    transition: 0.5s;
    transform: var(--mg);
  }

  .card:hover .content .details {
    transform: translateY(0px);
  }

  .card .content .details h2 {
    font-size: 1.5em;
    font-weight: 500;
    color: var(--colorS);
    line-height: 1.2em;
  }

  .card .content .details p {
    color: var(--text);
    opacity: 0;
    transition: 0.5s;
  }

  .card:hover .content .details p {
    opacity: 1;
  }
`;
