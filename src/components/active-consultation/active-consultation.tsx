import React, {useContext} from 'react'
import {ConsultationContext} from '../../context/consultation-context'
import ConsultationNotes from '../consultation-notes/consultation-notes'

const checkActiveVisit = patientDetails => patientDetails?.isActiveVisit

function ActiveConsultation() {
  const patientDetails = useContext(ConsultationContext)
  return (
    checkActiveVisit(patientDetails) && (
      <div id="sa-consultation">
        <ConsultationNotes />
      </div>
    )
  )
}

export default ActiveConsultation
