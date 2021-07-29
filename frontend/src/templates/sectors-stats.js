import React from "react";
import { Box, Grid, Text, Image } from "theme-ui";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { SectorBanner } from "../components/Sector";
import { CompaniesTable } from "../components/Sector/companies-table";
import { Helmet } from "react-helmet";
import { More } from "../components/Sector/More";
import { Paper } from "../components/Paper";
import { GraphLine } from "../components/GraphLine";
import {
  XYPlot,
  FlexibleXYPlot,
  XAxis,
  LineSeries,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

// // Plot Points for Graph
const data = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 3 },
  { x: 5, y: 3 },
  { x: 6, y: 3 },
  { x: 7, y: 3 },
  { x: 8, y: 3 },
  { x: 9, y: 3 },
  { x: 10, y: 3 },
  { x: 11, y: 3 },
  { x: 268, y: 3 },
];

export default ({
  pageContext: {
    displayName,
    name,
    intro,
    insights = [],
    backgroundImage,
    companies,
  },
}) => (
  <Box>
    <Helmet>
      <title>
        {" "}
        Top {displayName} companies in india by market capitalization |
        BigInvest{" "}
      </title>
    </Helmet>
    <TopNav />
    {0 ? (
      <SectorBanner
        name={displayName}
        intro={intro}
        insights={insights}
        backgroundImage={backgroundImage}
      />
    ) : null}
    <SectorFinancials />
    <Grid columns={[1, 2]} mt={"100px"} mb={4} mx={[1, 1, 4, 4]}>
      <Box>
        <Text as={"h1"} sx={{ fontSize: [3] }}>
          Top {displayName} companies in india by Market Capitalization
        </Text>
        <Text as={"p"} sx={{ fontSize: [2] }}>
          Listed below are the top {displayName} companies in india. They are
          listed in size by market capitalization. To reorder the list, simply
          click on one of the options - such as 24h or 7d - to see the sector
          from a different perspective.
        </Text>
      </Box>
      <Box sx={{ overflowX: "scroll", minWidth: "100px" }} p={[1, 1]}>
        <Grid columns={[2]} sx={{ minWidth: ["150%", "100%"] }}>
          <Box as={Paper} p={2}>
            <Grid columns={[2]}>
              <Box>
                <GraphLine />
              </Box>
              <Box>
                <Text as={"p"} sx={{ fontSize: [1] }}>
                  reorder the list, simply click on one of the options -
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box as={Paper} p={2}>
            <Grid columns={[2]}>
              <Box>
                <GraphLine />
              </Box>
              <Box>
                <Text as={"p"} sx={{ fontSize: [1] }}>
                  reorder the list, simply click on one of the options - such as
                  24h or 7d
                </Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Grid>
    {/*<Box px={[0.5, 4]}>*/}
    {/*  <More/>*/}
    {/*</Box>*/}
    <Box
      my={4}
      mx={[1, 1, 4, 4]}
      sx={{
        borderRadius: 5,
        boxShadow: "0 3px 20px 0 rgb(0 77 165 / 7%)",
        "-webkit-font-smoothing": "antialiased",
        fontWeight: "600",
      }}
    >
      <Grid columns={[1]}>
        <Box p={3} sx={{}}>
          <Text p={3} pl={0}>
            Earnings and Revenue History
          </Text>
          <Paper style={{border: "1px solid red"}}>
            <FlexibleXYPlot  height={200} >
              <XAxis />
              <YAxis />
              <LineSeries data={data} />
            </FlexibleXYPlot>
          </Paper>
        </Box>

        <Box p={3}>
          <Text p={3} pl={0}>
            Revenue Breakdown
          </Text>
          <Paper>
            <Grid columns={2}>
              <Box>
                <Text
                  sx={{
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  Lorem ipsum
                </Text>
              </Box>
              <Box style={{border: "1px solid red"}}>
                <FlexibleXYPlot height={200}>
                  <XAxis />
                  <YAxis />
                  <LineSeries data={data} />
                </FlexibleXYPlot>
              </Box>
            </Grid>
          </Paper>
        </Box>
      </Grid>

      {/*<CompaniesTable*/}
      {/*  columns={[{*/}
      {/*    Header: "#",*/}
      {/*    accessor: "id",*/}
      {/*  }, {*/}
      {/*    Header: "#",*/}
      {/*    accessor: "name",*/}
      {/*  }]}*/}
      {/*  data={companies || new Array(100).fill(1).map((value, index) => {*/}
      {/*    return {rank: index};*/}
      {/*  })}*/}
      {/*/>*/}
    </Box>
    <Footer />
  </Box>
);

function ProductItem({ name }) {
  return (
    <Grid
      columns={[2]}
      sx={{
        "::hover": {
          color: "red",
        },
      }}
    >
      <Box py={2}>
        <Text color={"secondary"}>{name}</Text>
      </Box>
    </Grid>
  );
}

const SectorFinancials = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <Grid
      p={20}
      columns={[1, 1, 2, 2]}
      sx={{
        alignItems: "center",
      }}
    >
      <Box>
        <Text as={"h2"} color={"primary"}>
          {" "}
          Disruptions{" "}
        </Text>
        <Box w={"100%"}>
          <ProductItem name={"DNA Sequencing"} />
          <ProductItem name={"DNA Sequencing"} />
          <ProductItem name={"DNA Sequencing"} />
          <ProductItem name={"DNA Sequencing"} />
          <ProductItem name={"DNA Sequencing"} />
          <ProductItem name={"DNA Sequencing"} />
          <ProductItem name={"DNA Sequencing"} />
        </Box>
      </Box>
      <Box sx={{}}>
        <Text as={"h2"} color={"primary"}>
          {" "}
          Performance{" "}
        </Text>
        <Text py={20} as={"h3"} color={"primary"}>
          {" "}
          Current Market size{" "}
        </Text>
        <Text
          color={"secondary"}
          py={20}
          sx={{
            fontSize: "2rem",
          }}
        >
          $1 Trillion
        </Text>
        <Text py={20} as={"h3"} color={"primary"}>
          {" "}
          Expected market size by 2025{" "}
        </Text>
        <Text
          color={"secondary"}
          py={20}
          sx={{
            fontSize: "2rem",
          }}
        >
          $5 Trillion
        </Text>
      </Box>
    </Grid>
  );
};
