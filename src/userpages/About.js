// AboutUs.js

import React, { useEffect } from 'react';
import './aboutus.css'; // Assuming you have a CSS file for styling
import adnan from '../images/adnan.jpg';
import somsekhar from '../images/somsekhar.jpg';
import hussain from '../images/hussain.jpg';

export default function AboutUs() {
  const teamMembers = [
    {
      id: 2200090035,
      name: 'Adnan Shariff',
      position: 'Full stack developer [Team Lead]',
      image: adnan,
      description: 'Student at KL University',
      email: '2200090035@kluniversity.in',
      address: '123 Main Street, City, Country',
      department: 'Management of all departments'
    },
    {
      id: 2200090165,
      name: 'Bhaviri Somsekhar',
      position: 'Front End developer',
      image: somsekhar,
      description: 'Student at KL University',
      email: '2200090165@kluniversity.in',
      address: 'near vaddeswaram, Guntur, Andhra Pradesh',
      department: 'Designing front end'
    },
    {
      id: 2200090158,
      name: 'Tassadaq Hussain',
      position: 'Backend Developer',
      image: hussain,
      description: 'Student at KL University',
      email: '2200090158@kluniversity.iin',
      address: '789 Elm Street, City, Country, bokku gadu',
      department: 'Development of Backend '
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.team-member-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        cards.forEach(c => {
          if (c !== card) {
            c.classList.add('blur');
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        cards.forEach(c => {
          c.classList.remove('blur');
        });
      });
    });
  }, []);

  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map(member => (
          <div className="team-member-card" key={member.id}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <div className="member-details">
              <h2 className="member-name">{member.name}</h2>
              <p className="member-position">{member.position}</p>
              <p className="member-description">{member.description}</p>
              <div className="additional-details">
                <p><strong>ID:</strong> {member.id}</p>
                <p><strong>Email:</strong> {member.email}</p>
                <p><strong>Address:</strong> {member.address}</p>
                <p><strong>Department:</strong> {member.department}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}