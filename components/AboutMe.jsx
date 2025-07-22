"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleDot } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center md:w-1/3"
        >
          <Avatar className="w-48 h-48 mx-auto mb-4 shad shadow-2xl">
            <AvatarImage src="./yo.png" alt="Juan Cruz Urban" className="object-cover contain-layout" />
            <AvatarFallback>JCU</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mb-2">Juan Cruz Urban</h2>
          <p className="text-muted-foreground mb-4">Programador Web Fullstack | Argentina</p>
          <div className="flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://github.com/juancruz-urban" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.linkedin.com/in/juan-cruz-urban-1b1907266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-2/3"
        >
          <Card>
            <CardHeader>
              <CardTitle>Sobre Mí</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                ¡Hola! Soy un developer con experiencia en frontend (React, JavaScript) y backend (Node.js, Express). Me
                especializo en integración de APIs, bases de datos (SQL, NoSQL) y soluciones de e-commerce, con
                capacidad para gestionar todo el ciclo de desarrollo de aplicaciones web.
              </p>
              <p className="mb-4">Me motiva el hecho de poder crear aplicaciones que ayuden a los demás.</p>
              <motion.div
                className="flex items-center text-green-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <CircleDot className="h-4 w-4 mr-2" />
                <span>Disponible para trabajar</span>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}







/**<Image
              src="/img-me-Photoroom(1).png"
              alt="Juan Cruz Urban"
              objectFit="cover"
              layout="fill"
              className="rounded-full shadow-lg object-cover contain-layout"
            /> */

function Github(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    )
}
function LinkedIn(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    )
    
}
