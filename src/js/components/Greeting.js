import React from 'react';
import 'css/index.css';
import test from 'img/test.jpeg';

const Greeting = ({name}) => {
	return (
	<>
		<h1>Hello, {name}!</h1>
		<img src={test} alt="Just a test image"/>
	</>)
}

export default Greeting;