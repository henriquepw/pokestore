import styled from '../../styles/styled';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;

  img {
    position: absolute;
    opacity: 0.3;
    z-index: -1;
  }

  img:nth-of-type(1) {
    height: 328px;

    top: 0;
    right: 0;
    transform: translate(20%, -20%) rotate(-16deg);
  }

  img:nth-of-type(2) {
    height: 600px;

    top: 50%;
    left: 0;
    transform: translate(-50%, -40%);
  }

  img:nth-of-type(3) {
    height: 440px;

    bottom: 0;
    right: 0;
    transform: translate(50%, 40%) rotate(20deg);
  }
`;
