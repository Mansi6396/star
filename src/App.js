import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Student from './Student/Student';
import Grid from './Grid/Grid';
import Update from './Update/Update';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <h1>dashboard:</h1>

                <Router>
                    <Link to="/Student"><button>Student</button></Link>
                    <Link to="/Grid"><button>Grid</button></Link>
                    <Link to="/Update"></Link>
                    
                    
                    <Route exact path="/Student"><Student/></Route>
                    <Route excat path="/Grid"><Grid/></Route>
                    <Route excat path="/Update/:id"
                    render={(props)=>(
                        <Update {...props} />
                    )}></Route>




                    {/* <Route exact path="/Update/:id"
                    render={props=>(
                        <Update {...props}/>
                    )}
                    
                    
                    ></Route> */}
                    
                </Router>
            </div>
        );
    }
}

export default App;



// import './App.css';
// import { useState } from "react";
// import Axios from 'axios';

// function App() {
//   const[Name, setName]= useState("");
//   const[Rollno, setRollno]= useState(0);

//   // const displayinfo = ()=>{
//   //   console.log(Name + Rollno );
//   // };
//   const addStudent = () =>{

//     Axios.post('http://localhost:3002/create', { 
//       Name:Name, 
//       Rollno:Rollno,
//     }).then(()=>{
//       console.log("sucesss");
//     });

//   };


//   return (

//      <div className="App">
//       <div className="information">

//           <label> Name</label>
//           <input type="Student Name"  
//            onChange={(event)=>{setName(event.target.value);}} 
//           />


//           <label >Rollno</label>
//           <input type="Student Rollno" 
//           onChange={(event)=>{setRollno(event.target.value);}} 
//           />


//         <button onClick={addStudent} >Submit</button>
//         <button >Cancel</button>
//       </div>
//     </div>
//   );
// }

// export default App;
