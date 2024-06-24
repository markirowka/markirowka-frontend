import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import {
	AuthPage,
	ClothesPage,
	HomePage,
	RegistrationPage,
	ShoesPage,
	SignUpConfirmPage,
	NewPasswordPage,
	SendRecoveryMailPage,
	OrderPage,
	ProfilePage,
	EditProfilePage
} from "./pages";
import { MainPage } from "./pages/MainPage";
import { MainLayout } from "./components/layouts/MainLayout";

function App() {
	return (
		<Routes>
			<Route path="/home" element={<Layout><HomePage /></Layout>} />
			<Route path="/auth" element={<Layout><AuthPage /></Layout>} />
			<Route path="/registration" element={<Layout > <RegistrationPage /></ Layout>} />

			<Route path="/category/shoes" element={<Layout><ShoesPage /></Layout>} />
			<Route path="/category/clothes" element={<Layout><ClothesPage /></Layout>} />
			<Route path="/signupconfirm" element={<Layout><SignUpConfirmPage /></Layout>} />

			<Route path="/password-recovery" element={<Layout><SendRecoveryMailPage /></Layout>} />
			<Route path="/recoverpassword" element={<Layout><NewPasswordPage /></Layout>} />

			<Route path="/new-order" element={<Layout><OrderPage /></Layout>} />

			<Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
			<Route path="/edit-profile" element={<Layout><EditProfilePage /></Layout>} />
			<Route path="*" element={<></>} />

			<Route path="/" element={<MainLayout><MainPage /></MainLayout>} />
		</Routes>
	)
}

export default App
