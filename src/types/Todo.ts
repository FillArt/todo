export type Filter = 'All' | 'Active' | 'Done';

export type TodoControlProps = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}