import React from 'react';
import { withFormik } from 'formik';
import { Button, FormControlLabel, Switch } from '@material-ui/core';
const GeneralSettings = (props: { values: GeneralSettingsType; handleChange: ((e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void); handleSubmit: ((e: React.FormEvent<HTMLFormElement>) => void); }) => {
    const { values, handleChange, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <FormControlLabel
                control={<Switch checked={values.noGoogleStun} onChange={handleChange} name='noGoogleStun'></Switch>}
                label='noGoogleStun'></FormControlLabel>
            <Button type='submit' fullWidth variant='contained' color='primary'>設定</Button>
        </form>
    )
};

export default withFormik({
    mapPropsToValues: () => ({ noGoogleStun: false }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    },
    displayName: 'GeneralSettings'
})(GeneralSettings);

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