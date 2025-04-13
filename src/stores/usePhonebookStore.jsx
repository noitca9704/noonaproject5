import { create } from "zustand"

const usePhonebookStore = create((set) => ({
    phoneBook: [],
    addContact: (name,p_num,text)=>set((state)=>({phoneBook: [...state.phoneBook, {id:Date.now(), name, p_num, text }],
    })),
}));

export default usePhonebookStore