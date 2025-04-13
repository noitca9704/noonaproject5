import { Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './App.css'
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { useState, useRef, useEffect } from "react";
import SearchBox from './components/SearchBox'

function App() {

  const [showInput, setShowInput] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [height, setHeight] = useState(0);
  const ref = useRef();

  const toggleInput = () => {
    setShowInput(prev => !prev);
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setShowSearch(prev => !prev);
    setShowInput(false);
  };

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [showInput, showSearch]);


  return (
    <div className="app">
      <div className="menu">
        <h1 className="top">나의 연락처</h1>
        <div className="m_button top">
          <SearchIcon style={{ fontSize: 40, cursor: "pointer" }} onClick={toggleSearch} />
          <AddCircleIcon style={{ fontSize: 40, cursor: "pointer" }} onClick={toggleInput} />
        </div>

        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ maxHeight: 0, opacity: 0, margin: "0" }}
              animate={{ maxHeight: height, opacity: 1, margin: "5% 0" }}
              exit={{ maxHeight: 0, opacity: 0, margin: "0" }}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden', width: "100%" }}
            >
              <div ref={ref} style={{ width: "100%" }}>
                <Grid style={{ width: "100%" }}>
                  <SearchBox setSearchTerm={setSearchTerm} />
                </Grid>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showInput && (
            <motion.div
              initial={{ maxHeight: 0, opacity: 0, margin: "0" }}
              animate={{ maxHeight: height, opacity: 1, margin: "5% 0" }}
              exit={{ maxHeight: 0, opacity: 0, margin: "0" }}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden', width: "100%" }}
            >
              <div ref={ref} style={{ width: "100%" }}>
                <Grid style={{ width: "100%" }}>
                  <ContactForm />
                </Grid>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Grid>
        <ContactList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Grid>
    </div>
  )
}

export default App
