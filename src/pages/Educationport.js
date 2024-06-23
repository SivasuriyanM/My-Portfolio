import React ,{useState}from 'react'
import Educationcard from '../components/Educationcardport'
import Certification from '../components/Certification'
import data from '../data/mydata.json'
import "../styles/Education.css"
function Educationport() {
  const educations = data.education
  const certifications = data.certifications
  const [selectedCertificate,setSelectedCertificate] = useState(certifications[0])
  
  const handleSectedCertificate = (data) => {
    setSelectedCertificate(data)
  }
  return (
    <div >
      <div className='edu-container'>
        <h2>My Education </h2>
      {educations.map((education,index)=>(
        <Educationcard key={index} education={education} />
      ))}
      </div>
      
        <div className='edu-container' >
          <h2>My Certifications</h2>
        {certifications.map((certificate)=>(
        <Certification  key = {certificate.name}
        
        title={certificate.name}
        isActive={selectedCertificate.title === certificate.title}
        link = {certificate.link}
        onClick={()=>{
          handleSectedCertificate(certificate)
        }} />
       ))}
        </div>
      
    </div>
  )
}

export default Educationport