/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState,useEffect} from 'react';
import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Wallet } from '../../models';

const WalletTable = () => {
    const [loading, setLoading] = useState(true);
    const showItem = (item: Wallet)=>{
        console.log(item);
    }

    const columns: ColumnsType<Wallet> = [
        {
            title: 'Reference',
            dataIndex: 'reference',
            key: 'reference',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Solde actuel ',
            dataIndex: 'solde',
            key: 'solde',
        },
        {
            title: 'Date création ',
            dataIndex: 'created_at',
            key: 'created_at',
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
                    <Button onClick={()=> showItem(record)} color="success" type='primary' >Détail</Button>
                </Space>
            ),
        },
    ];

    const data: Wallet[] = [
        {
            id: 1,
            reference: "1XC684221",
            type: "Standard",
            solde: "25000 XOF",
            created_at: '22/11/2022',
            status: "activated"
        },
        {
            id: 2,
            reference: "1XC684222",
            type: "Standard",
            solde: "55000 XOF",
            created_at: '02/12/2022',
            status: "activated"
        },
    ];

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    })


    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 340 }} loading={loading} />
        </div>
    )
}

export default WalletTable