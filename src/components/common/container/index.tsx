import { ReactElement } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import COLOR from "../../../constants/color";
import { ContainerAnimation } from "../../../constants/animation";

type ContainerProps = {
  width?: string;
  height?: string;
  children?: ReactElement[] | ReactElement | React.ReactNode;
  style?: React.CSSProperties;
};

const Container = ({ width, height, children }: ContainerProps) => {
  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={ContainerAnimation}
      width={width || "100%"}
      height={height || "100%"}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Container;
