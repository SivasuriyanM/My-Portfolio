import React from 'react'
import '../styles/Projectscard.css'

function Projectscard({project}) {
  const highlights = project.highlights
  return (
    <div>
     
      <section className="pro-container">
      <div>
        <div className="pro-content">
          <h2>{project.name}</h2>
          <h4>{project.duration}</h4>
        </div>
        <div className="pro-info">

          {highlights.map((highlight, index) => (
            <ul key={index}>
              <li>{highlight} </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projectscard