import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import app from '../../../index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

app.get('/api/v1/places', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			places: ["Cox's Bazar", 'Rangamati'],
		},
	});
});

reportWebVitals();
