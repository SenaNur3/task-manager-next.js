"use client"
import CreateTask from '@/components/createTask';
import Footer from '@/components/footer';
import TaskList from '@/components/taskList';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styled from "styled-components";

const Divider = styled.div`
background: var(--gray-300, #B4B6BB);
max-width:1200px;
width: 100%;
height: 3px;
`

export default function Home() {
  const [task, setTask] = useState([])

  useEffect(() => {
    // Retrieve tasks from local storage on component mount
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <main className='flex justify-center'>
      <div className='w-full max-w-[1440px] pt-[40px] pr-[120px] pb-0 pl-[120px] flex justify-center flex-col md:pl-[60px] md:pr-[60px]'>
        <header className='flex  flex-col'>
          <Image src="/logo.png" width={210} height={120} alt='logo' className='mb-[40px]' />
          <Divider />
        </header>
        <CreateTask setTask={setTask} />
        <TaskList setTask={setTask} task={task}/>
        <Footer/>
      </div>
    </main>
  )
}
