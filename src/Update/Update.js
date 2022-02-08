import React,{Component} from "react";
import StudentService from "../StudentService/StudentService";
import {withRouter} from 'react-router';





class Update extends Component{


  constructor(props) {
    super(props)
    this.state = {
        id:this.props.match.params.id,
        
        name: '',
        emailid: '',

    }
    this.changeidhandler = this.changeidhandler.bind(this);
    this.changenamehandler = this.changenamehandler.bind(this);
    this.changeemailidhandler = this.changeemailidhandler.bind(this);
    this.UpdateStudent=this.UpdateStudent.bind(this);
    
}






componentDidMount(){
  StudentService.getStudentById(this.state.id).then((res)=>{
    let Student = res.data;
    this.setState({id:Student.id,name:Student.name,emailid:Student.emailid});
  });
}

UpdateStudent=(e)=>{
  e.preventDefault();
  let Student = {id:this.state.id, name: this.state.name, emailid: this.state.emailid,
                };
  console.log("Student =>" + JSON.stringify(Student));

  StudentService.addStudent(Student).then(res => {
    this.props.history.push('/Grid');
    
});
        

}    
 

  
     
     
  

      
 



// componentDidMount(){
//   fetch("http://localhost:8080/students/"+this.props.match.params.id).then((res)=>{
//     res.json().then((result)=>{
//       // console.warn(result);
//       this.setState({
//         id:result.id,
//         name:result.name,
//         emailid:result.emailid
//       })
//     })
//   })
// }




changeidhandler = (event) => {
    this.setState({id: event.target.value});
}

changenamehandler = (event) => {
    this.setState({name: event.target.value});
}

changeemailidhandler = (event) => {
    this.setState({emailid: event.target.value});
}

// UpdateStudent(){
//   fetch('http://localhost:8080/update/'+ this.state.id , {
//     method:"PUT",
//     headers:{
//       'Accept':'application/json',
//       'Content-Type':'application/json'
//     },
//      body: JSON.stringify(this.state)
//   }).then((result)=>{
//     result.json().then((res)=>{
//       alert("Data has been updated")
//     })
   
   
//   })
// }


  render(){
        //  console.warn(this.props.match.params.id);
    return(
      <div>
       <div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className='text-center'>update Student</h3>
                            <form>
                                <label> update Student id :</label>
                                <input placeholder='id' name='id' className='form-control'
                                       value={this.state.id} onChange={this.changeidhandler}/>

                                <label> update Student name :</label>
                                <input placeholder='name' name='name' className='form-control'
                                       value={this.state.name} onChange={this.changenamehandler}/>

                                <label>update Student emailid :</label>
                                <input placeholder='emailid' name='emailid' className='form-control'
                                       value={this.state.emailid} onChange={this.changeemailidhandler}/>

                                <button className='btn btn-primary' onClick={this.UpdateStudent} >Update</button>
                                
                            </form>

                        </div>

                    </div>
                </div>
            </div>
       
      </div>
    )
  }
}
export default withRouter(Update);





















// import React, {Component} from 'react';
// import StudentService from '../StudentService/StudentService';


// class Update extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
            
//             id: '',
//             name: '',
//             emailid: '',

//         }
//         this.changeidhandler = this.changeidhandler.bind(this);
//         this.changenamehandler = this.changenamehandler.bind(this);
//         this.changeemailidhandler = this.changeemailidhandler.bind(this);
       
//     }


//     componentDidMount(){
//         StudentService.getStudentById(this.state.id).then( (res) =>{
//             let Student = res.data;
//             this.setState({id: Student.firstName,
//                 Name: Student.Name,
//                 emailid : Student.emailid
//             });
//         });
//     }

    

//     updateStudent(e) {
//         e.preventDefault();
//         let Student = {id: this.state.id, name: this.state.name, emailid: this.state.emailid};
//         console.log("Student =>" + JSON.stringify(Student));

        
//             StudentService.addStudent(Student).then(res => {
//                 this.props.history.push('/Grid');
//             });
        
        
//         } 
      

//     cancel() {
//         this.props.history.push("/Grid");
//     }

//     changeidhandler = (event) => {
//         this.setState({id: event.target.value});
//     }

//     changenamehandler = (event) => {
//         this.setState({name: event.target.value});
//     }

//     changeemailidhandler = (event) => {
//         this.setState({emailid: event.target.value});
//     }

//     render() {
//         return (
//             <div>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className="card col-md-6 offset-md-3 offset-md-3">
//                             <h3 className='text-center'>Add Student</h3>
//                             <form>
//                                 <label>Student id :</label>
//                                 <input placeholder='id' name='id' className='form-control'
//                                        value={this.state.id} onChange={this.changeidhandler}/>

//                                 <label>Student name :</label>
//                                 <input placeholder='name' name='name' className='form-control'
//                                        value={this.state.name} onChange={this.changenamehandler}/>

//                                 <label>Student emailid :</label>
//                                 <input placeholder='emailid' name='emailid' className='form-control'
//                                        value={this.state.emailid} onChange={this.changeemailidhandler}/>

//                                 <button className='btn btn-primary' onClick={this.updateStudent}>Submit</button>
//                                 <button className='btn btn-secondary' onClick={this.cancel.bind(this)}>Cancel</button>
//                             </form>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Update;









// import React from 'react';
// import { useState } from "react";
// // import Axios from 'axios';

// export default function Student() {
//   const [id, setId] = useState(0);
//   const [name, setname] = useState("");
//   const [emailid, setEmailid] = useState("");

//   const handelClick = (e) => {
//     e.preventDefault()
//     const Student = { id, name, emailid }
//     console.log(Student);
//     fetch("http://localhost:8080/addStudent",
//       {
//         method: "Post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(Student)
//       }).then(() => {
//         console.log("new added")
//       })

//   }


//   return <div>
//     <div className="information">

//       <label> Student id </label>
//       <input type="Student id"
//         onChange={(event) => { setId(event.target.value); }}
//       /><br />
//       <br />

//       <label > Student name </label>
//       <input type="Student name"
//         onChange={(event) => { setname(event.target.value); }}
//       />
//       <br />
//       <br />

//       <label > Student emailid </label>
//       <input type="Student emailid"
//         onChange={(event) => { setEmailid(event.target.value); }}
//       />
//       <br />
//       <br />

//       <button onClick={handelClick} >Submit</button>

//       <button >Cancel</button>
//     </div>
//   </div>


// }