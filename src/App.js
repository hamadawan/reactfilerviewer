import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";

import MyFileViewer from './Components/MyFileViewer'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Link
                target="_blank"
                to={"/files/word?url=" + "https://file-examples-com.github.io/uploads/2017/02/file-sample_500kB.docx"}   
                className="button"
              >Word</Link> 
              <Link
                target="_blank"
                to={"/files/pdf?url=" + "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
                className="button"
              >PDF</Link> 
              <Link
                target="_blank"
                to={"/files/excel?url=" + "https://trumpexcel.com/wp-content/uploads/2015/09/Excel-To-Do-List-Template-Print.xlsx"}
                className="button"
              >Excel</Link> 
            </div>
          </Route>

          <Route exact path="/files/word">
            <MyFileViewer />
          </Route>
          <Route exact path="/files/excel">
            <MyFileViewer />
          </Route>
          <Route exact path="/files/pdf">
            <MyFileViewer />
          </Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
