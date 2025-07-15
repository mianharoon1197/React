
import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
     <div className="bg-red-500 text-white text-3xl font-bold p-4 mb-4">
      Tailwind Test
    </div>
   <Card  username="HAROON" />
   <Card username="HADI"/>
   <Card username="HANAN"/>

    </>
  )
}

export default App
