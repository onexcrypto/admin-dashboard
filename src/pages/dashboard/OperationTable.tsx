/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import TicketTable from '../../components/tables/TicketTable';
import TransactionTable from '../../components/tables/TransactionTable';


const OperationTable = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-6">
                    <TicketTable />
                </div>
                <div className="col-xl-6">
                    <TransactionTable />
                    {/* .card*/}
                </div>
                {/* .col*/}
            </div>
            {/* end row*/}
        </>
    )
}

export default OperationTable