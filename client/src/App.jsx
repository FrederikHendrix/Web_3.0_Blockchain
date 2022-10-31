import { Navbar, Welcome, Footer, Services, Transactions} from "./components";
import index from "./index.css";


const App = () => {

  return (
    <div className="min-h-screen bg-black">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      {/* <Services/>
      <Transactions/>
      <Footer/> */}
    </div>
  )
}

export default App
