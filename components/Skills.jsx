import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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
    { name: "SQLite", level: 70 },
    { name: "MySql", level: 70 },
    { name: "Next js", level: 60 },
    { name: "Shadcn", level: 50 },
    { name: "Typescript", level: 50 },
    { name: "React Native", level: 40 },
    { name: "PHP", level: 30 },
    { name: "Laravel", level: 20 },
    { name: "Python", level: 20 },
    
    
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Mis Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={skill.level} className="w-full" />
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

