import React from 'react';
import { Box, Grid, Link, Text } from 'theme-ui';
import styled from 'styled-components';
import { useTable } from 'react-table';
import makeData from '../somethings/makeData';
import Sticky from 'react-stickynode';
import {TopNav} from "../components/TopNav";

export default ({ pageContext: { name,intro,insights} }) =>
  <Box>
    <TopNav/>
    <SectorBanner name={name} intro={intro} insights={insights}/>
    <SectorFinancials/>
    <Box m={40} sx={{
      borderRadius: 5,
      boxShadow: '0 3px 20px 0 rgb(0 77 165 / 7%)',
      overflow: 'scroll',
    }}>
      <CompaniesList />
    </Box>
  </Box>;


const Styles = styled(Box)`
  padding: 0;

  table {
    border-spacing: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 1;
        }
      }
      :hover {
        td {
          background: rgba(0,0,0,0.02);
          box-shadow:  0 1px 0 rgba(0,0,0,0.24);
          border-right: none;
        }
      }
    }
   th {
    background: ${({ bg }) => bg}
    color:  red;
   }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      cursor: pointer;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>
              <Text variant={"smallLight"}>{column.render('Header')}</Text>
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
             const { number } = cell.getCellProps();
              return <td {...cell.getCellProps()} >
                <Text  variant={ number ? 'smallPositiveNumber' : ''} >{cell.render('Cell')}</Text>
              </td>;
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

function CompaniesList() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Company Name',
        accessor: 'companyName',
      },
      {
        Header: 'Sector',
        accessor: 'sector',

      },
      {
        Header: 'PE ratio',
        accessor: 'peRatio',
        number: true
      },
      {
        Header: 'PB ratio',
        accessor: 'pbRatio',
      },
      {
        Header: 'Market Cap',
        accessor: 'marketCap',
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <Styles bg={'color.background'} headerColor={'primary'}>
      <Sticky enabled={true} top={0} bottomBoundary={0}>
        <Table columns={columns} data={data} />
      </Sticky>
    </Styles>
  );
}

function ProductItem({name}) {
  return <Grid columns={[2]} sx={{
    '::hover': {
      color: 'red'
    }
  }}
  >
    <Box py={2} >
      <Text  color={'secondary'}   >{name}</Text>
    </Box>
  </Grid>;
};

const SectorFinancials = ({visible = false }) => {

  if(!visible) return null;

  return <Grid p={20} columns={[1, 1, 2, 2]} sx={{
    alignItems: "center"
  }} >
    <Box>
      <Text as={'h2'}  color={'primary'}  > Disruptions </Text>
      <Box w={'100%'}>
        <ProductItem name={'DNA Sequencing'} />
        <ProductItem name={'DNA Sequencing'} />
        <ProductItem name={'DNA Sequencing'} />
        <ProductItem name={'DNA Sequencing'} />
        <ProductItem name={'DNA Sequencing'} />
        <ProductItem name={'DNA Sequencing'} />
        <ProductItem name={'DNA Sequencing'} />
      </Box>
    </Box>
    <Box sx={{}}>
      <Text as={'h2'}  color={'primary'}  > Performance </Text>
      <Text py={20} as={'h3'}  color={'primary'}  > Current Market size </Text>
      <Text  color={'secondary'}   py={20} sx={{
        fontSize: '2rem',
      }}>$1 Trillion</Text>
      <Text py={20} as={'h3'}  color={'primary'}  > Expected market size by 2025 </Text>
      <Text
        color={'secondary'}
        py={20}
        sx={{
          fontSize: '2rem',
        }}>$5 Trillion</Text>
    </Box>

  </Grid>;
}


const SectorBanner = ({ name,intro,insights} ) => {
  return <Box sx={{width: '100%', height: ['550px','400px']}} bg={'black'}>
    <Grid columns={[1,1]}>
      <Box px={20} py={70}>
        <Text color={'text2'}  sx={{
          fontSize: 40
        }}>
          {name.toUpperCase()}
        </Text>
        <Text as={'h2'} color={'text3'} sx={{
          fontSize: 25
        }}>
          {intro}
        </Text>
        <Grid columns={[2,4]} py={70}>
          {insights.map((insight)=>{
            return <Box sx={{
              textAlign: 'center'
            }}>
              <Text color={'text3'} sx={{ fontSize: 20 }}>{insight.name}</Text>
              <Text color={'text2'}  sx={{ fontSize: 25 }} >{insight.number}</Text>
            </Box>;
          })}
        </Grid>
      </Box>

    </Grid>

  </Box>;
}