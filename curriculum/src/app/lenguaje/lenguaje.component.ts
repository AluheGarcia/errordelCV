import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.component.html',
  styleUrls: ['./lenguaje.component.css']
})
export class LenguajeComponent implements OnInit {
  educacion: any;
constructor(private cvService:CvService){


}
  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {console.log(data);
      this.educacion=data["lenguaje"]
    }
    )
  }
}
