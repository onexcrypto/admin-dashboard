/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Ticket } from '../../models';

const TicketTable = () => {

    const showItem = (item: Ticket)=>{
        console.log(item);
    }

    const columns: ColumnsType<Ticket> = [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Montant',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Statut',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <>
                    {status === 'confirmed'?(
                        <span className="badge rounded-pill text-bg-success">{status.toUpperCase()}</span>
                    ):(
                        <span className="badge rounded-pill text-bg-danger">{status.toUpperCase()}</span>
                    )}
                    
                </>
            ),
        },
        {
            title: 'Date ',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={()=> showItem(record)} >voir</Button>
                </Space>
            ),
        },
    ];

    const data: Ticket[] = [
        {
            id: 1,
            type: "Wallet",
            amount: 25000,
            status: 'confirmed',
            created_at: "2022-12-01",
        },
        {
            id: 1,
            type: "Wallet",
            amount: 5000,
            status: 'canceled',
            created_at: "2022-12-01",
        },
    ];

    return (
        <>
            <div className="card">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Derniers Tickets Confirmés</h4>
                    <div className="flex-shrink-0">
                        <div className="dropdown card-header-dropdown">
                            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fw-semibold text-uppercase fs-12">Sort by:
                                </span><span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1" /></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">Today</a>
                                <a className="dropdown-item" href="#">Yesterday</a>
                                <a className="dropdown-item" href="#">Last 7 Days</a>
                                <a className="dropdown-item" href="#">Last 30 Days</a>
                                <a className="dropdown-item" href="#">This Month</a>
                                <a className="dropdown-item" href="#">Last Month</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end card header */}
                <div className="card-body">
                    <div className="table-responsive table-card">
                        <Table columns={columns} dataSource={data} />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default TicketTable