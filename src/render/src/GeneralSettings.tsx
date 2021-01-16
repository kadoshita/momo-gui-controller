import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, NativeSelect, Select, Switch, TextField } from '@material-ui/core';

const SwitchFormItem = (formProps: { name: string, control: any }) => {
    return (
        <Controller name={formProps.name} control={formProps.control} defaultValue={false}
            render={props =>
                <FormControlLabel
                    control={<Switch onChange={e => props.onChange(e.target.checked)} checked={props.value} edge='end'></Switch>}
                    label={formProps.name}
                    labelPlacement='start'
                ></FormControlLabel>
            }
        ></Controller>
    )
};

const GeneralSettings = () => {
    const { handleSubmit, control, register } = useForm<GeneralSettingsType>();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SwitchFormItem name='noGoogleStun' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='noVideoDevice' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='noAudioDevice' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='forceI420' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='hwMjpegDecoder' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register} label='videoDevice' name='videoDevice' variant='outlined' fullWidth InputLabelProps={{ shrink: true }}></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register({ pattern: /(QVGA|VGA|HD|FHD|4K|\d+x\d+)/ })} label='resolution' name='resolution' fullWidth variant='outlined' placeholder='one of QVGA, VGA, HD, FHD, 4K, or [WIDTH]x[HEIGHT]' InputLabelProps={{ shrink: true }}></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register({ min: 1, max: 60 })} label='framerate' name='framerate' fullWidth variant='outlined' type='number' InputLabelProps={{ shrink: true }} inputProps={{ min: 1, max: 60 }}></TextField>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='fixedResolution' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='priority' control={control} defaultValue='BALANCE'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="priority-select">priority</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'priority',
                                        id: 'priority-select',
                                    }}
                                >
                                    <MenuItem value='BALANCE'>BALANCE</MenuItem>
                                    <MenuItem value='FRAMERATE'>FRAMERATE</MenuItem>
                                    <MenuItem value='RESOLUTION'>RESOLUTION</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='useSdl' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='showMe' control={control}></SwitchFormItem>
                </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary'>設定</Button>
        </form>
    )
};

export default GeneralSettings

export type GeneralSettingsType = {
    noGoogleStun?: boolean,
    noVideoDevice?: boolean,
    noAudioDevice?: boolean,
    forceI420?: boolean,
    hwMjpegDecoder?: boolean,
    videoDevice?: string,
    resolution?: string,
    framerate?: number,
    fixedResolution?: boolean,
    priority?: 'BALANCE' | 'FRAMERATE' | 'RESOLUTION',
    useSdl?: boolean,
    showMe?: boolean,
    windowWidth?: number,
    windowHeight?: number,
    fullscreen?: boolean,
    insecure?: boolean,
    logLevel?: 'verbose' | 'info' | 'warning' | 'error' | 'none',
    screenCapture?: boolean,
    metricsPort?: number,
    metricsAllowExternalIp?: boolean,
    disableEchoCancellation?: boolean,
    disableAutoGainControl?: boolean,
    disableNoiseSuppression?: boolean,
    disableHighpassFilter?: boolean,
    disableTypingDetection?: boolean,
    disableResidualEchoDet?: boolean,
    vp8Encoder?: 'default' | 'software',
    vp8Decoder?: 'default' | 'software',
    vp9Encoder?: 'default' | 'software',
    vp9Decoder?: 'default' | 'software',
    av1Encoder?: 'default' | 'software',
    av1Decoder?: 'default' | 'software',
    h264Encoder?: 'default' | 'videotoolbox',
    h264Decoder?: 'default' | 'videotoolbox',
    serial?: string
};

export const defaultGeneralSettings: GeneralSettingsType = {}