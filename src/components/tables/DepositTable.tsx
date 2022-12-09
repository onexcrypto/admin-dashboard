/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Operation } from '../../models';
import { Ticket, Customer } from '../../models/index';

const DepositTable = () => {

    const columns: ColumnsType<Operation> = [
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
            
        },
        {
            title: 'Ticket',
            dataIndex: 'ticket',
            key: 'ticket',
            render: (ticket) => <a>{ticket}</a>,
        },
        {
            title: 'Methode ',
            dataIndex: 'method',
            key: 'method',
        },
        {
            title: 'Mode ',
            dataIndex: 'mode',
            key: 'mode',
            render: (mode) => <span className="badge rounded-pill text-bg-success">{mode.toUpperCase()}</span>
        },
        {
            title: 'Montant ',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Date op ',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Statut ',
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
            title: 'Client ',
            dataIndex: 'customer',
            key: 'customer',
            render: (customer: string) => <a>{customer}</a>,
        },
    ];

    const data: Operation[] = [
        {
            id:1,
            reference: "1XC002",
            source: "1XC6548",
            ticket: "Walet vers 1XCARD",
            method: "Internal XOF",
            mode: "Dépôt",
            amount: 25000,
            created_at: "22/11/2022",
            status: "confirmed",
            customer: "TSALI BOBO"
        },
    ];


    const showItem = (item: Operation)=>{
        console.log(item);
        
    }

    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default DepositTable