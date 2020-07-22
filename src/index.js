import React from "react";
import ReactDOM from "react-dom";
import Greeting from 'components/Greeting';
import 'css/index.css';
import test from 'img/test.jpeg';

const App = () => {
	return (
   <Greeting name="World"/>
   )
}
ReactDOM.render(<App />, document.getElementById('root'));