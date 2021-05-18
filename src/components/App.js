import { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  // Component Did Mount
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      setInit(true);
      setUserObj(formatUser(user));
    });
  }, []);

  const refreshUser = () => {
    // react는 state를 shallow comparison한다
    // 구조 분해 할당시 함수는 들어오지 않나..? 확인해봐야함
    const user = authService.currentUser;
    setUserObj(formatUser(user));
  };

  const formatUser = (fbaseUser) => {
    if (!fbaseUser) return null;

    return {
      uid: fbaseUser.uid,
      displayName: fbaseUser.displayName,
      updateProfile: (displayName) => fbaseUser.updateProfile(displayName),
    };
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        'Initializing...'
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
