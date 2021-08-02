import React from 'react'

function Footer() {

    let footerStyle = {
        width: "100%",
        fontSize: "1.2vw",
        position: "fixed",
        bottom: '0',
        left: '0',
        paddingTop: "1%"
    }

    return (
        <>
            <div>
                <footer className="bg-dark text-light " style={footerStyle}>
                    <p className="text-center">
                        Created by Mayankesh Jha &copy; | 2021 All Rights Reserved
                    </p>
                </footer>
                )
            </div>
        </>
    )
}

export default Footer