import React, { ReactChildren } from 'react'
import { Input } from './styles'

interface InputProps {
  className?: string
  type?: any
  value: any
  onChange: (e: any) => void
  name?: string
  id?: string
}

const input = ({ className, value, name, id, onChange, type }: InputProps) => (
  <Input
    className={className}
    type={type}
    value={value}
    name={name}
    id={id}
    onChange={onChange}
  />
)

export default input
