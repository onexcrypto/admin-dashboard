/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Breadcrumb from '../../components/layouts/Breadcrumb';
import type { Bread } from '../../models';


const Tickets = () => {
    const bread: Bread = {
        title: "Dashboard",
        subtitle: "page",
        page: "Tickets"
    }
    return (
        <div className="page-content">
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <Breadcrumb bread={bread} />
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col">
                        <div className="h-100">
                            {/*end row*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* container-fluid */}
        </div>
    )
}

export default Tickets