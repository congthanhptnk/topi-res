import firebase from 'firebase';

const authInitialState = {
  isLoggedIn: false
};

const AuthReducer = (state, action) => {
  switch(action.type){
    case "sign-in":
      return firebase.auth().signInAnonymously().then((x) => {
          console.log(x)
          return {isLoggedIn: true};
        }).catch((err) => {
          console.log(err)
          return {isLoggedIn: false};
        });
    case "sign-out":
      return null;
    default:
      return null;
  };
};

export { authInitialState };
export default AuthReducer;
