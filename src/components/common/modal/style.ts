import styled from 'styled-components';
import { motion } from 'framer-motion';

const DialogBox = styled(motion.dialog)<{ size?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.size === 'small'
      ? `  
      width: 28rem;
      height: 19rem;`
      : `
      width: 36rem;
      height: 40rem;`}

  padding: 2rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 3rem rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 2;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export { DialogBox, Backdrop };
