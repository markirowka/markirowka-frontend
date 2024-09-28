import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import { OrderForm, OrderTable } from "@/feature/order"
import { userAtom } from "@/feature/common"

export const OrderPage = () => {

	const [user] = useAtom(userAtom)
	const navigate = useNavigate();
	
	if (!user) {
		navigate("/auth");
		return; 
	}

	return (
		<>
			<OrderForm />
			<OrderTable />
		</>
	)
}