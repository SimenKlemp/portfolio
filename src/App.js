import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import {userContext} from './Contexts'
import AuthHandler from "./utils/AuthHandler";
import NewProject from "./components/NewProject";
import NewExperience from "./components/NewExperience ";

function App() {

    const { authUser, isAdmin } = AuthHandler()

    return (
      <userContext.Provider value={{authUser: authUser, isAdmin: isAdmin}}>
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
                  <Route path="/admin/addProject">
                      <Route index element={<NewProject />}/>
                  </Route>
                  <Route path="/admin/addExperience">
                      <Route index element={<NewExperience />}/>
                  </Route>
              </Routes>
      </userContext.Provider>



  );
}

export default App;
