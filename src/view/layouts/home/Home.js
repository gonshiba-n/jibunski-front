import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

import '../../../styles/layouts/home/home.scss'
import Btn from "../../components/button";


export default function Home() {

  let a = "Signup"
  return(
    <div>
      {/* キャッチコピー */}
      <Row className="catch-copy">
        <Jumbotron fluid className="w-100">
          <Container className="cp-discription">
            <h1>あなたのなりたい「じぶん」を見つけよう</h1>
            <p>
              やりたいことを明確にして目標に向かって頑張る「あなた」をサポート
            </p>
            <Btn size="lg" variant="primary" className="signin m-2" nameValue="Signup" />
            <Btn size="lg" variant="success" className="login m-2" nameValue="Login" />
            <Btn size="lg" variant="warning" className="guest-login m-2" nameValue="ゲストログイン" />
          </Container>
        </Jumbotron>
      </Row>

      {/* ミッション */}
      <Row className="section missions">
        <Col className="text-center mission">
          <h2 className="title">
            - Mission -
          </h2>
          <div className="mission">
            <h3>
              やりたいことを明確にして、目標に向かって頑張る
              <span>「あなた」</span>をサポートします。
            </h3>
          </div>
          <div className="empathy">
            <p>やりたいことを実現させたい！</p>
            <p>自分が何をしたいか分からない...</p>
            <p>仕事や勉強のモチベーションが上がらない...</p>
            <p>就職、転職を考えている</p>
            <p>自分の進むべきキャリアプランに迷っている</p>
            <h3>じぶんセキは、こんな悩みを抱えた人たちへ、自己解析フレームワークを提供します。</h3>
          </div>
        </Col>
      </Row>

      {/* サービス */}
      <Row className="section services text-center">
        <Col>
          <h2 className="title">
            - Services -
          </h2>
        </Col>
        <Row className="m-2">
          <Col md={4} className="analysis">
            <i className="fas fa-chart-line icon"></i>
            <h3>自己分析</h3>
            <div className="text-left">
              <p>
                <i className="far fa-check-circle"></i>
                Will,Can,Mustに沿った質問に答えてカンタンに単語をアウトプット
              </p>
              <p>
                <i className="far fa-check-circle"></i>
                「あなた」の強み、伸ばすべき部分を明確にすることで、進むべき方向性が定まります。
              </p>
              <p>
                <i className="far fa-check-circle"></i>
                思考を整理することで、自分でも気付いていない自分を見つけられます。
              </p>
            </div>
          </Col>
          <Col md={ 4 } className="target m-0">
            <i className="fas fa-check icon"></i>
            <h3>目標設定管理</h3>
            <div className="text-left">
              <p>
                <i className="far fa-check-circle"></i>
                短期、中期、長期の目標設定をサポートします。
              </p>
              <p>
                <i className="far fa-check-circle"></i>
                Will,Can,Mustから導き出された単語を基に、目標達成までの歩みをリアルタイムで表示します。
              </p>
              <p>
                <i className="far fa-check-circle"></i>
                目標に向かった日からの日数、達成率を視覚的にサポートすることで、モチベーションを保ちます。
              </p>
            </div>
          </Col>
          <Col md={ 4 } className="company">
            <i className="far fa-building icon"></i>
            <h3>企業分析</h3>
            <div className="text-left">
              <p>
                <i className="far fa-check-circle"></i>
                気になる企業を登録して分析しましょう。
              </p>
              <p>
                <i className="far fa-check-circle"></i>
                ６つの項目から5段階で「あなた」にマッチしているか評価しましょう。
              </p>
              <p>
                <i className="far fa-check-circle"></i>
                評価基準を基に志望度を自動で算出します。
              </p>
            </div>
          </Col>
        </Row>
        <Col>
          <h3>「あなた」の自己分析から目標達成までをサポートします。</h3>
        </Col>
      </Row>

      {/* スタート */}
      <Row className="section">
        <Col className="text-center start">
          <h2 className="title">さあ、やりたいことを見つけよう！</h2>
          <p>登録はこちらから</p>
          <Btn size="lg" variant="primary" className="signin m-2" nameValue="Signup" />
        </Col>
      </Row>
    </div>
  )
}