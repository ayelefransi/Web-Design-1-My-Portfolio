import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const PROFILE_IMAGE = "/fransi.jpg";

const ProfileSection = () => {
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

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.6, scale: 1 },
    hover: {
      opacity: 0.8,
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
  };

  const enlargedPhotoOverlay = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "flex",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left side - Profile Photo */}
      <div className="flex justify-center">
        <div className="relative" style={{ width: "500px", height: "500px" }}>
          {/* Background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-ml-purple to-ml-cyan opacity-50 blur-3xl"
            animate={isHovered ? "hover" : "initial"}
            variants={glowVariants}
            initial="initial"
          />

          {/* Inner glow */}
          <motion.div
            className="absolute inset-1 rounded-full bg-gradient-to-br from-ml-purple/40 via-ml-indigo/30 to-ml-cyan/40 blur-md"
            animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Photo container */}
          <motion.div
            ref={photoRef}
            className="relative h-full w-full cursor-pointer"
            variants={photoVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ scale: 1.03, rotate: 0 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => setIsEnlarged(!isEnlarged)}
          >
            <motion.div
              animate={floatAnimation}
              className="h-full w-full overflow-hidden rounded-full"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10 shadow-lg backdrop-blur-sm">
                <img
                  src={PROFILE_IMAGE}
                  alt="Profile Photo"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -inset-1 rounded-full"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background:
                  "linear-gradient(45deg, var(--ml-purple), var(--ml-cyan))",
                filter: "blur(2px)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Right side - Text (only once, centered on mobile, left on desktop) */}
      <div className="space-y-4 text-center md:text-left max-w-xl mx-auto md:mx-0">
        <h1 className="text-4xl font-bold">FRANSI M.</h1>
        <h2 className="text-xl font-semibold text-ml-cyan">
          Cyber Security Analyst | AI Engineer
        </h2>
        <p className="text-gray-400">Addis Ababa, Ethiopia</p>
        <p className="text-lg leading-relaxed text-gray-300">
          Passionate about building secure, intelligent systems that protect and
          enhance our digital future. I bridge the critical gap between
          cybersecurity and artificial intelligence, ensuring that our
          technological advancement is both innovative and secure.
        </p>
      </div>

      {/* Enlarged overlay */}
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
          className="relative max-w-3xl max-h-[85vh] overflow-hidden rounded-lg"
        >
          <img
            src={PROFILE_IMAGE}
            alt="Enlarged Profile"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 border border-white/10 rounded-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
