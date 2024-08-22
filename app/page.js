"use client"
import React, { useState } from 'react'
import Footer from './footer'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>Yoohoo!! no task</h2>;

  if (Array.isArray(mainTask) && mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button
          onClick={() => {
            deleteHandler(i)
          }} className='bg-red-400 text-white px-4 py-2 
        rounded font-bold'>Delete</button>
      </li>
    ));
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-6xl 
      font-bold text-center'>My Todo List</h1>
      <div className='text-center justify-center flex'>
        <form onSubmit={submitHandler}>
          <input type='text' className='text-2xl
         border-zinc-700 border-4
        m-5 px-5 py-3'
            placeholder='Enter your title'
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }} />
          <input type='text' className='text-2xl
         border-zinc-700 border-4
        m-5 px-5 py-3'
            placeholder='Enter your description'
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value)
            }} />
          <button className='bg-black text-white
        px-5 py-3 text-2xl font-bold rounded m-5'>Add me</button>

        </form>
      </div>
      <hr />
      <div className='p-8 bg-slate-400'>
        <ul>
          {renderTask}
        </ul>
      </div>
      <Footer/>
    </>
  )
}

export default page
