import React from 'react';

const SoraModeSettings = () => {
    return (<></>)
};

export default SoraModeSettings;

export type SoraModeSettingsType = {
    signalingUrl: string,
    channelID: string,
    auto?: boolean,
    video?: boolean,
    audio?: boolean,
    videoCodecType?: '' | 'AV1' | 'H264' | 'VP8' | 'VP9',
    audioCodecType?: '' | 'OPUS',
    videoBitRate?: number,
    audioBitRate?: number,
    multistream?: boolean,
    role?: 'downstream' | 'recvonly' | 'sendonly' | 'sendrecv' | 'upstream',
    spotlight?: boolean,
    spotlightNumber?: number,
    port?: number,
    simulcast?: boolean,
    metadata?: string
};

export const defaultSoraModeSettings: SoraModeSettingsType = {
    signalingUrl: 'wss://example.com/signaling',
    channelID: ''
};