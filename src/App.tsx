
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as H from '@here/maps-api-for-javascript';

const HERE_API_KEY = import.meta.env.VITE_HERE_MAP_API_KEY;
function App() {
  const platform = new H.service.Platform({
        apikey: HERE_API_KEY,
      });
      console.log(platform);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
