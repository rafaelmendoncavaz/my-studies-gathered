import React, { useState, useEffect } from 'react'

import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState()
  const [students, setSetudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent() {

    const newStudent = {

      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

    }

    setSetudents(prevState => [...prevState, newStudent])

  }

  useEffect(() => {

    fetch('https://api.github.com/users/rafaelmendoncavaz')
    .then(response => response.json())
    .then(data => {
      setUser({
        avatar: data.avatar_url,
        name: data.name,
      })
    })

  }, [students])

  return (

    <div className="container">

      <header>

      <h1>

        Lista de Presença

      </h1>

      <div>

        <strong>

          {user.name}

        </strong>

        <img src={user.avatar} 
        alt="Foto de perfil" 
        />

      </div>

      </header>

      <input 
      type="text" 
      placeholder="Digite o Nome..."
      onChange={e => setStudentName(e.target.value)}
      />

      <button 
      type="button"
      onClick={handleAddStudent}
      >

        Adicionar

      </button>

      {

        students.map(student => 
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
        />
      )

      }

    </div>

  )

}


