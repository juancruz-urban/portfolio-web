import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { ProyectsArray } from "@/proyects"


export default function Projects() {
  
  const {projectsArray} = ProyectsArray()

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsArray.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className='p-0'>
              <div className="relative w-full h-48">
              <Image
                src={project.imagenPortada || "/placeholder.svg"}
                alt={project.nombre}
               
                objectFit="cover"
                layout="fill"
                className="rounded-t-lg"
              />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 mt-4">{project.nombre}</CardTitle>
              <p>{project.descripcion}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="mr-2" asChild>
                <a href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            {
              project?.link && (
                <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
              )
            }
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


function Github(){
  return(
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  )
}