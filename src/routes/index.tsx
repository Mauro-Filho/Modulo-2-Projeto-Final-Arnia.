import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from '../globalStyle'
import { LoginPage } from '../pages/LoginPage/index'
import { DashboardPage } from '../pages/Dashboard/index'
import { Predctions } from '../pages/Predicoes'
import { Products } from '../pages/Produtos'
import { SvgViews } from '../pages/svg.Viwes'
// import { Products } from '../pages/Produtos/index'
// import { Predctions } from '../pages/Predicoes'

export function AppRoutes() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/predicoes" element={<Predctions />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/svg" element={<SvgViews />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  )
}
