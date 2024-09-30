import React, { useState } from 'react'
import './App.css'

function App() {
	const [tasks, setTasks] = useState([])
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = e => {
		setInputValue(e.target.value)
	}

	const addTask = () => {
		if (inputValue.trim()) {
			setTasks([...tasks, inputValue])
			setInputValue('')
		}
	}

	const removeTask = index => {
		const newTasks = tasks.filter((task, i) => i !== index)
		setTasks(newTasks)
	}

	return (
		<div className='App'>
			<h1>to-do lista</h1>
			<div>
				<input type='text' value={inputValue} onChange={handleInputChange} placeholder='np: Stwórz todolistę...' />
				<button onClick={addTask}>dodaj</button>
			</div>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						{task} <button onClick={() => removeTask(index)}>usuń</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
