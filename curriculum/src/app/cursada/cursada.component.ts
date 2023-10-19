import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-cursada',
  templateUrl: './cursada.component.html',
  styleUrls: ['./cursada.component.css']
})
export class CursadaComponent implements OnInit {
  educacion: any;
constructor(private cvService:CvService){


}
  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {console.log(data);
      this.educacion=data["cursada"]
    }
    )
  }
}
