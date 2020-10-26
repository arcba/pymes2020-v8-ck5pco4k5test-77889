import { Component, OnInit } from "@angular/core";
import { Articulo } from "../../models/articulo";
import { ArticuloFamilia } from "../../models/articulo-familia";
import { MockArticulosService } from "../../services/mock-articulos.service";
import { MockArticulosFamiliasService } from "../../services/mock-articulos-familias.service";
import { ArticulosService } from "../../services/articulos.service";
import { ArticulosFamiliasService } from "../../services/articulos-familias.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.css"]
})
export class ServiciosComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder
  ) {
    
  }
  ngOnInit() {}
}
