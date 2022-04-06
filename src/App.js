import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from './components/Projects';

function App() {
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer f9e5c768e6682bb22a8f197f5b2e4c4d4e4f6722ae85f589c43eb13e9d13a80c',
        'Content-Type': 'application/json'
      }),
    };
      fetch('https://intra.proekspert.ee/pulse-johvi/api/employees?expand=skills', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<span>Asd</span>}/>
        <Route path="project" element={<Projects/>}/>
        <Route path="*" element={(
          <span>Lol</span>
        )}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
