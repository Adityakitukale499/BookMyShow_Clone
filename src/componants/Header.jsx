import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Header.css'

import { DataMovie } from '../context/NoteContex';
import GerneItems from './GerneItems';
const Header = () => {
    const a = useContext(DataMovie)
    const [gerneid, setGerneid] = useState('')
    const [search, setSearch] = useState('')
    const [gerne, setGerne] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ea6ad38b8056dca4c2bba7df8220e73d').then(res => res.json()).then(data => setGerne(data.genres))
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ea6ad38b8056dca4c2bba7df8220e73d`).then(res => res.json()).then(data => a.setMovieData(data.results))
    }, [])
    useEffect(() => {
        if (gerneid !== '') {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ea6ad38b8056dca4c2bba7df8220e73d&with_genres=${gerneid}`).then(res => res.json()).then(data => a.setMovieData(data.results))
        }
    }, [gerneid])
    useEffect(() => {
        if (search !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=ea6ad38b8056dca4c2bba7df8220e73d&query=${search}`).then(res => res.json()).then(data => a.setMovieData(data.results))
        }
    }, [search])
    const searchUpdate = () => {
        const searchQuery = document.querySelector('.search').value
        setSearch(searchQuery)
    }
    const NowPlayingMovies = () => {
        window.location.reload()
        console.log('home');
    }

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    return (
        <>
            <div className='header'>
                <div className="left_side">
                    <img src="pngwing.com.png" alt="Book my show" className='logo' />
                    <div className='search_container'>
                        <input className='search' type="text" placeholder='Search for movies' />
                        <button className="search_btn" onClick={() => searchUpdate()}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <div className='right_side'>
                    <button className="Home_btn" onClick={() => NowPlayingMovies()}>
                        <i className="fa-solid fa-home"></i>
                    </button>
                    <Button className='gerneBtn' variant="primary" onClick={handleShow}>
                    <i className="fa-sharp fa-solid fa-bars"></i>
                    </Button>
                    <GerneItems gerne={gerne} show={show} setShow={setShow} setGerneid={setGerneid} />
                </div>
            </div>
        </>
    )
}

export default Header