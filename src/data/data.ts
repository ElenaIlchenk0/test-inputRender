import { TInputsData } from '../utils/types/types'

export const inputsData: TInputsData[] =  [
    {
        id: 'first_name',
        type: 'inputText',
        label: 'First Name',
        defaultValue: 'Some first name'
    },
    {
        id: 'last_name',
        type: 'inputText',
        label: 'Last Name',
    },
    {
        id: 'email',
        type: 'inputEmail',
        label: 'Email',
        required: true
    },
    {
        id: 'password',
        type: 'inputPassword',
        label: 'Password',
        required: true
    },
]
