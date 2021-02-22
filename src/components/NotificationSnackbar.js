import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function NotificationSnackbar({variant, message}) {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    };
    return (
        <SnackbarProvider maxSnack={3}>
            {() => enqueueSnackbar(message, variant)}
        </SnackbarProvider>
    );
}