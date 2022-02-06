import { styled } from "../stitches.config";
import Box from "../components/Box";
import ShapeWord from "./ShapeWord";
import ShapeHeart from "./ShapeHeart";
import ShapeFlower from "./ShapeFlower";

const ShapeBg = styled(Box, {
  position: "absolute",
  backgroundColor: "$colors$surface",
  top: 0,
  zIndex: -1,
});

const ShapeBox = styled(Box, {
  position: "absolute",
  left: 0,

  "& svg": {
    position: "relative",
    height: "100%",
  },

  variants: {
    type: {
      word: {
        $$top: 0,
        $$height: "50vh",

        top: "$$top",
        height: "$$height",
        "& svg": { zIndex: 1 },

        [`& ${ShapeBg}`]: {
          width: "calc($$height * 0.924479167)",
          height: "$$height",
        },
      },
      heart: {
        $$top: "27.0833333%",
        $$height: "40.3645833vh",

        top: "$$top",
        height: "$$height",
        "& svg": { zIndex: 3 },

        [`& ${ShapeBg}`]: {
          width: "calc($$height * 1.14516129)",
          height: "$$height",
        },
      },
      flower: {
        $$top: "53.90625%",
        $$height: "46.2239583vh",

        top: "$$top",
        height: "$$height",
        "& svg": { zIndex: 2 },

        [`& ${ShapeBg}`]: {
          width: "calc($$height * 1)",
          height: "$$height",
        },
      },
    },
  },
});

const Root = styled(Box, {
  position: "relative",
  width: "100%",
  height: "100%",
  isolation: "isolate",
});

const MainBox = () => {
  return (
    <Root>
      <ShapeBox type="word">
        <ShapeWord />
        <ShapeBg />
      </ShapeBox>
      <ShapeBox type="heart">
        <ShapeHeart />
        <ShapeBg />
      </ShapeBox>
      <ShapeBox type="flower">
        <ShapeFlower />
        <ShapeBg />
      </ShapeBox>
    </Root>
  );
};

export default MainBox;
