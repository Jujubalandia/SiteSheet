import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Profile from './pages/templates/profile';
import Home  from './pages/home';
import Api from './pages/api/api';
import Youtube from './pages/templates/youtube/youtube';
import Table from './pages/templates/bigTable/table';

function App() {
  return (
    <>
    <Router>
      <div>
                
        <Switch>
           <Route exact path="/" >
              <Home/>
             </Route> 
             <Route exact path="/api" >
              <Api/>
             </Route> 
          <Route path="/profile/:id" children={<Profile />} />
          <Route path="/youtube/:id" children={<Youtube />} />
          <Route path="/table/:id" children={<Table/>} />

        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
