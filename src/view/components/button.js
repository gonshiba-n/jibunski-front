import React from "react";
import Button from 'react-bootstrap/Button'

export default function Btn(props) {
  return(
    <Button size={props.size} variant={props.variant} className={props.className}>{props.nameValue}</Button>
  )
}