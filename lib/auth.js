import axios from 'axios';
import Router from 'next/router';

axios.defaults.withCredentials = true;

export const getServerSideToken = req => {
  const { signedCookies = {} } = req;

  if (!signedCookies) {
    return {}
  } else if (!signedCookies.token) {
    return {}
  }
  return { user: signedCookies.token }
}

export const getClientSideToken = () => {
  if (typeof window !== 'undefined') {
    const user = window[ WINDOW_USER_SCRIPT_VARIABLE ] || {}

    return {user}
  }

  return { user: {} }

}


const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';

export const getUserScript = user => {
  return `${ WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user) };`;
} 

export const loginUser = async( email, password ) => {
  const { data } = await axios.post( '/api/login' , { email, password});
  if (typeof window !== 'undefined') {
    window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
  }

  // console.log(data);
} 

export const logoutUser = async () => {
  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = {};
  }

  await axios.post('/api/logout');
  Router.push('/login')
}



/*-------------- High order function below --------------*/
export const authInitialProps = isProtectedRoute => ({ req, res }) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  const currentPath = req ? getServerSideToken(req) : getClientSideToken();
  const user = auth.user;
  const isAnonymous = !user || user.type !== "authenticated";
  

  if (isProtectedRoute && isAnonymous && currentPath !== "/login") {
    return redirectUser(res, "/login");
  }
  
  return { auth };

};

const redirecUSer = (res, path) => {
  if (res) {
    res.redirect(302, path);
    res.finsished = true;
    return {};
  }
}





export const getUserProfile = async () => {
  const { data } = await axios.get('/api/profile');
  return data;

}
