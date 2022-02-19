import './App.css';
import personCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <personCard 
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}
      />
      <personCard 
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
