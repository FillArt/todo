import {addTodo, changeStatusTodo, changeTodo, removeAllTodo, removeTodo} from "../reducers/todoReducer";

export type Filter = 'All' | 'Active' | 'Done';

export type TodoControlProps = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
    addNewItem: (title: string) => void,
}

export type TodoListProps = {
    state: State[]
    removeItem: (id: string) => void,
    changeItem: (id: string, title: string) => void,
}

export type TodoItemProps = {
    item: State
    removeItem: (id: string) => void,
    changeItem: (id: string, title: string) => void,
}

export type State = {
    id: string;
    title: string;
    isDone: boolean;
}

export type TsarType = AddTodo | RemoveTodo | ChangeTodo | ChangeStatusTodo | RemoveAllTodo

type AddTodo = ReturnType<typeof addTodo>
type RemoveTodo = ReturnType<typeof removeTodo>
type ChangeTodo = ReturnType<typeof changeTodo>
type ChangeStatusTodo = ReturnType<typeof changeStatusTodo>
type RemoveAllTodo = ReturnType<typeof removeAllTodo>
