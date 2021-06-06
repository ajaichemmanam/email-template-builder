import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'
import TemplateGallery from './components/TemplateGallery/TemplateGallery'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={`/`} exact={true}>
          <MainPage />
        </Route>
        <Route path={`/templates`}>
          <TemplateGallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
