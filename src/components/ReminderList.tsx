import { useEffect, useState } from "react"
import Reminder from "../models/reminders"
import reminderServices from "../services/reminder"

interface ReminderListProps
{
  items: Reminder [] //items is anything from the reminder interface put together as one item in an array i think
  onRemoveReminder: (id: number) => void
}
//this is the list of reminders that will be displayed on the page
const ReminderList = ({items, onRemoveReminder}: ReminderListProps) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadReminders = async () => {
      try{
        setLoading(true)
        const responseList = await reminderServices.getReminders()
        console.log('help')
      }
      finally{
        setLoading(false)
      }
      loadReminders();
    }
    
  }, [])

  return (
    <ul className="list-group">
       {items.map((item) => 
       <li className="list-group-item" key={item.id}>
        <span className="content">{item.title}</span>
       <button className="btn btn-outline-danger rounded-pill mx-5" onClick={() => onRemoveReminder(item.id)}>Delete</button>
       </li>)} 
    </ul>
  )
}

export default ReminderList
