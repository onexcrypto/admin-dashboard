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
}