
# Тестовое задание React
  
### Запуск проекта:
- `npm i`
- `npm run start`

### Задание

Создать универсальный компонент для рендера любой группы полей согласно поддерживаемой переданной конфигурации.

Пример конфигурации:

`[
{
id: ‘first_name’,
type: ‘inputText’,
label: ‘First Name’,
defaultValue: ‘Some first name’
},
{
id: ‘last_name’,
type: ‘inputText’,
label: ‘Last Name’
},
{
id: ‘email’,
type: ‘inputEmail’,
label: ‘Email’,
required: true
},
{
id: ‘password’,
type: ‘inputPassword,
label: ‘Password’,
required: true
},
]`

Ключи id являются уникальными ключами полей. Рендер полей должен происходить в том порядке, в котором они указаны в объекте конфигурации. type может принимать значения ‘inputText’, (обычное текстовое поле) ‘inputEmail’ (текстовое поле с валидацией ввода email адреса), ‘inputPassword’ (текстовое поле со скрытыми реальными символами ввода). Необходимо предусмотреть единый метод у создаваемой компоненты для обработки изменения значения полей. В конечном итоге в месте использования данной компоненты необходимо иметь актуальные значения каждого из полей по их ключам вида:

`{
‘first_name’: ‘Some first name’,
‘last_name’: ‘Some last name’,
‘email’: ’example@user.com’,
‘password’: ‘123456’,
}`

где значения каждого ключа являются актуальными введенными пользователем данными. При наличии ключа defaultValue необходимо, чтобы предварительно в объекте актуальных значений оно уже было сформировано и отражено при рендере полей.

Сами ключи, порядок и кол-во полей может быть разным в зависимости от кейса, пример конфигурации дан лишь в качестве одного из возможных кейсов.

В тестовом задании необходимо использовать Typescript и показать использование данного созданного компонента на какой-нибудь странице, где будет предусмотрена кнопка ’Submit’, нажатие на которую будет доступно и соответствующе отражено визуально только при заполнении всех полей с ключами required. Сама кнопка не должна являться частью созданной выше компоненты для рендера полей, а должна быть добавлена только на самой странице.

Дизайн самих полей и страницы их использования отражены в приложенном изображении. В реализации структура полей должна соответствовать описанной в задании конфигурации
