import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Main } from './components'
import { isPrimeNo, generatePrimes } from './helpers'

test('renders button in main component', () => {
  const { getByText } = render(<Main />);
  const btnElement = getByText(/generate table/i);
  expect(btnElement).toBeInTheDocument();
});

test('returns true for a prime number', () => {
    expect(typeof chunk).toEqual('boolean');
    expect(isPrimeNo(5).toBe(true))
})

test('returns false for a non-prime number', () => {
    expect(typeof chunk).toEqual('boolean');
    expect(isPrimeNo(4).toBe(false))
})

test('returns first 5 prime numbers', () => {
    expect(typeof chunk).toEqual('array');
    expect(generatePrimes(5)).toEqual([])
})