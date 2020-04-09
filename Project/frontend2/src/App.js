import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Dev app', 'front-end web']);
  function handleAddProject(){
    setProjects([...projects,`novo Projeto ${Date.now()}`]);
    console.log(projects);
    
  }
  return  (
    <>
      <Header title="Projects"/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;
