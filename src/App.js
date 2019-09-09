import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';    
import ThemeEditor from "./components/ThemeEditor";

function App() {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <div style={styles.screenshotContainer} >
          <div style={styles.screenshot}></div>
        </div>
        <div style={styles.themeEditorContainer}>
          <ThemeEditor />
        </div>
      </div>
    </Provider>
  );
}

export default App;

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'darkGreen',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
  },
  screenshotContainer: {
    height: '100vh',
    width: '20vw',
    minWidth: '350px',
    backgroundColor: 'grey',
    paddingTop: '50px',
    marginRight: '2%'
  },
  screenshot: {
    height: '50%',
    width: '90%',
    backgroundColor: 'lightGreen',
    margin: 'auto',
  },
  themeEditorContainer: {
    height: '90vh',
    width: '73vw',
    backgroundColor: 'lightgrey',
  },
}
