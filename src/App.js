import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './actions/store';
import DCandidate from './components/DCandidate';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <DCandidate />
      </Container>
    </Provider>
  );
}

export default App;
