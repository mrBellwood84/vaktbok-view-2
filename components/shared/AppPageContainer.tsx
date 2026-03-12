import { ReactNode } from "react";

import { Box, Container, Divider, Typography } from "@mui/material";


interface Props {
  children?: ReactNode;
  title?: string;
  toolbar?: ReactNode;
}

export const AppPageContainer = ({ children, title, toolbar }: Props) => {

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}>
      {title && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h4" gutterBottom> {title} </Typography>
          <Divider sx={{ mb: 1 }}/>
          {toolbar && toolbar}
        </Box>
      )}
      <Box sx={{ flexGrow: 1, overflow: "hidden", display: "flex" }}>
        {children}
      </Box>
    </Container>
  );
};