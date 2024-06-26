// yarn add @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import { barGraph } from '../../helpers/mockData'
import { Box, Container, Typography } from '@mui/material'
import { Theme } from '@nivo/core';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const customTheme = {
  axis: {
    domain: {
      line: {
        stroke: '#FFF'
      }
    },
    legend: {
      text: {
        "fontSize": 12,
        "fill": "#FFF",
        "outlineWidth": 0,
        "outlineColor": "transparent"
      }
    },
    ticks: {
      line: {
        stroke: '#FFF'
      },
      text: {
        fill: '#FFF'
      }
    }
  },
  grid: {
    line: {
      stroke: '#dddddd'
    }
  },
  tooltip: {
    container: {
      background: '#ffffff',
      color: '#333333'
    }
  },
  legends: {
    text: {
      fill: '#777777'
    }
  }
};

const customColors = ['#18c1be', '#3ba2cc']; // Define custom colors for series 1 and series 2

const BarGraph = () => (
  <Container sx={{ position: "relative" }}>
    <Box sx={{
      width: "550px", height: "200px", border: "2px solid rgb(75 70 70 / 42%)", background: "rgb(75 70 70 / 42%)", p: 2, borderRadius: "4px",
      // position: "absolute", top: "120px", left: "2%" 
    }}>
      <Typography sx={{ color: "#fff" }}> Title </Typography>
      <ResponsiveBar
        data={barGraph}
        keys={['series 1', 'series 2']}
        indexBy="country"
        theme={customTheme}
        margin={{ top: 10, right: 130, bottom: 50, left: 60 }}
        padding={0.6}
        innerPadding={8}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickValues: [10, 30, 50, 70],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'KMs',
          legendPosition: 'end',
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemTextColor: "#fff",
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        barAriaLabel={e => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
        colors={customColors} // Apply custom colors
      />
    </Box>
  </Container>
)

export default BarGraph