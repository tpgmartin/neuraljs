import Neuron from './neuron'

export default class Layer {

  constructor(size) {
    this.size = size | 0
    this.neurons = []

    while (size--) {
      this.neurons.push(new Neuron())
    }
  }

  activate() {
    const activation = this.neurons.map(neuron => neuron.activate())

    return activation;
  }

}
