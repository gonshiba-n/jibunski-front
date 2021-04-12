import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios"

import '../../../styles/dashboard/dashboard.scss'

export default function Dashboard(props){

  const root = process.env.REACT_APP_APP_BACKEND_PATH
  const tagData = () => {
    axios.get(root + "/logged_in", { withCredentials: true })
  }

  return(
    <div class="wcm-seat">
      <Row className="wcm-work-space">
        <Col xs={12}>
          <h2 className="h2">WCMシート</h2>
        </Col>
        <Col xs={12} class="col-12 wcm-chart">
          <Row>
            <Col sm={12} md={4} class="col-12 col-md-4 will-chart chart">
              <p>Will</p>
              <Row className="row mx-md-1 will-tags tags" id="will-seat">
                
              </Row>
            </Col>
            <Col sm={12} md={4} class="col-12 col-md-4 can-chart chart">
              <p>Can</p>
              <Row class="row mx-md-1 can-tags tags" id="can-seat">

              </Row>
            </Col>

            <Col sm={12} md={4} class="col-12 col-md-4 must-chart chart">
              <p>Must</p>
              <Row class="row mx-md-1 must-tags tags" id="must-seat">

              </Row>
            </Col>
          </Row>
        </Col>

        <Col class="col-12 wcm-result">
          <Col class="col-12 h3">
            ベースタグ
          </Col>
          <Row class="row" id="base-tags">
            
          </Row>
          <div class="guideline">
            <h3 class="h3">WCMからの行動指標</h3>
            <div class="guideline-container" data-toggle="modal" data-target=".bd-example-modal-xl" id="guideline-container">
              
            </div>
          </div>
        </Col>
        <div class="text-right w-100 mt-2 mb-5">
          <a><i class="fas fa-arrow-right pr-2"></i>他のユーザーのWCMを見る</a>
        </div>
      </Row>
    </div>

  )
}