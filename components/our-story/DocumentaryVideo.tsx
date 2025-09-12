"use client"

import { motion } from "framer-motion"

export function DocumentaryVideo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{color: '#0F443F'}}>
          Salam by Daadras: Empowering Children through Education & Support
        </h2>
        <p className="text-xl text-muted-foreground max-w-5xl mx-auto mb-4">
          Watch our inspiring documentary showcasing how we're transforming lives through comprehensive education, combining IT skills, strategic thinking, emotional intelligence, and communication excellence.
        </p>
      </div>
      
      <div className="flex justify-center w-full">
        <motion.div 
          className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl" 
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(15, 68, 63, 0.25)" }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            src="https://www.youtube.com/embed/uu0VXYj_y_A"
            title="Salam by Daadras: Empowering Children through Education & Support"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full mx-auto"
          />
        </motion.div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-base text-muted-foreground mb-6">
          Experience the journey of transformation and hope. Share this documentary to spread awareness about our mission.
        </p>
        
        {/* Social Share Icons */}
        <div className="flex justify-center items-center gap-6">
          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/?text=${encodeURIComponent('Watch now: https://www.youtube.com/watch?v=uu0VXYj_y_A\n\nSalam by Daadras: Empowering Children through Education and Support\n\nSince May 2020, Daadras has been working as a non-profit organization focused on two primary pillars of society: food and education. This documentary highlights our mission to empower children through learning, nourishment, and care. Together, we can build brighter futures.\n\nInstagram: https://www.instagram.com/daadrasfoundation/?hl=en\nLinkedIn: https://pk.linkedin.com/company/daadras-foundation-ngo')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            style={{color: '#0F443F'}}
            whileHover={{ scale: 1.1, color: '#1a5a54' }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </motion.a>
          

          
          {/* Twitter */}
          <motion.a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Watch now: https://www.youtube.com/watch?v=uu0VXYj_y_A\n\nSalam by Daadras: Empowering Children through Education and Support\n\nSince May 2020, Daadras has been working as a non-profit organization focused on two primary pillars of society: food and education. This documentary highlights our mission to empower children through learning, nourishment, and care. Together, we can build brighter futures.\n\nInstagram: https://www.instagram.com/daadrasfoundation/?hl=en\nLinkedIn: https://pk.linkedin.com/company/daadras-foundation-ngo')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            style={{color: '#0F443F'}}
            whileHover={{ scale: 1.1, color: '#1a5a54' }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-twitter text-2xl"></i>
          </motion.a>
          
          {/* Facebook */}
          <motion.a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.youtube.com/watch?v=uu0VXYj_y_A')}&quote=${encodeURIComponent('Watch now: https://www.youtube.com/watch?v=uu0VXYj_y_A\n\nSalam by Daadras: Empowering Children through Education and Support\n\nSince May 2020, Daadras has been working as a non-profit organization focused on two primary pillars of society: food and education. This documentary highlights our mission to empower children through learning, nourishment, and care. Together, we can build brighter futures.\n\nInstagram: https://www.instagram.com/daadrasfoundation/?hl=en\nLinkedIn: https://pk.linkedin.com/company/daadras-foundation-ngo')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            style={{color: '#0F443F'}}
            whileHover={{ scale: 1.1, color: '#1a5a54' }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}