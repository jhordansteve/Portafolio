import styled from 'styled-components';

export const ContainerTimeline = styled.div`
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #c5c5c5;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style: none;
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  ul li:nth-child(odd) {
    float: left;
    text-align: right;
    clear: both;
  }
  ul li:nth-child(even) {
    float: right;
    text-align: left;
    clear: both;
  }
  .content {
    padding-bottom: 20px;
  }
  ul li:nth-child(odd):before{
    content: '';
    position: absolute;
    top: 24px;
    right: -6px;
    width: 10px;
    height: 10px;
    background: rgba(186, 104, 200, 1);
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(186, 104, 200, 0.2);
  }
  ul li:nth-child(even):before{
    content: '';
    position: absolute;
    top: 24px;
    left: -4px;
    width: 10px;
    height: 10px;
    background: rgba(186, 104, 200, 1);
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(186, 104, 200, 0.2);
  }
  ul li h3 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    color: rgba(186, 104, 200, 1);
  }
  ul li p {
    margin: 10px 0 0;
    padding: 0;
  }
  ul li .time h4 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  ul li:nth-child(odd) .time {
    position: absolute;
    top: 12px;
    right: -165px;
    margin: 0;
    padding: 8px 16px;
    background: rgba(186, 104, 200, 1);
    color: #fff;
    border-radius: 18px;
    box-shadow: 0 0 0 3px rgba(186, 104, 200, 0.3);
  }
  ul li:nth-child(even) .time {
    position: absolute;
    top: 12px;
    left: -165px;
    margin: 0;
    padding: 8px 16px;
    background: rgba(186, 104, 200, 1);
    color: #fff;
    border-radius: 18px;
    box-shadow: 0 0 0 3px rgba(186, 104, 200, 0.3);
  }
  @media(max-width: 1000px) {
    width: 100%;
  }
  @media(max-width: 767px) {
    width: 100%;
    &::before {
      left: 20px;
    }
    ul li:nth-child(odd), ul li:nth-child(even) {
      width: 100%;
      text-align: left;
      padding-left: 50px;
      padding-bottom: 50px;
    }
    ul li:nth-child(odd):before, ul li:nth-child(even):before {
      top: -18px;
      left: 16px;
    }
    ul li:nth-child(odd) .time, ul li:nth-child(even) .time {
      top: -30px;
      left: 50px;
      right: inherit;
    }
  }
`;
