import { motion } from "framer-motion";
import { keyframes } from "@stitches/react";
import { styled } from "../stitches.config";
import { vh, vw } from "../styles/utils";
import Box from "./Box";
import VeilText from "./VeilText";

const fade = keyframes({
  "0%, 100%": { opacity: 0.5 },
  "50%": { opacity: 1 },
});

export const veilAttrs = {
  variants: {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  initial: "enter",
  animate: "center",
  exit: "exit",
  transition: {
    opacity: { duration: 0.8 },
  },
};

const Root = styled(motion.div, {
  position: "absolute",
  top: 0,
  left: 0,
  width: vw(100),
  height: vh(100),
  backgroundColor: "$heart",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Veil = () => {
  return (
    <Root {...veilAttrs}>
      <Box
        css={{
          width: vh(25),
          height: vh(25),
          animation: `${fade} 2s ease-in-out infinite`,
        }}
      >
        <VeilText />
      </Box>
    </Root>
  );
};

export default Veil;
