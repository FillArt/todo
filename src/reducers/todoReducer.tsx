import {TsarType} from "../types/Todo";

export const todoReducer = (state: any, action: TsarType) => {
    switch (action.type) {
        case 'ADD-TODO': {
            return state;
        }
        case 'REMOVE-TODO': {
            return state;
        }
        case 'CHANGE-TODO': {
            return state;
        }
        case 'CHANGE-STATUS': {
            return state;
        }
        case 'REMOVE-ALL': {
            return state;
        }

        default: {
            return state;
        }
    }
}

export const addTodo = (title: string) => {
    return {
        type: 'ADD-TODO',
        payload: {
            title
        }
    } as const
}

export const removeTodo = (id: string) => {
    return {
        type: 'REMOVE-TODO',
        payload: {
            id
        }
    } as const
}

export const changeTodo = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODO',
        payload: {
            id,
            title
        }
    } as const
}

export const changeStatusTodo = (id: string, isDone: boolean)=> {
    return {
        type: 'CHANGE-STATUS',
        payload: {
            id,
            isDone
        }
    } as const
}

export const removeAllTodo = ()=> {
    return {
        type: 'REMOVE-ALL'
    } as const
}