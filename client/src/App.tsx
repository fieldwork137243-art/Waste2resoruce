import { Route, Switch } from 'wouter';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/case-studies" component={CaseStudiesPage} />
        <Route path="/about" component={AboutPage} />
        <Route>
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-display font-semibold text-foreground mb-4">404</h1>
              <p className="text-muted-foreground">Page not found.</p>
            </div>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}
