import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/">
            <Home isDarkTheme={isDarkTheme} />
          </Route>
          <Route exact path="/about">
            <About isDarkTheme={isDarkTheme} />
          </Route>
          <Route>
            <NotFound isDarkTheme={isDarkTheme} />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
