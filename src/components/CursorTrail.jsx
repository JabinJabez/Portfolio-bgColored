import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = [...trail, { x: e.clientX, y: e.clientY, id: Date.now() }];
      setTrail(newTrail.slice(-10)); // Limit trail length to 10
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [trail]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      <AnimatePresence>
        {trail.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-5 h-5 bg-red-500 rounded-full opacity-65"
            style={{ left: dot.x, top: dot.y }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;