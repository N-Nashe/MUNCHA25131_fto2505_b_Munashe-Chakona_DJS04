import React, { useState, useEffect } from 'react'
import { genres } from './data.js'
import Modal from './Modal.jsx'
import './styles.css'

function App() {
  
  const [podcasts, setPodcasts] = useState([])        
  const [loading, setLoading] = useState(true)        
  const [error, setError] = useState(null)
  const [selectedPodcast, setSelectedPodcast] = useState(null)

  // Function to handle card clicks (for modal)
  const handleCardClick = (podcast) => {
    setSelectedPodcast(podcast)
  }

  // Function to close modal
  const closeModal = () => {
    setSelectedPodcast(null)
  }

  //Function to search for podcasts

  const [searchPodcast, setSearchPodcast] = useState('')
  const handleSearchChanges = (event)=>{
    setSearchPodcast(event.target.value)
  }

  //search button click handler
  const handleSearchClick = () => {
  }
 

  // Function to get genre names from IDs
   
  const getGenreNames = (genreIds) => {
    return genreIds.map(id => {
      const foundGenre = genres.find(genre => genre.id === id)
      return foundGenre ? foundGenre.title : 'Unknown'
    }).join(', ')
  }

//Filter podcasts based on search term
const filteredPodcasts = podcasts.filter(podcast =>
  podcast.title.toLowerCase().includes(searchPodcast. replace (/\s+/g,'')
    .trim().toLowerCase())
)
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }
  
  useEffect(() => {
    const fetchPodcasts = async () => {
      
      try{
        const response = await fetch ('https://podcast-api.netlify.app/')
        
        if (!response.ok){
          throw new Error('Failed to load podcasts!')
        }
        const data = await response.json()
        setPodcasts(data)
      } catch (error){
        setError(error.message)

      } finally{
        setLoading(false);
      }
    }

    fetchPodcasts()  
  }, [])

  return (
    <div>
      <header className="app-header">
        <h1>🎙️ Podcast App</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="What do you want to listen to..."
            value={searchPodcast}
            onChange={handleSearchChanges}
            className="search-bar"
          />
          <button className="search-button"
           onClick={handleSearchClick}>
            Search
           </button>
        </div>
      </header>
      <main className="grid">
        {loading && <p className="loading">Loading podcasts...</p>}
        {error && <p className="error-message">Error: {error} </p>}
        {!loading && !error && filteredPodcasts.map(podcast => (
          // Render podcast card
          <div 
            key={podcast.id} 
            className="card"
            onClick={() => handleCardClick(podcast)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={podcast.image}
              alt={podcast.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{podcast.title}</h2>
              <p className="card-seasons">{podcast.seasons} Season{podcast.seasons !== 1 ? 's' : ''}</p>
              <p className="card-genres">{getGenreNames(podcast.genres)}</p>
              <p className="card-date">Updated: {formatDate(podcast.updated)}</p>
            </div>
          </div>
        ))}
      </main>
      
      {/* Modal */}
      {selectedPodcast && (
        <Modal 
          podcast={selectedPodcast} 
          onClose={closeModal} 
        />
      )}
    </div>
  )
}

export default App
