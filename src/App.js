import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorBox/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
