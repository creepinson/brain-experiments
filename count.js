const brain = require("brain.js")

const trainingData = [
  [10,9,8,7,6,5,4,3,2,1,0]
]

const network = new brain.recurrent.LSTMTimeStep();

network.train(trainingData, {
  iterations: 5000,
  
  log: stats => console.log(stats)
})

console.log(Math.round(network.run(process.argv.slice(2).map(e => parseFloat(e)))))