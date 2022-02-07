import { useRef, useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { styled } from "../stitches.config";
import { vh, vw } from "../styles/utils";
import Box from "../components/Box";
import MainBox from "../components/MainBox";
import CopyBox from "../components/CopyBox";
import { heightRatio } from "../components/ShapeFlower";

export type LayoutType =
  | "resizedBothSides"
  | "oneSide"
  | "resizedDefault"
  | "default";

type GetLayoutType = (windowWidth: number, windowHeight: number) => LayoutType;

const getLayoutType: GetLayoutType = (windowWidth, windowHeight) => {
  if (windowWidth / windowHeight > 2) {
    return "resizedBothSides";
  }
  if (windowWidth / windowHeight > 1.2) {
    return "oneSide";
  }
  if (windowWidth / windowHeight > 0.5) {
    return "resizedDefault";
  }

  return "default";
};

const ShapesBox = styled(Box, {
  height: vh(100),
  width: vh(heightRatio),
  maxWidth: vh(heightRatio),
  flexGrow: 1,
  overflow: "hidden",

  variants: {
    mode: {
      resizedBothSides: {
        width: vw(25),
        maxWidth: vw(25),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "$colors$surface",
      },
      oneSide: {},
      resizedDefault: {
        width: vw(100),
        maxWidth: vw(100),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "$colors$surface",
      },
      default: {},
    },
  },
});

const CopiesBox = styled(Box, {
  position: "relative",
  variants: {
    mode: {
      resizedBothSides: {
        width: `calc(100% - ${vw(25)})`,
        maxWidth: `calc(100% - ${vw(25)})`,
      },
      oneSide: {
        width: `calc(100% - ${vh(heightRatio)})`,
        maxWidth: `calc(100% - ${vh(heightRatio)})`,
      },
      resizedDefault: {
        position: "absolute",
        width: vw(100),
        maxWidth: vw(100),
      },
      default: {
        position: "absolute",
        width: vw(100),
        maxWidth: vw(100),
      },
    },
  },
});

const Root = styled(Box, {
  display: "flex",
  justifyContent: "space-between",
});

export default function Home() {
  const mainFrameDetector = useResizeDetector({
    refreshMode: "throttle",
    refreshRate: 250,
    refreshOptions: {
      trailing: true,
    },
  });
  const [layoutType, setLayoutType] = useState<LayoutType>("default");

  useEffect(() => {
    const layoutType = getLayoutType(
      mainFrameDetector.width,
      mainFrameDetector.height
    );

    setLayoutType(layoutType);
  }, [mainFrameDetector.width, mainFrameDetector.height]);

  return (
    <Root ref={mainFrameDetector.ref}>
      <ShapesBox mode={layoutType}>
        <MainBox layoutType={layoutType} />
      </ShapesBox>

      <CopiesBox mode={layoutType}>
        <CopyBox layoutType={layoutType} />
      </CopiesBox>

      {layoutType === "resizedBothSides" && (
        <ShapesBox mode={layoutType}>
          <MainBox layoutType={layoutType} alignEnd />
        </ShapesBox>
      )}
    </Root>
  );
}
