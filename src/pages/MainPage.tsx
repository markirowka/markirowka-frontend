import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const MainPage = () => {
	return (
		<>
			<div className="intro">
				<div className="container">
					<div className="intro__inner">
						<div className="left">
							<h1 className="intro__title mb-4 font-medium">Технологии для эффективной маркировки</h1>
							<p className="mb-6">
								Наши инновации делают ваш бизнес процветающим и надежным, давая
								вам преимущество в современной среде конкуренции.
							</p>
							<Link to={'/home'}>
								<Button>
									Подключиться платформе
									<img className="icon__btn" src="/images/icons/service/stamp 1.png" alt="#" />
								</Button>
							</Link>
							<img className="images__lents" src="images/lent.png" alt="#" />
						</div>
						<div className="right">
							<img className="images__box" src="images/Box.png" alt="#" />
						</div>
					</div>
				</div>
			</div>

			<section className="about">
				<div className="container">
					<div className="about__wrapper">
						<div className="left">
							<div className="about__item">
								<img className="item" src="images/Group 35933.png" alt="" />
							</div>
						</div>
						<div className="right">
							<h3 className="section__suptitle uppercase font-medium">Как это работает</h3>
							<h2 className="section__title font-medium mb-6">Как получить маркировку?</h2>
							<div className="section__text mb-8">
								<p>
									Маркировка в Системе <span>"Честный ЗНАК" </span>отслеживает
									путь продукции от производства до продажи через три этапа.
								</p>
							</div>
							<div className="section__stage">
								<h4 className="flex flex-row text-xl font-medium mb-4 gap-2">
									<img className="w-[24px]" src="images/icons/service/star.png" alt="#" />
									Этап 1: Значение маркировки на товарах
								</h4>
								<p className="stage font-normal mb-8">
									Маркировочные штрихкоды, размещаемые производителями и
									импортёрами на товарах
								</p>

								<h4 className="flex flex-row text-xl font-medium mb-4 gap-2">
									<img className="w-[24px]" src="images/icons/service/star.png" alt="#" />
									Этап 2: Оприходывание маркировки
								</h4>
								<p className="stage font-normal mb-8">
									После оформления заявки маркировка в течении 2-х рабочих дней приходит к вам, вам необходимо будет оприходовать ее
								</p>

								<h4 className="flex flex-row text-xl font-medium mb-4 gap-2">
									<img className="w-[24px]" src="images/icons/service/star.png" alt="#" />
									Этап 3: Оплата счета
								</h4>
								<p className="stage font-normal">
									После оприходования маркировки вам необходимо оплатить счет
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="products">
				<div className="container">
					<div className="products__wrapper">
						<div className="left">
							<h3 className="section__suptitle uppercase font-medium">Обязательно ли?</h3>
							<h2 className="section__title font-medium mb-6">
								Какие товары обязательны для маркировки
							</h2>

							<div className="section__stage">
								<h4 className="flex flex-row text-xl font-medium mb-4 gap-2">
									<img className="w-[24px]" src="images/icons/service/star.png" alt="#" />
									Этап 1: Значение маркировки на товарах
								</h4>
								<p className="stage font-normal mb-8">
									Маркировочные штрихкоды, размещаемые производителями и импортёрами на товарах
								</p>

								<h4 className="flex flex-row text-xl font-medium mb-4 gap-2">
									<img className="w-[24px]" src="images/icons/service/star.png" alt="#" />
									Этап 2: Процесс проверки и регистрации товаров
								</h4>
								<p className="stage font-normal mb-8">
									Поставщики проверяют маркировку и оформляют закупку и продажу товаров розничным продавцам
								</p>

								<h4 className="flex flex-row text-xl font-medium mb-4 gap-2">
									<img className="w-[24px]" src="images/icons/service/star.png" alt="#" />
									Этап 3: Учет маркировки и продаж на розничном уровне
								</h4>
								<p className="stage font-normal mb-8">
									Розничные продавцы проверяют маркировку товаров, фиксируют закупки и совершают продажи конечным потребителям
								</p>
							</div>
						</div>
						<div className="right">
							<div className="about__items ">
								<img className="item" src="images/Group.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="icons mb-16">
				<div className="container">
					<div className="top__icons">
						<div className="icons__img">
							<img src="images/icons/beer.png" alt="#" />
							<p>Пиво и слабоалкогольные напитки</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/milk.png" alt="#" />
							<p> Молочная продукция</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/water.png" alt="#" />
							<p>Упакованная еда</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/medicine.png" alt="#" />
							<p>Лекарства</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/tobacco.png" alt="#" />
							<p>Табак</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/clothes.png" alt="#" />
							<p>Легкая промышленность</p>
						</div>
					</div>

					<div className="bottom__icons">
						<div className="icons__img">
							<img src="images/icons/fur.png" alt="#" />
							<p>Шубы</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/izd_med.png" alt="#" />
							<p>Медицинские изделия</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/perfume.png" alt="#" />
							<p>Духи и туалетная вода</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/tires.png" alt="#" />
							<p>Шины</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/cameras.png" alt="#" />
							<p>Фотоаппараты и лампы-вспышки</p>
						</div>
						<div className="icons__img">
							<img src="images/icons/bad.png" alt="#" />
							<p>БАД</p>
						</div>
					</div>
				</div>
			</section>

			<section className="product">
				<div className="container">
					<div className="product__wrapper">
						<h2 className="order__title">Почему надо начинать сейчас?</h2>
						<Link to={'/home'}>
							<Button>
								Подключиться платформе
								<img className="icon__btn" src="/images/icons/service/stamp 1.png" alt="#" />
							</Button>
						</Link>
					</div>
					<div className="product__bottom">
						<div className="up">
							<img className="img__up" src="images/shopping_re_owap 1.png" alt="#" />
							Неизбежность
							<p className="mt-4">Скоро требования по маркировке охватят все товары</p>
						</div>

						<div className="up">
							<img className="img__up" src="images/management_re_tk5w 2.png" alt="#" />
							Время
							<p className="mt-4">Освойте новые правила и измените бизнес-процессы как можно раньше</p>
						</div>

						<div className="up">
							<img className="img__uper" src="images/logistics_x-4-dc 1.png" alt="#" />
							Без риска штрафа
							<p className="mt-4">Используйте нашу платформу, чтобы избежать штрафы и проходить любые налоговые проверки</p>
						</div>

					</div>
				</div>
			</section>

			<section className="order">
				<div className="container">
					<div className="order__wrapper">
						<h3 className="order__suptitle font-medium uppercase">Как проходит процесс?</h3>
						<h2 className="order__title mb-12">Как оформить заказ</h2>

						<div className="order__content">
							<div className="order__item">
								<h6 className="text__order font-medium mb-4">1. Регистрация на платформе</h6>
								<p>
									Зарегистрируйтесь на нашей платформе или войдите в существующий
									аккаунт
								</p>
							</div>

							<div className="order__item order__item--transparent">
								<h6 className="text__order font-medium mb-4">2. Дождитесь активации</h6>
								<p>Ожидайте, всё будет активировано в ближайшее время!</p>
								<div className="btn__order">
									<div className="flex flex-row items-center justify-center font-medium px-6 py-4 mt-4 border border-[#BEDF77] rounded-xl">
										<img className="icon__place" src="images/icons/service/timer 1.png" alt="#" />
										Обычно это занимает не больше 10-ти минут
									</div>
								</div>
							</div>
						</div>
						<div className="order__content">
							<div className="order__item order__item--transparent">
								<h6 className="text__orders font-medium mb-4">3. Заполните накладную</h6>
								<p>
									Пожалуйста, заполните соответствующую накладную и нажмите кнопку
									"Оформить".
								</p>
							</div>

							<div className="order__item">
								<h6 className="text__orders font-medium mb-4">4. Обработка заказа</h6>
								<p>
									Менеджер проверит вашу накладну и свяжется c Вами, чтобы
									уточнить заказ!
								</p>
							</div>
						</div>
						<div className="container__order">
							<div className="order__item">
								<h6 className="text__order font-medium mb-4">5. Оплатите заказ после проверки</h6>
								<p>
									Оплатите заказ только после тщательной проверки товаров, нашим
									менеджером!
								</p>
							</div>
							<div className="right__payment">
								<img src="images/edc.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}	