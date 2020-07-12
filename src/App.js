import React from 'react';
import './App.css';
import Toggle from './components/Toggle/Toggle';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Portal from './components/Portal/Portal';

function App() {
  return (
    <div className='App'>
      <Toggle>
        {({ on, toggle }) => (
          <>
            {on && <HelloWorld on={on} />}
            <button onClick={toggle}>Show/Hide</button>
            <Portal>{on && <h1>Hi, I'm in a portal!</h1>}</Portal>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;
