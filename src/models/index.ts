export interface LoginForm{
    username: string;
    password: string;
}

export interface Bread{
    title: string;
    subtitle: string;
    page: string;
}

export interface Ticket {
    id: number;
    type: string;
    amount: number;
    status: string;
    created_at: string;
}

export interface Transact{
    id: number;
    method: string;
    entries: number;
    output: number;
    margin: number;
    entries_value?: number;
    output_values?: number;
}

export interface Customer {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    status: string;
    business_name?: string;
}

export interface Wallet{
    id: number;
    reference: string;
    type: string;
    solde: string;
    status: string;
    created_at: string;
}

export interface Operation{
    id:number;
    reference: string;
    method: string;
    mode: string;
    amount: number;
    source: string;
    ticket: string;
    created_at: string;
    customer?: string;
    status: string;
}

export interface Transfer{
    id: number;
    reference: string;
    amount_send: number;
    method_send: string;
    method_receive: string;
    fees: number;
    customer_send: Customer | string;
    customer_receive: Customer | string;
    created_at: string;
    status: string;
}

export interface Card{
    id: number;
    reference: number;
    wallet: string;
    type: string;
    status: string;
    customer: string | Customer;
    solde: number;
}