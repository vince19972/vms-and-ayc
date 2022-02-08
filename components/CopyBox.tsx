import { useMemo } from "react";
import { styled } from "../stitches.config";
import { vh, vw } from "../styles/utils";
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
  marginTop: "-2%",
});
const AdjacentNameSetsBox = styled(Box, {
  $$id: "AdjacentNameSetsBox",
  display: "flex",
  justifyContent: "space-around",
  width: "$$adjacentBoxWidth",
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
  },

  variants: {
    layoutType: {
      resizedBothSides: {
        [`& ${NameSetBox}`]: {
          "&:first-child": {
            top: "18%",
            left: "-92%",
          },
          "&:last-child": {
            top: "17%",
            right: "-91%",
          },
        },
      },
      oneSide: {
        [`& ${WrappedHeroBox}`]: {
          marginTop: "-10%",
        },
        [`& ${NameSetBox}`]: {
          "&:first-child": {
            top: "18%",
            left: "-140%",
          },
          "&:last-child": {
            top: "17%",
            right: "-139%",
          },
        },
      },
      resizedDefault: {},
      default: {},
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
  [`& ${EnInfoBox}`]: {
    color: "$$color",
    marginBottom: "$$enInfo_mb",

    "& h3": {
      fontSize: "$$enInfo_h3",
      marginBottom: "$$enInfo_h3Mb",
    },
    "& p": {
      fontSize: "$$enInfo_p",
    },
  },
  [`& ${ZhInfoBox}`]: {
    color: "$$color",
    "& h3": {
      fontSize: "$$zhInfo_h3",
      marginBottom: "$$zhInfo_h3Mb",
    },
    "& p": {
      fontSize: "$$zhInfo_p",
    },
  },

  variants: {
    layoutType: {
      resizedBothSides: {
        $$color: "$colors$surfaceText",
        $$enInfo_mb: `calc($$height * 0.025)`,
        $$enInfo_h3: `calc($$height * 0.0125)`,
        $$enInfo_h3Mb: `calc($$height * 0.0085)`,
        $$enInfo_p: `calc($$height * 0.018)`,
        $$zhInfo_h3: `calc($$height * 0.0125)`,
        $$zhInfo_h3Mb: `calc($$height * 0.0085)`,
        $$zhInfo_p: `calc($$height * 0.018)`,
      },
      oneSide: {
        $$color: "$colors$surfaceText",
        $$enInfo_mb: `calc($$height * 0.025)`,
        $$enInfo_h3: `calc($$height * 0.0125)`,
        $$enInfo_h3Mb: `calc($$height * 0.0085)`,
        $$enInfo_p: `calc($$height * 0.018)`,
        $$zhInfo_h3: `calc($$height * 0.0125)`,
        $$zhInfo_h3Mb: `calc($$height * 0.0085)`,
        $$zhInfo_p: `calc($$height * 0.018)`,
      },
      resizedDefault: {
        $$color: "$colors$defaultText",
        $$enInfo_mb: `calc($$height * 0.025)`,
        $$enInfo_h3: `calc($$height * 0.0125)`,
        $$enInfo_h3Mb: `calc($$height * 0.0085)`,
        $$enInfo_p: `calc($$height * 0.018)`,
        $$zhInfo_h3: `calc($$height * 0.0125)`,
        $$zhInfo_h3Mb: `calc($$height * 0.0085)`,
        $$zhInfo_p: `calc($$height * 0.018)`,
      },
      default: {
        $$color: "$colors$defaultText",
        $$enInfo_mb: `calc($$height * 0.025)`,
        $$enInfo_h3: `calc($$height * 0.01)`,
        $$enInfo_h3Mb: `calc($$height * 0.008)`,
        $$enInfo_p: `calc($$height * 0.015)`,
        $$zhInfo_h3: `calc($$height * 0.01)`,
        $$zhInfo_h3Mb: `calc($$height * 0.008)`,
        $$zhInfo_p: `calc($$height * 0.014)`,
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
        $$width: "80%",
        $$h_enHero: 0.05,
        $$h_hero: 0.45,
        $$h_nameSet: 0.225,
        $$h_info: 0.2,

        "& svg path": {
          fill: "$colors$surfaceText",
        },
      },
      resizedDefault: {
        $$horizontalOffset: vh(10),
        $$width: "100%",
        $$h_enHero: 0.045,
        $$h_hero: 0.4,
        $$h_nameSet: 0.2,
        $$h_info: 0.2,

        $$adjacentBoxWidth: vh(40),

        "& svg path": {
          fill: "$colors$defaultText",
        },
      },
      default: {
        $$horizontalOffset: vh(6),
        $$width: "100%",
        $$h_enHero: 0.0425,
        $$h_hero: 0.38,
        $$h_nameSet: 0.18,
        $$h_info: 0.2,

        $$adjacentBoxWidth: vw(100),

        "& svg path": {
          fill: "$colors$defaultText",
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
        <HorizontalSetsBox layoutType={layoutType}>
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
