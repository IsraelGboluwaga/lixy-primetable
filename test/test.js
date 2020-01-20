const expect = require('chai').expect
const { isPrimeNo, generatePrimes, createPrimeArrays } = require('../src/helpers')

const prime = 5
const nonPrime = 4 
const size = 5

describe('isPrime', () => {
	it('should return true for a prime number', () => {
		const response = isPrimeNo(prime)
		expect(response).to.be.a('boolean')
		expect(response).to.equal(true)
	})

	it('should return false for a non-prime number', () => {
		const response = isPrimeNo(nonPrime)
		expect(response).to.be.a('boolean')
		expect(response).to.equal(false)
	})
})

describe('Prime Tables', () => {
	it('(generatePrimes) should generate an array of primes with length equalling given size', () => {
		const response = generatePrimes(size)
		expect(response).to.be.an('array')
		expect(response.length).to.equal(size)
		response.forEach((element) => {
			expect(isPrimeNo(element)).to.equal(true)
		})
	})

		it('(createPrimeArray) should return an empty array if passed a non-array', () => {
			const response = createPrimeArrays(size)
			expect(response).to.be.an('array')
			expect(response).to.have.property('length')
			expect(response).to.have.lengthOf(0)
		})

		it('should create an array that contains other arrays of multiples', () => {
			const response = createPrimeArrays(generatePrimes(size))
			expect(response).to.be.an('array')
			expect(response).to.have.property('length')
			
			expect(response.length).to.equal(size)
			response.forEach((element) => {
				expect(element).to.be.an('array')
				element.forEach((elt) => {
					expect(isPrimeNo(elt)).to.equal(false)
				})
			})
		})
})