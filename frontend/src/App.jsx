import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Context
import { AuthProvider } from './context/AuthProvider';
import { UsuariosProvider } from './context/UsuariosProvider'
// Layout (LayoutAuth)
import LayoutAuth from './Layout/LayoutAuth'
import RutaProtegida from './Layout/RutaProtegida'
// pages (usuarios)
import Login from './pages/Login'
import Registro from './pages/usuarios/Registro'
import OlvidePassword from './pages/usuarios/OlvidePassword'
import Confirmar from './pages/usuarios/Confirmar'
// pages (usuarios protegidas)
import Perfil from './pages/usuarios/Perfil'
import CambiarPassword from './pages/usuarios/CambiarPassword.jsx'
// pages (productos)


function App() {
  return (
    <Router>
      <AuthProvider>
        <UsuariosProvider>
            <Routes>
              {/* RUTAS PUBLICAS */}
              <Route path='/' element={<LayoutAuth />}>
                <Route index element={<Login />} />
                <Route path='registro' element={<Registro />} />
                <Route path='olvide-password' element={<OlvidePassword />} />
                <Route path='confirmar/:id' element={<Confirmar />} />
              </Route>
              {/* Rutas Protegidas */}
              <Route path='/perfil' element={<RutaProtegida />}>
                <Route index element={<Perfil />} />
                <Route path="cambiar-password" element={<CambiarPassword />} />
              </Route>
            </Routes>
        </UsuariosProvider>
      </AuthProvider>
    </Router>
  )
}
export default App