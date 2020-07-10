export interface Group {
    id: number;
    group_name: string;
    created_at: Date;
}

export interface GroupResponse {
    success: boolean;
    groups: Group[];
}
