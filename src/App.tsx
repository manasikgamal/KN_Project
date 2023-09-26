import Body from "./components/Body";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Gallary from "./components/Gallery";
import Header from "./components/Header";
import {
  Navigate,
  NavigateFunction,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Shipments from "./components/Shipments";
import Modal from "./components/Modal";



function App() {
  return (
    <div>
     <Header/>
     <Routes>
     <Route path="/" element={<Body/>} />
     <Route path='/shipments' element={<Shipments/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
