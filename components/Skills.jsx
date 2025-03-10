'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {motion} from 'framer-motion'


export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "HTML", level: 80 },
    { name: "Github", level: 80 },
    { name: "Java", level: 70 },
    { name: "MySql", level: 70 },
    { name: "SQLite", level: 60 },
    { name: "Next js", level: 60 },
    { name: "Shadcn", level: 50 },
    { name: "Typescript", level: 50 },
    { name: "React Native", level: 40 },
    { name: "PHP", level: 30 },
    { name: "Laravel", level: 20 },
    { name: "Python", level: 20 },
    
    
  ]

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="container mx-auto px-4 py-16"
    >
      
      <h2 className="text-3xl font-bold text-center mb-8">Mis Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
       {skills.map((skill, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
             <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
             >
             <Progress value={skill.level} className="w-full" />
             <span className="text-sm text-muted-foreground">{skill.level}%</span>
             </motion.div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
       </div>
    
    
    </motion.div>
  )
}

