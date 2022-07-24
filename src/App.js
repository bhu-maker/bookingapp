import * as React from "react";
import Home from './Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {List} from './List';

const App = () => {
 return(
<>
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Home/>}></Route>
  <Route path="/list" exact element={<List/>}></Route>
</Routes>
</BrowserRouter>

</>
 )
}
export default App