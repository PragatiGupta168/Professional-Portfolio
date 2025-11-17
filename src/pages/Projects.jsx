import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🎬 CineSphere',
    desc: 'A full-stack movie ticket booking website with interactive UI, search, filtering, and responsive design.',
    ss: '/cinesphere.png', 
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    live: '#', 
    code: 'https://github.com/PragatiGupta168/CineSphere'
  },
  {
  title: '💼 Portfolio Website',
  desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolio.png',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  live: '#',
  code: 'https://github.com/PragatiGupta168/Pragati-Portfolio'
  },
  {
  title: '💬 ChatApp – Real-Time Messaging',
  desc: 'A full-stack real-time chat application built with MongoDB, Express, React, and Node.js. Users can send and receive messages instantly without reloading the page using Socket.IO for real-time bi-directional communication. Deployed online using Vercel.',
  ss: '/chat.png',
  tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO'],
  live: '#', // Add live link if deployed
  code: 'https://github.com/PragatiGupta168/Chat-App'
},
  {
  title: '❤️ Cardiovascular Prediction System',
  desc: 'A predictive system for cardiovascular disease using a full ML pipeline integrated with a MERN stack web application. Users can input their health data to get real-time risk predictions.',
  ss: '/cardio.png', 
  tech: ['MongoDB', 'Express', 'React', 'Node.js', 'scikit-learn', 'Pandas', 'XGBoost'],
  live: '#',
  code: 'https://github.com/PragatiGupta168/Cardiovascular-Prediction-System'
},
{
  title: '🚗 ShaktiRide - Women-Only Ride Booking App',
    desc: 'A safe and secure ride-booking platform exclusively for women, with real-time tracking, verified drivers, and easy-to-use interface.',
    ss: '/shaktiride.png', 
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    live: '#', 
    code: 'https://github.com/PragatiGupta168/ShaktiRide', 
  },

]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
