export interface Message {
    id: number;
    user_id: string;
    phone_number: string;
    message: string;
    created_at: Date;
}

export interface MessageReponse {
    success: boolean;
    messages: Message[];
}