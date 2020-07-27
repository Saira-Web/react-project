import React from "react";
import ReactDOM from "react-dom";
import Greeting from 'components/Greeting';
import footer from 'components/footer';
import 'css/index.css';
import test from 'img/test.jpeg';
import Product from './js/components/product';

const App = () => {
	return (
   <Product/>
   )
}
ReactDOM.render(<App />, document.getElementById('root'));

