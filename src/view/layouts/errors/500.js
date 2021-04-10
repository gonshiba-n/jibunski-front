import React from 'react'
import '../../../styles/layouts/errors/erros.css'

export const ServerError = () => {
  return(
    <div className="default-error-page">
      <div className="dialog">
        <div>
          <i class="far fa-tired fa-3x error-icon"></i>
          <h1>申し訳ございません。不具合が発生しました。</h1>
          <h1>
            じぶんセキは正常にご覧頂けるように<br />
            解決に取り組んでいます。
          </h1>
        </div>
        <p>
          http 500:サーバーエラー<br />
          しばらく時間をおいてもご覧いただけない場合は、<br />
          お手数ですが管理者へご連絡ください<br />
        </p>
      </div>
    </div>
  )
}



