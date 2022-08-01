import * as React from "react";
import Home from './Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {List} from './List';
import {Form1} from './Form1'

const App = () => {
 return(
<>

<Form1/>
{/* <BrowserRouter>
<Routes>
  <Route path="/" exact element={<Home/>}></Route>
  <Route path="/list" exact element={<List/>}></Route>
</Routes>
</BrowserRouter> */}

</>
 )
}
export default App