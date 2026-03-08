import {Fragment, ReactNode} from "react";
import {Container, Divider, Typography} from "@mui/material";


interface Props {
    children?: ReactNode;
    title?: string;
    loading?: boolean;
    loadingComponent?: ReactNode;
}

export const PageContainer = ({children, title, loading = false, loadingComponent}: Props) => {
    console.warn("DEV :: PageContainer :: No default loading component added!")
    return <Container sx={{mt:2}}>
        {title && (
            <Fragment>
                <Typography variant="h4" sx={{mt:1, mb:1}}>
                    {title}
                </Typography>
                <Divider sx={{mb: 1}}/>
            </Fragment>
        )}
        {!loading && children}
        {loading && Boolean(loadingComponent) && loadingComponent }
        {loading && !Boolean(loadingComponent) && (<div>No default loading component</div>)}
    </Container>
}