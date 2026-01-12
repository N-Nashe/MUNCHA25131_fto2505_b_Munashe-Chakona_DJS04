import React, { useEffect } from 'react'

// Reusable modal component
// - Props: isOpen, onClose, title, children
// - Accessible: closes on Escape, traps scrolling, click overlay to close
export default function Modal({ isOpen, onClose, title, children }){
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [isOpen, onClose])

  if (!isOpen) return null
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        {title && <h3>{title}</h3>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}