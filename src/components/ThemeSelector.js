import React from 'react';
import { connect } from 'react-redux';

// import { selectTheme } from './../redux/actions/ThemeEditor';
// import { selectTheme } from './../../../actions/ThemeEditor';

const ThemeSettings = (props) => {
  console.log('this is props',props)
  const mappedThemes = props.themes.map((theme, index) => {
    return (<div style={styles.themeTitle} key={index}>
      <h3>{theme.id}</h3>
      {/* <h3>{theme.display_key}</h3> */}
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
    width: '80%',
    height: '10vh',
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  themeTitle: {
    width: 50,
    width: 50,
    // borderRadius: 50, 
    backgroundColor: 'green',
  }
}