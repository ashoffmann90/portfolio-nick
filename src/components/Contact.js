import React, {useState} from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

const FormWrapperColumn = styled.form`
    padding: 2em;
    margin: 1% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
`;

const InputField = styled.input`
    width: 50%;
    margin: 1% 0;
    height: 3em;
`;

const TextArea = styled.textarea`
    width: 50%;
    margin: 2% 0;
    height: 5em;
`

const Button = styled.button`
    background-color: white;
    width: 20%;
    height: 3em;
    margin: 1% 0;
`;

const initialState = {
    name: '',
    email: '',
    message: ''
}

function Contact() {
    const [form, setForm] = useState(initialState)

    const onChange = e => {
        e.preventDefault()
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        setForm({
            name: '',
            email: '',
            message: ''
        })
        const {name, email, message} = form

        const template = {
            name: name,
            email: email,
            message: message
        }

        emailjs.send('service_tqa93ef', 'template_5s1v25l', template, 'user_FWkiJYYWU8aGVriYs6ikI');
    }

    return (
        <div className='contact-container'>
            <FormWrapperColumn onSubmit={onSubmit}>
                <h2>Contact Nick</h2>
                <InputField
                    name='name'
                    type='text'
                    value={form.name || ''}
                    onChange={onChange}
                    placeholder='Enter Name Here'
                />

                <InputField
                    name='email'
                    type='text'
                    value={form.email || ''}
                    onChange={onChange}
                    placeholder='Enter Email Here'    
                />

                <TextArea 
                    id='message' 
                    name='message' 
                    value={form.message || ''}
                    onChange={onChange}
                    placeholder='Type Message Here'
                    rows='5' 
                    cols='35'>
                </TextArea>

                <Button
                    type='submit'
                    >
                    Submit
                </Button>
            </FormWrapperColumn>
        </div>
    )
}

export default Contact
