import {
  LOAD_THEMES_TO_STATE,
  GET_THEMES_REQUEST,
  GET_THEMES_ERROR,
  PREVIEW_THEMES_REQUEST,
  EDIT_COLOR,
} from './../actions/ThemeEditor'


const INITIAL_STATE = {
  open: false,
  themes: [
    {
      id: "normal",
      display_key: "COLOR_THEME_NORMAL",
      is_settings_option: true,
      uses_standard_budget_rendering: true,
      portrait_background_image_filename: "background_portrait.png",
      landscape_background_image_filename: "background_landscape.png",
      white_color: "#ffffff",
      black_color: "#000000",
      slate_color: "#2e353b",
      ash_color: "#576675",
      background_color: "#ffffff",
      secondary_background_color: "#fafbfc",
      utility_color: "#ebeff5",
      secondary_text_color: "#576675",
      standard_text_color: "#2e353b",
      net_worth_gradient_start_color: "#f0fcf8",
      highlight_text_color: "#ffffff",
      scrim_color: "#2e353b",
      menu_background_color: "#2e353b",
      menu_button_bar_color: "#21262B",
      menu_separator_color: "#000000",
      message_banner_background_color: "#2e353b",
      checkbox_checkmark_color: "#ffffff",
      checkbox_checked_background_color: "#2e353b",
      checkbox_unchecked_background_color: "#ebeff5",
      pure_red_color: "#ff0000",
      orange_color: "#f48647",
      red_color: "#eb3434",
      yellow_color: "#fcbc19",
      green_color: "#14c764",
      budget_green_color: "#14c764",
      budget_yellow_color: "#fcbc19",
      budget_red_color: "#eb3434",
      budget_arc_green_color: "#97e9bb",
      budget_arc_yellow_color: "#f7dc7c",
      budget_arc_red_color: "#ff6c61",
      bar_graph_opacity: 128,
      help_scrim_opacity: 255,
      keyboard_appearance: "DEFAULT",
    },
    {
      id: "dark",
      display_key: "COLOR_THEME_DARK",
      is_settings_option: true,
      uses_standard_budget_rendering: false,
      portrait_background_image_filename: "dark_background_portrait.png",
      landscape_background_image_filename: "dark_background_landscape.png",
      white_color: "#ffffff",
      black_color: "#000000",
      slate_color: "#2e353b",
      ash_color: "#576675",
      background_color: "#2e353b",
      secondary_background_color: "#2e353b",
      utility_color: "#576675",
      secondary_text_color: "#ebeff5",
      standard_text_color: "#fafbfc",
      net_worth_gradient_start_color: "#2e353b",
      highlight_text_color: "#2e353b",
      primary_text_color: "#ffffff",
      scrim_color: "#ffffff",
      menu_background_color: "#1f262c",
      menu_button_bar_color: "#131619",
      menu_separator_color: "#ebeff5",
      message_banner_background_color: "#ebeff5",
      checkbox_checkmark_color: "#2e353b",
      checkbox_checked_background_color: "#ffffff",
      checkbox_unchecked_background_color: "#576675",
      pure_red_color: "#ff0000",
      orange_color: "#f48647",
      red_color: "#eb3434",
      yellow_color: "#fcbc19",
      green_color: "#14c764",
      budget_green_color: "#14c764",
      budget_yellow_color: "#fcbc19",
      budget_red_color: "#eb3434",
      budget_arc_green_color: "#97e9bb",
      budget_arc_yellow_color: "#f7dc7c",
      budget_arc_red_color: "#ff6c61",
      bar_graph_opacity: 255,
      help_scrim_opacity: 150,
      keyboard_appearance: "DARK",
    }
  ],
  savedColors: {},
  error: '',
  activeThemeRequest: false,
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action


  switch (type) {
    case LOAD_THEMES_TO_STATE:
      return {
        ...state,
        themes: JSON.parse(payload).themes,
        // activeThemeRequest: false
      };
    case GET_THEMES_REQUEST:
      return state;
    case GET_THEMES_ERROR:
      return { ...state, error: payload };
    case PREVIEW_THEMES_REQUEST:
      return { ...state, activeThemeRequest: !state.activeThemeRequest };
    case EDIT_COLOR:
      console.log('This is EDIT COLOR REDUCER', payload)
      return {
        ...state,
        themes: state.themes.map((theme, i) => {
          if (i === payload.themeIndex) {
            return {
              ...theme,
              [payload.colorTitle]: payload.color
            }
          };
          return theme;
        })
      };
    default:
      return state;
  }

}