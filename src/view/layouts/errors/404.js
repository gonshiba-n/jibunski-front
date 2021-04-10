import React from 'react'
import '../../../styles/layouts/errors/erros.css'

export const NotFoundError = () => {
return(
<div className="default-error-page">
  <div className="dialog">
    <div>
      <i class="far fa-tired fa-3x error-icon"></i>
      <h1>お探しのページが見つかりませんでした。</h1>
      <h1>
        お探しのページは一時的にアクセス出来ないか<br />
        移動もしくは削除された可能性があります。
      </h1>
    </div>
    <p>
      http 404:Not Found<br />
      URL,ファイル名にタイプミスがないか<br />
      再度、ご確認ください。<br />
    </p>
  </div>
</div>
)
}