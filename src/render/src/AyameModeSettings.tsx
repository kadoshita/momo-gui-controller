import { makeStyles, Theme, createStyles, Grid, Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        }
    })
);

const AyameModeSettings = () => {
    const classes = useStyles();
    const { handleSubmit, register } = useForm<AyameModeSettingsType>();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button type='submit' fullWidth variant='contained' color='primary'>設定</Button>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register({ required: true })} label='signalingUrl' name='signalingUrl' fullWidth variant='outlined' InputLabelProps={{ shrink: true }} required></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register({ required: true })} label='roomID' name='roomID' fullWidth variant='outlined' InputLabelProps={{ shrink: true }} required></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register} label='clientID' name='clientID' fullWidth variant='outlined' InputLabelProps={{ shrink: true }}></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register} label='signalingKey' name='signalingKey' fullWidth variant='outlined' InputLabelProps={{ shrink: true }}></TextField>
                </Grid>
            </Grid>
        </form>
    )
};

export default AyameModeSettings;

export type AyameModeSettingsType = {
    signalingUrl: string,
    roomID: string,
    clientID?: string,
    signalingKey?: string
};
export const defaultAyameModeSettings: AyameModeSettingsType = {
    signalingUrl: '',
    roomID: ''
};
