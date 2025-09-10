
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Use the uploaded profile image
const PROFILE_IMAGE = "/lovable-uploads/0ec7358f-3051-4e5c-8f03-8000cd3d9e1e.png"; 

const ProfilePhoto = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const photoRef = useRef(null);
  const isInView = useInView(photoRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Photo variants for entrance animation
  const photoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Glow variants for the photo border
  const glowVariants = {
    initial: { 
      opacity: 0.6,
      scale: 1
    },
    hover: {
      opacity: 0.8,
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  // Subtle floating animation for the photo
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  };

  // Handle click to expand the image
  const handlePhotoClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  // Enlarged photo overlay
  const enlargedPhotoOverlay = {
    hidden: { 
      opacity: 0,
      display: "none" 
    },
    visible: { 
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <div className="relative" style={{ width: "250px", height: "250px" }}>
        {/* Background blur/glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-ml-purple to-ml-cyan opacity-50 blur-3xl"
          animate={isHovered ? "hover" : "initial"}
          variants={glowVariants}
          initial="initial"
        />

        {/* Inner soft glow ring */}
        <motion.div 
          className="absolute inset-1 rounded-full bg-gradient-to-br from-ml-purple/40 via-ml-indigo/30 to-ml-cyan/40 blur-md"
          animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Photo container with entrance animation and floating effect */}
        <motion.div
          ref={photoRef}
          className="relative h-full w-full cursor-pointer"
          variants={photoVariants}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.03, rotate: 0 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handlePhotoClick}
        >
          <motion.div
            animate={floatAnimation}
            className="h-full w-full overflow-hidden rounded-full"
          >
            {/* Glass container */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10 shadow-lg backdrop-blur-sm">
              {/* Actual photo */}
              <img
                src={PROFILE_IMAGE}
                alt="Profile Photo"
                className="h-full w-full object-cover"
              />

              {/* Overlay with subtle gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
            </div>
          </motion.div>

          {/* Animated border glow on hover */}
          <motion.div
            className="absolute -inset-1 rounded-full"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "linear-gradient(45deg, var(--ml-purple), var(--ml-cyan))",
              filter: "blur(2px)"
            }}
          />
        </motion.div>
      </div>

      {/* Enlarged photo overlay */}
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        variants={enlargedPhotoOverlay}
        initial="hidden"
        animate={isEnlarged ? "visible" : "hidden"}
        onClick={() => setIsEnlarged(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-2xl max-h-[80vh] overflow-hidden rounded-lg"
        >
          <img 
            src={PROFILE_IMAGE} 
            alt="Enlarged Profile" 
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 border border-white/10 rounded-lg" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProfilePhoto;
