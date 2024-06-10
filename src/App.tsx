import { Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage"
import { Registration } from "./pages/Registration";
import { Layout } from "./layouts/Layout";
import { MainPage } from "./pages/MainPage";
import { Shoes } from "./pages/Shoes";
import { Clothes } from "./pages/Clothes";
import { PasswordRecovery } from "./pages/PasswordRecovery";

function App() {
	return (
		<Routes >
			<Route path="/" element={<Layout><MainPage /></Layout>} />
			<Route path="/auth" element={<Layout><AuthPage /></Layout>} />
			<Route path="/registration" element={< Layout > <Registration /></ Layout>} />

			<Route path="/category/shoes" element={<Layout><Shoes /></Layout>} />
			<Route path="/category/clothes" element={<Layout><Clothes /></Layout>} />
			<Route path="/password-recovery" element={<Layout><PasswordRecovery /></Layout>} />
			<Route path="*" element={<></>} />
		</Routes >
	)
}

export default App
