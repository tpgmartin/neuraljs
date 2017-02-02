let neuron_uid = 0
let connection_uid = 0

export default class Neuron {

  constructor() {
    this.activation = 0
    this.connections = {
      inputs: {},
      projected: {}
    }
    this.neighbours = {}
    this.state = 0
    this.uid = neuron_uid++
  }

  activate() {
    this.activation =  squash(this.state)

    return this.activation
  }

  project(target) {

    const connection = {
      from: this,
      to: target,
      uid: connection_uid++
    }

    this.connections.projected[connection.uid] = connection
    this.neighbours[target.uid] = target
    target.connections.inputs[connection.uid] = connection

    return connection
  }

}

function squash(x) {
  return 1 / (1 + Math.exp(-x))
}
