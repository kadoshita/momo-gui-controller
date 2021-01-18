import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';

const SwitchFormItem = (formProps: { name: string, control: any }) => {
    return (
        <Controller name={formProps.name} control={formProps.control} defaultValue={false}
            render={props =>
                <FormControlLabel
                    control={<Checkbox onChange={e => props.onChange(e.target.checked)} checked={props.value} color='primary'></Checkbox>}
                    label={formProps.name}
                    labelPlacement='end'
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
                <Grid item xs={12}>
                    <Button type='submit' fullWidth variant='contained' color='primary'>設定</Button>
                </Grid>
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
                    <TextField inputRef={register({ pattern: /(QVGA|VGA|HD|FHD|4K|\d+x\d+)/ })} label='resolution' name='resolution' fullWidth variant='outlined' placeholder='one of QVGA, VGA, HD, FHD, 4K, or [WIDTH]x[HEIGHT]' InputLabelProps={{ shrink: true }} defaultValue='VGA'></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register({ min: 1, max: 60 })} label='framerate' name='framerate' fullWidth variant='outlined' type='number' InputLabelProps={{ shrink: true }} inputProps={{ min: 1, max: 60 }} defaultValue='30'></TextField>
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
                <Grid item xs={6}>
                    <TextField inputRef={register({ min: 180, max: 16384 })} label='windowWidth' name='windowWidth' fullWidth variant='outlined' type='number' InputLabelProps={{ shrink: true }} inputProps={{ min: 180, max: 1634 }} defaultValue='640'></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register({ min: 180, max: 16384 })} label='windowHeight' name='windowHeight' fullWidth variant='outlined' type='number' InputLabelProps={{ shrink: true }} inputProps={{ min: 180, max: 1634 }} defaultValue='480'></TextField>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='fullscreen' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='insecure' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='logLevel' control={control} defaultValue='none'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="logLevel-select">logLevel</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'logLevel',
                                        id: 'logLevel-select',
                                    }}
                                >
                                    <MenuItem value='verbose'>verbose</MenuItem>
                                    <MenuItem value='info'>info</MenuItem>
                                    <MenuItem value='warning'>warning</MenuItem>
                                    <MenuItem value='error'>error</MenuItem>
                                    <MenuItem value='none'>none</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='screenCapture' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <TextField inputRef={register({ min: -1, max: 65535 })} label='metricsPort' name='metricsPort' fullWidth variant='outlined' type='number' InputLabelProps={{ shrink: true }} inputProps={{ min: -1, max: 65535 }} defaultValue='-1'></TextField>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='metricsAllowExternalIp' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='disableEchoCancellation' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='disableNoiseSuppression' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='disableAutoGainControl' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='disableHighpassFilter' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='disableTypingDetection' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <SwitchFormItem name='disableResidualEchoDet' control={control}></SwitchFormItem>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='vp8Encoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="vp8Encoder-select">vp8Encoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'vp8Encoder',
                                        id: 'vp8Encoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='software'>software</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='vp8Decoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="vp8Decoder-select">vp8Decoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'vp8Decoder',
                                        id: 'vp8Decoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='software'>software</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='vp9Encoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="vp9Encoder-select">vp9Encoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'vp9Encoder',
                                        id: 'vp9Encoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='software'>software</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='vp9Decoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="vp9Decoder-select">vp9Decoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'vp9Decoder',
                                        id: 'vp9Decoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='software'>software</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='av1Encoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="av1Encoder-select">av1Encoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'av1Encoder',
                                        id: 'av1Encoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='software'>software</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='av1Decoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="av1Decoder-select">av1Decoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'av1Decoder',
                                        id: 'av1Decoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='software'>software</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='h264Encoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="h264Encoder-select">h264Encoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'h264Encoder',
                                        id: 'h264Encoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='videotoolbox'>videotoolbox</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={6}>
                    <Controller name='h264Decoder' control={control} defaultValue='default'
                        render={props =>
                            <FormControl>
                                <InputLabel shrink htmlFor="h264Decoder-select">h264Decoder</InputLabel>
                                <Select
                                    value={props.value}
                                    onChange={props.onChange}
                                    inputProps={{
                                        name: 'h264Decoder',
                                        id: 'h264Decoder-select',
                                    }}
                                >
                                    <MenuItem value='default'>default</MenuItem>
                                    <MenuItem value='videotoolbox'>videotoolbox</MenuItem>
                                </Select>
                            </FormControl>
                        }></Controller>
                </Grid>
                <Grid item xs={12}>
                    <TextField inputRef={register} label='serial' name='serial' fullWidth variant='outlined' InputLabelProps={{ shrink: true }}></TextField>
                </Grid>
            </Grid>
        </form>
    )
};

export default GeneralSettings

// c.f. https://github.com/shiguredo/momo/blob/develop/doc/USE.md
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