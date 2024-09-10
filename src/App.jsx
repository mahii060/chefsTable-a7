import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import Recipes from "./components/Recipes/Recipes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Header />
      <Banner />
      <ToastContainer />
      <Recipes />
    </div>
  )
}

export default App
