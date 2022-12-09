/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Operation } from '../../models';
import { Ticket, Customer,Transfer } from '../../models/index';

const TransfertTable = () => {

    const columns: ColumnsType<Transfer> = [
        {
            title: 'Reference',
            dataIndex: 'reference',
            key: 'reference',
        },
        
        {
            title: "Methode d'envoi",
            dataIndex: 'method_send',
            key: 'method_send',
        },
        {
            title: 'Methode Recept ',
            dataIndex: 'method_receive',
            key: 'method_receive',
        },
        {
            title: 'Montant ',
            dataIndex: 'amount_send',
            key: 'amount_send',
        },
        {
            title: 'Frais',
            dataIndex: 'fees',
            key: 'fees',
        },
        {
            title: 'Envoyé par',
            dataIndex: 'customer_send',
            key: 'customer_send',
            render: (customer: string) => <a>{customer}</a>,
        },
        {
            title: 'Receveur',
            dataIndex: 'customer_receive',
            key: 'customer_receive',
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
        
    ];

    const data: Transfer[] = [
        {
            id:1,
            reference: "1XC002",
            method_send: "1XCARD",
            method_receive: "MoMo",
            amount_send: 25000,
            fees: 25,
            created_at: "22/11/2022",
            status: "confirmed",
            customer_send: "TSALI BOBO",
            customer_receive: "KAVEGE Julio"
        },
    ];


    const showItem = (item: Transfer)=>{
        console.log(item);
        
    }

    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default TransfertTable