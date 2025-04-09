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
  import { FC, useState } from "react";
  import { useAtom } from "jotai";
import { categoriesAtom } from "@/feature/common/admin";
import { backendInstance } from "@/services/backendService";
import { toast } from "sonner";
  
  interface EmptyDialogProps {}
  
  export const CategoryCreateDialog: FC<EmptyDialogProps> = ({ }) => {
	const [, setCategories] = useAtom(categoriesAtom);
	const [name, setName] = useState<string>("");

    const saveAction = () => {
        backendInstance.addCategory(name).then(async () => {
            const cts = (await backendInstance.getCategories())?.categories || []
            setCategories(cts)
        }).catch(e => {
            console.log(e)
            toast("не удалось сохранить")
        })
    }
  
	return (
	  <AlertDialog>
		<AlertDialogTrigger asChild>
		  <Button variant={"default"}>Добавить категорию</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
		  <AlertDialogHeader>
			<AlertDialogTitle className="p-1">Новая категория</AlertDialogTitle>
			<p className="dialogHint">Нажмите, чтобы ввести имя</p>
			<AlertDialogDescription>
			  <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
				<span className="font-semibold text-base">название</span>
				<input
				  type="text"
				  value={name}
				  onChange={(event) => setName(event.target.value)}
				  className="text-base input-text-right"
				/>
			  </div>

			</AlertDialogDescription>
		  </AlertDialogHeader>
		  <AlertDialogFooter>
			<AlertDialogCancel onClick={saveAction}>Сохранить и закрыть</AlertDialogCancel>
		  </AlertDialogFooter>
		</AlertDialogContent>
	  </AlertDialog>
	);
  };