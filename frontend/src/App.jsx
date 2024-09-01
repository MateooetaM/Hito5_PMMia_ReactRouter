import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}

      <Pizza />

      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </>
  );
}

export default App;
