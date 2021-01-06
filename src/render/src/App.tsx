import React from 'react';
import { IpcRenderer } from 'electron';
import './App.css';
import { Accordion, AccordionDetails, AccordionSummary, Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import GeneralSettings from './GeneralSettings';
import TestModeSettings from './TestModeSettings';
import AyameModeSettings from './AyameModeSettings';
import SoraModeSettings from './SoraModeSettings';

declare global {
  interface Window {
    ipcRenderer: IpcRenderer
  }
}

if (window.ipcRenderer) {
  window.ipcRenderer.on('pong', () => {
    console.log('pong');
  });
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Accordion expanded={expanded === 'general-settings'} onChange={handleChange('general-settings')}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="general-settings-content"
            id="general-settings-header"
          >
            <Typography className={classes.heading}>General settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <GeneralSettings></GeneralSettings>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'test-mode-settings'} onChange={handleChange('test-mode-settings')}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="test-mode-settings-content"
            id="test-mode-settings-header"
          >
            <Typography className={classes.heading}>Test mode settings</Typography>
            <Typography className={classes.secondaryHeading}>
              Mode for momo development with simple HTTP server
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TestModeSettings></TestModeSettings>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'ayame-mode-settings'} onChange={handleChange('ayame-mode-settings')}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="ayame-mode-settings-content"
            id="ayame-mode-settings-header"
          >
            <Typography className={classes.heading}>Ayame mode settings</Typography>
            <Typography className={classes.secondaryHeading}>
              Mode for working with WebRTC Signaling Server Ayame
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AyameModeSettings></AyameModeSettings>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'sora-mode-settings'} onChange={handleChange('sora-mode-settings')}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="sora-mode-settings-content"
            id="sora-mode-settings-header"
          >
            <Typography className={classes.heading}>Sora mode settings</Typography>
            <Typography className={classes.secondaryHeading}>
              Mode for working with WebRTC SFU Sora
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SoraModeSettings></SoraModeSettings>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default App;
