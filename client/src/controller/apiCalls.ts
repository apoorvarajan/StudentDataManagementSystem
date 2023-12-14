import {LoginRequest,LoginReply,StudentDetailsReply,IDRequest,CurrentCoursesReply} from '../proto/frontend_pb'
import { SDMS_BackendClient } from "../proto/FrontendServiceClientPb";
const sdmsClient = new SDMS_BackendClient("http://" + "localhost" + ":8081");
const callLogin = (data:any) => {
    return new Promise<LoginReply>((resolve, reject) => {
        const request = new LoginRequest();
        request.setUserId(data.userId)
        request.setPassword(data.pwd)
        request.setRole(data.role)
        sdmsClient
          .login(request, null)
          .then((message) => resolve(message))
          .catch((error) => reject(error));
      });
}
const callStudentProfile = (data:any) => {
    return new Promise<StudentDetailsReply>((resolve, reject) => {
        const request = new IDRequest();
        request.setUserId(data.userId)
        request.setToken(data.token)
        sdmsClient
          .getStudentDetails(request, null)
          .then((message) => resolve(message))
          .catch((error) => reject(error));
      });
}
const callStudentCourses = (data:any) => {
    return new Promise<CurrentCoursesReply>((resolve, reject) => {
        const request = new IDRequest();
        request.setUserId(data.userId)
        request.setToken(data.token)
        sdmsClient
          .getStudentCourses(request, null)
          .then((message) => resolve(message))
          .catch((error) => reject(error));
      });
}
const userAuth = async (data:any) => {
    let res:any = await callLogin(data)
    sessionStorage.setItem("token",res.array[1])
    window.location.href=`/dashboard?id=${data.userId}`

}
const studentProfile = async (data:any) => {
    let res:any = await (await callStudentProfile(data)).toObject()
    return res
}

const studentCourse = async (data:any) => {
    let res:any = await (await callStudentCourses(data)).toObject()
    return res
    
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

export default {userAuth,studentProfile,studentCourse,browseCourse}