import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('hello side effect')

    })

    useEffect(
        () => {
          fetch('foo').then(() => setLoaded(true))
    },
        [count]
    )

    return (
    <div className="App">
        <button onClick={() => setCount(count + 1)}>
            {count}
            </button>
            <ClickCounter />

            <HoverCounter />
    </div>
  );
}

export default App;
