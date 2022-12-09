import React from 'react'
import Breadcrumb from '../../components/layouts/Breadcrumb';
import type { Bread } from '../../models';
import Balance from './Balance';
import Income from './Income';
import OperationTable from './OperationTable';
import LastCustomers from './LastCustomers';

const Dashboard = () => {
    const bread: Bread = {
        title: "Dashboard",
        subtitle: "page",
        page: "main"
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
                            <Balance />
                            {/*end row*/}
                            <Income />
                            <OperationTable />
                            <LastCustomers />
                        </div>
                    </div>
                </div>
            </div>
            {/* container-fluid */}
        </div>
    )
}

export default Dashboard