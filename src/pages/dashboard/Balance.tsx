/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Balance = () => {
    return (
        <>
            <div className="row mb-3 pb-1">
                <div className="col-12">
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div className="flex-grow-1">
                            <h4 className="fs-16 mb-1">BIENVENUE, ADMIN!</h4>
                            <p className="text-muted mb-0">Ravis de vous revoir aujourd'hui, Que puis-je faire pour vous?</p>
                        </div>
                        <div className="mt-3 mt-lg-0">
                            <form action="">
                                <div className="row g-3 mb-0 align-items-center">
                                    <div className="col-sm-auto">
                                        <div className="input-group">
                                            <input type="date" className="form-control border-0 dash-filter-picker shadow" data-provider="flatpickr" data-range-date="true" data-date-format="d M, Y" data-deafult-date="01 Jan 2022 to 31 Jan 2022" />
                                            <div className="input-group-text bg-primary border-primary text-white">
                                                <i className="ri-calendar-2-line" />
                                            </div>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-soft-success"><i className="ri-add-circle-line align-middle me-1" /> Add Product</button>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"><i className="ri-pulse-line" /></button>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </form>
                        </div>
                    </div>
                    {/* end card header */}
                </div>
                {/*end col*/}
            </div>

            {/* etats */}
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    {/* card */}
                    <div className="card card-animate">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0"> Total Earnings</p>
                        </div>
                        <div className="flex-shrink-0">
                            <h5 className="text-success fs-14 mb-0">
                            <i className="ri-arrow-right-up-line fs-13 align-middle" /> +16.24 %
                            </h5>
                        </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                        <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">$<span className="counter-value" data-target="559.25">0</span>k </h4>
                            <a href="#" className="text-decoration-underline">View net earnings</a>
                        </div>
                        <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-soft-success rounded fs-3">
                            <i className="bx bx-dollar-circle text-success" />
                            </span>
                        </div>
                        </div>
                    </div>
                    {/* end card body */}
                    </div>
                    {/* end card */}
                </div>
                {/* end col */}
                <div className="col-xl-3 col-md-6">
                    {/* card */}
                    <div className="card card-animate">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Orders</p>
                        </div>
                        <div className="flex-shrink-0">
                            <h5 className="text-danger fs-14 mb-0">
                            <i className="ri-arrow-right-down-line fs-13 align-middle" /> -3.57 %
                            </h5>
                        </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                        <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target={36894}>0</span></h4>
                            <a href="#" className="text-decoration-underline">View all orders</a>
                        </div>
                        <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-soft-info rounded fs-3">
                            <i className="bx bx-shopping-bag text-info" />
                            </span>
                        </div>
                        </div>
                    </div>
                    {/* end card body */}
                    </div>
                    {/* end card */}
                </div>
                {/* end col */}
                <div className="col-xl-3 col-md-6">
                    {/* card */}
                    <div className="card card-animate">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Customers</p>
                        </div>
                        <div className="flex-shrink-0">
                            <h5 className="text-success fs-14 mb-0">
                            <i className="ri-arrow-right-up-line fs-13 align-middle" /> +29.08 %
                            </h5>
                        </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                        <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="183.35">0</span>M </h4>
                            <a href="#" className="text-decoration-underline">See details</a>
                        </div>
                        <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-soft-warning rounded fs-3">
                            <i className="bx bx-user-circle text-warning" />
                            </span>
                        </div>
                        </div>
                    </div>
                    {/* end card body */}
                    </div>
                    {/* end card */}
                </div>
                {/* end col */}
                <div className="col-xl-3 col-md-6">
                    {/* card */}
                    <div className="card card-animate">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0"> My Balance</p>
                        </div>
                        <div className="flex-shrink-0">
                            <h5 className="text-muted fs-14 mb-0">
                            +0.00 %
                            </h5>
                        </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                        <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">$<span className="counter-value" data-target="165.89">0</span>k </h4>
                            <a href="#" className="text-decoration-underline">Withdraw money</a>
                        </div>
                        <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-soft-primary rounded fs-3">
                            <i className="bx bx-wallet text-primary" />
                            </span>
                        </div>
                        </div>
                    </div>
                    {/* end card body */}
                    </div>
                    {/* end card */}
                </div>
                {/* end col */}
            </div>
            {/* end row*/}

        </>
    )
}

export default Balance