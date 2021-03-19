import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../styles/components/footer.scss'

export default function Footer() {
  return(
  <Row className="text-center footer">
    <Col className="copyright">
      <img
        src={`${process.env.PUBLIC_URL}/logo.svg`}
        width="150"
        height="60"
        className="d-inline-block align-top"
        alt="logo"
      />
      <p className="mt-3">copyright<span>&copy;</span>ごんしば</p>
    </Col>
  </Row>
  )
}