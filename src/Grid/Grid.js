import React, { Component } from 'react';

import StudentService from '../StudentService/StudentService';

import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';




class Grid extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            students: []

        }
       this.deleteStudent = this.deleteStudent.bind(this);
    this.UpdateStudent=this.UpdateStudent.bind(this);
    }
   
    
    
     

    componentDidMount() {
        StudentService.getStudent().then((res) => {
            this.setState({ students: res.data });
        });
    }
   
    
       
    

    deleteStudent(id){
        StudentService.deleteStudent(id).then( (res) =>  {
           this.setState({students: this.state.students.filter( S=> S.id  !== id)});
        });
       
    }

    //  delete(id){
    //      fetch("http://localhost:8080/delete/"+id,
    //      {
    //          method: "DELETE",
    //      }).then((result)=>{
    //          result.json().then((result)=>{
                
    //              this.getData()
    //          })
    //      })
         
    //  }
    
    UpdateStudent(id){
    this.props.history.push(`/Update/`+id);
           
  } 
   
         


    

    render() {
        return (

            <div>

                <h2 className='text-center'>students List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> id</th>
                                <th> name</th>
                                <th> emailid</th>
                                <th>Gender</th>
                                <th>Language</th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.students.map(
                                    S =>
                                        <tr key={S.id}>
                                            <td>{S.id}</td>
                                            <td>{S.name}</td>
                                            <td>{S.emailid}</td>
                                            <td>{S.Gender}</td>
                                            <td>{S.Language}</td>
                                             {/* <td> <Link to={"/update/"+S.id}><button> Update</button> </Link> </td> */}
                                            
                                            <td>
                                                <button onClick={()=>{this.UpdateStudent(S.id)}} className='btn btn-info'>Update</button>     
                                            <button onClick={()=>{this.deleteStudent(S.id)}} className='btn btn-danger'>Delete</button>
                                                         
   
                                            </td>

                                        </tr>
                                )
                            }
                        </tbody>


                    </table>

                </div>
            </div>
        );
    }
}

export default withRouter(Grid);



// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';

// const columns = [

// { field: 'name', StudentName: 'NAME', width: 170 },
// { field: 'id', StudentName: 'id', width: 170 },
// ];

// const rows = [

// ];

// export default function App() {
// return (
// 	<div style={{ height: 500, width: '80%' }}>
// 	<h4>Student Details</h4>
// 	<DataGrid rows={rows} columns={columns} />
// 	</div>
// );
// }