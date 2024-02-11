// ./src/App.js
import { ErrorBoundary } from 'react-error-boundary';
import Timer from '../Timer';

function App() {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => {
        return <h1>{error.message}</h1>;
      }}
    >
      <div className="App">
        <Timer seconds="3" />
      </div>
    </ErrorBoundary>
  );
}

export default App;
