/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Customer } from '../../models';

const ClientStandardTable = () => {

    const showItem = (item: Customer)=>{
        console.log(item);
    }

    const columns: ColumnsType<Customer> = [
        {
            title: 'Nom',
            dataIndex: 'firstname',
            key: 'firstname',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Prénoms',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Email ',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone ',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Statut',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <>
                    {status === 'activated'?(
                        <span className="badge rounded-pill text-bg-success">{status.toUpperCase()}</span>
                    ):(
                        <span className="badge rounded-pill text-bg-danger">{status.toUpperCase()}</span>
                    )}
                    
                </>
            ),
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

    const data: Customer[] = [
        {
            id: 1,
            firstname: "Dago",
            lastname: "Koffi Roger",
            email: 'koffi-dago@gmail.com',
            phone: '+228 91234567',
            address: 'Lomé',
            status: "activated"
        },
        {
            id: 2,
            firstname: "TSALI",
            lastname: "Yawo Bobo",
            email: 'bobo@gmail.com',
            phone: '+228 99514813',
            address: 'Lomé',
            status: "activated"
        },
        {
            id: 3,
            firstname: "KAVEGE",
            lastname: "Yawo Julio",
            email: 'juliokavege@gmail.com',
            phone: '+228 93201051',
            address: 'Lomé',
            status: "activated"
        },
        {
            id: 4,
            firstname: "DOS-KHOVI",
            lastname: "Koffi Amen",
            email: 'amendos@gmail.com',
            phone: '+228 91234567',
            address: 'Lomé',
            status: "activated"
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </div>
    )
}

export default ClientStandardTable