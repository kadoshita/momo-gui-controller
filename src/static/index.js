(() => {
    const executeCommandText = document.getElementById('execute-command');
    const runButton = document.getElementById('run-button');
    const resetButton = document.getElementById('reset-button');

    const subcommandRadioButton = document.getElementsByName('subcommand');
    const testSubcommandOptions = document.getElementsByClassName('test-subcommand-options')[0];
    const ayameSubcommandOptions = document.getElementsByClassName('ayame-subcommand-options')[0];
    const soraSubcommandOptions = document.getElementsByClassName('sora-subcommand-options')[0];

    const AYAME_SIGNALING_URL_Option = document.getElementsByName('SIGNALING-URL')[0];
    const ROOM_ID_Option = document.getElementsByName('ROOM-ID')[0];
    const SORA_SIGNALING_URL_Option = document.getElementsByName('SIGNALING-URL')[1];
    const CHANNEL_ID_Option = document.getElementsByName('CHANNEL-ID')[0];

    const documentRootOption = document.getElementsByName('document-root')[0];
    const clientIdOption = document.getElementsByName('client-id')[0];
    const signalingKeyOption = document.getElementsByName('signaling-key')[0];
    const autoOption = document.getElementsByName('auto')[0];
    const videoCodecOption = document.getElementsByName('video-codec')[0];
    const audioCodecOption = document.getElementsByName('audio-codec')[0];
    const videoBitrateOption = document.getElementsByName('video-bitrate')[0];
    const audioBitrateOption = document.getElementsByName('audio-bitrate')[0];
    const multistreamOption = document.getElementsByName('multistream')[0];
    const roleOption = document.getElementsByName('role')[0];
    const spotlightOption = document.getElementsByName('spotlight')[0];
    const metadataOption = document.getElementsByName('metadata')[0];

    const noVideoOption = document.getElementsByName('no-video')[0];
    const noAudioOption = document.getElementsByName('no-audio')[0];
    const forceI420Option = document.getElementsByName('force-i420')[0];
    const useNativeOption = document.getElementsByName('use-native')[0];
    const videoDeviceOption = document.getElementsByName('video-device')[0];
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
    let subcommand = 'test';
    let options = [];

    const init = () => {
        testSubcommandOptions.style.display = 'block';
        ayameSubcommandOptions.style.display = 'none';
        soraSubcommandOptions.style.display = 'none';

        for (let i in subcommandRadioButton) {
            subcommandRadioButton[i].onchange = e => {
                subcommand = e.target.value;
                switch (subcommand) {
                    case 'test':
                        testSubcommandOptions.style.display = 'block';
                        ayameSubcommandOptions.style.display = 'none';
                        soraSubcommandOptions.style.display = 'none';
                        break;
                    case 'ayame':
                        testSubcommandOptions.style.display = 'none';
                        ayameSubcommandOptions.style.display = 'block';
                        soraSubcommandOptions.style.display = 'none';
                        break;
                    case 'sora':
                        testSubcommandOptions.style.display = 'none';
                        ayameSubcommandOptions.style.display = 'none';
                        soraSubcommandOptions.style.display = 'block';
                        break;
                    default:
                        testSubcommandOptions.style.display = 'block';
                        ayameSubcommandOptions.style.display = 'none';
                        soraSubcommandOptions.style.display = 'none';
                        break;
                }
            };
        }

        updateExecuteCommandText();
    };

    const updateExecuteCommandText = () => {
        options = [];
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
        if (videoDeviceOption.value !== '') {
            options.push('--video-device ' + videoDeviceOption.value);
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

        options.push(subcommand);

        if (subcommand === 'test') {
            if (documentRootOption.value !== '') {
                options.push('--document-root ' + documentRootOption.value);
            }
        } else if (subcommand === 'ayame') {
            if (AYAME_SIGNALING_URL_Option.value !== '') {
                options.push(AYAME_SIGNALING_URL_Option.value);
            } else {
                console.error('You MUST set SIGNALING-URL when ayame mode.');
            }
            if (ROOM_ID_Option.value !== '') {
                options.push(ROOM_ID_Option.value);
            } else {
                console.error('You MUST set ROOM-ID when ayame mode.');
            }
            if (clientIdOption.value !== '') {
                options.push('--client-id ' + clientIdOption.value);
            }
            if (signalingKeyOption.value !== '') {
                options.push('--signaling-key ' + signalingKeyOption.value);
            }
        } else if (subcommand === 'sora') {
            if (SORA_SIGNALING_URL_Option.value !== '') {
                options.push(SORA_SIGNALING_URL_Option.value);
            } else {
                console.error('You MUST set SIGNALING-URL when sora mode.');
            }
            if (CHANNEL_ID_Option.value !== '') {
                options.push(CHANNEL_ID_Option.value);
            } else {
                console.error('You MUST set CHANNEL-ID when sora mode.');
            }

            if (autoOption.checked) {
                options.push(autoOption.value);
            }
            if (videoCodecOption.value !== '') {
                options.push(videoCodecOption.value);
            }
            if (audioCodecOption.value !== '') {
                options.push(audioCodecOption.value);
            }
            if (videoBitrateOption.value !== '') {
                options.push('--video-bitrate ' + videoBitrateOption.value);
            }
            if (audioBitrateOption.value !== '') {
                options.push('--audio-bitrate ' + audioBitrateOption.value);
            }
            if (multistreamOption.checked) {
                options.push(multistreamOption.value);
            }
            if (roleOption.value !== '') {
                options.push(roleOption.value);
            }
            if (spotlightOption.value !== '') {
                options.push('--spotlight ' + spotlightOption.value);
            }
            if (metadataOption.value !== '') {
                options.push('--metadata ' + metadataOption.value);
            }
        }

        let executeCommand = '$ ./momo';
        options.forEach(option => {
            executeCommand += ' ' + option;
        });
        executeCommandText.innerText = executeCommand;
        console.log(options);
    }

    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.addEventListener('change', e => {
        updateExecuteCommandText();
    });
    bodyElement.addEventListener('keyup', e => {
        updateExecuteCommandText();
    })
    runButton.addEventListener('click', () => {

    });
    resetButton.addEventListener('click', () => {
        location.reload();
    })

    init();
})();