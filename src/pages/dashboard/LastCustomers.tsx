/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BusinessProfileChart from '../../components/charts/BusinessProfileChart';
import CustomerTable from '../../components/tables/CustomerTable';

const LastCustomers = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card card-height-100">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Profils Business</h4>
                            <div className="flex-shrink-0">
                                <div className="dropdown card-header-dropdown">
                                    <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted">Report<i className="mdi mdi-chevron-down ms-1" /></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">Download Report</a>
                                        <a className="dropdown-item" href="#">Export</a>
                                        <a className="dropdown-item" href="#">Import</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            <BusinessProfileChart />
                        </div>
                    </div>
                    {/* .card*/}
                </div>
                {/* .col*/}
                <div className="col-xl-8">
                    <div className="card">
                    <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Comptes Récents</h4>
                        <div className="flex-shrink-0">
                        <button type="button" className="btn btn-soft-info btn-sm">
                            <i className="ri-file-list-3-line align-middle" /> Generate Report
                        </button>
                        </div>
                    </div>
                    {/* end card header */}
                    <div className="card-body">
                        <div className="table-responsive table-card">
                            <CustomerTable />
                        </div>
                    </div>
                    </div>
                    {/* .card*/}
                </div>
            {/* .col*/}
            </div>
            {/* end row*/}

        </>
    )
}

export default LastCustomers