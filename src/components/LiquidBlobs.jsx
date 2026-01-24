import { motion } from 'framer-motion'

function LiquidBlobs() {
  // Create 4 blobs with random initial positions and animations
  // Responsive sizes for mobile performance
  const blobs = [
    {
      initialX: -20,
      initialY: -20,
      animateX: [0, 30, -20, 0],
      animateY: [0, 40, 20, 0],
      size: 'clamp(250px, 40vw, 400px)',
      blur: 'clamp(80px, 12vw, 120px)',
      color: 'rgba(255, 250, 220, 0.08)',
      duration: 25,
    },
    {
      initialX: 80,
      initialY: 60,
      animateX: [0, -40, 30, 0],
      animateY: [0, -30, 50, 0],
      size: 'clamp(300px, 50vw, 500px)',
      blur: 'clamp(100px, 15vw, 150px)',
      color: 'rgba(255, 250, 220, 0.06)',
      duration: 30,
    },
    {
      initialX: 40,
      initialY: 80,
      animateX: [0, 50, -30, 0],
      animateY: [0, -50, 30, 0],
      size: 'clamp(280px, 45vw, 450px)',
      blur: 'clamp(90px, 13vw, 130px)',
      color: 'rgba(255, 250, 220, 0.07)',
      duration: 28,
    },
    {
      initialX: -10,
      initialY: 40,
      animateX: [0, -35, 25, 0],
      animateY: [0, 35, -25, 0],
      size: 'clamp(240px, 38vw, 380px)',
      blur: 'clamp(75px, 11vw, 110px)',
      color: 'rgba(255, 250, 220, 0.05)',
      duration: 32,
    },
  ]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            filter: `blur(${blob.blur})`,
            left: `${blob.initialX}%`,
            top: `${blob.initialY}%`,
          }}
          animate={{
            x: blob.animateX,
            y: blob.animateY,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default LiquidBlobs
