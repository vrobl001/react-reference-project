import React from 'react';
import './App.css';
import Toggle from './components/Toggle/Toggle';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div className='App'>
      <Toggle>
        {({ on, toggle }) => (
          <div>
            {on && <HelloWorld on={on} />}
            <button onClick={toggle}>Show/Hide</button>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default App;
