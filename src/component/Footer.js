import React from 'react';

const Footer = (props) => {
    const {compeny, email} = props;
    return (
        <div>
           Powered By  {compeny} | Contact me! : {email}
        </div>
    )
}

export default Footer;
