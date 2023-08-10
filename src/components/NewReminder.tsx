import React, { useState } from 'react'



interface NewReminderProps{
    onAddReminder: (title: string) => void;
}

const NewReminder = ({onAddReminder}: NewReminderProps) => {
    
    
    const [title, setTitle] = useState('')

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault(); //make sure it is only called when we say, never automatically
        if(!title) return; //if title is empty, return (do nothing)
        onAddReminder(title);
        console.log(title);
    }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">
        <input value={title} onChange={event => setTitle(event.target.value)} type="title" className='form-control'/>
        <button type='submit' className='btn btn-primary rounded-pill my-4'>Add Reminder</button>
      </label>
    </form>
  )
}

export default NewReminder
