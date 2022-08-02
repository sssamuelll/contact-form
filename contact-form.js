import { LitElement, html, css } from "lit";
import { styleMap } from 'lit/directives/style-map.js';
import {property} from 'lit/decorators.js';

import sheet from "./contact-form.css";


export class contactForm extends LitElement {

    static styles = [sheet];

    @property({type:String, state:false})
    background;

    @property({type:String, state:false})
    color;

    @property({type:String, state:false})
    fontSize;

    @property({type:String, state:false})
    margin;

    @property({type:Boolean, state:false})
    saved;

    @property({type:Boolean, state:false})
    updated;

    @property({type:Boolean, state:false})
    deleted;

    @property({type:String, state:false})
    method;

    @property({type:String, state:false})
    action;



    constructor() {
        super();
        
        this.color = "black";
        this.background = "white";
        this.fontSize = "16px";
        this.margin = "10px";

        this.method = "";
        this.action = "";


    }

    connectedCallback() {
        super.connectedCallback();
    }

    _submit() {

    }

    render() {
        var styles = {  
                        backgroundColor: this.background,
                        color: this.color,
                        fontSize: this.fontSize
        };
        var inputStyle = {
                        fontSize: this.fontSize
        };
        var buttonStyle = {
                        fontSize: this.fontSize
        };
        var rowStyle = {
                        marginBottom: this.margin
        };

        return html`
            <form style=${styleMap(styles)}>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="name_txt" class="col-4 col-form-label">Nombre:</label> 
                    <div class="col-8">
                        <input id="name_txt" name="name_txt" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="last_name_1" class="col-4 col-form-label">Primer apellido:</label> 
                    <div class="col-8">
                        <input id="last_name_1" name="last_name_1" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="last_name_2" class="col-4 col-form-label">Segundo apellido:</label> 
                    <div class="col-8">
                        <input id="last_name_2" name="last_name_2" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label class="col-4">Sexo:</label> 
                    <div class="col-8">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input name="gender_id" id="gender_id_0" type="radio" class="custom-control-input" value="F" style=${styleMap(inputStyle)}> 
                            <label for="gender_id_0" class="custom-control-label">Femenino</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input name="gender_id" id="gender_id_1" type="radio" class="custom-control-input" value="M" style=${styleMap(inputStyle)}> 
                            <label for="gender_id_1" class="custom-control-label">Masculino</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="identification_id" class="col-4 col-form-label">Número de Identificación:</label> 
                    <div class="col-8">
                        <input id="identification_id" name="identification_id" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="dob_dtm" class="col-4 col-form-label">Fecha de nacimiento:</label> 
                    <div class="col-8">
                        <input id="dob_dtm" name="dob_dtm" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="nationality_id" class="col-4 col-form-label">Nacionalidad:</label> 
                    <div class="col-8">
                        <input id="nationality_id" name="nationality_id" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="race_id" class="col-4 col-form-label">Raza:</label> 
                    <div class="col-8">
                        <input id="race_id" name="race_id" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="language_id" class="col-4 col-form-label">Lengua materna:</label> 
                    <div class="col-8">
                        <input id="language_id" name="language_id" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="marital_id" class="col-4 col-form-label">Estado marital:</label> 
                    <div class="col-8">
                        <input id="marital_id" name="marital_id" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="phone_nbr" class="col-4 col-form-label">Teléfono:</label> 
                    <div class="col-8">
                        <input id="phone_nbr" name="phone_nbr" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="text" class="col-4 col-form-label">Celular (Móvil):</label> 
                    <div class="col-8">
                        <input id="text" name="text" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="email" class="col-4 col-form-label">Correo electrónico:</label> 
                    <div class="col-8">
                        <input id="email" name="email" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="employee_txt" class="col-4 col-form-label">Empleo actual:</label> 
                    <div class="col-8">
                        <input id="employee_txt" name="employee_txt" type="text" class="form-control" style=${styleMap(inputStyle)}>
                    </div>
                </div> 
                <br>
                <div class="form-group row">
                    <div class="offset-4 col-8">
                        <button name="submit" type="submit" class="btn btn-primary" style=${styleMap(buttonStyle)}>Guardar</button>
                    </div>
                </div>
            </form>
        `
    }
}

customElements.define('contact-form', contactForm);