import { UIContext } from "@/context/ui";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { useContext } from "react";


export const EntryCard = ({ entry }) => {

    const { startDraging, endDraging } = useContext(UIContext);





    const onDragStart = (event) => {
        event.dataTransfer.setData('text', entry._id)
        startDraging();
    };

    const onDragEnd = () => {
        endDraging();
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
