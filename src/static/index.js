(() => {
    const executeCommandText = document.getElementById('execute-command');
    const runButton = document.getElementById('run-button');
    const resetButton = document.getElementById('reset-button');
    const subcommandRadioButton = document.getElementsByName('subcommand');
    const noVideoOption = document.getElementsByName('no-video')[0];
    const noAudioOption = document.getElementsByName('no-audio')[0];
    const forceI420Option = document.getElementsByName('force-i420')[0];
    const useNativeOption = document.getElementsByName('use-native')[0];
    const videoDeviceOption = document.getElementsByName('video-device')[0];
    const videoDeviceValue = document.getElementsByName('video-device-value')[0];
    const resolutionOption = document.getElementsByName('resolution')[0];
    const framerateOption = document.getElementsByName('framerate')[0];
    const fixedResolution = document.getElementsByName('fixed-resolution')[0];
    const priorityOption = document.getElementsByName('priority')[0];
    const portOption = document.getElementsByName('port')[0];
    const useSdlOption = document.getElementsByName('use-sdl')[0];
    const showMeOption = document.getElementsByName('show-me')[0];
    const windowWidthOption = document.getElementsByName('window-width')[0];
    const windowHeightOption = document.getElementsByName('window-height')[0];
    const fullscreenOption = document.getElementsByName('fullscreen')[0];
    const daemonOption = document.getElementsByName('daemon')[0];
    const logLevelOption = document.getElementsByName('log-level')[0];
    const disableEchoCancellationOption = document.getElementsByName('disable-echo-cancellation')[0];
    const disableAutoGainControlOption = document.getElementsByName('disable-auto-gain-control')[0];
    const disableNoiseSuppressionOption = document.getElementsByName('disable-noise-suppression')[0];
    const disableHighpassFilterOption = document.getElementsByName('disable-highpass-filter')[0];
    const disableTypingDetectionOption = document.getElementsByName('disable-typing-detection')[0];
    let subcommand = '';

    runButton.addEventListener('click', () => {
        for (let i in subcommandRadioButton) {
            if (subcommandRadioButton[i].checked) {
                subcommand = subcommandRadioButton[i].value;
            }
        }
        let options = [];
        if (noVideoOption.checked) {
            options.push(noVideoOption.value);
        }
        if (noAudioOption.checked) {
            options.push(noAudioOption.value);
        }
        if (forceI420Option.checked) {
            options.push(forceI420Option.value);
        }
        if (useNativeOption.checked) {
            options.push(useNativeOption.value);
        }
        if (videoDeviceOption.checked) {
            options.push(videoDeviceOption.value + ' ' + videoDeviceValue.value);
        }
        if (resolutionOption.value !== '') {
            options.push(resolutionOption.value);
        }
        if (framerateOption.value !== '') {
            options.push('--framerate ' + framerateOption.value);
        }
        if (fixedResolution.checked) {
            options.push(fixedResolution.value);
        }
        if (priorityOption.value !== '') {
            options.push(priorityOption.value);
        }
        if (portOption.value !== '') {
            options.push('--port ' + portOption.value);
        }
        if (useSdlOption.checked) {
            options.push(useSdlOption.value);
        }
        if (showMeOption.checked) {
            options.push(showMeOption.value);
        }
        if (windowWidthOption.value !== '') {
            options.push('--window-width ' + windowWidthOption.value);
        }
        if (windowHeightOption.value !== '') {
            options.push('--window-height ' + windowHeightOption.value);
        }
        if (fullscreenOption.checked) {
            options.push(fullscreenOption.value);
        }
        if (daemonOption.checked) {
            options.push(daemonOption.value);
        }
        if (logLevelOption.value !== '') {
            options.push(logLevelOption.value);
        }
        if (disableEchoCancellationOption.checked) {
            options.push(disableEchoCancellationOption.value);
        }
        if (disableAutoGainControlOption.checked) {
            options.push(disableAutoGainControlOption.value);
        }
        if (disableNoiseSuppressionOption.checked) {
            options.push(disableNoiseSuppressionOption.value);
        }
        if (disableHighpassFilterOption.checked) {
            options.push(disableHighpassFilterOption.value);
        }
        if (disableTypingDetectionOption.checked) {
            options.push(disableTypingDetectionOption.value);
        }

        let executeCommand = '$ ./momo';
        options.forEach(option => {
            executeCommand += ' ' + option;
        });
        executeCommandText.innerText = executeCommand;
        console.log(options);
    });
})();