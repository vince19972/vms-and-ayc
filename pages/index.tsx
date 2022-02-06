import { styled } from "../stitches.config";
import Box from "../components/Box";
import MainBox from "../components/MainBox";

const ShapesBox = styled(Box, {
  // width: "30vw",
  height: "100vh",
  // backgroundColor: "$colors$surface",
});

export default function Home() {
  return (
    <Box>
      <ShapesBox>
        <MainBox />
      </ShapesBox>
    </Box>
  );
}
