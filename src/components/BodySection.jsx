import React from 'react'
import Hobbies from './myHobbies/Hobbies.jsx'
import Projects from './myProjects/Projects.jsx'
import Personal from './aboutMe/Personal.jsx'
const BodySection = () => {
  return (
    <>
        <Personal/>
        <Projects/>
        <Hobbies/>
    </>
  )
}

export default BodySection