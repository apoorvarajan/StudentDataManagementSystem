import React from 'react'

class TranscriptRequest extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            tReq:false
        }
    }
    reqTranscript = () => {
        this.setState({
            tReq:true
        })
    }
    render(){
        return <div  className="academics-right-section">
        {!this.state.tReq && <div onClick={()=> this.reqTranscript()} className="login-modal-button blah"> Request for Transcript</div>}
        {this.state.tReq && <div className="academic-content">
            Your Transcript request has been sent. You will recieve it in your school email in 2 business days
        </div>}
    </div>
    }
}

export default TranscriptRequest