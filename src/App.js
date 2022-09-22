import './App.css';
import TopBar from './components/TopBar'
import Background from './components/Background'
import StorageListening from './components/StorageListening'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <StorageListening/>
    </div>
  );
}

export default App;
