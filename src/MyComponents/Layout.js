import React from 'react'
import pic from './codeforcesImage.png'
import './style1.css'
function Layout({ myfunction }) {
    return (
        <>
            <div>
                <section class="content">
                    <h1 class="heading"> Codeforces User Tracker </h1>
                    <div class="cfimg"><img src={pic} width="60%" height="15%"></img><br /></div>
                    <div class="centreDiv">
                        <div id="details">
                            <label id="label">Enter the handle</label>
                            <input type="text" id="nameid" />
                        </div>
                        <div class="buton">
                            <button class="btn btn-success btn-sm" onClick={() => myfunction()}> Go </button>
                        </div>
                        <div id="info" class="container my-5">
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Layout
