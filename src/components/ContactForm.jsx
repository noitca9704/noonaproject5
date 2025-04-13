import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import Box from '@mui/material/Box';
import usePhonbookStore from '../stores/usePhonebookStore';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [p_num, setP_num] = useState("");
    const [text, setText] = useState("");
    const {addContact} = usePhonbookStore();
    const handleAddContact = () => {
        if (!name.trim() || !p_num.trim()) return
        addContact(name,p_num,text)
        setName("");
        setP_num("");
        setText("");
    }
    return (
        <Box width="100%" padding="5% 0" display="flex" flexWrap="wrap" alignItems="center" gap="30px">
            <TextField id="name"
                label="이름"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{width:"calc(50% - 15px)"}}
            />
            <TextField id="phone-number"
                label="전화번호" variant="outlined"
                value={p_num}
                onChange={(e) => setP_num(e.target.value)}
                style={{width:"calc(50% - 15px)"}}
            />
            <TextField id="text"
                label="메모" variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{width:"100%"}}
            />
            <Button variant="contained"
            onClick={handleAddContact}
            style={{width:"100%", height:"56px"}}
            >추가</Button>
        </Box>
    )
}

export default ContactForm