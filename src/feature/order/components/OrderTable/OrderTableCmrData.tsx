import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  import { FC } from "react";
  import { cmrDeliveryAtom } from "../../store";
  import { useAtom } from "jotai";
import { CMRDeliveryData, packTypes } from "../../config";
  
  interface ICMRDeliveryDialogProps {}
  
  export const CMRDeliveryDialog: FC<ICMRDeliveryDialogProps> = ({ }) => {
	const [delivery, setDelivery] = useAtom(cmrDeliveryAtom);
	

	const updateParamCMRDelivery = (
		setDelivery: (update: (prev: CMRDeliveryData) => CMRDeliveryData) => void,
		field: keyof CMRDeliveryData
	  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const value = event.target.type === "number" ? Number(event.target.value) || 0 : event.target.value;
	  
		setDelivery(prev => ({
		  ...prev,
		  [field]: value,
		}));
	  };

  
	return (
	  <AlertDialog>
		<AlertDialogTrigger asChild>
		  <Button variant={"default"}>Заполнить данные для накладной CMR</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
		  <AlertDialogHeader>
			<AlertDialogTitle className="p-1">Дополнительные данные для накладной CMR</AlertDialogTitle>
			<p className="dialogHint">Нажмите на поле для редактирования</p>
			<AlertDialogDescription>
			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">Вес (кг)</span>
				<input
				  type="text"
				  value={delivery.weight}
				  onChange={updateParamCMRDelivery(setDelivery, "weight")}
				  className="text-base input-text-right"
				/>
			  </div>
  
			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">Объем (м³)</span>
				<input
				  type="text"
				  value={delivery.volume}
				  onChange={updateParamCMRDelivery(setDelivery, "volume")}
				  className="text-base input-text-right"
				/>
			  </div>
  
			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">Кол-во мест</span>
				<input
				  type="number"
				  value={delivery.cargoPlaceCount}
				  onChange={updateParamCMRDelivery(setDelivery, "cargoPlaceCount")}
				  className="text-base input-text-right"
				/>
			  </div>
  			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">Тип упаковки</span>
				<select
				  value={delivery.packType}
				  onChange={updateParamCMRDelivery(setDelivery, "packType")}
				  className="text-base"
				>
					<option value="">Но умолчанию</option>
					{packTypes.map((item, index) => {
						return <option key={`pckt${index}`} value={item}>{item}</option>
					})}
				</select>
			  </div>
  
			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">ФИО водителя</span>
				<input
				  type="text"
				  value={delivery.driverName}
				  onChange={updateParamCMRDelivery(setDelivery, "driverName")}
				  className="text-base input-text-right"
				/>
			  </div>

			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">Марка авто</span>
				<input
				  type="text"
				  value={delivery.autoMark}
				  onChange={updateParamCMRDelivery(setDelivery, "autoMark")}
				  className="text-base input-text-right"
				/>
			  </div>
  
			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">Номер авто</span>
				<input
				  type="text"
				  value={delivery.autoNumber || ""}
				  onChange={updateParamCMRDelivery(setDelivery, "autoNumber")}
				  className="text-base input-text-right"
				/>
			  </div>
  
			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">Номер прицепа</span>
				<input
				  type="text"
				  value={delivery.subAutoNumber || ""}
				  onChange={updateParamCMRDelivery(setDelivery, "subAutoNumber")}
				  className="text-base input-text-right"
				/>
			  </div>
			</AlertDialogDescription>
		  </AlertDialogHeader>
		  <AlertDialogFooter>
			<AlertDialogCancel>Сохранить и закрыть</AlertDialogCancel>
		  </AlertDialogFooter>
		</AlertDialogContent>
	  </AlertDialog>
	);
  };