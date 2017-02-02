import chai, { expect } from 'chai'
import Neuron from '../../src/neuron'

describe('Neuron', () => {

  describe('constructor', () => {

    it('should return new neuron object', () => {
      const neuron = new Neuron()

      expect(neuron).to.be.an('object')
    })

  })

  describe('activate', () => {

    it('should return updated neuron activation subject to squashing function', () => {
      const neuron = new Neuron()

      neuron.activate()

      expect(neuron.activation).to.equal(0.5)
    })

  })

  describe('backPropagate', () => {

    it('should update projected error', () => {
      expect.fail()
    })

  })

  describe('project', () => {

    it('should return connection to target neuron', () => {
      const from = new Neuron()
      const to = new Neuron()

      const connection = from.project(to)

      expect(connection).to.be.an('object')
      expect(connection.from).to.equal(from)
      expect(connection.to).to.equal(to)
    })

    it('should update connections and neighbours of \'from\' neuron', () => {
      const from = new Neuron()
      const to = new Neuron()

      const connection = from.project(to)

      expect(from.connections.projected).to.be.an('object')
      expect(from.connections.projected[connection.uid]).to.equal(connection)
      expect(from.neighbours[to.uid]).to.equal(to)
    })

    it('should update connections of \'to\' target neuron', () => {
      const from = new Neuron()
      const to = new Neuron()

      const connection = from.project(to)

      expect(to.connections.inputs).to.be.an('object')
      expect(to.connections.inputs[connection.uid]).to.equal(connection)
    })

  })

})
