// yarn add @nivo/bar
import { ResponsiveLine } from '@nivo/line'
import { lineGraph } from '../../helpers/mockData'
import { Box, Container, Typography } from '@mui/material'
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

const LineGraph = () => (
  <Container sx={{ position: "relative" }}>
    <Box sx={{ width: "550px", height: "200px", border: "2px solid rgb(0 0 0 / 42%)", background: "rgb(0 0 0 / 42%)", p: 2, borderRadius: "4px", position: "absolute", top: "550px", left: "2%" }}>
      <Typography sx={{ color: "#fff" }}> Title </Typography>
      <ResponsiveLine
        data={lineGraph}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        theme={customTheme}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickValues: [100, 200, 300, 400],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '°C',
          legendOffset: -40,
          legendPosition: 'end',
          truncateTickAt: 0,
        }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: "#fff",
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        colors={customColors}
      />
    </Box>
  </Container>
)

export default LineGraph