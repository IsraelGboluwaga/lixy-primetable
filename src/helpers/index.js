const isPrimeNo = (num) => {
	// No prime number less than 2
	if (num < 2) return false
	let isPrime = true
	// If it can't divide the prime number at half, it's quotient can't be a whole number, hence not divisible
	for (let i = 2; i <= num / 2; i++) {
		if (num % i === 0) {
			isPrime = false
		}
	}
	return isPrime
}

const generatePrimes = (length) => {
	if (Number.isNaN(length * 1) || length < 2) return []
	const primes = []
	let counter = 2
	while (primes.length < length) {
		if (isPrimeNo(counter)) primes.push(counter)
		counter++
	}
	return primes
}

const createPrimeArrays = (generatedPrimes) => {
	if (generatedPrimes.length === 0) return []
	const arrs = []
	for (let i = 0; i < generatedPrimes.length; i++) {
		let temp = []
		for (let j = 0; j < generatedPrimes.length; j++) {
			temp.push(generatedPrimes[i] * generatedPrimes[j])
		}
		arrs.push(temp)
	}
	return arrs
}

module.exports = { isPrimeNo, generatePrimes, createPrimeArrays }
