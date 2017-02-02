import chai, { expect } from 'chai'
import Layer from '../../src/layer'

describe('Layer', () => {

  describe('constructor', () => {

    it('should return new layer object', () => {
      const layer = new Layer()

      expect(layer).to.be.an('object')
      expect(layer.size).to.equal(0)
      expect(layer.neurons).to.have.length(0)
      expect(layer.neurons).to.be.an('array')
    })

    it('should return new layer object with array of neurons, if size != 0', () => {
      const layer = new Layer(5)

      expect(layer).to.be.an('object')
      expect(layer.size).to.equal(5)
      expect(layer.neurons).to.be.an('array')
      expect(layer.neurons).to.have.length(5)
      expect(layer.neurons[0]).to.be.an('object')
    })

  })

  describe('activate', () => {

    it('should return array of activated neurons', () => {
      const layer = new Layer(5)

      const activations = layer.activate()

      expect(activations).to.be.an('array')
      expect(activations).to.have.length(5)
      expect(activations[0]).to.equal(0.5)
    })

  })

})
