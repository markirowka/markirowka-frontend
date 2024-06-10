/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "./form"
import { FC } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

interface IFormSelectProps {
	className?: string,
	form: any,
	name: string,
	label: string,
	placeholder: string,
	options: string[]
}

export const FormSelect: FC<IFormSelectProps> = ({
	className = '',
	form,
	name,
	label,
	placeholder,
	options
}) => {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className={className}>
					<FormLabel>{label}</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{
								options.map((el, index) => {
									return (
										<SelectItem key={index} value={el}>{el}</SelectItem>
									)
								})
							}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}