import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
	state = {
		habits: [
			// { id: 1, name: 'reading', count: 0 },
			// { id: 2, name: 'running', count: 0 },
			// { id: 3, name: 'coding', count: 0 }
		]
	};
	handleIncrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		habits[index].count++;
		this.setState({ habits: habits });
	};
	handleDecrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		const count = habits[index].count - 1;
		habits[index].count = count > 0 ? count : 0;
		this.setState({ habits: habits });
	};
	handleDelete = (habit) => {
		const habits = [
			...this.state.habits.filter((item) => item.id !== habit.id)
		];
		this.setState({ habits });
	};
	handleAdd = (name) => {
		const habits = [
			...this.state.habits,
			{ id: Date.now(), name: name, count: 0 }
		];
		this.setState({ habits });
	};
	render() {
		return (
			<>
				<Navbar
					totalCount={this.state.habits.filter((item) => item.count > 0).length}
				/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
				/>
			</>
		);
	}
}

export default App;
