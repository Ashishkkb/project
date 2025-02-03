import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";

interface AnimatedCardProps {
  title: string;
  description: string;
  content: string;
  image: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, description, content, image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <motion.div
        onClick={handleCardClick}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer"
      >
        <Card className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
          </CardContent>
          <CardFooter>
            <small>Click for more details</small>
          </CardFooter>
        </Card>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p>{content}</p>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedCard;
