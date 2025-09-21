import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-20 py-16 space-y-8 md:space-y-0 md:space-x-12">
      {/* Profile Image */}
      <div className="relative" style={{ width: "500px", height: "500px" }}>
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-ml-purple to-ml-cyan opacity-50 blur-3xl"
          animate={isHovered ? "hover" : "initial"}
          variants={glowVariants}
          initial="initial"
        />

        <motion.div
          ref={photoRef}
          className="relative h-full w-full cursor-pointer"
          variants={photoVariants}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.03 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setIsEnlarged(true)}
        >
          <motion.div animate={floatAnimation} className="h-full w-full overflow-hidden rounded-full">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10 shadow-lg backdrop-blur-sm">
              <img src={PROFILE_IMAGE} alt="Profile Photo" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Profile Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">FRANSI M.</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-ml-cyan mb-2">
          Cyber Security Analyst | AI Engineer
        </h2>
        <p className="text-gray-400 mb-4">Addis Ababa, Ethiopia</p>
        <p className="text-lg leading-relaxed text-gray-300">
          Passionate about building secure, intelligent systems that protect and
          enhance our digital future. I bridge the critical gap between
          cybersecurity and artificial intelligence, ensuring that our
          technological advancement is both innovative and secure.
        </p>
      </div>

      {/* Enlarged Overlay */}
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
          transition={{ duration: 0.3 }}
          className="relative max-w-2xl max-h-[80vh] overflow-hidden rounded-lg"
        >
          <img src={PROFILE_IMAGE} alt="Enlarged Profile" className="w-full h-full object-contain" />
          <div className="absolute inset-0 border border-white/10 rounded-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;
