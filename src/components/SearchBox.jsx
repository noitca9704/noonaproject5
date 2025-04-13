import React from 'react'
import { TextField } from '@mui/material'

const SearchBox = ({ setSearchTerm }) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSearchTerm(e.target.value)
        }
    }

    return (
        <TextField
            fullWidth
            variant="outlined"
            label="이름이나 전화번호, 메모로 검색"
            onKeyDown={handleKeyDown}
        />
    )
}

export default SearchBox