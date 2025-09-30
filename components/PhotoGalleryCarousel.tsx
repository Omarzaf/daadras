"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const photos = [
  {
    src: "/drive/volunteer_wahab.webp",
    alt: "Students learning technology fundamentals",
    caption: "Digital literacy sessions empowering young minds"
  },
  {
    src: "/drive/project_salam1.webp",
    alt: "Chess training session in progress",
    caption: "Strategic thinking development through chess"
  },
  {
    src: "/drive/boys_school.jpg",
    alt: "Social-emotional learning activities",
    caption: "Building emotional intelligence and self-awareness"
  },
  {
    src: "/drive/boy_school.jpg",
    alt: "Public speaking practice session",
    caption: "Confidence building through communication skills"
  },
  {
    src: "/drive/women_classroom.webp",
    alt: "Group learning and collaboration",
    caption: "Collaborative learning environment"
  },
  {
    src: "/drive/girl_studying_park.jpg",
    alt: "Individual mentoring session",
    caption: "Personalized guidance and support"
  }
];

export default function PhotoGalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Responsive logic for items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Mobile: 1 image
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet: 2 images
      } else {
        setItemsPerSlide(3); // Desktop: 3 images
      }
    };

    // Set initial value
    updateItemsPerSlide();

    // Add event listener
    window.addEventListener('resize', updateItemsPerSlide);

    // Cleanup
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // Reset currentIndex when itemsPerSlide changes to avoid out-of-bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerSlide]);

  const totalSlides = Math.ceil(photos.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalIndex((prev) => (prev + 1) % photos.length);
  };

  const prevModalImage = () => {
    setModalIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const visiblePhotos = photos.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide);

  return (
    <>
      <div className="mb-4">
        {/* Carousel Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 font-space-grotesk">
              Our Initiatives in Action
            </h3>
            <p className="text-muted-foreground">
              Capturing moments of learning, growth, and transformation
            </p>
          </div>
          <div className="flex gap-2 justify-center md:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="h-10 w-10 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="h-10 w-10 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-3 md:gap-6"
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visiblePhotos.map((photo, index) => {
              const actualIndex = currentIndex * itemsPerSlide + index;
              return (
                <motion.div
                  key={actualIndex}
                  className="flex-1 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => openModal(actualIndex)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={320}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">{photo.caption}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[90vh]">
                <Image
                  src={photos[modalIndex].src}
                  alt={photos[modalIndex].alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
              
              {/* Modal Controls */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:bg-white/20 h-10 w-10 p-0"
              >
                <X className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={prevModalImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 p-0"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextModalImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 p-0"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              {/* Modal Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium mb-1">{photos[modalIndex].caption}</p>
                <p className="text-white/80 text-sm">{photos[modalIndex].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}