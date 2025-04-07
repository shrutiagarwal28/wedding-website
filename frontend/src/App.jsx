import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center p-10">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">
                Shruti & Shreeansh 💍
            </h1>
            <p className="text-lg text-gray-700">
                We’re getting married — and you’re invited! 🎉
            </p>
        </div>
    );
}

export default App
