import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm/Form";
/*
  To run this App you need to:
  - create-react-app name-app --template cra-template-pwa
  - cd name-app
(Go Index.js > Change unregister() to register()
  - npm install react-router-dom@6
  - npm install axios
  - npm react xml-parser
  - npm run build
  - npm install -g serve
  - serve -s build

*/
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import List from "./views/List";
import Contact from "./views/Contact";
import Library from "./views/Library";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="list" element={<List />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
