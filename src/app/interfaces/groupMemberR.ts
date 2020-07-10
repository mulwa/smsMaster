export interface Member {
    user_id: string;
    group_id: string;
    id: number;
    name: string;
    phone_number: string;
    created_at: Date;
}

export interface GroupMemberI {
    success: string;
    members?: Member[];
}