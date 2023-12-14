import {GradeRequest, GradeReply} from '../proto/frontend_pb'
import { SDMS_BackendClient } from "../proto/FrontendServiceClientPb";
const sdmsClient = new SDMS_BackendClient("http://" + "localhost" + ":8081");
const getUsers =() => {
    return new Promise<GradeReply>((resolve, reject) => {
        const request = new GradeRequest();
        request.setUserId('bob123')
        request.setCourseCode("COMPSCI 520")
        request.setToken('abc')
        sdmsClient
          .getGrade(request, null)
          .then((message) => {console.log(message.getGrade())})
          .catch((error) => reject(error));
      });
}
const userAuth = (data:any) => {
    console.log(data)
    sessionStorage.setItem("token","random_token")
    window.location.href=`/dashboard?id=${data.userId}`

}
const studentProfile = (data:any) => {
    console.log(data)
    let response = {
            name:{
                fname:"bob123", 
                mname:"blah",
                lname:"boo"
            },
            email_id:"bob@umass.edu",
            address:{
                line1 : "address line 1",
                city : "amherst",
                state : "MA",
                zip : "01002",
            },
            dept:"COMPSCI", 
            degree: "MS",
            phone:"+14138476204",
            advisor: "Pelizabeth Earolski", 
            gpa: 3.88, 
            grad_sem:"Fall",
            grad_year:2023
    }
    return response

}

const studentCourse = (data:any) => {
    console.log(data)
    let response = {
        current_courses: [{
            "course_number":"COMPSCI 520",
            "dept":"Computer Science",
            "n_credits":3,
            "course_name":"Software Engineering",
            "instructors":["A","B","C"]
        }, {
            "course_number":"COMPSCI 589",
            "dept":"Computer Science",
            "n_credits":3,
            "course_name":"Machine learning",
            "instructors":["A","B","C"]
        },{
            "course_number":"COMPSCI 677",
            "dept":"Computer Science",
            "n_credits":3,
            "course_name":"Distributed Operating System",
            "instructors":["A","B","C"]
        }],
        "completed_courses": [
                {
                    "course_number": "COMPSCI 532",
                    "dept":"Computer Science",
                    "semester": "Fall", 
                    "year": 2022,
                    "n_credits":3,
                    "course_name":"Systems for Data Science",
                    "instructors":["A","B","C"],
                    "grade":"A-"
                }, 
                {
                    "course_number": "COMPSCI 574",
                    "dept":"Computer Science",
                    "semester": "Fall", 
                    "year": 2022,
                    "n_credits":3,
                    "course_name":"I don't know course name",
                    "instructors":["A","B","C"],
                    "grade":"B+"
                }
            ]
    }
    return response
}

const courseReq = (data:any) => {
    let response = {
        "progress":"4/5"
    }
    return response
}
const browseCourse = (data:any) => {
    let response = {
        "course":[
            {
            "course_number":"COMPSCI 532",
            "dept":"Computer Science",
            n_credits : 3,
            course_name : "Distributed Operating System",
            description : "Distributed Operating System blah blah",
            req_satisfied : ["core","elective"]
            },
            {
                "course_number":"COMPSCI 532",
                "dept":"Computer Science",
                n_credits : 3,
                course_name : "Distributed Operating System",
                description : "Distributed Operating System blah blah",
                req_satisfied : ["core","elective"]
            },
            {
                "course_number":"COMPSCI 532",
                "dept":"Computer Science",
                n_credits : 3,
                course_name : "Distributed Operating System",
                description : "Distributed Operating System blah blah",
                req_satisfied : ["core","elective"]
            },
            {
                "course_number":"COMPSCI 532",
                "dept":"Computer Science",
                n_credits : 3,
                course_name : "Distributed Operating System",
                description : "Distributed Operating System blah blah",
                req_satisfied : ["core","elective"]
                }
        ]
    }
    return response
}

export default {getUsers,userAuth,studentProfile,studentCourse,browseCourse}