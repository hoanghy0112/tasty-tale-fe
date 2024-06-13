import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "./app";

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
