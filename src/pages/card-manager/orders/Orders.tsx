/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Breadcrumb from '../../../components/layouts/Breadcrumb';
import type { Bread } from '../../../models';


const Orders = () => {
    const bread: Bread = {
        title: "Dashboard",
        subtitle: "card-manager",
        page: "Orders"
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
                            {/* start row */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-animate" style={{ maxHeight:350 }}>
                                        <div className="card-header">
                                            <h4 className='card-title'>Liste des commandes de 1XCARD</h4>
                                        </div>
                                        <div className="card-body">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*send row*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* container-fluid */}
        </div>
    )
}

export default Orders