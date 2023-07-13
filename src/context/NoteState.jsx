import React, { useState } from 'react'
import { Authcontext, DataMovie } from './NoteContex'

export const NoteState = (props) => {
  const [movieData, setMovieData] = useState([])
  const [auth , setAuth] = useState(false)
  const [name , setName] = useState('')
  return (
    <DataMovie.Provider value={{movieData,setMovieData}}>
      <Authcontext.Provider value={{ auth,setAuth,name,setName }}>
        {props.children}
      </Authcontext.Provider>
    </DataMovie.Provider>
  )
}
