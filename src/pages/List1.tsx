import React, { FC, useState } from 'react'
import styles from './List1.module.scss'
import QuestionCard from '../components/QuestionCard'
import produce from 'immer'

const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 0,
    createdAt: '1月1日 12:00',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 0,
    createdAt: '1月1日 12:00',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 0,
    createdAt: '1月1日 12:00',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 0,
    createdAt: '1月1日 12:00',
  },
]

const List1: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)

  // function addQuestionCard() {
  //   const r = Math.random().toString().slice(-3)
  //   // setQuestionList(
  //   //   questionList.concat({
  //   //     _id: 'q' + r,
  //   //     title: '问卷' + r,
  //   //     isPublished: false,
  //   //   })
  //   // )
  //   setQuestionList(
  //     produce(draft => {
  //       draft.push({
  //         _id: 'q' + r,
  //         title: '问卷' + r,
  //         isPublished: false,
  //       })
  //     })
  //   )
  // }
  // function deleteQuestionCard(delete_id: string) {
  //   // setQuestionList(
  //   //   questionList.filter(item => {
  //   //     if (item._id === delete_id) return false
  //   //     else return true
  //   //   })
  //   // )
  //   setQuestionList(
  //     produce(draft => {
  //       const index = draft.findIndex(q => q._id === delete_id)
  //       draft.splice(index, 1)
  //     })
  //   )
  // }
  // function pubQuestionCard(_id: string) {
  //   // setQuestionList(
  //   //   questionList.map(item => {
  //   //     if (item._id === _id) {
  //   //       return {
  //   //         ...item,
  //   //         isPublished: true,
  //   //       }
  //   //     } else {
  //   //       return item
  //   //     }
  //   //   })
  //   // )
  //   setQuestionList(
  //     produce(draft => {
  //       const q = draft.find(item => item._id === _id)
  //       if (q) q.isPublished = true
  //     })
  //   )
  // }
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>
          <>搜索</>
        </div>
      </div>
      <ul className={styles.content}>
        {questionList.map(q => {
          const { _id } = q
          return <QuestionCard key={_id} {...q} />
        })}
        {/* <button onClick={addQuestionCard}>添加问卷</button> */}
      </ul>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default List1
