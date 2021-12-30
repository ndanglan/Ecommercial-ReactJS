import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import routes from './routes';
import { getShow } from './stores/features/loadingSlice';
import DefaultLayout from './Layout/DefaultLayout';
import './App.css';

function App() {
  const loading = useSelector(getShow);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params])

  return (
    <>
      { loading && <div className='loading'>
        <div className='spinner'></div>
      </div> }
      <>
        <Router>
          <DefaultLayout>
            <Routes>
              { routes.map((route, index) => {
                return (
                  <Route path={ route.path } element={ route.page } key={ index } />
                )
              }) }
            </Routes>
          </DefaultLayout>
        </Router>
      </>
    </>
  );
}

export default App;
