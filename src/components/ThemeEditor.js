import React, { Component } from 'react';
import { connect } from "react-redux";
import ColorCard from './ColorCard';
import ThemeSelector from './ThemeSelector';
import ThemeColorDisplay from './ThemeColorDisplay';
import ThemeEditorPanel from './ThemeEditorPanel';

import { getAllThemes, editColor, previewThemes } from "./../redux/actions/ThemeEditor";
// import { getAllThemes, editColor, previewThemes } from "./../../../actions/ThemeEditor"; //AppiumX Desktop path


class ThemeEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edits: [{
        theme: 0,
        key: '',
        color: '',

      }],
      editKey: '',
      editedColor: '',
      viewButtonVisible: false,
    }
  }

  componentDidMount() {
    this.props.getAllThemes()
  }

  _toggleEditColorCard = (title) => {
    const key = title || '';
    this.setState({ editKey: key })
  }

  _updateEditedColor = (color) => {
    if (color.length <= 7) {
      const shouldViewButtonVisible = color.length === 7
      this.setState({
        editedColor: color,
        viewButtonVisible: shouldViewButtonVisible,
      })
    }
    console.log('only 6 chars')
  }

  updateTheme = (themeIndex, colorTitle, color) => {
    // console.log('clicking here', this.props)
    this.props.editColor(themeIndex, colorTitle, color)
  }

  previewTheme = () => {
    this.props.previewThemes()
  }

  
  
  render() {
    const { themes } = this.props
    return (
      <div style={styles.themesContainer}>
        <div style={styles.themeSelectorDisplayContainer}>
          <ThemeSelector themes={themes} />
          <ThemeColorDisplay />
        </div>
        <ThemeEditorPanel />
      </div>
    )
  }
}

const mapStateToProps = ({ themeSelector}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeEditor)

const styles = {
  themesContainer: { 
    height: '100%', 
    width: '100%', 
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
    backgroundColor: 'cyan',
  },
  themeSelectorDisplayContainer: {
    width: '80%',
    backgroundColor: 'azure',
  },
}