import React from 'react';

const TestModeSettings = () => {
    return (<></>)
};

export default TestModeSettings;

export type TestModeSettingsType = {
    documentRoot?: string,
    port?: number
};
export const defaultTestModeSetings: TestModeSettingsType = {};