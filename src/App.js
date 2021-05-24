import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './common/theme'
import StoryBook from './components/StoryBook'
import SignUp from './components/SingUp'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/story-book">
          <StoryBook />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
