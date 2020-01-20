import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [ items, setItems ] = useState([]);
	const [ inputValue, setInputValue ] = useState('');

	const handleInput = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			text: inputValue,
			selected: false
		};

		const newItems = [ ...items, newItem ];

		setInputValue('');
		setItems(newItems);
	};

	const randomizer = () => {
		for (let i = 0; i < 20; i++) {
			setTimeout(pickRandomItem, 100 * i);
		}
	};

	const pickRandomItem = () => {
		const randomItem = items[Math.floor(Math.random() * items.length)];

		const newItems = items.map(
			(item) => (item === randomItem ? { ...item, selected: true } : { ...item, selected: false })
		);

		setItems(newItems);
	};

	return (
		<div>
			<h1 className='antialiased text-gray-700 text-2xl text-center p-4'>Random Picker</h1>
			<div className="container w-full bg-white shadow-lg p-6">
				<form onSubmit={handleSubmit} className="flex">
					<input
						type="text"
						className="py-2 px-4 border border-gray-500 flex-1"
						placeholder="Add new item"
						value={inputValue}
						onChange={handleInput}
					/>
					<button className="bg-blue-500  border border-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
						Add
					</button>
				</form>
				<ul>
					{items.map((item, idx) => {
						return (
							<li key={idx} className={`my-5 p-1  ${item.selected ? 'bg-orange-500 text-white' : ''}`}>
								{item.text}
							</li>
						);
					})}
				</ul>
				{items.length > 0 && (
					<button className="bg-blue-500 w-full hover:bg-blue-700 text-white py-2 px-4" onClick={randomizer}>
						Randomize
					</button>
				)}
			</div>
		</div>
	);
};

export default App;
