import { useState } from 'react';
import './App.css';
import data from './data';
import Cars from './components/Cars';

function App() {
  const [cars, setCars] = useState(data);

  // Function to "buy" a car and remove it from the list
  function handleBuy(id) {
    const remainingCars = cars.filter(car => car.id !== id);
    setCars(remainingCars);
  }

  // When no cars are left, display a message and a refresh button
  if (cars.length === 0) {
    return (
      <div className='border bg-black w-[100vw] gap-y-3 h-[100vh] text-white flex justify-center items-center flex-col'>
        <h4 className='text-4xl font-extralight'>No Cars Left</h4>
        <button
          className='border px-7 py-3 rounded-2xl border-y-4 bg-slate-500'
          onClick={() => setCars(data)}  // Refresh the list
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className='bg-black w-[100vw] text-white'>
      {/* Pass the car data and handleBuy function to the Cars component */}
      <Cars data={cars} Buy={handleBuy} />
    </div>
  );
}

export default App;
