import { takeLatest, call, put ,all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.active) {
      toast.error("Usuário não foi ativado");
      return;
    }

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push("/perfil")
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados!")
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, user_name, email, password, avatar_id } = payload;

    yield call(api.post, "users", {
      name,
      user_name,
      email,
      password,
      avatar_id
    });

    history.push("/confirmar")
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados!")

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token ) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("@auth/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut)
]);