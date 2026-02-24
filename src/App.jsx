import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import Container from './Components/Container'
import Card from './Components/Card'
import Toggle from './Components/Toggle'
import Accordion from './Components/Accordion'
import Product from './Components/product/ProductSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Card>
      <h1 className="text-4xl font-bold text-black">
        Tailwind v4 is working 🚀
      </h1>
      <Button variant="primary" size="md" className="mt-4">
        Primary Button
      </Button>
      <Button variant="secondary" size="sm" className="mt-4 ml-4">
        Secondary Button
      </Button>
      <Button variant="outline" size="lg" className="mt-4 ml-4">
        Outline Button
      </Button>
      <Toggle />
      <Accordion />

      </Card>
    </Container>
    <Product />
      <div className="flex items-center justify-center gap-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
