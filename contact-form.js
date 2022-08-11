import { LitElement, html, css } from "lit";
import { styleMap } from 'lit/directives/style-map.js';
import {customElement, property} from 'lit/decorators.js';

import sheet from "./contact-form.css";


export class contactForm extends LitElement {

    static styles = [sheet];

    static properties = {

        /* Styles */

        background:{type:String, state:false},
        color:{type:String, state:false},
        fontSize:{type:String, state:false},
        margin:{type:String, state:false},

        /* Connection */
        saved:{type:Boolean, state:false},
        updated:{type:Boolean, state:false},
        deleted:{type:Boolean, state:false},

        method:{type:String, state:false},
        action:{type:String, state:false},

    };

    constructor() {

        super();
        
        this.color = "black";
        this.background = "white";
        this.fontSize = "16px";
        this.margin = "10px";

        this.method = "";
        this.action = "";

    }

    _validate() {

        var gender_1 = this.shadowRoot.querySelector("#gender_id_0").value;
        var gender_2 = this.shadowRoot.querySelector("#gender_id_1").value;

        if (gender_1 != "") {
            var gender = "M";
        } else if (gender_2 != "") {
            var gender = "F";
        } else {
            var gender = "N/A";
        }

        var addContact = {
            nombre: this.shadowRoot.querySelector("#nombre").value,
            apellido: this.shadowRoot.querySelector("#apellido").value,
            apellido_2: this.shadowRoot.querySelector("#apellido_2").value,
            gender: gender,
            identification_id: this.shadowRoot.querySelector("#identification_id").value,
            dob_dtm: this.shadowRoot.querySelector("#dob_dtm").value,
            nationality_id: this.shadowRoot.querySelector("#nationality_id").value,
            race_id: this.shadowRoot.querySelector("#race_id").value,
            language_id: this.shadowRoot.querySelector("#language_id").value,
            marital_id: this.shadowRoot.querySelector("#marital_id").value,
            phone_nbr: this.shadowRoot.querySelector("#phone_nbr").value,
            mobile_nbr: this.shadowRoot.querySelector("#mobile_nbr").value,
            email: this.shadowRoot.querySelector("#email").value,
            employee_txt: this.shadowRoot.querySelector("#employee_txt").value
        }
        console.log(addContact);
        this._submit(addContact);

    }

    async _submit(addContact) {

        
        //action="http://localhost/web_components/save.php" method="POST"
        var url = this.action ? new URL(this.action) : new URL("http://localhost/web_components/save.php");
        var method =  this.method ? this.method : "POST";
    
        if (method == "POST") {
            const response = await fetch(url, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                    name_txt: addContact.nombre,
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
            }).then(response => response.json())  // convertir a json
            .then(json => this._submitHandler(json))    //imprimir los datos en la consola
            .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

        } else if (method == "GET") {

            for (let k in addContact) { url.searchParams.append(k, addContact[k]); }
            const response = await fetch(url, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
            }).then(response => response.json())  // convertir a json
            .then(json => this._submitHandler(json))    //imprimir los datos en la consola
            .catch(err => console.log('Solicitud fallida', err));

        }
    }

    _submitHandler(json){
        console.log(json);
        this.shadowRoot.querySelector("#nombre").value = "";
        this.shadowRoot.querySelector("#apellido").value = "";
        this.shadowRoot.querySelector("#apellido_2").value = "";
        this.shadowRoot.querySelector("#gender_id_0").value = "";
        this.shadowRoot.querySelector("#gender_id_1").value = "";
        this.shadowRoot.querySelector("#identification_id").value = "";
        this.shadowRoot.querySelector("#dob_dtm").value = "";
        this.shadowRoot.querySelector("#nationality_id").value = "";
        this.shadowRoot.querySelector("#race_id").value = "";
        this.shadowRoot.querySelector("#language_id").value = "";
        this.shadowRoot.querySelector("#marital_id").value = "";
        this.shadowRoot.querySelector("#phone_nbr").value = "";
        this.shadowRoot.querySelector("#mobile_nbr").value = "";
        this.shadowRoot.querySelector("#email").value = "";
        this.shadowRoot.querySelector("#employee_txt").value = ""
    }

    
    get input() {
        return this.renderRoot?.querySelector('input#name') ?? null;
      }

      connectedCallback() {
        super.connectedCallback()
      
        console.log('connected')
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
                    <label for="nombre" class="col-4 col-form-label">Nombre:</label> 
                    <div class="col-8">
                        <input id="nombre" name="nombre" type="text" class="form-control"  style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="apellido" class="col-4 col-form-label">Primer apellido:</label> 
                    <div class="col-8">
                        <input id="apellido" name="apellido" type="text" class="form-control"  style=${styleMap(inputStyle)}>
                    </div>
                </div>
                <div class="form-group row" style=${styleMap(rowStyle)}>
                    <label for="apellido_2" class="col-4 col-form-label">Segundo apellido:</label>
                    <div class="col-8">
                        <input id="apellido_2" name="apellido_2" type="text" class="form-control"  style=${styleMap(inputStyle)}>
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
                            <input name="gender_id"_submit id="gender_id_1" type="radio" class="custom-control-input" value="M" style=${styleMap(inputStyle)}> 
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
                        <input id="mobile_nbr" name="mobile_nbr" type="text" class="form-control" style=${styleMap(inputStyle)}>
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
                        <button class="btn btn-primary" @click="${this._validate}" style=${styleMap(buttonStyle)}>Guardar</button>
                    </div>
                </div>
            </div>
        `
    }

    updateName() {
        this.nombre = this.input.value;
        this.requestUpdate();

    }
}

customElements.define('contact-form', contactForm);