export interface SelectValueType {
    name?: string,
    id?: string,
    text?: string,
    placeholder?: string,
    options?: Array<string | number>
}

export interface ManagementTableValueType {
    name?: string,
    id?: string,
    label?: Array<string>,
}

export interface UserDataType {
    person_id?: number,
    grade?: number,
    class?: number,
    number?: number,
    name?: string,
    status?: string
}