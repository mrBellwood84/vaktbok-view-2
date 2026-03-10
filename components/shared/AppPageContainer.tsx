import {Fragment, ReactNode} from "react";
import {Container, Divider, Typography} from "@mui/material";


interface Props {
    children?: ReactNode;
    title?: string;
}

export const AppPageContainer = ({children, title}: Props) => {
    return <Container sx={{mt:2, display:"flex", flexDirection:"column"}}>
        {title && (
            <Fragment>
                <Typography variant="h4" sx={{mt:1, mb:1}}>
                    {title}
                </Typography>
                <Divider sx={{mb: 1}}/>
            </Fragment>
        )}
        {children}
    </Container>
}