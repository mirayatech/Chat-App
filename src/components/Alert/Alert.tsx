import Alert from '@mui/material/Alert'
import { useEffect } from 'react'

import { Error } from './style'

type AlertProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  text: string
  isError?: boolean
  duration?: number
}

export const Alerts = ({
  isOpen,
  setIsOpen,
  text,
  duration = 3000,
}: AlertProps) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, duration)
    }
  }, [isOpen])

  return (
    <>
      {isOpen ? (
        <Error>
          <Alert sx={{ width: '330px' }} severity="error">
            {text}
          </Alert>{' '}
        </Error>
      ) : (
        ''
      )}
    </>
  )
}
