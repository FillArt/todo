import {State, TsarType} from "../types/Todo";
import {v1} from "uuid";

export const todoReducer = (state: State[], action: TsarType): State[] => {
    switch (action.type) {
        case 'ADD-TODO': {
            const newItem = {
                id: v1(),
                title: action.payload.title,
                isDone: false
            }
            return [...state, newItem];
        }
        case 'REMOVE-TODO': {
            return state.filter(item => item.id !== action.payload.id)
        }
        case 'CHANGE-TODO': {
            return state.map(item => item.id === action.payload.id ? {...item, title: action.payload.title} : item);
        }
        case 'CHANGE-STATUS': {
            return state.map(item => item.id === action.payload.id ? {...item, isDone: action.payload.isDone} : item);
        }
        case 'REMOVE-ALL': {
            return [];
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