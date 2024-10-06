// import { useAtom } from "jotai"
// import { useNavigate } from "react-router-dom"
import { OrderForm, OrderTable } from "@/feature/order"
// import { userAtom } from "@/feature/common"

export const OrderPage = () => {

	return (
		<>
			<OrderForm />
			<OrderTable />
		</>
	)
}