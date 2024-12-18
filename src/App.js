import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Widget from "./Components/Widget";


function App() {
  return (
    <div className="container">
      <Header/>
      <Sidebar/>
      <Content/>
      <Widget/>
      <Footer/>
    </div>
  );
}
export default App;

