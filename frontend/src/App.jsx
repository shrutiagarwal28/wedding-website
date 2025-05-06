import './App.css'
import Home from './components/Home';


export default function App() {
    return (
        <div className="!min-h-screen flex items-center justify-center bg-yellow-100">
            <h1 className="text-3xl text-red-300 bg-yellow-200 p-6 rounded-md shadow-lg">
                Tailwind is working!
            </h1>
            <div className="bg-blue-700">Background with blue color</div>

        </div>
    );
}


