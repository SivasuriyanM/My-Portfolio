import React from 'react'
import "../styles/Educationcardport.css"

function Educationcardport({education}) {
  
  return (
    <div>
      <section className="educ-container">
      <div>
        <div className="edu-content">
          <h2>{education.institution}</h2>
          <h4>{education.duration}</h4>
        </div>
        <div className="edu-info">
          
            <ul >
              <li>{education.qualification}</li>
              <li>{education.percentage}</li>
            </ul>
          
        </div>
      </div>
    </section>
    
    
    
    </div>
  )
}

export default Educationcardport