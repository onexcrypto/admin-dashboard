/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Transact } from '../../models';

const TransactionTable = () => {

    const columns: ColumnsType<Transact> = [
        {
            title: 'Methode',
            dataIndex: 'method',
            key: 'method',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Entrées',
            dataIndex: 'entries',
            key: 'entries',
            render: (_,record) => (
                <>
                    {record.entries} ({record.entries_value})
                </>
            ),
        },
        {
            title: 'Sorties ',
            dataIndex: 'output',
            key: 'output',
            render: (_,record) => (
                <>
                    {record.output} ({record.output_values})
                </>
            ),
        },
        {
            title: 'Marge ',
            dataIndex: 'margin',
            key: 'margin',
        },
        
    ];

    const data: Transact[] = [
        {
            id:1,
            method: "Internal XOF",
            entries: 52,
            output: 11,
            margin: 1242964,
            entries_value: 1251264,
            output_values: 8300
        },
        {
            id:2,
            method: "Mobile Money",
            entries: 11,
            output: 14,
            margin: 1242964,
            entries_value: 59400,
            output_values: 2300
        },
    ];


    const showItem = (item: Transact)=>{
        console.log(item);
        
    }

    return (
        <>
            <div className="card card-height-100">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Transactions</h4>
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
                    <div className="table-responsive table-card">
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
                {/* .card-body*/}
            </div>
        </>
    )
}

export default TransactionTable