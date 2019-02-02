import React from 'react'
import Header from "../../component/Header";
import Footer from '../../component/Footer';

const NotFound = () =>  {
    return (
        <div>
            <Header/>
            <div className="container col-md-8 text-center">
                <h1 className="display-2 text-muted mt-5">404</h1>
                <h2 className="display-4 text-muted mb-4">NotFound</h2>
                <p className="title mb-5">ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็บที่คุณต้องการไม่มีอยู่จริง</p>
            </div>
            <Footer compeny="Prakasit.Crops" email="prakasitbm@gmail.com" />
        </div>
    )
}

export default NotFound;