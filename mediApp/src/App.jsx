import React from 'react'
import { BodyPart } from './components/BodyPart'

import './App.css'

export const App = () => {
  return (
    <div>
      <BodyPart
        bodyPart="Head"
      />
      <BodyPart
        bodyPart="Nose"
      />
      <BodyPart
        bodyPart="Chest"
      />
      <BodyPart
        bodyPart="Stomach"
      />
      <BodyPart
        bodyPart="Leg"
      />

      <button>Add</button>
    </div>
  )
}
