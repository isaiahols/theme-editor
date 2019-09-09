import React from 'react';
import {connect} from 'react-redux';
import ColorCard from './ColorCard';

import { getAllThemes, editColor, previewThemes } from "./../redux/actions/ThemeEditor";

const ThemeColorDisplay = (props) => {

  const colorCardList =(theme, themeIndex) => {
    const listDisplay = [];
    for (let color in theme) {
      const newCard = <ColorCard
        key={themeIndex+color}
        color={theme[color]}
        title={color}
        themeIndex={themeIndex}
      />

      listDisplay.push(newCard)
    }
    return listDisplay
  }

  const themeList = (themes) => {
    return themes.map((theme, index) => colorCardList(theme, index))
  }

  return (
    <div style={styles.colorDisplayContainer}>
      Here is where colors are displayed
      {themeList(props.themes)}
    </div>
  )
}

const mapStateToProps = ({ themeSelector }) => {
  return ({
    themes: themeSelector.themes,
    activeThemeRequest: themeSelector.activeThemeRequest,
  })
}

const mapDispatchToProps = {
  getAllThemes,
  editColor,
  previewThemes,
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColorDisplay)

const styles = {
  colorDisplayContainer: {
    height: '80%',
    overflow: 'scroll',
  },
}