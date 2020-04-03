const colors = [{ red: 1 }, { red: 0 }, { blue: 1 }, { blue: 0 }]

const brightnesses = [
  { dark: 0.1, light: 0.9 },
  { dark: 1, light: 0 },
  { dark: 0.1, light: 0.9 },
  { dark: 1, light: 0 },
]

const trainingData = []

for (let i = 0; i < colors.length; i++) {
  trainingData.push({
    input: colors[i],
    output: brightnesses[i],
  })
}

const net = new brain.NeuralNetworkGPU({ hiddenLayers: [3] })
const stats = net.train(trainingData, {
  iterations: 20000,
  errorThresh: 0.1,
  log: (stats) => {
    console.log(stats)
  },
})

// console.log(stats)
$('#run').click(() => {
  // brain.likely(gc.getVector(), net)
  let result = brain.likely(
    {
      red: parseFloat($('#red-field').val() || 0),
      blue: parseFloat($('#blue-field').val() || 0),
      green: parseFloat($('#green-field').val() || 0),
    },
    net
  )
  console.log(`Raw result: ${result}`)
})
