import {addTodo, changeStatusTodo, changeTodo, removeAllTodo, removeTodo} from "../store/reducers/todoReducer";

export type Filter = 'All' | 'Active' | 'Done';

export type TodoControlProps = {
    filter: Filter;
    stateStatus: boolean;
    setFilter: (filter: Filter) => void;
    addNewItem: (title: string) => void,
    removeAllTasks: () => void,
}

export type TodoListProps = {
    state: State[]
    removeItem: (id: string) => void,
    setError: (error: boolean) => void;
    error: boolean;
    changeItem: (id: string, title: string) => void,
    changeStatusItem: (id: string, isDone: boolean) => void,
}

export type TodoItemProps = {
    item: State
    removeItem: (id: string) => void,
    tabIndex: number,
    changeItem: (id: string, title: string) => void,
    setError: (error: boolean) => void;
    error: boolean;
    changeStatusItem: (id: string, isDone: boolean) => void,
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
