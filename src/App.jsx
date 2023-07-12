import { useState } from 'react'
import './App.css'
import LightBulb from './LightBulb'
import Switch from './Switch'

export default function App({ name }) {

  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      <LightBulb on={isOn}></LightBulb>
      <Switch toggle={() => setIsOn(!isOn)}></Switch>
      {/*{name}'s React App ⚛️
      <p>My List</p>
      <ol>
        <li>React</li>
        <li>App</li>
      </ol>*/}
    </div>
  )
}
