import React from 'react';

const AyameModeSettings = () => {
    return (<></>)
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
