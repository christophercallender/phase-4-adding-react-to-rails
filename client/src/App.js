import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetch('/movies')
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Hello from React!</h1>;
}
