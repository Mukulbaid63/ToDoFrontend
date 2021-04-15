import MainComponent from './components/MainComponent';
import './App.css'
function App() {
  return (
    <div className="App" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h2>TO DO MANAGER</h2>
      <MainComponent/>
    </div>
  );
}

export default App;
