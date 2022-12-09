/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Client from './pages/clients/Client';
import Business from './pages/clients/Business';
import Tickets from './pages/exchange/Tickets';
import Deposits from './pages/exchange/transacts/Deposits';
import Retraits from './pages/exchange/transacts/Retraits';
import Transferts from './pages/exchange/transacts/Transferts';
import Wallets from './pages/clients/Wallets';
import Cards from './pages/card-manager/cards/Cards';
import Serials from './pages/card-manager/serials/Serials';
import Orders from './pages/card-manager/orders/Orders';
import SystemConfig from './pages/settings/SystemConfig';
import APIConfig from './pages/settings/APIConfig';
import MethodPaymentConfig from './pages/settings/MethodPaymentConfig';


function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route  element={<MainLayout />} >
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/dashboard/clients' element={<Client />} />
						<Route path='/dashboard/business' element={<Business />} />
						<Route path='/dashboard/wallets' element={<Wallets />} />
						{/* exchange routes */}
						<Route path='/dashboard/exchanges/tickets' element={<Tickets />} />
						<Route path='/dashboard/exchanges/deposits' element={<Deposits />} />
						<Route path='/dashboard/exchanges/withdrawals' element={<Retraits />} />
						<Route path='/dashboard/exchanges/transferts' element={<Transferts />} />
						{/* card-manager routes */}
						<Route path='/dashboard/card-manager/' element={<Cards />} />
						<Route path='/dashboard/card-manager/serials' element={<Serials />} />
						<Route path='/dashboard/card-manager/orders' element={<Orders />} />
						{/* settings routes */}
						<Route path='/dashboard/system-config/' element={<SystemConfig />} />
						<Route path='/dashboard/system-config/apis-accounts' element={<APIConfig />} />
						<Route path='/dashboard/system-config/methods' element={<MethodPaymentConfig />} />
					</Route>
				</Routes>
			</Router>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
}

export default App;
