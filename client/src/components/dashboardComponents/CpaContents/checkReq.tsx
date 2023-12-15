import React , {useState} from 'react'

import api from '../../../controller/apiCalls'

class CheckReq extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            no:0,
            inputValues: Array.from({ length: 0 }, () => ''),
            req:""
        }
    }
    noCourses=()=>{
        const no = (document.getElementById("noReq") as HTMLInputElement)?.value
        this.setState({
            no:no
        })
    }
    checkReq = async() => {
        let token = sessionStorage.getItem("token")
        let courses=[]
        for(let i=1; i<this.state.no+1;i++) {
            courses.push((document.getElementById(`input${i}`) as HTMLInputElement)?.value)
        }
        let req = await api.courseReq({"token":token,"courses":courses})
        this.setState({
            req:req
        })
    }
    render(){
        return <div  className="academics-right-section" >
            {this.state.req && <div className="req-result">{"Satisfies "+this.state.req.progress+" requirements"}</div>}
            <div className="how-many-sec">
                <div> How many courses do you want to check ?</div>
                <input name="noReq" id="noReq" type="number" className="how-input"></input>
                <div onClick={()=>this.noCourses()}  className="login-modal-button b">Submit</div>
            </div>
            {this.state.no > 0 && (
                <div className="how-many-sec">
                    <div> Enter course numbers </div>
                    {Array.from({ length: this.state.no }).map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        id={`input${index + 1}`}
                        value={this.state.inputValues[index]}
                        className="courseno-input"
                    />
                    ))}
                    <div onClick={()=>this.checkReq()}  className="login-modal-button b"> Check Requirement</div>
                </div>
            )}
        </div>
    }
}

export default CheckReq