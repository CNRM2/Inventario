import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css'],
  standalone: true // Asegúrate de agregar esto
})
export class EmployeeHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Puedes agregar lógica aquí si es necesario
  }

}