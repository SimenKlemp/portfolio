import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
      <>
          <Routes basename="/portfolio">
              <Route path="/" element={ <Layout />}>
                  <Route index element={ <Home />} />
              </Route>
              <Route path="/about" element={ <Layout />}>
                  <Route index element={ <AboutMe />} />
              </Route>
              <Route path="/projects" element={ <Layout />}>
                  <Route index element={<Projects />}/>
              </Route>
              <Route path="/projectDetails/:id" element={ <Layout />}>
                  <Route index element={<ProjectDetails />}/>
              </Route>
          </Routes>


      </>



  );
}

export default App;
