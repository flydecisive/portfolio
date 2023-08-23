import { AppRoutes } from './routes';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { PageContext } from './contexts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { setNavState } from './store/actions/creators/nav';

import styles from './App.module.css';
import { useEffect } from 'react';

function App() {
  const navState = useSelector((store: any) => store?.nav);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeState = (navState: any, navTargetId: any) => {
    const newState: any = {};
    for (let i = 0; i < Object.keys(navState).length; i += 1) {
      if (i === navTargetId) {
        newState[navTargetId] = !navState[navTargetId];
      } else {
        newState[i] = false;
      }
    }

    return newState;
  };

  const toggleClick = (event: any) => {
    const id = Number(event.currentTarget.id);
    switch (id) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/resume');
        break;
      case 2:
        navigate('/work');
        break;
      case 3:
        navigate('/contact');
        break;
      default:
        navigate('/');
        break;
    }

    dispatch(setNavState(changeState(navState, id)));
  };

  useEffect(() => {
    if (navState[0] === true) {
      navigate('/');
    }
  }, [navState]);

  useEffect(() => {
    const userNavigate = () => {
      navigate('/portfolio');
    };
    window.addEventListener('beforeunload', userNavigate);
    return () => {
      window.removeEventListener('beforeunload', userNavigate);
    };
  }, []);

  return (
    <div className={`${styles.App} center`}>
      <PageContext.Provider value={{ toggleClick }}>
        <AppRoutes />
      </PageContext.Provider>
    </div>
  );
}

export default App;
