import React from 'react'
import usePhonebookStore from '../stores/usePhonebookStore'

const ContactList = ({ searchTerm, setSearchTerm }) => {
    const { phoneBook } = usePhonebookStore();

    const filtered = phoneBook.filter(item =>
        item.name.includes(searchTerm) ||
        item.p_num.includes(searchTerm) ||
        item.text.includes(searchTerm)
    );

    const handleShowAll = () => {
        setSearchTerm("");
    };

    return (
        <div className="list">
            <div className="list_top">
                <h1>연락처 리스트</h1>
                {searchTerm && (
                    <button onClick={handleShowAll}>
                        전체보기
                    </button>
                )}
            </div>
            {filtered.map((item) =>
                <div key={item.id} className='list_box'>
                    <div className='list_name'>이름 : {item.name}</div>
                    <div className='list_num'>전화번호 : {item.p_num}</div>
                    <div className='list_text'>메모 : {item.text}</div>
                </div>
            )}
        </div>
    )
}

export default ContactList