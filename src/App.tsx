import { useState } from 'react'
import './App.css'
import { Swatch } from './Swatch'

const SAMPLE_INPUT = `4a689f 7999c0 b0cbdd 57585c
526ea3 698ec2 aac9ea dfe4f1
020204 162410 2d4620 3a5229 4c6222 9e9a49 adb843 a3a16d`

function App() {
  const [color, setColor] = useState(SAMPLE_INPUT)

  return (
    <div className="App">
      <label>
        <span style={{ fontSize: '24px' }}>Enter a space-delimited color string</span>
        <button style={{ margin: 10 }} onClick={() => setColor(SAMPLE_INPUT)}>Reset</button>
        <textarea style={{ width: '100%', fontSize: '16px', padding: 10 }} rows={10} value={color} onChange={e => setColor(e.target.value)} />
      </label>
      <Swatch color={color} />
    </div>
  )
}

export default App
