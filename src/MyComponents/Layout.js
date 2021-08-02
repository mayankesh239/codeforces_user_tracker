import React from 'react'
import pic from './codeforcesImage.png'
import './style1.css'
function Layout({ myfunction }) {
    let layoutStyle1 = {
        // backgroundColor: "rgba(255, 255, 255, 0.651)",
        backgroundColor: "white",
        paddingLeft: "15%",
        paddingBottom: "5%",
        paddingTop: "5%"
    }
    let layoutStyle2 = {
        backgroundColor: "rgba(0, 0, 0, 0.74)",
        paddingLeft: "25%",
    }
    return (
        <>
            <div>
                <section className="content" >
                    <div style={layoutStyle1}>
                        <div className="heading"> Codeforces User Tracker </div>
                        <div className="cfimg"><img src={pic} width="60%" height="80%" alt="CODEFORCES"></img><br /></div>
                        <div className="centreDiv">
                            <div id="details">
                                <input type="text" id="nameid" placeholder="Enter the handle" />
                            </div>
                            <div className="buton">
                                <button className="btn btn-success btn-sm" onClick={() => myfunction()}><div className="button-text">Go </div> </button>
                            </div>
                        </div>
                    </div>
                    <div id="info" className="container my-5 " style={layoutStyle2}>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Layout
