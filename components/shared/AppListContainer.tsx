import {Fragment, ReactNode} from "react";
import {Box, Divider, List, ListItem, Skeleton} from "@mui/material";

interface Props {
    children?: ReactNode;
    loading: boolean;
    loadFailed: boolean;
    width?: number | "auto"

}

export const AppListContainer = ({children, loading = false, loadFailed = false, width = "auto"}: Props) => {
    return (
        <Box display="flex" flexDirection="row">
            <List sx={{width: width}}>
                {!loading && !loadFailed && children}
                {!loading && loadFailed && (<div>load failed here</div>)}
                {loading && (
                    <Fragment>
                        {[...Array(15)].map((_, i) => (
                            <ListItem key={`skeleton-list-item-${i}`} disablePadding disableGutters alignItems="center">
                                <Skeleton sx={{width: "95%", height: 30, m:1}} animation="wave" variant="rectangular"/>
                            </ListItem>
                        ))}

                    </Fragment>
                )}
            </List>
            <Divider orientation="vertical" />
        </Box>
    )
}