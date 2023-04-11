
# React test task
# InputRender component
  
### Run project:
- `npm i`
- `npm run start`

### Requirements
Create a universal component for rendering any group of inputs according to the supported configuration.

Configuration example:

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

The 'id' keys are unique field keys. Inputs must be rendered in the order in which they are specified in the configuration object.

type can take the values:
  - 'inputText' (for plain text field), 
  - 'inputEmail' (for text field with email address validation), 
  - 'inputPassword' (for text field with hidden real input characters). 

It is necessary to provide a single method for the created component to handle changes in the value of fields. In the place where this component is used, it is necessary to have the actual values of each of the fields by their view keys:

`{
‘first_name’: ‘Some first name’,
‘last_name’: ‘Some last name’,
‘email’: ’example@user.com’,
‘password’: ‘123456’,
}`

where the values of each key are the actual user-entered data. If there was a defaultValue key in configuration, it must first be formed in the object of actual values and displayed when rendering fields.

The keys, the order and number of штзгеы may be different depending on the case, the configuration example is given only as one of the possible cases.

In the test task, you need to use Typescript and show the use of this created component on some page where the 'Submit' button will be provided, clicking on which will be available and visually reflected accordingly only when all fields with the required keys are filled. The button itself should not be part of the field render component created above, but should only be added on the page itself.

The design of the fields themselves and the page of their use are reflected in the attached image. In the implementation, the structure of the fields must correspond to the one described in the configuration task

In the test task, you need to use Typescript. It is necessary to show the usege of the created component on some page where the 'Submit' button will be provided. Clicking the button should be available and displayed visually only when all fields with required keys are filled. The button should not be part of the field render component created above, but should be added on the page itself.

The design of the fields and the pages of their use are reflected in the attached image. In the implementation, the structure of the fields must correspond to the one described in the configuration task
