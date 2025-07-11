'use client'

import { useState, useEffect, useRef } from 'react'
import Project from './components/project'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Image from 'next/image'

const projects = [
  { title: 'C2 Montreal', src: 'c2montreal.png', color: '#000000' },
  { title: 'Office Studio', src: 'officestudio.png', color: '#8C8C8C' },
  { title: 'Locomotive', src: 'locomotive.png', color: '#EFE8D3' },
  { title: 'Silencio', src: 'silencio.png', color: '#706D63' },
]

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
}

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal

  const modalContainer = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)

  const xMoveContainer = useRef(null)
  const yMoveContainer = useRef(null)
  const xMoveCursor = useRef(null)
  const yMoveCursor = useRef(null)
  const xMoveCursorLabel = useRef(null)
  const yMoveCursorLabel = useRef(null)

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    })
    xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    })
    yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    })
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }

  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <main
      onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
      className="flex overflow-hidden flex-col w-screen items-center mt-[100px]  px-4 md:px-16 lg:px-[200px] relative"
    >

      <span className='text-xm text-black py-6'>Recent Work</span>
      {/* Project List */}
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center mb-[100px]">
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            manageModal={manageModal}
          />
        ))}
      </div>

      {/* Modal Preview */}
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
          className="fixed z-[3] h-[350px] w-[400px] top-1/2 left-1/2 pointer-events-none overflow-hidden bg-black"
        >
          <div
            className="relative h-full w-full transition-[top] duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ top: `${index * -100}%` }}
          >
            {projects.map((project, i) => (
              <div
                key={`modal_${i}`}
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <Image
                  src={`/images/${project.src}`}
                  width={300}
                  height={0}
                  alt="image"
                  className="h-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cursor */}
        <motion.div
          ref={cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
          className="fixed z-[3] w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white flex items-center justify-center text-[14px] font-light pointer-events-none"
        />
        {/* Cursor Label */}
        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
          className="fixed z-[3] w-[80px] h-[80px] rounded-full flex items-center justify-center text-[14px] font-light pointer-events-none bg-transparent"
        >
          View
        </motion.div>
      </>
    </main>
  )
}
