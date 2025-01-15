import {State} from "../types/Todo";
import {addTodo, removeTodo, todoReducer} from "./todoReducer";

export {};

describe('Test for TodoReducer', () => {

    test('Add new item', () => {
        const initialState: State[] = []
        const action = addTodo('New item')
        const newState: State[] = todoReducer(initialState, action)

        expect(newState).toHaveLength(1);
        expect(newState[0].title).toBe('New item');
        expect(newState[0].isDone).toBe(false);
    });

    test('Remove item by id', () => {
        const initialState: State[] = [{id: '1', title: 'Hello World!', isDone: false}]
        const action = removeTodo('1')
        const newState: State[] = todoReducer(initialState, action)

        expect(newState).toHaveLength(0);
    });

})
