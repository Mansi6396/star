import React, {Component} from 'react';
import StudentService from '../StudentService/StudentService';
import { withRouter} from 'react-router';


class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            id: '',
            name: '',
            emailid: '',
            Language:{
                php: false,
                Ruby: false,
                Java: false
            },
            Gender:{
                male: false,
                female:false
            }
            
        }
        this.changeidhandler = this.changeidhandler.bind(this);
        this.changenamehandler = this.changenamehandler.bind(this);
        this.changeemailidhandler = this.changeemailidhandler.bind(this);
        this.handelcheckbox = this.handelcheckbox.bind(this);
        this.handelradio = this.handelradio.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    

    saveStudent(e) {
        e.preventDefault();
        let Student = {id: this.state.id, name: this.state.name, emailid: this.state.emailid,
                      Gender:this.state.Gender,Language:this.state.Language};
        console.log("Student =>" + JSON.stringify(Student));

        
            StudentService.addStudent(Student).then(res => {
                this.props.history.push('/Grid');
                
            });
        
  
            
        } 
      

    cancel() {
        this.props.history.push("/Grid");
    }

    changeidhandler = (event) => {
        this.setState({id: event.target.value});
    }

    changenamehandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeemailidhandler = (event) => {
        this.setState({emailid: event.target.value});
    }
    
    handelcheckbox = (event)=>{
        console.log(event.target.value);
        let state = this.state;
        state.Language[event.target.value]=event.target.checked;
        this.setState(state);
        console.log(this.state.Language);
    }
    handelradio = (event)=>{
        console.log(event.target.value);
        let state = this.state;
        state.Gender[event.target.value]=event.target.checked;
        this.setState(state);
        console.log(this.state.Gender);
    }

    

    render() {
        return (
             <div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className='text-center'>Add Student</h3>
                            <form>
                                <label>Student id :</label>
                                <input placeholder='id' name='id' className='form-control'
                                       value={this.state.id} onChange={this.changeidhandler}/>

                                <label>Student name :</label>
                                <input placeholder='name' name='name' className='form-control'
                                       value={this.state.name} onChange={this.changenamehandler}/>

                                <label>Student emailid :</label>
                                <input placeholder='emailid' name='emailid' className='form-control'
                                       value={this.state.emailid} onChange={this.changeemailidhandler}/>

                                <label>Gender :</label>    
                                male <input type="radio"  name='Gender' checked={this.state.Gender.male}
                                value='male' onChange={this.handelradio}/>
                               
                                female <input type="radio"  name='Gender' checked={this.state.Gender.female}
                                 value='female' onChange={this.handelradio}/><br/>
                                
                                <label>Language :</label>
                                php  <input type="checkbox" name='Language' checked={this.state.Language.php}
                                 value='php' onChange={this.handelcheckbox}/>

                                Ruby  <input type="checkbox" name='Language' checked={this.state.Language.Ruby}
                                 value='Ruby' onChange={this.handelcheckbox}/> 
                                
                                Java  <input type="checkbox" name='Language' checked={this.state.Language.Java}
                                 value='Java' onChange={this.handelcheckbox}/><br/>


                                <button className='btn btn-primary' onClick={this.saveStudent}>Submit</button>
                                <button className='btn btn-secondary' onClick={this.cancel.bind(this)}>Cancel</button>
                            </form>
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Student);





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

