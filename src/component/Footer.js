import React from 'react';

const Footer = (props) => {
    const {compeny, email} = props;
    return (
        <div className="container-fluid">
            <hr/>
            <div className="text-center title text-uppercase">
                <span className="text-danger"> | Contact me! : {email} </span>
                <span className="text">Powered By  {compeny}</span>
            </div>
        </div>
    )
}

export default Footer;
