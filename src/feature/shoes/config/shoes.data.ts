const SHOES_TYPES = [
  "АБАРКАСЫ",
  "БАБУШИ",
  "БАЛЕТКИ",
  "БАХИЛЫ",
  "БЕРЦЫ",
  "БОКСЕРКИ",
  "БОРЦОВКИ",
  "БОСОНОЖКИ",
  "БОТИЛЬОНЫ",
  "БОТИЛЬОНЫ ВЫСОКИЕ",
  "БОТИНКИ",
  "БОТИНКИ ВЫСОКИЕ",
  "БОТИНКИ ДЛЯ БАСКЕТБОЛА",
  "БОТИНКИ ДЛЯ БЕГОВЫХ ЛЫЖ",
  "БОТИНКИ ДЛЯ ГОРНЫХ ЛЫЖ",
  "БОТИНКИ ДЛЯ ДАЙВИНГА",
  "БОТИНКИ ДЛЯ ПАРУСНОГО СПОРТА",
  "БОТИНКИ ДЛЯ ПРЫЖКОВ НА ЛЫЖАХ С ТРАМПЛИНА",
  "БОТИНКИ ПЛАВАТЕЛЬНЫЕ",
  "БОТИНКИ ПРОИЗВОДСТВЕННЫЕ",
  "БОТИНКИ СНОУБОРДИЧЕСКИЕ",
  "БОТИНКИ СПЕЦИАЛЬНЫЕ",
  "БОТЫ",
  "БОТЫ СПЕЦИАЛЬНЫЕ",
  "БРОГИ",
  "БУРКИ",
  "БУТСЫ",
  "ВАЛЕНКИ",
  "ВАЛЕНКИ СПЕЦИАЛЬНЫЕ",
  "ВАЛЕШИ",
  "ВЕЛОТУФЛИ",
  "ВЬЕТНАМКИ",
  "ГАЛОШИ",
  "ГАЛОШИ СПЕЦИАЛЬНЫЕ",
  "ГИМНАСТИЧЕСКИЕ ПОЛУТАПОЧКИ",
  "ГЛАДИАТОРЫ",
  "ДЕЗЕРТЫ",
  "ДЕЛЁНКИ",
  "ДЕРБИ",
  "ДЖИБИТСЫ",
  "ДОМАШНЯЯ ОБУВЬ",
  "ДУТИКИ",
  "КАЗАКИ",
  "КЕДЫ",
  "КЕДЫ ВЫСОКИЕ",
  "КЛОГИ",
  "КРОКСЫ",
  "КРОССОВКИ",
  "КРОССОВКИ ВЫСОКИЕ",
  "КРОССОВКИ РОЛИКОВЫЕ",
  "ЛОФЕРЫ",
  "ЛУНОХОДЫ",
  "МОКАСИНЫ",
  "МОНГОЛКИ",
  "МОНКИ",
  "МОТОБОТИНКИ",
  "МУНБУТЫ",
  "МЮЛИ",
  "ОБУВЬ ДЛЯ ЕДИНОБОРСТВ",
  "ОБУВЬ ДЛЯ ТЯЖЕЛОЙ АТЛЕТИКИ И СИЛОВЫХ ВИДОВ СПОРТА",
  "ОБУВЬ ПЛЯЖНАЯ",
  "ОБУВЬ ТРЕНИРОВОЧНАЯ ДЛЯ ЗАНЯТИЙ СПОРТОМ",
  "ОКСФОРДЫ",
  "ПАНТОЛЕТЫ (ШЛЕПАНЦЫ)",
  "ПИНЕТКИ",
  "ПОЛУБОТИНКИ",
  "ПОЛУБОТИНКИ ДОМАШНИЕ",
  "ПОЛУБОТИНКИ КРОССОВЫЕ",
  "ПОЛУБОТИНКИ СПЕЦИАЛЬНЫЕ",
  "ПОЛУКЕДЫ",
  "ПОЛУСАПОГИ",
  "ПОЛУСАПОГИ СПЕЦИАЛЬНЫЕ",
  "ПОЛУСАПОЖКИ",
  "ПОЛУЧЕШКИ",
  "ПУАНТЫ",
  "РЕЗИНОВЫЕ САПОГИ",
  "САБО",
  "САМБОВКИ",
  "САНДАЛЕТЫ",
  "САНДАЛИИ",
  "САПОГИ",
  "САПОГИ ПРОИЗВОДСТВЕННЫЕ",
  "САПОГИ С УДЛИНЕННЫМИ ГОЛЕНИЩАМИ (БОТФОРТЫ)",
  "САПОГИ СПЕЦИАЛЬНЫЕ",
  "САПОЖКИ",
  "СКАЛЬНЫЕ ТУФЛИ",
  "СЛАЙДЕРЫ",
  "СЛАНЦЫ",
  "СЛИПЕРЫ",
  "СЛИПОНЫ",
  "СНИКЕРЫ",
  "СНОУБУТСЫ",
  "СРЕДСТВА ДОПОЛНИТЕЛЬНОЙ ЗАЩИТЫ НОГ ОТ УДАРОВ В НОСОЧНОЙ ЧАСТИ",
  "ТАПОЧКИ",
  "ТАПОЧКИ (САНДАЛИИ) СПЕЦИАЛЬНЫЕ",
  "ТАПОЧКИ-НОСКИ",
  "ТАПОЧКИ-СЛЕДКИ",
  "ТАПОЧКИ-УГГИ",
  "ТОПСАЙДЕРЫ",
  "ТУФЛИ",
  "ТУФЛИ ДЛЯ ХОЖДЕНИЯ ПО КОРАЛЛАМ",
  "ТУФЛИ ДОМАШНИЕ/КОМНАТНЫЕ",
  "ТУФЛИ КУПАЛЬНЫЕ",
  "ТУФЛИ ЛЕТНИЕ",
  "ТУФЛИ ПЛЯЖНЫЕ",
  "ТУФЛИ ПРОИЗВОДСТВЕННЫЕ",
  "ТУФЛИ СПЕЦИАЛЬНЫЕ",
  "ТУФЛИ ТАНЦЕВАЛЬНЫЕ",
  "УГГИ",
  "УНТЫ",
  "ЧЕЛСИ",
  "ЧЕШКИ",
  "ЧУВЯКИ",
  "ЧУНИ",
  "ШИПОВКИ",
  "ШЛЕПАНЦЫ",
  "ЭСПАДРИЛЬИ",
];

const SHOES_COLORS = ["БЕЖЕВЫЙ", "БЕЖЕВЫЙ МЕЛАНЖ", "БЕЛО-РОЗОВЫЙ", "БЕЛЫЙ", "БЕЛЫЙ/СЕРЫЙ", "БИРЮЗОВЫЙ", "БОРДОВЫЙ", "БРОНЗОВЫЙ", "ВАНИЛЬ", "ВИШНЯ", "ГОЛУБОЙ", "ЖЁЛТЫЙ", "ЗЕЛЁНЫЙ", "ЗОЛОТИСТЫЙ", "ЗОЛОТОЙ", "ИЗУМРУДНЫЙ", "КАПУЧИНО", "КИРПИЧНЫЙ", "КОРАЛЛОВЫЙ", "КОРИЧНЕВЫЙ", "КРАСНЫЙ", "ЛАЙМ", "ЛЕОПАРД", "МАЛИНОВЫЙ", "МЕДНЫЙ", "МОЛОЧНЫЙ", "МЯТНЫЙ", "НАТУРАЛЬНЫЙ", "НИКЕЛЬ", "ОЛИВКОВЫЙ", "ОРАНЖЕВЫЙ", "ПЕСОЧНЫЙ", "ПЕРСИКОВЫЙ", "ПРОЗРАЧНЫЙ", "ПУРПУРНЫЙ", "РАЗНОЦВЕТНЫЙ", "РОЗОВО-БЕЖЕВЫЙ", "РОЗОВЫЙ", "РЫЖИЙ", "СВЕТЛО-БЕЖЕВЫЙ", "СВЕТЛО-ЗЕЛЕНЫЙ", "СВЕТЛО-КОРИЧНЕВЫЙ", "СВЕТЛО-РОЗОВЫЙ", "СВЕТЛО-СЕРЫЙ", "СВЕТЛО-СЕРЫЙ МЕЛАНЖ", "СВЕТЛО-СИНИЙ", "СВЕТЛО-ФИОЛЕТОВЫЙ", "СЕРЕБРЯНЫЙ", "СЕРО-ЖЕЛТЫЙ", "СЕРО-ГОЛУБОЙ", "СЕРЫЙ", "СЕРЫЙ МЕЛАНЖ", "СИНИЙ", "СИРЕНЕВЫЙ/ЛИЛОВЫЙ", "СЛИВОВЫЙ", "СЛОНОВАЯ КОСТЬ", "ТЕМНО-БЕЖЕВЫЙ", "ТЕМНО-ЗЕЛЕНЫЙ", "ТЕМНО-КОРИЧНЕВЫЙ", "ТЕМНО-РОЗОВЫЙ", "ТЕМНО-СЕРЫЙ", "ТЕМНО-СЕРЫЙ МЕЛАНЖ", "ТЕМНО-СИНИЙ", "ТЕМНО-ФИОЛЕТОВЫЙ", "ТЕРРАКОТОВЫЙ", "ФИОЛЕТОВЫЙ", "ФУКСИЯ", "ХАКИ", "ХАКИ/ОЛИВКОВЫЙ", "ЧЕРНЫЙ", "ЧЕРНЫЙ/БЕЛЫЙ", "ЧЕРНЫЙ/ЗОЛОТИСТЫЙ", "ЧЕРНЫЙ/СЕРЫЙ", "ШОКОЛАДНЫЙ"]

const SHOES_SIZES = ["16", "16,5", "16-17", "17", "17,5", "17-18", "18", "18,5", "18-19", "19", "19,5", "19-20", "20", "20,5", "20-21", "21", "21,5", "21-22", "22", "22,5", "22-23", "23", "23,5", "23-24", "24", "24,5", "24-25", "25", "25,5", "25-26", "26", "26,5", "26-27", "27", "27,5", "27-28", "28", "28,5", "28-29", "29", "29,5", "29-30", "30", "30,5", "30-31", "31", "31,5", "31-32", "32", "32,5", "32-33", "33", "33,5", "33-34", "34", "34,5", "34-35", "35", "35,5", "35-36", "36", "36,5", "36-37", "37", "37-37,5", "37,5", "37-38", "38", "38,5", "38-39", "39", "39,5", "39-40", "40", "40,5", "40-41", "41", "41,5", "41-42", "42", "42,5", "42-43", "43", "43,5", "43-44", "44", "44,5", "44-45", "45", "45,5", "45-46", "46", "46,5", "46-47", "47", "47,5", "47-48", "48", "48,5", "48-49", "49", "49,5", "49-50", "50", "50,5", "50-51", "51", "51,5", "51-52", "52", "52,5", "53", "53,5", "54", "54,5", "55", "55,5", "56", "56,5"]

export { SHOES_TYPES, SHOES_COLORS, SHOES_SIZES };
