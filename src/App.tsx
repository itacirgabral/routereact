
import Route from './components/Route'

import GreenPage from './pages/Green'
import IndexPage from './pages/Index'
import YellowPage from './pages/Yellow'

const App = () => <>
  <Route to="/green">
    <GreenPage />
  </Route>
  <Route to="/">
    <IndexPage />
  </Route>
  <Route to="/yellow">
    <YellowPage />
  </Route>
</>

export default App
