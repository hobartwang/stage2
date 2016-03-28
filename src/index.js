import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import Point from './Point';

render(<App />, document.getElementById('root'));

var pnt = new Point(2,3);
console.log(pnt.toString());
