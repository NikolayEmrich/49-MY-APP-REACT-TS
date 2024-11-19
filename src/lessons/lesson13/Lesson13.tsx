import React from 'react'
import * as Yup from 'yup'
import MyButton from '../../components/myButton/myButton'

export default function Lesson13() {
  return (
    <div className='lesson-container'>
        <h2>Lesson13</h2>
        <p>Yup validation library</p>

        <form action=''>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <MyButton myType='submit' text='send'/>
        </form>

    </div>
  )
}
