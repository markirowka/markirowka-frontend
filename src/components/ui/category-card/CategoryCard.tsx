import { cn } from "@/lib/utils"
import { FC } from "react"
import styles from './CategoryCard.module.scss'
import { Link } from "react-router-dom"

interface ICategoryCardProps {
	name: string,
	picture: string,
	to: string,
	isRequired?: boolean
}

export const CategoryCard: FC<ICategoryCardProps> = ({
	name,
	picture,
	to,
	isRequired = true,
}) => {
	return (
		<Link to={to} className={cn(styles.container)}>
			<div className={cn(styles.wrapper)}>
				<img className={cn(styles.picture)} src={picture} alt={name} />
				<div className={cn(styles.content)}>
					{
						isRequired && (
							<div className="flex flex-row gap-2">
								<img src="/star.svg" alt="Обязательно*" />
								<span>Обязательная маркировка</span>
							</div>
						)
					}
					<h5 className="mt-[6px]">{name}</h5>
				</div>
			</div>
		</Link>
	)
}