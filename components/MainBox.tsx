import { styled } from "../stitches.config";
import { vh } from "../styles/utils";
import Box from "../components/Box";
import ShapeWord from "./ShapeWord";
import ShapeHeart from "./ShapeHeart";
import ShapeFlower, { heightRatio } from "./ShapeFlower";
import { LayoutType } from "../pages/index";

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
        $$height: vh(50),

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
        $$height: vh(40.3645833),

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
        $$height: vh(heightRatio),

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

  variants: {
    align: {
      alignEnd: {
        [`& ${ShapeBox}`]: {
          left: "auto",
          right: 0,
        },
      },
      "": {},
    },
    layoutType: {
      resizedBothSides: {
        height: `calc(${vh(38)} * 2.157303371)`,
        width: vh(38),

        [`& ${ShapeBox}`]: {
          width: "100%",
          height: "auto",

          "& svg": {
            width: "100%",
            height: "auto",
          },
        },
      },
      resizedDefault: {
        height: `calc(${vh(42.5)} * 2.157303371)`,
        width: vh(42.5),

        [`& ${ShapeBox}`]: {
          width: "100%",
          height: "auto",

          "& svg": {
            width: "100%",
            height: "auto",
          },
        },
      },
      oneSide: {},
      default: {
        [`& ${ShapeBox}`]: {
          width: "100%",
          display: "flex",
          justifyContent: "center",

          "& svg": {
            position: "absolute",
          },
        },
      },
    },
  },
});

const MainBox = ({
  layoutType,
  alignEnd,
}: {
  layoutType: LayoutType;
  alignEnd?: boolean;
}) => {
  const heightBased =
    layoutType !== "resizedBothSides" && layoutType !== "resizedDefault";

  return (
    <Root layoutType={layoutType} align={alignEnd ? "alignEnd" : ""}>
      <ShapeBox type="word" className="shape-word">
        <ShapeWord />
        {heightBased && <ShapeBg />}
      </ShapeBox>
      <ShapeBox type="heart" className="shape-heart">
        <ShapeHeart />
        {heightBased && <ShapeBg />}
      </ShapeBox>
      <ShapeBox type="flower" className="shape-flower">
        <ShapeFlower />
        {heightBased && <ShapeBg />}
      </ShapeBox>
    </Root>
  );
};

export default MainBox;
