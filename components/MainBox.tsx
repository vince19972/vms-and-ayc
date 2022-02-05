import { styled } from "../stitches.config";
import Box from "../components/Box";
import ShapeWord from "./ShapeWord";
import ShapeHeart from "./ShapeHeart";
import ShapeFlower from "./ShapeFlower";

const Root = styled(Box, {
  position: "relative",
  width: "100%",
  height: "100%",
  isolation: "isolate",
});

const ShapeBox = styled(Box, {
  position: "absolute",

  variants: {
    type: {
      word: {
        top: 0,
        left: 0,
        zIndex: 1,
      },
      heart: {
        top: "25%",
        left: 0,
        zIndex: 3,
      },
      flower: {
        bottom: 0,
        left: 0,
        zIndex: 2,
      },
    },
  },
});

const MainBox = () => {
  return (
    <Root>
      <ShapeBox type="word">
        <ShapeWord />
      </ShapeBox>
      <ShapeBox type="heart">
        <ShapeHeart />
      </ShapeBox>
      <ShapeBox type="flower">
        <ShapeFlower />
      </ShapeBox>
    </Root>
  );
};

export default MainBox;
