import chai, { expect } from 'chai'
import Neuron from '../../src/neuron'

describe('Neuron', () => {

  describe('creation', () => {

    it('should return new neuron object', () => {
      const neuron = new Neuron()

      expect(neuron).to.be.an('object')
    })

  })

})
