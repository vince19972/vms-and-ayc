import { useMemo } from "react";
import { styled } from "../stitches.config";
import { vh } from "../styles/utils";
import Box from "./Box";
import HeroText from "./HeroText";
import HeroTextEn from "./HeroTextEn";
import NameAmanda from "./NameAmanda";
import NameVince from "./NameVince";
import { LayoutType } from "../pages/index";

const EnHeroBox = styled(Box, {
  height: `calc($$height * $$h_enHero)`,
});

const NameSetBox = styled(Box, {
  $$id: "NameSetBox",

  height: `calc($$height * $$h_nameSet)`,
});

const AloneHeroBox = styled(Box, {
  $$id: "AloneHeroBox",

  height: `calc($$height * $$h_hero)`,
});
const AdjacentNameSetsBox = styled(Box, {
  $$id: "AdjacentNameSetsBox",
});

const WrappedHeroBox = styled(Box, {
  $$id: "WrappedHeroBox",
  height: `calc($$height * $$h_hero)`,
});
const HorizontalSetsBox = styled(Box, {
  display: "flex",
  position: "relative",

  [`& ${NameSetBox}`]: {
    position: "absolute",
    "&:first-child": {
      top: "18%",
      left: "-92%",
    },
    "&:last-child": {
      top: "17%",
      right: "-91%",
    },
  },
});

const EnInfoBox = styled(Box, {
  $$id: "EnInfoBox",
  fontFamily: "$fonts$en",
  fontWeight: 700,
  textAlign: "center",
});
const ZhInfoBox = styled(Box, {
  $$id: "ZhInfoBox",
  fontFamily: "$fonts$zh",
  fontWeight: 700,
  textAlign: "center",
});
const InfoBox = styled(Box, {
  variants: {
    layoutType: {
      resizedBothSides: {
        [`& ${EnInfoBox}`]: {
          color: "$colors$surfaceText",
          marginBottom: `calc($$height * 0.025)`,

          "& h3": {
            fontSize: `calc($$height * 0.0125)`,
            marginBottom: `calc($$height * 0.0085)`,
          },
          "& p": {
            fontSize: `calc($$height * 0.018)`,
          },
        },
        [`& ${ZhInfoBox}`]: {
          color: "$colors$surfaceText",
          "& h3": {
            fontSize: `calc($$height * 0.0125)`,
            marginBottom: `calc($$height * 0.0085)`,
          },
          "& p": {
            fontSize: `calc($$height * 0.018)`,
          },
        },
      },
      oneSide: {
        [`& ${EnInfoBox}`]: {
          color: "$colors$surfaceText",

          "& h3": {
            fontSize: "",
          },
          "& p": {
            fontSize: "",
          },
        },
        [`& ${ZhInfoBox}`]: {
          color: "$colors$surfaceText",

          "& h3": {
            fontSize: "",
          },
          "& p": {
            fontSize: "",
          },
        },
      },
      resizedDefault: {
        [`& ${EnInfoBox}`]: {
          "& h3": {
            fontSize: "",
          },
          "& p": {
            fontSize: "",
          },
        },
        [`& ${ZhInfoBox}`]: {
          "& h3": {
            fontSize: "",
          },
          "& p": {
            fontSize: "",
          },
        },
      },
      default: {
        [`& ${EnInfoBox}`]: {
          "& h3": {
            fontSize: "",
          },
          "& p": {
            fontSize: "",
          },
        },
        [`& ${ZhInfoBox}`]: {
          "& h3": {
            fontSize: "",
          },
          "& p": {
            fontSize: "",
          },
        },
      },
    },
  },
});

const Root = styled(Box, {
  $$height: `calc(${vh(100)} - $$horizontalOffset * 2)`,

  position: "absolute",
  top: "$$horizontalOffset",
  left: `calc((100% - $$width) / 2)`,
  width: "$$width",
  height: "$$height",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  "& svg": {
    height: "100%",
    width: "auto",
  },

  variants: {
    layoutType: {
      resizedBothSides: {
        $$horizontalOffset: vh(5),
        $$width: "70%",
        $$h_enHero: 0.05,
        $$h_hero: 0.6,
        $$h_nameSet: 0.25,
        $$h_info: 0.2,

        "& svg path": {
          fill: "$colors$surfaceText",
        },
      },
      oneSide: {
        $$horizontalOffset: vh(10),
        $$width: "70%",
        $$h_enHero: 0.2,
        $$h_hero: 0.5,
        $$h_nameSet: 0.4,
        $$h_info: 0.2,

        "& svg path": {
          fill: "$colors$surfaceText",
        },
      },
      resizedDefault: {
        $$horizontalOffset: vh(10),
        $$width: "100%",
        $$h_enHero: 0.2,
        $$h_hero: 0.5,
        $$h_nameSet: 0.4,
        $$h_info: 0.2,

        "& svg path": {
          fill: "$colors$surfaceText",
        },
      },
      default: {
        $$horizontalOffset: vh(10),
        $$width: "100%",
        $$h_enHero: 0.2,
        $$h_hero: 0.5,
        $$h_nameSet: 0.4,
        $$h_info: 0.2,

        "& svg path": {
          fill: "$colors$surfaceText",
        },
      },
    },
  },
});

const getLayoutMode = (layoutType: LayoutType) => {
  switch (layoutType) {
    case "resizedBothSides":
    case "oneSide":
      return "separated";
    case "resizedDefault":
    case "default":
      return "default";
  }
};

const CopyBox = ({ layoutType }: { layoutType: LayoutType }) => {
  const layoutMode = useMemo(() => getLayoutMode(layoutType), [layoutType]);

  return (
    <Root layoutType={layoutType}>
      <EnHeroBox>
        <HeroTextEn />
      </EnHeroBox>

      {layoutMode === "default" && (
        <>
          <AdjacentNameSetsBox>
            <NameSetBox>
              <NameVince />
            </NameSetBox>
            <NameSetBox>
              <NameAmanda />
            </NameSetBox>
          </AdjacentNameSetsBox>

          <AloneHeroBox>
            <HeroText />
          </AloneHeroBox>
        </>
      )}

      {layoutMode === "separated" && (
        <HorizontalSetsBox>
          <NameSetBox>
            <NameVince />
          </NameSetBox>
          <WrappedHeroBox>
            <HeroText />
          </WrappedHeroBox>
          <NameSetBox>
            <NameAmanda />
          </NameSetBox>
        </HorizontalSetsBox>
      )}

      <InfoBox layoutType={layoutType}>
        <EnInfoBox>
          <h3>VIRTUAL CEREMONY</h3>
          <p>15:30 EST, Feb 15, 2022</p>
        </EnInfoBox>
        <ZhInfoBox>
          <h3>線上公證</h3>
          <p>台灣時間 二零二二年 二月十六日 凌晨四點半</p>
        </ZhInfoBox>
      </InfoBox>
    </Root>
  );
};

export default CopyBox;