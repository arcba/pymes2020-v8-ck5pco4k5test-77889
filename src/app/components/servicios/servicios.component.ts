import { Component, OnInit } from "@angular/core";
import { ServiciosService } from "../../services/servicios.service";
import { Servicio } from "../../models/servicio";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.css"]
})
export class ServiciosComponent implements OnInit {
  Lista: Servicio[] = [];
  constructor(
    public formBuilder: FormBuilder,
    private serviciosService: ServiciosService,
    private modalDialogService: ModalDialogService
  ) {}
  ngOnInit() {
    this.Lista;
  }

  GetFamiliasArticulos() {
    this.serviciosService.get().subscribe((res: any) => {
      console.log(res);
      this.Lista = res.Lista;
    });
  }
}
