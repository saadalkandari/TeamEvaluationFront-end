import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  user = null;

  // * signup method:

  signup = async (userData, navigate) => {
    const body = JSON.stringify({ userData });
    try {
      await instance.post("/api/register/", body);
      await this.signin(userData, navigate);
    } catch (error) {
      console.log(error.response);
    }
  };
  // * signin method:
  //   signin = async (userData, navigation) => {
  //     try {
  //       const res = await instance.post("/api/login/", userData);
  //       const { token } = res.data;
  //       this.user = decode(token);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  login = async (userData, navigate) => {
    try {
      const res = await instance.post("/api/jwt/create/", userData);
      this.setUser(res.data.access);
      const res2 = await instance.get("/api/users/me/");
      this.user = res2.data;
      navigate("/");
    } catch (error) {
      console.log({ error });
    }
  };

  // * signout method:
  signout = async (navigation) => {
    if (this.user === null) {
      console.log("user is not signed in");
    } else {
      this.user = null;
      await localStorage.removeItem("token");
    }
  };
  // * set user method:
  setUser = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  };
  // * Check for Token method:
  checkForToken = async () => {
    const token = await localStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < +decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
