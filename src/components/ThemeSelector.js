import React from 'react';
import { connect } from 'react-redux';

// import { selectTheme } from './../redux/actions/ThemeEditor';
// import { selectTheme } from './../../../actions/ThemeEditor';

const ThemeSettings = (props) => {
  const mappedThemes = props.themes.map((theme, index) => {
    return (<div style={styles.themeTitle} key={index}>
      <h3 style={styles.themeTitleText} >{theme.id}</h3>
    </div>)
  })

  return (
    <div style={styles.themeContainer}>
      {mappedThemes}
    </div>
  )
};

const mapStateToProps = ({themeSelector}) => ({
  themes: themeSelector.themes,
})

const mapDispatchToProps = {
  // selectTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSettings);

const styles = {
  themeContainer: {
    width: '100%',
    height: '20vh',
    display: "flex",
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  themeTitle: {
    margin: 10,
    width: 100,
    width: 100,
    backgroundColor: 'green',
  },
  themeTitleText: {
    fontSize: 25,
  },
}