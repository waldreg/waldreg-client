import { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import COLOR from '../../../constants/color';
import { ContainerAnimation } from '../../../constants/animation';

const Container = ({
  width,
  children,
}: {
  width?: string;
  children?: ReactElement[] | ReactElement;
}) => {
  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={ContainerAnimation}
      width={width || '100%'}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Container;
