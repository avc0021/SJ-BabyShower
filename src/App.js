import logo from './assets/images/BabyShowerlogo.png';
import { Container } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <div>
    <Container className="App">

        <img src={logo} className="App-logo" alt="logo" />


    </Container>
    </div>
  );
}

export default App;