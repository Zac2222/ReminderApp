import axios from "axios";
import Reminder from "../models/reminders";




class ReminderServices{
    
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.coms/'
    })
    async getReminders(){
        const response = await this.http.get<Reminder[]>('todos'); //todos is taken from endpoint website we used, also the url above is the website
        return response.data
    }
    async addReminders(title: string){
        const response = await this.http.post<Reminder>('todos', {title}); 
        return response.data
    }
    async removeReminders(id: number){
        const response = await this.http.delete('todos' + id);
        return response.data
    }
}

export default new ReminderServices();