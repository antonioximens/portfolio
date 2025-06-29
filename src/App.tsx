import { Presentation } from "./components/Presentation/index.tsx"
import { AboutMe } from "./components/AboutMe/index.tsx"
import {Projects} from "./components/Pojects/index.tsx"
import { Skills } from "./components/Skills/index.tsx"
import { Contact } from "./components/Contact/index.tsx"

export default function App(){
  return (
    <>
      <Presentation />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}