"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    from_email: "",
    message: "",
  })
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(false)
  const form = useRef()
  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail(e)
    
    setFormData({ name: "", email: "", message: "" })
    setShowAlert(false)
  }


  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          ///setMsg('Mensaje enviado correctamente')
          setShowAlert(true)
          form.current.reset()
           
            setLoading(false) 
        },
        (error) => {
          console.log(error)
          ///setMsg('Error al enviar el mensaje')
          setShowAlert(true)
          setLoading(false)
        },
      )
  }

  return (
    <motion.div
    className="container mx-auto px-4 py-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
      
      <h2 className="text-3xl font-bold text-center mb-8">Contáctame</h2>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Envíame un mensaje</CardTitle>
        </CardHeader>
        <CardContent>
          {showAlert && (
            <Alert className="mb-4">
              <AlertTitle>¡Gracias por tu mensaje!</AlertTitle>
              <AlertDescription>Te responderé pronto.</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} ref={form}>
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                placeholder="Nombre"
                defaultValue={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                name="from_email"
                placeholder="Email"
                defaultValue={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Textarea
                name="message"
                placeholder="Mensaje"
                defaultValue={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button disabled={loading} type="submit">Enviar Mensaje</Button>
          </form>
        </CardContent>
      </Card>
    
    </motion.div>
  )
}

