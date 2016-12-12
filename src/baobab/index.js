/**
 * Created by chenyudong on 2016/11/27.
 */
import React from "react";
import ReactDOM from "react-dom";
import Baobab from "baobab";
import Hello from "./mod/Hello";

let tree = new Baobab({
  palette: {
    colors: ['yellow', 'purple'],
    name: 'Glorious colors'
  }
});

let paletteCursor = tree.select('palette',);
let colorsCursor = tree.select('palette', 'colors');

let App = React.createClass({

	componentWillMount: function(){
		colorsCursor.push('orange');
		colorsCursor.unshift('blue');
		colorsCursor.concat(['red','green']);
		paletteCursor.merge({name: 'color'});
	},

	componentDidMount: function(){

		colorsCursor.on('update', function(e) {
		  var eventData = e.data;

		  console.log('Current data:', eventData.currentData);
		  console.log('Previous data:', eventData.previousData);
		  console.log('Transaction details:', eventData.transaction);
		  console.log('Affected paths', eventData.paths);
		});

		console.log(tree.get())
	},
	render: function(){
		console.log('index')
		return(
			<div><Hello cursor={paletteCursor}/></div>
		);
	}
});

ReactDOM.render(
  <App />,
  document.querySelector('#content')
);