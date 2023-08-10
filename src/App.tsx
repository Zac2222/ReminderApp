import { useEffect, useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/reminders';
import reminderServices from './services/reminder'
import NewReminder from './components/NewReminder';
import LoadingIndicator from './components/LoadingIndicator';

// const reminders: Reminder [] = [
//   {id: 1, title: 'reminder 1'}
// ]



function App() {
  const [reminder, setReminder] = useState<Reminder []>([]);

  useEffect(() => {
    loadReminders();
  },[])

  const loadReminders = async () => {
    const reminders = await reminderServices.getReminders();
    setReminder(reminders)
  }

  const removeReminder = (id: number) => {
    setReminder(reminder.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title:string) => {
    const newReminder = await reminderServices.addReminders(title);
    setReminder([newReminder, ...reminder])
  }

  return (
   <div className='App'>
    <NewReminder onAddReminder={addReminder}/>
    <LoadingIndicator/>
    <ReminderList items={reminder} onRemoveReminder={(removeReminder)}/>
   </div>
  )
}

export default App
