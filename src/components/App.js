import React from 'react';

function LocalDate({ date }) {
  return <time>{date.toLocaleString()}</time>;
}
function App() {
  try {
    return (
      <div className="App">
        <LocalDate />
      </div>
    );
  } catch (err) {
    return <h1>{err.message}</h1>;
  }
}
export default App;
