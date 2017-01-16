export default class Neuron {

  constructor() {
    this.activation = 0
    this.state = 0
  }

  activate() {
    this.activation =  squash(this.state)

    return squash(this.state)
  }

}

function squash(x) {
  return 1 / (1 + Math.exp(-x))
}
