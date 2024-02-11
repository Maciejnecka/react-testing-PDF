import React from 'react';
import CatchError from '../CatchError';

function LocalDate({ date }) {
  return <time>{date.toLocaleString()}</time>;
}

function App() {
  return (
    <CatchError message="outside">
      <CatchError message="inside">
        <div className="App">
          <LocalDate />
        </div>
      </CatchError>
    </CatchError>
  );
}

export default App;
