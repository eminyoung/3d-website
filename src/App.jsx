import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar,
  Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div  className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="reltive z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App

// function App() {
//   return <div id="canvas-container">
//     <Canvas>
//       <ambientLight intensity={0.1} />
//       <directionalLight color="white" position={[0, 0, 5]} />
//     </Canvas>
//   </div>
// }

// createRoot(document.getElementById('root')).render(<App />)
