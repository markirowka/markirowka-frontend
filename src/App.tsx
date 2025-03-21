import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import {
	AuthPage,
	RegistrationPage,
	SignUpConfirmPage,
	NewPasswordPage,
	SendRecoveryMailPage,
	OrderPage,
	ProfilePage,
	EditProfilePage
} from "./pages";
import { MainPage } from "./pages/MainPage";
import { MainLayout } from "./components/layouts/MainLayout";
import { TextPage } from "./pages/TextPage";
import { useEffect } from "react";

function App() {


	useEffect(() => {

	}, [])

	function RedirectToOrder () {
		return <Navigate to="/new-order" replace />;
	  }	  
	
	return (
		<Routes>
			<Route path="/home" element={<RedirectToOrder />} />
			<Route path="/auth" element={<Layout><AuthPage /></Layout>} />
			<Route path="/registration" element={<Layout > <RegistrationPage /></ Layout>} />

			<Route path="/category/shoes" element={<RedirectToOrder />} />
			<Route path="/category/clothes" element={<RedirectToOrder />} />
			<Route path="/signupconfirm" element={<Layout><SignUpConfirmPage /></Layout>} />

			<Route path="/password-recovery" element={<Layout><SendRecoveryMailPage /></Layout>} />
			<Route path="/recoverpassword" element={<Layout><NewPasswordPage /></Layout>} />

			<Route path="/new-order" element={<Layout><OrderPage /></Layout>} />

			<Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
			<Route path="/edit-profile" element={<Layout><EditProfilePage /></Layout>} />
			<Route path="*" element={<Layout><TextPage /></Layout>} />

			<Route path="/" element={<MainLayout><MainPage /></MainLayout>} />
		</Routes>
	)
}

export default App
