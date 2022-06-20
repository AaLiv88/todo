import React from 'react';

interface TodoListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: TodoListProps<T>) {
    return (
        <>
            {items.map(renderItem)}
        </>
    );
}

export default List;