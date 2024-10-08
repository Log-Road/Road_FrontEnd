export interface SelectValueType {
    name?: string,
    id?: string,
    text?: string,
    placeholder?: string,
    options?: Array<string | number>
}

export interface UserDataType {
    person_id?: number,
    grade?: number,
    class?: number,
    number?: number,
    name?: string,
    status?: string
}

export interface ContestDataType {
    status?: string,
    name?: string,
    date?: string,
}

export interface ClubDataType {
    club_id?: number,
    is_active?: boolean,
    club_name?: string
}