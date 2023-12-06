import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';



import { EntriesContext, entriesReducer } from './';






const Entries_INITIAL_STATE = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Commodo veniam aliqua tempor officia officia non laborum.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
}


export const EntriesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description) => {

        const newEntry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
    }


    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,

        }}>
            {children}
        </EntriesContext.Provider>
    )
};