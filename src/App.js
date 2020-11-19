import React, {useState} from 'react'
import MontarPizza2Sabores from './components/montarPizza2Sabores'
import MontarPizza3Sabores from './components/montarPizza3Sabores'
import MontarPizza4Sabores from './components/montarPizza4Sabores'
import './assets/styles/reset.css'

function App() {
  const [ option, setOption ] = useState(false)
  return (
    
    <MontarPizza4Sabores />
  );
}

export default App;
