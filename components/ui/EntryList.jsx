import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import { EntryCard } from './';



export const EntryList = ({ status }) => {

    const { entries, updateEntry } = useContext( EntriesContext );
    const { isDragging, endDragging } = useContext( UIContext );

    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ]);

    const allowDrop = ( event ) => {
        event.preventDefault();
    };

    const onDropEntry = ( event) => {
        const id = event.dataTransfer.getData('text');
        
        // const entry = entries.find( e => e._id === id );
        // entry.status = status;
        // updateEntry( entry );
        // endDragging();
    };

      
    return (
        //   TODO: aquí haremos drop
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px'  }}>

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}> 
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }
                </List>

            </Paper>
        </div>
    )
};
















