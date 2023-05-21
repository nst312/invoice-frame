import logo from './logo.svg';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import Recurring from './pages/recurring/recurring'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div className="App">
     <Header />
     <SideBar/>
     <Recurring/>
    </div>
  );
}

export default App;


