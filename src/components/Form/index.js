import React from 'react'
import {
    FormContainer,
    FormEl,
    Input,
    TextArea
} from './FormElements'
import  Button  from '../Button'

export default function Form() {
    return (
        <FormContainer>
            <h1>Let's get you prepared</h1>
            <FormEl>
                <Input type='name' placeholder='Name' required></Input>
                <Input type='email' placeholder='E-Mail' required></Input>
                <TextArea placeholder='Where do you want to go' required></TextArea>
                <Button type='submit'>Reserve Now</Button>  
            </FormEl>
        </FormContainer>   
    )
}
