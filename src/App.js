import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";



function App() {
  return (
      <>
        <Routes basename={process.env.PUBLIC_URL}>
            <Route path="/" element={ <Layout />}>
                <Route index element={ <Home />} />

            </Route>
            <Route path="/about" element={ <Layout />}>
                <Route index element={ <AboutMe />} />
            </Route>
            <Route path="/projects" element={ <Layout />}>

            </Route>

        </Routes>
      </>



  );
}

export default App;
