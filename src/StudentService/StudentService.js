import axios from "axios";


const STUDENT_API_BASE_URL = "http://localhost:8080/students";
const STUDENT_API_BASE_URL1 = "http://localhost:8080/addStudent";
const STUDENT_API_BASE_URL2="http://localhost:8080/update";
const STUDENT_API_BASE_URL3 = "http://localhost:8080/students";
const STUDENT_API_BASE_URL4= "http://localhost:8080/delete";

class StudentService {
    getStudent() {
        return axios.get(STUDENT_API_BASE_URL);
    }

    getStudentById(StudentId) {
        return axios.get(STUDENT_API_BASE_URL3 + '/' + StudentId);
    }

    addStudent(Student) {
        return axios.post(STUDENT_API_BASE_URL1, Student);
    }

    UpdateStudent(Student,StudentId){
        return axios.put(STUDENT_API_BASE_URL2 + '/'+ StudentId,Student);
    }

    deleteStudent(id){
        return axios.delete(STUDENT_API_BASE_URL4 + '/' + id);
    }

}


export default new StudentService();