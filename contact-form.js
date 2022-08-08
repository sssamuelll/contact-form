import { LitElement, html, css } from "lit";
import { styleMap } from 'lit/directives/style-map.js';
import {property} from 'lit/decorators.js';

import sheet from "./contact-form.css";


export class contactForm extends LitElement {

    static styles = [sheet];

    /* Styles */

    @property({type:String, state:false})
    background;

    @property({type:String, state:false})
    color;

    @property({type:String, state:false})
    fontSize;

    @property({type:String, state:false})
    margin;


    /* Connection */

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

    /* Form Elements */
    @property({type:String, attribute: false})
    nombre;

    @property({type:String, attribute: false})
    apellido;

    @property({type:String, attribute: false})
    apellido_2;

    @property({type:String, attribute: false})
    identification_id;

    @property({type:String, attribute: false})
    dob_dtm;

    @property({type:String, attribute: false})
    nationality_id;

    @property({type:String, attribute: false})
    race_id;

    @property({type:String, attribute: false})
    language_id;

    @property({type:String, attribute: false})
    marital_id;

    @property({type:String, attribute: false})
    phone_nbr;

    @property({type:String, attribute: false})
    mobile_nbr;

    @property({type:String, attribute: false})
    email;

    @property({type:String, attribute: false})
    employee_txt;

    @property({type:String, attribute: false})
    gender_1;

    @property({type:String, attribute: false})
    gender_2;

    constructor() {
        super();
        
        this.color = "black";
        this.background = "white";
        this.fontSize = "16px";
        this.margin = "10px";

        this.method = "";
        this.action = "";

        this.nombre = "";
        this.apellido = "";
        this.apellido_2 = "";
        this.identification_id = "";
        this.dob_dtm = "";
        this.nationality_id = "";
        this.race_id = "";
        this.language_id = "";
        this.marital_id = "";
        this.phone_nbr = "";
        this.mobile_nbr = "";
        this.email = "";
        this.employee_txt = "";
        this.gender_1 = "";
        this.gender_2 = "";

    }

    connectedCallback() {
        super.connectedCallback();
    }

    _validate() {

        if (this.gender_1 != "") {
            var gender = "femenino";
        } else if (this.gender_2 != "") {
            var gender = "masculino";
        } else {
            var gender = "N/A";
        }

        var addContact = {
            nombre: this.nombre,
            apellido: this.apellido,
            apellido_2: this.apellido_2,
            gender: gender,
            identification_id: this.identification_id,
            dob_dtm: this.dob_dtm,
            nationality_id: this.nationality_id,
            race_id: this.race_id,
            language_id: this.language_id,
            marital_id: this.marital_id,
            phone_nbr: this.phone_nbr,
            mobile_nbr: this.mobile_nbr,
            email: this.email,
            employee_txt: this.employee_txt
        }
        this._submit(addContact);
    }

    async _submit(addContact) {

        //action="http://localhost/web_components/save.php" method="POST"
        var url = "http://localhost/web_components/save.php"
        const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                    name_txt: addContact.name_txt,
                    last_name_1: addContact.apellido,
                    last_name_2: addContact.apellido_2,
                    gender_id: addContact.gender,
                    identification_id: addContact.identification_id,
                    dob_dtm: addContact.dob_dtm,
                    nationality_id: addContact.nationality_id,
                    race_id: addContact.race_id,
                    language_id: addContact.language_id,
                    marital_id: addContact.marital_id,
                    phone_nbr: addContact.phone_nbr,
                    mobile_nbr: addContact.mobile_nbr,
                    email: addContact.email,
                    employee_txt: addContact.employee_txt
                }) // body data type must match "Content-Type" header
            });
            console.log(response.json()) // parses JSON response into native JavaScript objects
    }

    _submitHandler(){
        console.log("Hemos llegado aquí");
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
            <div style=${styleMap(styles)}>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="name_txt" class="col-4 col-form-label">Nombre:</label> 
                    <div class="col-8">
                        <input id="name_txt" name="name_txt" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.nombre}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="last_name_1" class="col-4 col-form-label">Primer apellido:</label> 
                    <div class="col-8">
                        <input id="last_name_1" name="last_name_1" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.apellido}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="last_name_2" class="col-4 col-form-label">Segundo apellido:</label>
                    <div class="col-8">
                        <input id="last_name_2" name="last_name_2" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.apellido_2}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label class="col-4">Sexo:</label> 
                    <div class="col-8">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input name="gender_id" id="gender_id_0" type="radio" class="custom-control-input" value="F" style=${styleMap(inputStyle)} value=${this.gender_1}> 
                            <label for="gender_id_0" class="custom-control-label">Femenino</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input name="gender_id"_submit id="gender_id_1" type="radio" class="custom-control-input" value="M" style=${styleMap(inputStyle)} value=${this.gender_2}> 
                            <label for="gender_id_1" class="custom-control-label">Masculino</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="identification_id" class="col-4 col-form-label">Número de Identificación:</label> 
                    <div class="col-8">
                        <input id="identification_id" name="identification_id" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.identification_id}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="dob_dtm" class="col-4 col-form-label">Fecha de nacimiento:</label> 
                    <div class="col-8">
                        <input id="dob_dtm" name="dob_dtm" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.dob_dtm}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="nationality_id" class="col-4 col-form-label">Nacionalidad:</label> 
                    <div class="col-8">
                        <input id="nationality_id" name="nationality_id" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.nationality_id}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="race_id" class="col-4 col-form-label">Raza:</label> 
                    <div class="col-8">
                        <input id="race_id" name="race_id" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.race_id}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="language_id" class="col-4 col-form-label">Lengua materna:</label> 
                    <div class="col-8">
                        <input id="language_id" name="language_id" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.language_id}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="marital_id" class="col-4 col-form-label">Estado marital:</label> 
                    <div class="col-8">
                        <input id="marital_id" name="marital_id" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.marital_id}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="phone_nbr" class="col-4 col-form-label">Teléfono:</label> 
                    <div class="col-8">
                        <input id="phone_nbr" name="phone_nbr" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.phone_nbr}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="text" class="col-4 col-form-label">Celular (Móvil):</label> 
                    <div class="col-8">
                        <input id="mobile_nbr" name="mobile_nbr" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.mobile_nbr}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="email" class="col-4 col-form-label">Correo electrónico:</label> 
                    <div class="col-8">
                        <input id="email" name="email" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.email}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="employee_txt" class="col-4 col-form-label">Empleo actual:</label> 
                    <div class="col-8">
                        <input id="employee_txt" name="employee_txt" type="text" class="form-control" style=${styleMap(inputStyle)} value=${this.employee_txt}>
                    </div>
                </div> 
                <br>
                <div class="form-group row">
                    <div class="offset-4 col-8">
                        <button class="btn btn-primary" @click="${this._validate}" style=${styleMap(buttonStyle)}>Guardar</button>
                    </div>
                </div>
            </form>
        `
    }
}

customElements.define('contact-form', contactForm);