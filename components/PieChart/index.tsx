// yarn add @nivo/bar
import { ResponsivePie } from '@nivo/pie'
import { pieChart } from '../../helpers/mockData'
import { Box, Container, Typography } from '@mui/material'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const customColors = ['#18c1be', '#3ba2cc']; // Define custom colors for series 1 and series 2

const PieChart = () => (
  <Container sx={{ position: "relative" }}>
    <Box sx={{ width: "350px", height: "200px", border: "2px solid rgb(0 0 0 / 42%)", background: "rgb(0 0 0 / 42%)", p: 2, borderRadius: "4px", position: "absolute", top: "330px", left: "2%" }}>
      <Typography sx={{ color: "#fff" }}> Title </Typography>
      <ResponsivePie
        data={pieChart}
        margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
        startAngle={-180}
        sortByValue={true}
        padAngle={0.7}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.2
            ]
          ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={1} 
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'series 1'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'series 2'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'series 3'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'series 4'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'series 5'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'series 6'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'series 7'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'series 8'
            },
            id: 'lines'
          }
        ]}
        legends={[
          {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 25,
            translateY: 0,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#fff',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </Box>
  </Container>
)

export default PieChart