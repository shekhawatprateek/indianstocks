import React, {useState} from 'react';
import {Box, Button, Grid, Image, Text} from 'theme-ui';
import './index.css';
import {AiOutlineStar} from 'react-icons/ai';
import {Popover} from '../Popover';

function ToolTip({children, ...remainingProps}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <Box className="App">
      <Button
        sx={{
          color: "lightgrey",
          padding: '0',
          position: "relative",
          zIndex: "0",
          background: "none",
          ':hover': {
            color: "orange",
            cursor: "pointer",
          }
        }}
        onMouseEnter={() => setIsShown(false)}
        onMouseLeave={() => setIsShown(false)}>
        <AiOutlineStar size={16}/>
      </Button>
      {isShown && (
        <Text sx={{
          clipPath: "polygon(0 0, 100% 0%, 100% 75%, 55% 75%, 50% 100%, 45% 75%, 0% 75%)",
          color: "white",
          background: "black",
          position: 'absolute',
          zIndex: "10",
          fontSize: "0.8rem",
          padding: "5px 5px 15px 5px",
          borderRadius: "6px",
        }}>
          Add to Main Watchlist
        </Text>
      )}
    </Box>
  );
}

const StickyColStar = () => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: 0}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",
      }}>
        {/*<Button sx={{*/}
        {/*  color: "lightgrey",*/}
        {/*  padding: '0',*/}
        {/*  ':hover': {*/}
        {/*    color: "orange",*/}
        {/*    cursor: "pointer",*/}
        {/*  }*/}
        {/*}}>*/}
        {/*  <AiOutlineStar size={18}/>*/}
        {/*</Button>*/}
        <ToolTip></ToolTip>
      </Grid>
    </Box>
  )
}

const StickyColNumber = ({children}) => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: "30px",display: ['none','block']}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",
      }}>
        <Text sx={{
          color: "#6f7082",
          fontSize: "0.8rem",
        }}>
          {children}
        </Text>
      </Grid>
    </Box>
  )
}


const StickyColName = ({children}) => {
  return (
    <Box as={'td'} sx={{
        position: 'sticky',
        left: "57px",
        padding: [ "8px", "1.8rem 5px"],
    }}>
      <Grid columns={[2, 1]} width={[ null, null,]} sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",
        fontWeight: "600",
        fontSmooth: 'always',
        gridGap: '10px',
         '-webkit-font-smoothing': 'antialiased'
      }}>
          <Image src={'/company-icons/tata.png'} width={'24px'} height={'24px'} sx={{
              alignSelf: 'center',
              maxWidth: 'inherit',
              padding: '0',
              margin: '0'
          }}/>
          <Box>
              <Box sx={{gridColumnStart: ['2', '1'], paddingRight: '10px',}} >
                  <Text
                      color={'color7'}
                      sx={{
                          whiteSpace: ['break-spaces', 'nowrap'],
                          fontSize: "14px",
                          display: ['flex', 'inline'],
                          textAlign: 'left',


                      }}>
                      {children}
                  </Text>
                  <Text
                      color={'#908A9D'}
                      sx={{
                          fontSize: '12px',
                          padding: '0',
                          paddingLeft: '5px',
                          display: ['none', 'inline'],
                      }}>
                      TICKER
                  </Text>
              </Box>

              <Box sx={{textAlign: 'left'}}>
                  <Text p={'3px 6px 2px 6px'}
                        bg={'#EFF2F5'}
                        color={'#58667E'}
                        sx={{
                            fontSize: '12px',
                            borderRadius: '4px',
                            display: ['inline-block', 'none'],
                        }}>
                      7
                  </Text>
                  <Text
                      color={'#908A9D'}
                      sx={{
                          fontSize: '12px',
                          padding: '0',
                          paddingLeft: '5px',
                          display: ['inline-block', 'none']
                      }}>
                      TICKER
                  </Text>
              </Box>
          </Box>
      </Grid>
    </Box>
  )
}


const TD = ({children, sx, ...props}) => {
  return <Box
    py={'12px'}
    color={'color7'}
    sx={{
      fontSize: '14px',
      fontWeight: '500',
        backgroundColor: 'white',
        ':hover': {
            background: '#fafbfd'
        },
      ...sx,
    }}{...props}>{children}</Box>;
};

const MarketCap = ({children, sx, ...props}) => {
  const [open, setOpen] = useState(false);
  return <TD as={'td'}>{children}</TD>;
}

const Revenue = ({children, sx, ...props}) => {
  const [open, setOpen] = useState(false);
  return <TD as={'td'}>{children}</TD>;
}

const PBRatio = ({children, sx, ...props}) => {
  const [open, setOpen] = useState(false);
  return <TD as={'td'} color={'#EA3943'}>{children}</TD>;
}

const PERatio = ({children, sx, ...props}) => {
  const [open, setOpen] = useState(false);
  return <TD as={'td'} color={'#16C784'}>{children}</TD>;
}


export const Table = ({data = []}) => {
  const [open, setOpen] = useState(false);

  return <Box>

    <div role="region" aria-labelledby="caption" tabIndex="0">
      <Box as={'table'} sx={{borderCollapse: 'collapse', borderSpacing: 0}}>
        <thead>
        <tr>
          <th></th>
          <Box as={'th'} sx={{
            display: ['none','block']
          }}>#</Box>
          <th p={'0px'}>Company Name</th>
          <th p={'0px'}>Market Cap</th>
          <th p={'0px'}>Revenue</th>
          <th p={'0px'}>PE ratio</th>
          <th p={'0px'}>PB ratio</th>
        </tr>
        </thead>
        <tbody>
        {/*Example code without components*/}
        {/*<tr>*/}
        {/*  <th>Star</th>*/}
        {/*  <th>Number</th>*/}
        {/*  <th>Name</th>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*</tr>*/}

        {
          data.map((value, index) => {
            return <tr key={index}>
              <StickyColStar>Star</StickyColStar>
              <StickyColNumber>6</StickyColNumber>
              <StickyColName>{value.name}</StickyColName>
              <MarketCap as={'td'} color={'#000000'} >$32,569.21</MarketCap>
              <Revenue as={'td'} color={'#000000'} >$32,569.21</Revenue>
              <PERatio as={'td'} color={'#16C784'} >15.5</PERatio>
              <PBRatio as={'td'} color={'#EA3943'} onClick={() => {
                setOpen(true);
              }}>12 <Popover open={open}>
                Hello
              </Popover></PBRatio>
            </tr>;
          })
        }

        </tbody>
      </Box>
    </div>
  </Box>;
}




