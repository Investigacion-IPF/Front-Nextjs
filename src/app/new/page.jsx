"use client"
import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const page = () => {

  const router = useRouter();
  const [form, setForm] = useState({});

  const onSubmit = async (e)=>{
    e.preventDefault();

    const req = await fetch('http://127.0.0.1:3000/task', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const res = await req.json();

    alert(res.msg);

    return router.push('/');

  }

  return (
    <main className={styles.main}>
        <div className={styles.div}>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' className="form-control mb-2" onChange={({target})=> setForm({...form, name: target.value})}/>
            
            <label htmlFor="description">Description:</label>
            <input type="text" id='description' className="form-control mb-2" onChange={({target})=> setForm({...form, description: target.value})}/>
            
            <label htmlFor="done">Done:</label>
            <select  id="description" className='form-select mb-2' onChange={({target})=> setForm({...form, done: target.value})}>
              <option value="true">Terminado</option>
              <option value="false">Pendiente</option>
            </select>

            <button className='btn btn-primary' type='submit'>Crear</button>
          </form>
        </div>
    </main>
  )
}

export default page