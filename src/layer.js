import Neuron from './neuron'

export default class Layer {

  constructor(size) {
    this.size = size | 0
    this.neurons = []

    while (size--) {
      this.neurons.push(new Neuron())
    }
  }

}
