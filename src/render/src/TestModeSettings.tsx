import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        }
    })
);

const TestModeSettings = () => {
    const classes = useStyles();
    const { handleSubmit, register } = useForm<TestModeSettingsType>();
    const onSubmit = (data: any) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button type='submit' fullWidth variant='contained' color='primary'>設定</Button>
                </Grid>
                <Grid item xs={3}>
                    <TextField inputRef={register({ min: -1, max: 65535, valueAsNumber: true })} label='port' name='port' fullWidth variant='outlined' type='number' InputLabelProps={{ shrink: true }} inputProps={{ min: -1, max: 65535 }} defaultValue='8080'></TextField>
                </Grid>
                <Grid item xs={9}>
                    <TextField inputRef={register} label='documentRoot' name='documentRoot' fullWidth variant='outlined' InputLabelProps={{ shrink: true }}></TextField>
                </Grid>
            </Grid>
        </form>
    )
};

export default TestModeSettings;

export type TestModeSettingsType = {
    documentRoot?: string,
    port?: number
};
export const defaultTestModeSetings: TestModeSettingsType = {};