import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'
import classname from 'classnames'
import { sortAndDeduplicateDiagnostics } from 'typescript'

type ProsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
  deleteQuestionCard?: (_id: string) => void
  pubQuestionCard?: (_id: string) => void
}

// function edit(_id: string) {
//   console.log('编辑问卷', _id)
// }

const QuestionCard: FC<ProsType> = props => {
  const {
    _id,
    title,
    isPublished,
    isStar,
    answerCount,
    createdAt,
    deleteQuestionCard,
    pubQuestionCard,
  } = props
  //   const listItemClass = style['list-item']
  //   const publishedClass = style.published
  //   const itemClassName = classname({
  //     [listItemClass]: true,
  //     [publishedClass]: isPublished,
  //   })
  //   return (
  //     <li key={_id} className={itemClassName}>
  //       <strong>{title}</strong>
  //       &nbsp;
  //       {isPublished ? <span className={style['published-span']}>已发布</span> : <span>未发布</span>}
  //       &nbsp;
  //       <button
  //         onClick={() => {
  //           edit(_id)
  //         }}
  //       >
  //         编辑问卷
  //       </button>
  //       <button
  //         onClick={() => {
  //           deleteQuestionCard(_id)
  //         }}
  //       >
  //         删除问卷
  //       </button>
  //       <button
  //         onClick={() => {
  //           pubQuestionCard(_id)
  //         }}
  //       >
  //         发布问卷
  //       </button>
  //     </li>
  //   )
  return (
    <li className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
          &nbsp;
          <span>答卷{answerCount}</span>
          &nbsp;
          <span>{createdAt}</span>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </li>
  )
}

export default QuestionCard
