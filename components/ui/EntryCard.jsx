import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";


export const EntryCard = ({ entry }) => {


    const onDragStart = (event) => {
        event.dataTransfer.setData('text', entry._id)
    };

    const onDragEnd = ()=>{

    };



    return (
        <Card sx={{ marginBottom: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30 minutos</Typography>
                </CardActions>


            </CardActionArea>
        </Card>
    )
};
