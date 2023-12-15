import {LoginRequest,LoginReply,StudentDetailsReply,IDRequest,CurrentCoursesReply,BrowseReply,BrowseRequest,RequirementReply,RequirementRequest,EmailReply,EmailRequest} from '../proto/frontend_pb'
import { SDMS_BackendClient } from "../proto/FrontendServiceClientPb";
const sdmsClient = new SDMS_BackendClient("http://" + "localhost" + ":8081");
const callLogin = (data:any) => {
    return new Promise<LoginReply>((resolve, reject) => {
        const request = new LoginRequest();
        request.setUserId(data.userId)
        request.setPassword(data.pwd)
        request.setRole(data.role)
        console.log(request)
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
        console.log(request)
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

const callBrowseCourses = (data:any) => {
    return new Promise<BrowseReply>((resolve, reject) => {
        const request = new BrowseRequest();
        request.setDegree(data.degree)
        request.setDept(data.dept)
        request.setToken(data.token)
        sdmsClient
          .getCourses(request, null)
          .then((message) => resolve(message))
          .catch((error) => reject(error));
      });
}
const callCheckReq = (data:any) => {
    return new Promise<RequirementReply>((resolve, reject) => {
        const request = new RequirementRequest();
        request.setCourseIdList(data.courses)
        request.setToken(data.token)
        sdmsClient
          .getCourseRequirements(request, null)
          .then((message) => resolve(message))
          .catch((error) => reject(error));
      });
}

const callGradeUpload = (data:any) => {
    return new Promise<RequirementReply>((resolve, reject) => {
        const request = new RequirementRequest();
        request.setCourseIdList(data.courses)
        request.setToken(data.token)
        sdmsClient
          .getCourseRequirements(request, null)
          .then((message) => resolve(message))
          .catch((error) => reject(error));
      });
}
const callSendEmail = (data:any) => {
    return new Promise<EmailReply>((resolve, reject) => {
        const request = new EmailRequest();
        console.log(data)
        request.setUserId(data.user_id)
        request.setSubject(data.subject)
        request.setBody(data.body)
        request.setToken(data.token)
        sdmsClient
          .sendEmail(request, null)
          .then((message) => resolve(message))
          .catch((error) => reject(error));
      });
}

const userAuth = async (data:any) => {
    let res:any = await callLogin(data)
    sessionStorage.setItem("token",res.array[1])
    sessionStorage.setItem("uId",data.userId)
    if (res.array[0]!="Success"){
        window.alert(res.array[0])
    }
    else{
        if(data.role=="instructor"){
            window.location.href=`/faculty?id=${data.userId}`
        }
        else if(data.role=="admin"){
            window.location.href=`/admin?id=${data.userId}`
        }
        else{
            window.location.href=`/dashboard?id=${data.userId}`
        }
    }
}
const studentProfile = async (data:any) => {
    let res:any = await (await callStudentProfile(data)).toObject()
    console.log(res)
    return res
}

const studentCourse = async (data:any) => {
    let res:any = await (await callStudentCourses(data)).toObject()
    return res
    
}

const courseReq = async(data:any) => {
    let res:any = await (await callCheckReq(data)).toObject()
    return res
}
const browseCourse = async(data:any) => {
    let res:any = await (await callBrowseCourses(data)).toObject()
    return res
}

const gradeUpload = async(data:any) => {
    let res:any = await (await callGradeUpload(data)).toObject()
    return res
}

const setCourseDesc = async(data:any) => {
    let res:any = await (await callGradeUpload(data)).toObject()
    return res
}

const sendNotif = async(data:any) => {
    let res:any = await (await callSendEmail(data)).toObject()
    return res
}

export default {userAuth,studentProfile,studentCourse,browseCourse,courseReq,gradeUpload,setCourseDesc,sendNotif}