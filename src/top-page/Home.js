import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import '../style/home.scss'


export default function Home() {
  return(
    <div>
      <Row className="catch-copy">
        <Col className="text-left text-md-center cp-discription">
          <div class="content-box">
            <h2>あなたのなりたい「じぶん」を見つけよう</h2>
            <h3>やりたいことを明確にして目標に向かって頑張る「あなた」をサポート</h3>
            <Button variant="success" size="lg">Signin</Button>
          </div>
        </Col>
        <div class="col-12 pt-3 text-left text-md-center">
          <Button variant="warning" size="lg">Login</Button>
        </div>
        <div class="col-12 pt-3 text-left text-md-center">
          <Button variant="warning" size="lg">ゲストログイン</Button>
        </div>
      </Row>

      <section class="row missions">
        <div class="col-12 text-center mission">
          <h2>
            <span class="section-title">Missions</span>
          </h2>
          <div class="mission">
            <h3>
              やりたいことを明確にして、目標に向かって頑張る
              <span>「あなた」</span>をサポートします。
            </h3>
          </div>
          <div class="empathy">
            <p>やりたいことを実現させたい！</p>
            <p>自分が何をしたいか分からない...</p>
            <p>仕事や勉強のモチベーションが上がらない...</p>
            <p>就職、転職を考えている</p>
            <p>自分の進むべきキャリアプランに迷っている</p>
            <h3>じぶんセキは、こんな悩みを抱えた人たちへ、自己解析フレームワークを提供します。</h3>
          </div>
        </div>
      </section>

      <section class="row services text-center">
        <div class="col-12">
          <h2>
            <span class="section-title">Services</span>
          </h2>
        </div>
        <div class="row m-2">
          <div class="col-12 col-md-4 analysis">
            <i class="fas fa-chart-line icon"></i>
            <h3>自己分析</h3>
            <div class="text-left">
              <p>
                <i class="far fa-check-circle"></i>
                Will,Can,Mustに沿った質問に答えてカンタンに単語をアウトプット
              </p>
              <p>
                <i class="far fa-check-circle"></i>
                「あなた」の強み、伸ばすべき部分を明確にすることで、進むべき方向性が定まります。
              </p>
              <p>
                <i class="far fa-check-circle"></i>
                思考を整理することで、自分でも気付いていない自分を見つけられます。
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 target m-0">
            <i class="fas fa-check icon"></i>
            <h3>目標設定管理</h3>
            <div class="text-left">
              <p>
                <i class="far fa-check-circle"></i>
                短期、中期、長期の目標設定をサポートします。
              </p>
              <p>
                <i class="far fa-check-circle"></i>
                Will,Can,Mustから導き出された単語を基に、目標達成までの歩みをリアルタイムで表示します。
              </p>
              <p>
                <i class="far fa-check-circle"></i>
                目標に向かった日からの日数、達成率を視覚的にサポートすることで、モチベーションを保ちます。
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 company">
            <i class="far fa-building icon"></i>
            <h3>企業分析</h3>
            <div class="text-left">
              <p>
                <i class="far fa-check-circle"></i>
                気になる企業を登録して分析しましょう。
              </p>
              <p>
                <i class="far fa-check-circle"></i>
                ６つの項目から5段階で「あなた」にマッチしているか評価しましょう。
              </p>
              <p>
                <i class="far fa-check-circle"></i>
                評価基準を基に志望度を自動で算出します。
              </p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <h3>「あなた」の自己分析から目標達成までをサポートします。</h3>
        </div>
      </section>

      <section class="row">
        <div class="col-12 text-center start">
          <h2>さあ、やりたいことを見つけよう！</h2>
          <p>登録はこちらから</p>
          {/* <%= link_to "Signup", new_user_path, data: {"turbolinks" => false}, class: 'btn btn-outline-success btn-lg section-signup' %> */}
        </div>
      </section>
    </div>
  )
}