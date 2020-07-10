export interface Contact {
    id: number;
    name: string;
    phone_number: string;
    created_at: Date;
}

export interface ContactResponse {
    success: boolean;
    contacts: Contact[];
}