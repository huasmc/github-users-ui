import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Login from "./features/login/Login";
import React from "react";
import "./App.css";
import UserDetails from "./features/userDetails/UserDetails";
import Navbar from "./features/navbar/Navbar";
import { Row } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Row>
					<Navbar />
				</Row>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/user-details" element={<UserDetails />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
