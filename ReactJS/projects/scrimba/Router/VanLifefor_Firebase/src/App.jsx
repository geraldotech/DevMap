import './App.css'
import './server'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans'
import VanDetail from './pages/vanDetails'
import Layout from './components/Layout'
import Income from './pages/hosts/Income'
import Dashboard from './pages/hosts/Dashboard'
import Reviews from './pages/hosts/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/hosts/HostVans'
import HostVansDetails from './pages/hosts/HostVansDetails'
import HostVanInfo from './pages/hosts/HostVanInfo'
import HostVanPhotos from './pages/hosts/HostVanPhotos'
import HostVanPricing from './pages/hosts/HostVanPricing'
import NotFound from './pages/NotFound'
import Login from './pages/login'
import AuthRequired from './components/AuthRequired'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* Route Params:id */}
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />}></Route>

            {/* Outlet Dashboard */}
            <Route element={<AuthRequired />}>
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />

                <Route path="vans" element={<HostVans />} />

                <Route path="vans/:id" element={<HostVansDetails />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
              {/*  Outlet Dashboard */}
            </Route>
          </Route>

          {/*deixar a route fora do parent <Route> quando desejar que essa rota nao carregue o layout <Route
            path="/about"
            element={<About />}
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
