import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Switch } from '@material-ui/core';
const GeneralSettings = () => {
    const { handleSubmit, control } = useForm<GeneralSettingsType>();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name='noGoogleStun'
                control={control}
                defaultValue={false}
                render={props =>
                    <Switch
                        onChange={e => props.onChange(e.target.checked)}
                        checked={props.value}></Switch>
                }
            />

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