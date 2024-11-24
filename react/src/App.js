import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function App() {
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ListItem>
        <ListItemText
          primary="1er item"
          secondary={secondary ? 'Secondary text' : null}
        />
        <ListItemText
          primary="2 item"
          secondary={secondary ? 'Secondary text' : null}
        />
        <ListItemText
          primary="3 item"
          secondary={secondary ? 'Secondary text' : null}
        />
        <ListItemText
          primary="4 item"
          secondary={secondary ? 'Secondary text' : null}
        />
      </ListItem>,
    </div>
  );
}

export default App;
