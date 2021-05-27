import React from 'react'
import { Button } from './styles'

interface ButtonProps {
  className?: string
  clear?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick: (e: any) => void
  children: React.ReactNode
}

const button = ({ className, clear, type, onClick, children }: ButtonProps) => (
  <Button className={className} clear={clear} type={type} onClick={onClick}>
    {children}
  </Button>
)

export default button
