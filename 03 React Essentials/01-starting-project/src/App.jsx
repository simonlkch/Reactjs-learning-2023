import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'



// import asset
import jsxUi from './assets/jsx-ui.png'

// data
import { EXAMPLES } from './data-with-examples.js'

function App() {

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
