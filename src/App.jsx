import Nav from './components/Nav'
import TravelLog from './components/TravelLog'

import data from "./data"

import "./App.css"

const travelLogs = data.map(log => {
  return <TravelLog
    key={log.id}
    {...log}
  />
})

function App() {
  return (
    <div className="App">
      <Nav/>
      <section className="logs">
        {travelLogs}
      </section>
    </div>
  )
}

export default App

