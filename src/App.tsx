import { Suspense, useState } from 'react'
import { AlwaysSuspend } from './AlwaysSuspend'
import './App.css'
import { DataLoader } from './DataLoader'
import { SometimeSuspend } from './SometimesSuspend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <p>ここは表示される？</p>
        <DataLoader />
        {/* <AlwaysSuspend /> */}
        {/* <SometimeSuspend /> */}
        <button onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  )
}

export default App
