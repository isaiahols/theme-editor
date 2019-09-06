import React, { Component } from 'react'
import { connect } from "react-redux";
import ColorCard from './ColorCard'
import ThemeSelector from './ThemeSelector';

import { getAllThemes, editColor, previewThemes } from "./../redux/actions/ThemeEditor";
// import { getAllThemes, editColor, previewThemes } from "./../../../actions/ThemeEditor";


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

  colorCardList(theme, themeIndex) {
    const listDisplay = [];
    console.log('THEME', theme)
    for (let color in theme) {
      const newCard = <ColorCard
        color={theme[color]}
        title={color}
        themeIndex={themeIndex}
        editKey={this.state.editKey}
        editedColor={this.state.editedColor}
        _toggleEditColorCard={this._toggleEditColorCard}
        _updateEditedColor={this._updateEditedColor}
      />

      listDisplay.push(newCard)
    }
    return listDisplay
  }

  themeList(themes) {
    // return themes.map((theme, index) => this.colorCardList(theme, index))
  }

  render() {
    const { themes } = this.props
    return (
      <div style={{ height: '100%', width: '100%', border: '1px solid black'}}>
        <ThemeSelector themes={this.props.themes} />
        <h2>Welcome to the color editor page</h2>
        {this.state.viewButtonVisible && <button type="button" onClick={() => this.updateTheme()} >Save Changes</button>}
        <button type="button" onClick={() => this.previewTheme()} >Preview</button>
        {this.themeList(themes)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    themes: state.themes,
    activeThemeRequest: state.activeThemeRequest,
  })
}

const mapDispatchToProps = {
  getAllThemes,
  editColor,
  previewThemes,
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeEditor)