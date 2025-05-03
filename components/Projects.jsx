"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { ProyectsArray } from "@/proyects"
import { motion } from "framer-motion"
import styles from "./Projects.module.css"

const AnimatedButton = motion(Button)

export default function Projects() {
  const { projectsArray } = ProyectsArray()
  const [hoveredIndex, setHoveredIndex] = useState(null)


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
      <div className={styles.projectGrid}>
        {projectsArray.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.projectCardWrapper}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className={styles.projectCard}>
              <CardHeader className={styles.cardHeader}>
                <div className={styles.imageWrapper}>
                  
                {project.video && hoveredIndex === index ? (
                   <video src={project.video} autoPlay muted loop playsInline className={styles.projectVideo} />
                  ) : (
                  <Image
                    src={project.imagenPortada || "/placeholder.svg"}
                    alt={project.nombre}
                    layout="fill"
                    objectFit="cover"
                    
                  />)}


                </div>
              </CardHeader>
              <CardContent className={styles.cardContent}>
                <CardTitle className="mb-2" style={{marginTop:'1.2rem'}}>{project.nombre}</CardTitle>
                <p className={styles.projectDescription}>{project.descripcion}</p>
              </CardContent>
              <CardFooter className={styles.cardFooter}>
                <AnimatedButton
                  variant="outline"
                  className="mr-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  asChild
                >
                  <a href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </AnimatedButton>
                {project?.link && (
                  <AnimatedButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} asChild>
                    <a href={project?.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </AnimatedButton>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-github"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

