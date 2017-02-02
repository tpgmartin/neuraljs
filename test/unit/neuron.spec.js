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

})
