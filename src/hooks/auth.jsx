import { createContext, useContext, useState,useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({})
  const [adm, setAdm] = useState({})

  async function signIn({email, password}){

    try {
      if (email=="Admin" && password=="123") {
        localStorage.setItem("@foodexplorer:email", email)
        localStorage.setItem("@foodexplorer:password", password)
        setAdm( {email, password})
        
      } else {
        const response = await api.post("/sessions", {email, password})
        const { user, token } = response.data

        localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
        localStorage.setItem("@foodexplorer:token", token)
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({ user, token })
      }
    } catch (error) {
        alert(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token")
    const user = localStorage.getItem("@foodexplorer:user")

    const email = localStorage.getItem("@foodexplorer:email")
    const password =localStorage.getItem("@foodexplorer:password")

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token }) 
    } else if (email && password){
      setAdm( {email, password})
    }

  },[])


function signOut(){
    localStorage.removeItem("@foodexplorer:token")
    localStorage.removeItem("@foodexplorer:user")

    localStorage.removeItem("@foodexplorer:email")
    localStorage.removeItem("@foodexplorer:password")

    setData({})
    setAdm({})
}
  return (
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      admin: adm.email,
      signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
};