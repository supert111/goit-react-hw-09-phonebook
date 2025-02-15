import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://phonebook-backend-o2ud.onrender.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Реєстрація
export const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(
      authActions.registerError(error.response?.data?.message || error.message),
    );
  }
};

// Логін
const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(
      authActions.loginError(error.response?.data?.message || error.message),
    );
  }
};

// Логаут
const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(
      authActions.logoutError(error.response?.data?.message || error.message),
    );
  }
};

// Поточний користувач
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(
      authActions.getCurrentUserError(
        error.response?.data?.message || error.message,
      ),
    );
  }
};

export default { register, logOut, logIn, getCurrentUser };
