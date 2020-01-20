import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

import { generatePrimes, createPrimeArrays } from '../helpers'

const GlobalStyle = createGlobalStyle`
  table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
		}
    th,
    td,
    tr {
      padding: 5px;
		}
		tr:nth-child(odd) {
			 background-color: #ddeeff;
		}
    th {
      text-align: left;
    }
  }
`

const TableContainer = styled.section`
	width: 80%;
	margin: 2rem auto;
`

const PrimeTable = (props) => {
	const { size } = props
	const primes = generatePrimes(size)
	const multiples = createPrimeArrays(primes)
	return (
		<>
			<GlobalStyle />
			<TableContainer>
				<table>
					<thead>
						{size > 0 ? <th></th> : null}
						{primes.map((prime, i) => <th key={i}> {prime} </th>)}
					</thead>
					<tbody>
						{multiples.map((arr, i) => (
							<tr>
								<td>{primes[i]}</td>
								{arr.map((value, index) => <td> {value} </td>)}
							</tr>
						))}
					</tbody>
				</table>
			</TableContainer>
		</>
	)
}

export { PrimeTable }