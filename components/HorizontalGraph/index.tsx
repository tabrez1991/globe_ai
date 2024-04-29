// yarn add @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import { horizontalGraph } from '../../helpers/mockData'
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

const HorizontalGraph = () => (
  <Container sx={{ position: "relative" }}>
    <Box sx={{
      width: "365px", height: "200px", border: "2px solid rgb(75 70 70 / 42%)", background: "rgb(75 70 70 / 42%)", p: 2, borderRadius: "4px",
      // position: "absolute", top: "550px", right: "0px"
    }}>
      <Typography sx={{ color: "#fff" }}> Title </Typography>
      <ResponsiveBar
        data={horizontalGraph}
        keys={[
          'series 1',
          'series 2',
        ]}
        indexBy="country"
        theme={customTheme}
        margin={{ top: 10, right: 0, bottom: 50, left: 10 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'sandwich'
            },
            id: 'lines'
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        colors={customColors}
      />
    </Box>
  </Container>
)

export default HorizontalGraph