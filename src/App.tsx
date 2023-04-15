import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './../styles/themes/default'
import { GlobalStyle } from './../styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffesContextsProvider } from './contexts/CoffesContex'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffesContextsProvider>
          <Router />
        </CoffesContextsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
