import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  private apiUrl = 'http://localhost:8080/task';

  constructor(private http:HttpClient) { }

  getAllTasks(): Observable<any>{
    return this.http.get(this.apiUrl+"/get/all");
  }

  postAddTask(Task:TaskModel): Observable<any>{
    return this.http.post(this.apiUrl+"/add",Task);
  }

  putTask(Task:TaskModel): Observable<any>{
    return this.http.put(this.apiUrl+"/update",Task);
  }

  deleteTask(taskId:number) {
    return this.http.delete(this.apiUrl+"/delete/"+taskId);
  }

}
