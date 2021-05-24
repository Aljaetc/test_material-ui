import { createMuiTheme } from '@material-ui/core/styles'


const colors = {
  green: '#6D9B12',
  darkGreen: '#4D7B00',
  blue: '#4285F4',
  red: '#FF0000',
  gray: '#E5E5E5',
  darkGray: '#B5B5B5',
  grayText: '#636363',
  white: '#FFFFFF',
  black: '#000000',
  inputBackground: '#EEEEEE'
}

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
  overrides: {

    // Buttons

    MuiButton: {
      root: {
        fontSize: '16px',
        fontWeight: '900',
        lineHeight: '19px',
        padding: '16px 38px'
      },

      contained: {
        backgroundColor: colors.green,
        color: colors.white,

        '&:hover': {
          backgroundColor: colors.darkGreen,
        }
      },

      containedPrimary: {
        backgroundColor: colors.blue
      },

      containedSecondary: {
        backgroundColor: colors.gray,
        color: colors.grayText,

        '&:hover': {
          backgroundColor: colors.darkGray
        }
      },

      sizeSmall: {
        fontSize: '16px',
        padding: '10px 32px'
      },
      sizeLarge: {
        width: '270px',
        padding: '16px',
        fontSize: '16px',
        fontWeight: '900'
      }
    },

    // Typography

    MuiTypography: {
      root: {
        color: colors.black,
      },
      gutterBottom: {
        marginBottom: '24px'
      },
      h1: {
        fontSize: '36px',
        fontWeight: '900',
        lineHeight: '42px'
      },
      h2: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: '37px'
      },
      h3: {
        fontSize: '28px',
        fontWeight: '500',
        lineHeight: '33px'
      },
      h4: {
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '28px'
      },
      h5: {
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21px'
      },
      h6: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '19px'
      },
      subtitle1: {
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '16px'
      },
      subtitle2: {
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '16px'
      },
      body1: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '19px',
      }
    },

    // Inputs
    MuiTextField: {
      root: {
        width: '550px'
      }
    },

    MuiFormControl: {
      marginNormal: {
        marginTop: '25px',
        marginBottom: '30px'
      }
    },
  
    MuiFilledInput: {
      root: {
        borderRadius: '6px!important',
        backgroundColor: colors.inputBackground,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.inputBackground,
        '&.Mui-focused': {
          backgroundColor: colors.inputBackground,
          borderColor: colors.green
        },
        '&.Mui-error': {
          borderColor: colors.red
        }
      },
      input: {
        boxSizing: 'border-box',
        padding: '17px 13px',
        width: '550px',
        height: '50px'
      },
      underline: {
        '&:before': {
          borderBottom: 'none'
        },
        '&:hover:before': {
          borderBottom: 'none'
        },
        '&:after': {
          borderBottom: 'none'
        }
      }
    },

    MuiInputLabel: {
      root: {
        fontSize: '14px',
        fontWeight: '900',
        lineHeight: '16px',
        color: colors.black,
      },
      filled: {
        '&.MuiInputLabel-shrink': {
          transform: 'none',
        }
      },
      formControl: {
        top: '-24px',
      },   
    },
    MuiFormLabel: {
      root: {
        '&.Mui-focused': {
          color: colors.green
        }
      }
    },

    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          color: colors.red
        }
      },
      contained: {
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '18px',
        marginTop: defaultTheme.spacing(.875),
        marginLeft: '0px'
      }
    }

  }
})

export default theme