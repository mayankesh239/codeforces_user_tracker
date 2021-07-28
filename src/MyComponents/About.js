import React from 'react'

function About() {
    let myStyle1 =
    {
        fontFamily: " monospace",
        fontSize: "40px",
    }
    let myStyle = {
        fontFamily: " monospace",
        fontSize: "30px",
        paddingTop: "100px",
        paddingLeft: "80px"
    }
    return (
        <>
            <div style={myStyle} className="container ">
                <div style={myStyle1}>
                    About this App
                </div>
                <hr />
                <p>This is an app designed to track the informations of the users on Codeforces. This will give you the details of performmance of a user. You just need to type his handle and press Go.</p>
                <hr />
            </div>

        </>
    )
}

export default About

