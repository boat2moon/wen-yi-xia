import React, { FC } from 'react'
import './QuestionCard.css'

type ProsType = {
  id: string
  title: string
  isPublished: boolean
}

function edit(id: string) {
  console.log('编辑问卷', id)
}

const QuestionCard: FC<ProsType> = props => {
  const { id, title, isPublished } = props

  return (
    <li key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          edit(id)
        }}
      >
        编辑问卷
      </button>
    </li>
  )
}

export default QuestionCard
