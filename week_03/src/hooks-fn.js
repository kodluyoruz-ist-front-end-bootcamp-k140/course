import './App.css';
import React, { useState } from 'react';
import { FormRow } from "./components/form-row"
import { ScreenSizeFn } from './components/screen-size';
import { useDocumentTitle, useFormInput } from './hooks';
// import { useDocumentTitle } from './hooks/use-document-title';
// import { useFormInput } from './hooks/use-form-input';



export default function () {
  const name = useFormInput("Harry")
  const surname = useFormInput("Potter")
  const [showScreenSize, setShowScreenSize] = useState(true)

  useDocumentTitle(name.value + " " + surname.value)

  const handleScreenSize = () => {
    setShowScreenSize((showScreenSize) => !showScreenSize)
  }

  return (
    <div className="container">
        <div className='form'>
          <FormRow
            label="Ad"
            {...name}
          />
          <FormRow
            label="Soyad"
            {...surname}
          />
          <button onClick={handleScreenSize}>Kapat</button>
          { showScreenSize && (
            <ScreenSizeFn />
          )}
        </div>
    </div>
  )
}



