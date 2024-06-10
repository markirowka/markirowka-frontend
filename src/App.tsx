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
	SendRecoveryMailPage
} from "./pages";

function App() {
	return (
		<Routes >
			<Route path="/" element={<Layout><HomePage /></Layout>} />
			<Route path="/auth" element={<Layout><AuthPage /></Layout>} />
			<Route path="/registration" element={<Layout > <RegistrationPage /></ Layout>} />

			<Route path="/category/shoes" element={<Layout><ShoesPage /></Layout>} />
			<Route path="/category/clothes" element={<Layout><ClothesPage /></Layout>} />
			<Route path="/signupconfirm" element={<Layout><SignUpConfirmPage /></Layout>} />

			<Route path="/password-recovery" element={<Layout><SendRecoveryMailPage /></Layout>} />
			<Route path="/recoverpassword" element={<Layout><NewPasswordPage /></Layout>} />
			<Route path="*" element={<></>} />
		</Routes >
	)
}

export default App
