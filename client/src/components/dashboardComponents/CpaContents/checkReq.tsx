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
        return <div>
            <div>
                <div> How many courses do you want to check ?</div>
                <input name="noReq" id="noReq" type="number"></input>
                <div onClick={()=>this.noCourses()}>Submit</div>
            </div>
            {this.state.no > 0 && (
                <div>
                    <div> Enter course numbers </div>
                    {Array.from({ length: this.state.no }).map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        id={`input${index + 1}`}
                        value={this.state.inputValues[index]}
                    />
                    ))}
                    <div onClick={()=>this.checkReq()}> Check Requirement</div>
                </div>
            )}
            {this.state.req && <div>{"Satisfies "+this.state.req.progress+" requirements"}</div>}
        </div>
    }
}

export default CheckReq