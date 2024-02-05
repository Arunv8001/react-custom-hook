import './App.css'
import useWindowSizeHooks from './utils/useWindowSizeHooks'

function App() {
const [height, width] = useWindowSizeHooks()
  return (
    <>
    <header>hook that will return screen height and width.</header>
      <h1>Height of the screen: {height}</h1>
      <h1>Width of the screen: {width}</h1>
    </>
  )
}

export default App
