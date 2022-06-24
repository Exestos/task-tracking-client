import React, { useState, useCallback, useEffect, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const storageName = 'userData'


interface IAuthContext {
  userId: number | null
  token: string | null
  signin: (login: string, password: string) => void
  signout: () => void
}


// export const authContext = createContext<IAuthContext>({
//   token: null,
//   userId: null,
//   username: null,
//   userEmail: null,
//   role: null,
//   login: null,
//   logout: null,
//   isAuthenticated: false
// })

// export const useAuth = () => {
  // const [token, setToken] = useState<string | null>(null)
  // const [userId, setUserId] = useState<number | null>(null)
  // const [username, setUsername] = useState<string | null>(null)
  // const [userEmail, setUserEmail] = useState<string | null>(null)
  // const [role, setRole] = useState<string | null>(null)
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(validateToken())
  // const navigate = useNavigate()

  // return useContext(authContext);

  // function validateToken() : boolean {
  //   const data = JSON.parse(localStorage.getItem(storageName) || '{}')
  //   return !!data.token
  // }

  // const login = useCallback(
  //   (token: string, username: string, userEmail: string, role: string) => {
  //     setToken(token)
  //     setUserId(1)
  //     setUsername(username)
  //     setUserEmail(userEmail)
  //     setRole(role)

  //     localStorage.setItem(
  //       storageName,
  //       JSON.stringify({
  //         token,
  //         userId,
  //         username,
  //         userEmail,
  //         role
  //       })
  //     )
  //     setIsAuthenticated(validateToken())
  //     navigate('/')
  //   },

  //   []
  // )

  // const logout = useCallback(() => {
  //   localStorage.removeItem(storageName)
  //   setToken(null)
  //   setUserId(null)
  //   setUsername(null)
  //   setUserEmail(null)
  //   setRole(null)
  //   console.log(isAuthenticated)
  //   setIsAuthenticated(false)
  //   console.log(isAuthenticated)
  //   navigate('/login')
  // }, [])

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem(storageName) || '{}')

  //   if (data && data.token) {
  //     login(data.token, data.userId, data.username, data.userEmail, data.role)
  //   }
  // }, [login, logout])

//   return { login, logout, token, userId, username, userEmail, role, isAuthenticated}
// }


export const authContext = createContext<IAuthContext>({
  userId: null,
  token: null,
  signin: (login: string, password: string) => {null},
  signout: () => {null}
})

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth(): IAuthContext {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const signin: (login: string, password: string) => void = () => {
      setUserId(1)
      setToken("dfg")
      navigate("/", { replace: true })
  };

  const signout: () => void = () => {
      setUserId(null)
      setToken(null)
      navigate("/login", { replace: true })
  };

  return {
    userId,
    token,
    signin,
    signout
  };
}








// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }