import React from "react";
import image from "../images/gurukul.png";

const experiences = [
  {
    id: 2,
    side: "right",
    logoSrc: image, // Add the correct source for the image
    designation: "Graduation",
    companyName: "Gurukul Kangri University",
    duration: "August 2019 - June 2023",
    description: "I obtained a Cumulative Grade Point Average (CGPA) of 9.10 in the field of Electronics and Communication during my academic tenure."
  }
];

const timelineBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center align horizontally
  width: '80%', // Adjusted width for better alignment
  margin: '20px auto', // Center align horizontally
  padding: '20px', // Increased padding for better spacing
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const timelineContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const timelineLogoStyle = {
  width: '50px',
  height: '50px',
  marginBottom: '10px'
};

const experienceDesignationStyle = {
  fontSize: '1.2rem',
  margin: '0',
  color: '#007bff'
};

const experienceCompanyNameStyle = {
  fontSize: '1rem',
  margin: '0'
};

const experienceDurationStyle = {
  fontSize: '0.9rem',
  margin: '0',
  color: 'gray'
};

const experienceDescriptionStyle = {
  textAlign: 'justify',
  fontSize: '0.9rem',
  marginTop: '10px'
};

const Education = () => {
  return (
    <div id="education" style={{ margin: "auto", textAlign: 'center', width: '70%' }}>
      <div style={{ color: "black", fontSize: "2rem", marginBottom: "20px" }}>Education</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {experiences.map((exp) => (
          <div key={exp.id} style={timelineBoxStyle}>
            <div style={timelineContainerStyle}>
              <div style={timelineLogoStyle}>
                <img src={exp.logoSrc} alt="" style={{ width: '100%', height: '100%' }} />
              </div>
              <h3 style={experienceDesignationStyle}>{exp.designation}</h3>
              <h4 style={experienceCompanyNameStyle}>{exp.companyName}</h4>
              <h5 style={experienceDurationStyle}>{exp.duration}</h5>
              <p style={experienceDescriptionStyle}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
