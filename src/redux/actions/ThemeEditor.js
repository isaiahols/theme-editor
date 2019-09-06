// import { ipcRenderer } from 'electron';

export const LOAD_THEMES_TO_STATE = 'LOAD_THEMES_TO_STATE';
export const GET_THEMES_REQUEST = 'GET_THEMES_REQUEST';
export const GET_THEMES_ERROR = 'GET_THEMES_ERROR';
export const PREVIEW_THEMES_REQUEST = 'SET_THEMES_REQUEST';
export const SET_THEMES_ERROR = 'SET_THEMES_ERROR';
export const EDIT_COLOR = 'EDIT_COLOR';
// export const SET_THEMES = 'SET_THEMES';

function getSessionId(getState) {
  const sessionState = getState().session;
  let sessionId = "";
  sessionState.caps.forEach(function (cap) {
    if (cap.name && cap.name === "uuid") {
      sessionId = cap.value;
    }
  });
  return sessionId;
}

export const setAllThemes = (newThemes) => ({
  type: LOAD_THEMES_TO_STATE,
  payload: newThemes
})

export function getAllThemes() {
  return (dispatch, getState) => {
    // const sessionState = getState().session;
    // const server = sessionState.server;
    // const serverType = sessionState.serverType;
    // const serverInfo = server[serverType];
    // const sessionId = getSessionId(getState);
    // if (!sessionId || sessionId === "") return;


    return { type: GET_THEMES_REQUEST }
    // dispatch({ type: GET_THEMES_REQUEST });
    // ipcRenderer.send('appiumx-client-get-themes', { host: serverInfo.hostname, port: serverInfo.port, sessionId });
    // ipcRenderer.once('appiumx-client-get-themes-response', (evt, response) => {
    //   let result = response.res.value;
    //   if (response.res.status !== 0) {
    //     result = { error: response.res.value };
    //   }
    //   dispatch({ type: LOAD_THEMES_TO_STATE, payload: result });
    // });
    // ipcRenderer.once('appiumx-client-get-themes-fail', (evt, error) => {
    //   dispatch({ type: GET_THEMES_ERROR, payload: error });
    // });
  };
}

export const editColor = (themeIndex, colorTitle, color) => ({
  type: EDIT_COLOR,
  payload: { themeIndex, colorTitle, color }
})

export const previewThemes = () => {
  return (dispatch, getState) => {
    const sessionState = getState().session;
    const server = sessionState.server;
    const serverType = sessionState.serverType;
    const serverInfo = server[serverType];
    const sessionId = getSessionId(getState);
    if (!sessionId || sessionId === "") return;

    const { themes } = getState().themeEditor
    dispatch({ type: PREVIEW_THEMES_REQUEST });
    // ipcRenderer.send('appiumx-client-preview-themes', {
    //   host: serverInfo.hostname, port: serverInfo.port, sessionId, themes
    // });
    // ipcRenderer.once('appiumx-client-preview-themes-response', (evt, response) => {
    //   console.log('THIS IS RESPONSE IN ACTION', response)
    //   let result = response.res.value;
    //   if (response.res.status !== 0) {
    //     result = { error: response.res.value };
    //   }
    //   dispatch({ type: PREVIEW_THEMES_REQUEST, payload: result });
    // });
    // ipcRenderer.once('appiumx-client-preview-themes-fail', (evt, error) => {
    //   dispatch({ type: GET_THEMES_ERROR, payload: error });
    // });
  }
}

// export const getAllThemes = (newThemes) => {

//   return ({
//     type: LOAD_THEMES_TO_STATE,
//     payload: newThemes
//   })
// }

