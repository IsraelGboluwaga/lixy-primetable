import React, { useState } from 'react'
import styled from 'styled-components'

import { PrimeTable } from './Prime'

const Container = styled.div`
    background-color: #ffffff;
		width: 100;
		height: 100vh;
`

const Controls = styled.div`
	margin-left: 40%;
	margin-bottom: 1rem;
	padding-top: 15vh;
`
const Input = styled.input`
	height: 2rem;
	border-radius: 5px;
	border: 1px solid #cccccc;
	padding: 5px;
	margin-right: 0.3rem;
	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button{
			-webkit-appearance: none; 
			margin: 0; 
	}
	::-moz-appearance:textfield;
`

const Button = styled((props) => <button {...props} />)`
	height: 2rem;
	padding: 5px;
	border-radius: 5px;
	background-color: ${(props) => !props.backgroundColor ? '#1fc51f' : props.backgroundColor};
	color: #ffffff;
	margin-right: 0.3rem;
	&:hover{
		background-color: ${(props) => !props.backgroundHover ? '#1fb71f' : props.backgroundHover};
    cursor: pointer;
	}
`

const Main = (props) => {
	const [isTableLoaded, setTableLoaded] = useState(false)
	const [tableSize, setTableSize] = useState(0)
	const reset = () => {
		setTableSize(0)
		setTableLoaded(false)
	}

	return (
		<Container>
			<Controls>
				<Input type='number' min='0' value={tableSize} onChange={(e) => setTableSize(e.target.value)}/>
        <Button onClick={() => setTableLoaded(true)}>Generate Table</Button>
				<Button backgroundColor='#c13d5b' backgroundHover='#b7193d' onClick={reset}>Reset</Button>
			</Controls>
			<>
				{isTableLoaded ? <PrimeTable size={tableSize} /> : null}
			</>
		</Container>
	)
}

export { Main }