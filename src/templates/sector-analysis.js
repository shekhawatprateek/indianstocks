import React from 'react';
import { Box, Grid, Link,Image, Text } from 'theme-ui';
import {TopNav} from "../components/TopNav";
import { SectorBanner, Subpages } from "../components/Sector";

export default ({ pageContext: { name,intro,insights} }) =>
  <Box>
    <TopNav/>
    <SectorBanner name={name} intro={intro} insights={insights}/>
    <Subpages name={name} />
    <Box>
      <Grid>
        <Box>
          Hello
        </Box>
      </Grid>
    </Box>
  </Box>;
