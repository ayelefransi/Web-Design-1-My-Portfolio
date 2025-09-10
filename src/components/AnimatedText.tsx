
import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
}

export function AnimatedText({ phrases, className = "" }: AnimatedTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        
        // If we've completed typing the current phrase
        if (currentText === currentPhrase) {
          // Pause before deleting
          setTypingSpeed(1000); // Pause at the end of the word
          setIsDeleting(true);
        } else {
          // Normal typing speed with slight variation for realism
          setTypingSpeed(150 - Math.random() * 50);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        
        // If we've deleted the current phrase
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setTypingSpeed(500); // Pause before typing next word
        } else {
          // Deleting speed (faster than typing)
          setTypingSpeed(100 - Math.random() * 40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);

  return (
    <span className={className}>
      <span>{currentText}</span>
      <span className="inline-block w-1 h-6 ml-1 bg-primary animate-blink"></span>
    </span>
  );
}

export default AnimatedText;
