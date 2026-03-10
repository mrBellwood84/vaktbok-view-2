import {Fragment, ReactNode} from "react";
import {Box, Divider, List, ListItem, ListItemText, Skeleton} from "@mui/material";

interface Props {
    children?: ReactNode;
    loading: boolean;
    loadFailed: boolean;
    width?: number | "auto"

}

export const AppListContainer = ({children, loading = false, loadFailed = false, width = "auto"}: Props) => {
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: width
      }}>
        <List sx={{
          width: "100%",
          overflowY: "auto",
          maxHeight: "100%",
          px: 1
        }}>
          {!loading && !loadFailed && children}

          {!loading && loadFailed && (<ListItem>
            <ListItemText primary="Kunne ikke last inn data"/>
          </ListItem>)}

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
        <Divider orientation="vertical" flexItem />
      </Box>
    )
}