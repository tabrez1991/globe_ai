// yarn add @nivo/bar
import { ResponsivePie } from '@nivo/pie'
import { circleGraph } from '../../helpers/mockData'
import { Box, Container, Typography } from '@mui/material'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const customColors = ['#3ba2cc', '#18c1be',]; // Define custom colors for series 1 and series 2

const CircleGraph = () => (
  <Container sx={{ position: "relative" }}>
    <Box sx={{ width: "248px", height: "100px", border: "2px solid rgb(75 70 70 / 42%)", background: "rgb(75 70 70 / 42%)", borderRadius: "4px", 
    // position: "absolute", top: "650px", right: "31%",
     display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ width: "120px", height: "100px", position: "relative" }}>
        <Box sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
          <Typography sx={{ color: "#fff", fontSize: "1rem" }}>75 <span style={{ fontSize: "0.75rem" }}>%</span></Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>INDEX</Typography>
        </Box>
        <ResponsivePie
          data={circleGraph}
          margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
          startAngle={-180}
          sortByValue={true}
          innerRadius={0.75}
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
          enableArcLabels={false}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
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
                id: 'ruby'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'c'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'go'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'python'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'scala'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'lisp'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'elixir'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'javascript'
              },
              id: 'lines'
            }
          ]}
          colors={customColors}
        />
      </Box>
      <Box sx={{ width: "120px", height: "100px", position: "relative" }}>
        <Box sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
          <Typography sx={{ color: "#fff", fontSize: "1rem" }}>75 <span style={{ fontSize: "0.75rem" }}>%</span></Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>INDEX</Typography>
        </Box>
        <ResponsivePie
          data={circleGraph}
          margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
          startAngle={-180}
          sortByValue={true}
          innerRadius={0.75}
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
          enableArcLabels={false}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
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
                id: 'ruby'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'c'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'go'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'python'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'scala'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'lisp'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'elixir'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'javascript'
              },
              id: 'lines'
            }
          ]}
          colors={customColors}
        />
      </Box>
    </Box>
  </Container>
)

export default CircleGraph