import React from 'react'

const Graduation = (props:any) =>{
    return <div  className="academics-right-section">
                <div>
                    <div className="academic-label">
                        Expected Graduation Term:
                    </div>
                    <div className="academic-content">
                        {props.sdetails.gradSem}
                    </div>
                </div>
                <div>
                    <div className="academic-label">
                        Expected Graduation Year:
                    </div>
                    <div className="academic-content">
                        {props.sdetails.gradYear}
                    </div>
                </div>
            </div>
}

export default Graduation