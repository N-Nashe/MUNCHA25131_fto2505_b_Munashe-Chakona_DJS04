import React, { useState, useEffect } from 'react';
import { genres } from './data.js';

const Modal = ({ podcast, onClose }) => {
  const [detailedPodcast, setDetailedPodcast] = useState(null);

  if (!podcast) return null;

  // Fetch detailed podcast data including seasons
  useEffect(() => {
    const fetchPodcastDetails = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${podcast.id}`);
        if (response.ok) {
          const data = await response.json();
          setDetailedPodcast(data);
        }
      } catch (err) {
        console.error('Failed to fetch podcast details:', err);
      }
    };

    fetchPodcastDetails();
  }, [podcast.id]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        
        {/* Podcast Content */}
        {detailedPodcast ? (
          <>
            <div className="banner">
              <img src={detailedPodcast.image} alt={detailedPodcast.title} className="modal-img" />
              <div className="info-section">
                <h2>{detailedPodcast.title}</h2>
                <p>{detailedPodcast.description}</p>
                <div className="tags">
                  {detailedPodcast.genres.map(genreId => (
                    <span key={genreId} className="tag">
                      {genres.find(g => g.id === genreId)?.title || 'Unknown'}
                    </span>
                  ))}
                </div>
                <p className="modal-updated-text">
                  <strong>Seasons:</strong> {detailedPodcast.seasons.length} | 
                  <strong> Last Updated:</strong> {new Date(detailedPodcast.updated).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="seasons-section">
              <h3>Seasons</h3>
              <ul className="season-list">
                {detailedPodcast.seasons.map((season, index) => (
                  <li key={`season-${season.season}-${index}`} className="season-item">
                    <h4 className="season-title">Season {season.season}: {season.title}</h4>
                    <p className="episodes">{season.episodes.length} episodes</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Modal;