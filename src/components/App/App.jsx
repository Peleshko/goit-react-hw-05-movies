import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from '../AppBar';
import Container from '../Container';
import Spinner from '../Loader';
import NotFoundPage from '../../pages/NotFoundPage';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviePage = lazy(() => import('../../pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
