/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Breadcrumb from '../../components/layouts/Breadcrumb';
import TicketTable from '../../components/tables/TicketTable';
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
                            {/*start row*/}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card card-animate">
                                        <div className="card-header">
                                            <h4 className='card-title'>Tickets</h4>
                                        </div>
                                        <div className="card-body">
                                            <TicketTable />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end row */}
                        </div>
                    </div>
                </div>
            </div>
            {/* container-fluid */}
        </div>
    )
}

export default Tickets