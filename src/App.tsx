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
						<Route path='/dashboard/exchanges/tickets' element={<Tickets />} />
						<Route path='/dashboard/exchanges/deposits' element={<Deposits />} />
						<Route path='/dashboard/exchanges/retraits' element={<Retraits />} />
						<Route path='/dashboard/exchanges/transferts' element={<Transferts />} />
						
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
