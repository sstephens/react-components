import React from 'react';
import logo from './logo.svg';
import './App.css';
import Showcase from './Showcase';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<span>React Components</span>
			</header>

			<section className="App-body">
				<Showcase />
			</section>
    </div>
  );
}

export default App;
