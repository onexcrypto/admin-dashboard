/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Outlet} from 'react-router-dom';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import NotificationModal from './NotificationModal';
import Footer from './footer/Footer';
import ThemeSettings from './ThemeSettings';

const MainLayout = () => {

    const topFunction =()=>{

    }

    return (
        <>
            <div id="layout-wrapper">
                <Topbar />
                <NotificationModal/ >
                <Sidebar />
                <div className="vertical-overlay" />

                {/* Start right Content here */}
                {/* ============================================================== */}
                <div className="main-content">
                    <Outlet />
                    
                {/* End Page-content */}
                <Footer />
                </div>
                {/* end main content*/}
            </div>
            {/*start back-to-top*/}
            <button onClick={topFunction} className="btn btn-danger btn-icon" id="back-to-top">
                <i className="ri-arrow-up-line" />
            </button>
            {/*end back-to-top*/}
            <ThemeSettings></ThemeSettings>
        </>
    )
}

export default MainLayout