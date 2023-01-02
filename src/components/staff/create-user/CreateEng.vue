<template>
  <div class="container px-5">
    <label for="fillForm" class="btn" @click="fillForm = !fillForm">{{
      fillForm ? "Rellenando formulario" : "¿Desea rellenar el formulario?"
    }}</label
    ><br />

    <div class="row mb-3">
      <div class="col">
        <label for="eng_email" class="form-label"
          ><strong>Correo</strong></label
        >
        <div
          id="email_help"
          class="form-text error"
          v-for="error in v$.email.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <input
          type="text"
          class="form-control px-5 py-2"
          id="eng_email"
          aria-describedby="email_help"
          v-model="formData.email"
        />
      </div>
      <div class="col">
        <label for="name" class="form-label"><strong>Contraseña</strong></label>
        <div
          id="password_help"
          class="form-text error"
          v-for="error in v$.password.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <input
          type="password"
          class="form-control px-5 py-2"
          id="password"
          aria-describedby="password_help"
          v-model="formData.password"
        />
      </div>
    </div>
    <template v-if="fillForm">
      <!--certs-->
      <div>
        <div
          id="certs_help"
          class="form-text error"
          v-for="error in v$.info.certs.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <br />
        <div class="form-text error" id="cert_help_error">
          {{ cert_value_error }}
        </div>
      </div>
      <!--exp-->
      <div class="row">
        <div
          id="level_help"
          class="form-text error"
          v-for="error in v$.info.exp.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <div class="col">
          <label for="floatingTextarea" class="form-label col"
            ><strong
              >Cuéntanos tu sobre tu última experiencia laboral</strong
            ></label
          >
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              maxlength="3000"
              v-model="formData.info.exp"
            ></textarea>
            <label for="floatingTextarea">Tu experiencia</label>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <!--exp_in_pro_dir-->
        <div class="col">
          <label for="exp_in_pro_dir" class="form-label"
            ><strong
              >¿Tienes experiencia en dirección de proyectos?</strong
            ></label
          >
          <div
            id="exp_in_pro_dir_help"
            class="form-text error"
            v-for="error in v$.info.exp_in_pro_dir.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_pro_dir_check"
              id="exp_in_pro_dir_check"
              :value="true"
              v-model="formData.info.exp_in_pro_dir"
            />
            <label class="form-check-label" for="exp_in_pro_dir_check">
              Sí
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_pro_dir_check"
              id="exp_in_pro_dir_check1"
              :value="false"
              v-model="formData.info.exp_in_pro_dir"
            />
            <label class="form-check-label" for="exp_in_pro_dir_check1">
              No
            </label>
          </div>
        </div>
        <br />
        <!--exp_in_exec-->
        <div class="col">
          <label for="exp_in_exec" class="form-label"
            ><strong
              >¿Tienes experiencia en ejecución de proyectos?</strong
            ></label
          >
          <div
            id="exp_in_exec_help"
            class="form-text error"
            v-for="error in v$.info.exp_in_exec.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_exec_check"
              id="exp_in_exec_check"
              :value="true"
              v-model="formData.info.exp_in_exec"
            />
            <label class="form-check-label" for="exp_in_exec_check"> Sí </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_exec_check"
              id="exp_in_exec_check1"
              :value="false"
              v-model="formData.info.exp_in_exec"
            />
            <label class="form-check-label" for="exp_in_exec_check1">
              No
            </label>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <!--tel-->
        <div class="col">
          <label for="tel" class="form-label"
            ><strong>Tu teléfono</strong></label
          >
          <div
            id="tel_help"
            class="form-text error"
            v-for="error in v$.info.tel.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="number"
            class="form-control"
            id="tel"
            aria-describedby="tel_help"
            v-model="formData.info.tel"
          />
        </div>
        <br />
        <!--email-->
        <div class="col">
          <label for="email" class="form-label"
            ><strong>Tu email</strong></label
          >
          <div
            id="email_help"
            class="form-text error"
            v-for="error in v$.info.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="email_help"
            v-model="formData.info.email"
          />
        </div>
      </div>

      <div class="row">
        <!--name-->
        <div class="col">
          <label for="name" class="form-label"
            ><strong>Tu nombre</strong></label
          >
          <div
            id="name_help"
            class="form-text error"
            v-for="error in v$.info.name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control px-5 py-2"
            id="name"
            aria-describedby="name_help"
            v-model="formData.info.name"
          />
        </div>
        <br />
        <!--last_name-->
        <div class="col">
          <label for="last_name" class="form-label"
            ><strong>Tu apellido</strong></label
          >
          <div
            id="last_name_help"
            class="form-text error"
            v-for="error in v$.info.last_name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control px-5 py-2"
            id="last_name"
            aria-describedby="last_name_help"
            v-model="formData.info.last_name"
          />
        </div>
      </div>
      <br />
      <div>
        <div class="row">
          <!--country-->
          <div class="col">
            <label for="country" class="form-label"
              ><strong>Tu país</strong></label
            >
            <div
              id="country_help"
              class="form-text error"
              v-for="error in v$.info.country.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </div>
            <select
              id="country"
              name="country"
              class="form-control"
              v-model="formData.info.country"
            >
              <option value="Afghanistan">Afganistán</option>
              <option value="Aland Islands">Islas Aland</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Argelia</option>
              <option value="American Samoa">Samoa Americana</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguila</option>
              <option value="Antarctica">Antártida</option>
              <option value="Antigua and Barbuda">Antigua y Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaiyán</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahréin</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Bielorrusia</option>
              <option value="Belgium">Bélgica</option>
              <option value="Belize">Belice</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">islas Bermudas</option>
              <option value="Bhutan">Bután</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire, Sint Eustatius and Saba">
                Bonaire, Sint Eustatius y Saba
              </option>
              <option value="Bosnia and Herzegovina">
                Bosnia y Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Isla Bouvet</option>
              <option value="Brazil">Brasil</option>
              <option value="British Indian Ocean Territory">
                Territorio Británico del Océano Índico
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Camboya</option>
              <option value="Cameroon">Camerún</option>
              <option value="Canada">Canadá</option>
              <option value="Cape Verde">Cabo Verde</option>
              <option value="Cayman Islands">Islas Caimán</option>
              <option value="Central African Republic">
                República Centroafricana
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">porcelana</option>
              <option value="Christmas Island">Isla de Navidad</option>
              <option value="Cocos (Keeling) Islands">
                Islas Cocos (Keeling)
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoras</option>
              <option value="Congo">Congo</option>
              <option value="Congo, Democratic Republic of the Congo">
                Congo, República Democrática del Congo
              </option>
              <option value="Cook Islands">Islas Cook</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'Ivoire">Costa de Marfil</option>
              <option value="Croatia">Croacia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curacao">Curazao</option>
              <option value="Cyprus">Chipre</option>
              <option value="Czech Republic">Republica checa</option>
              <option value="Denmark">Dinamarca</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">República Dominicana</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egipto</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Guinea Ecuatorial</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Etiopía</option>
              <option value="Falkland Islands (Malvinas)">
                Islas Falkland (Malvinas)
              </option>
              <option value="Faroe Islands">Islas Faroe</option>
              <option value="Fiji">Fiyi</option>
              <option value="Finland">Finlandia</option>
              <option value="France">Francia</option>
              <option value="French Guiana">Guayana Francesa</option>
              <option value="French Polynesia">Polinesia francés</option>
              <option value="French Southern Territories">
                Territorios Franceses del Sur
              </option>
              <option value="Gabon">Gabón</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Alemania</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Grecia</option>
              <option value="Greenland">Groenlandia</option>
              <option value="Grenada">Granada</option>
              <option value="Guadeloupe">Guadalupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guayana</option>
              <option value="Haiti">Haití</option>
              <option value="Heard Island and Mcdonald Islands">
                Islas Heard y McDonald
              </option>
              <option value="Holy See (Vatican City State)">
                Santa Sede (Estado de la Ciudad del Vaticano)
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungría</option>
              <option value="Iceland">Islandia</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Irán (República Islámica de
              </option>
              <option value="Iraq">Irak</option>
              <option value="Ireland">Irlanda</option>
              <option value="Isle of Man">Isla del hombre</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italia</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japón</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordán</option>
              <option value="Kazakhstan">Kazajstán</option>
              <option value="Kenya">Kenia</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                República de Corea, Popular Democrática de
              </option>
              <option value="Korea, Republic of">Corea, república de</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kirguistán</option>
              <option value="Lao People's Democratic Republic">
                República Democrática Popular Lao
              </option>
              <option value="Latvia">Letonia</option>
              <option value="Lebanon">Líbano</option>
              <option value="Lesotho">Lesoto</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Jamahiriya Arabe Libia
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lituania</option>
              <option value="Luxembourg">Luxemburgo</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, the Former Yugoslav Republic of">
                Macedonia, la ex República Yugoslava de
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malasia</option>
              <option value="Maldives">Maldivas</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Islas Marshall</option>
              <option value="Martinique">Martinica</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauricio</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">México</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Estados Federados de
              </option>
              <option value="Moldova, Republic of">
                Moldavia, República de
              </option>
              <option value="Monaco">Mónaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Marruecos</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Países Bajos</option>
              <option value="Netherlands Antilles">Antillas Holandesas</option>
              <option value="New Caledonia">Nueva Caledonia</option>
              <option value="New Zealand">Nueva Zelanda</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Níger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Isla Norfolk</option>
              <option value="Northern Mariana Islands">
                Islas Marianas del Norte
              </option>
              <option value="Norway">Noruega</option>
              <option value="Oman">Omán</option>
              <option value="Pakistan">Pakistán</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">
                Territorio Palestino, Ocupado
              </option>
              <option value="Panama">Panamá</option>
              <option value="Papua New Guinea">Papúa Nueva Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Perú</option>
              <option value="Philippines">Filipinas</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Polonia</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Katar</option>
              <option value="Reunion">Reunión</option>
              <option value="Romania">Rumania</option>
              <option value="Russian Federation">Federación Rusa</option>
              <option value="Rwanda">Ruanda</option>
              <option value="Saint Barthelemy">San Bartolomé</option>
              <option value="Saint Helena">Santa elena</option>
              <option value="Saint Kitts and Nevis">Saint Kitts y Nevis</option>
              <option value="Saint Lucia">Santa Lucía</option>
              <option value="Saint Martin">San Martín</option>
              <option value="Saint Pierre and Miquelon">
                San Pedro y Miquelón
              </option>
              <option value="Saint Vincent and the Grenadines">
                San Vicente y las Granadinas
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Santo Tomé y Príncipe
              </option>
              <option value="Saudi Arabia">Arabia Saudita</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Serbia and Montenegro">Serbia y Montenegro</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leona</option>
              <option value="Singapore">Singapur</option>
              <option value="Sint Maarten">San Martín</option>
              <option value="Slovakia">Eslovaquia</option>
              <option value="Slovenia">Eslovenia</option>
              <option value="Solomon Islands">Islas Salomón</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">Sudáfrica</option>
              <option value="South Georgia and the South Sandwich Islands">
                Georgia del sur y las islas Sandwich del sur
              </option>
              <option value="South Sudan">Sudán del Sur</option>
              <option value="Spain">España</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudán</option>
              <option value="Suriname">Surinam</option>
              <option value="Svalbard and Jan Mayen">
                Svalbard y Jan Mayen
              </option>
              <option value="Swaziland">Swazilandia</option>
              <option value="Sweden">Suecia</option>
              <option value="Switzerland">Suiza</option>
              <option value="Syrian Arab Republic">
                República Árabe Siria
              </option>
              <option value="Taiwan, Province of China">
                Taiwan, provincia de China
              </option>
              <option value="Tajikistan">Tayikistán</option>
              <option value="Tanzania, United Republic of">
                Tanzania, República Unida de
              </option>
              <option value="Thailand">Tailandia</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Para llevar</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad y Tobago</option>
              <option value="Tunisia">Túnez</option>
              <option value="Turkey">pavo</option>
              <option value="Turkmenistan">Turkmenistán</option>
              <option value="Turks and Caicos Islands">
                Islas Turcas y Caicos
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ucrania</option>
              <option value="United Arab Emirates">
                Emiratos Árabes Unidos
              </option>
              <option value="United Kingdom">Reino Unido</option>
              <option value="United States">Estados Unidos</option>
              <option value="United States Minor Outlying Islands">
                Islas menores alejadas de los Estados Unidos
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Vietnam</option>
              <option value="Virgin Islands, British">
                Islas Vírgenes Británicas
              </option>
              <option value="Virgin Islands, U.s.">
                Islas Vírgenes, EE. UU.
              </option>
              <option value="Wallis and Futuna">Wallis y Futuna</option>
              <option value="Western Sahara">Sahara Occidental</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabue</option>
            </select>
          </div>
          <br />
          <!--city-->
          <div class="col">
            <label for="city" class="form-label"
              ><strong>Tu ciudad</strong></label
            >
            <div
              id="city_help"
              class="form-text error"
              v-for="error in v$.info.city.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </div>
            <input
              type="text"
              class="form-control px-5 py-2"
              id="city"
              aria-describedby="city_help"
              v-model="formData.info.city"
            />
          </div>
        </div>
      </div>
      <br />
      <!--level-->
      <div>
        <label for="level" class="form-label"><strong>Tu nivel</strong></label>
        <div
          id="level_help"
          class="form-text error"
          v-for="error in v$.info.level.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="checkLevel"
            id="profesional"
            value="profesional"
            v-model="formData.info.level"
          />
          <label class="form-check-label" for="profesional">
            Profesional
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="checkLevel"
            id="technical"
            value="technical"
            v-model="formData.info.level"
          />
          <label class="form-check-label" for="technical"> Técnico </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="checkLevel"
            id="technologist"
            value="technologist"
            v-model="formData.info.level"
          />
          <label class="form-check-label" for="technologist">
            Tecnológico
          </label>
        </div>
      </div>
      <br />
      <!--exp_plat-->
      <div>
        <label for="level" class="form-label"
          ><strong
            >Tienes experiencia en implementación y manejo de plataformas y/o
            servicios, selecciona cuáles</strong
          ></label
        >
        <div
          id="exp_plat_check_help"
          class="form-text error"
          v-for="error in v$.info.exp_plat_check.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="platCheck"
            id="yes"
            :value="true"
            v-model="formData.info.exp_plat_check"
          />
          <label class="form-check-label" for="yes"> Si </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="platCheck"
            id="no"
            :value="false"
            v-model="formData.info.exp_plat_check"
          />
          <label class="form-check-label" for="no"> No </label>
        </div>
        <template
          v-if="
            formData.info.exp_plat_check == 'true' ||
            formData.info.exp_plat_check == true
          "
        >
          <div>
            <h5>Si tu respuesta anterior fue sí, selecciona cual</h5>
            <div
              id="email_help"
              class="form-text error"
              v-for="error in v$.info.exp_plat.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="implementación"
                value="1"
                v-model="formData.info.exp_plat.implementation"
              />
              <label class="form-check-label" for="implementación">
                Implementación
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="cyber_security"
                value="1"
                v-model="formData.info.exp_plat.cyber_security"
              />
              <label class="form-check-label" for="cyber_security">
                Ciberseguridad
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="cloud_services"
                value="1"
                v-model="formData.info.exp_plat.cloud_services"
              />
              <label class="form-check-label" for="cloud_services">
                Cloud Services
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="infrastructure"
                value="1"
                v-model="formData.info.exp_plat.infrastructure"
              />
              <label class="form-check-label" for="infrastructure">
                Infraestructura
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="structured_cabling"
                value="1"
                v-model="formData.info.exp_plat.structured_cabling"
              />
              <label class="form-check-label" for="structured_cabling">
                Cableado Estructurado
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="other"
                value="1"
                v-model="formData.info.exp_plat.other"
              />
              <label class="form-check-label" for="other">
                Otro, ¿cuáles?
              </label>
            </div>
            <template v-if="formData.info.exp_plat.other">
              <div>
                <h6><strong>Escribe cuáles son:</strong></h6>
                <div id="email_help" class="form-text error">
                  {{ exp_plat_value_error }}
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exp_plat_value"
                  aria-describedby="exp_plat_value_help"
                  maxlength="80"
                  v-model="exp_plat_value"
                /></div
            ></template>
          </div>
        </template>
      </div>
      <br />
      <div class="row">
        <label for="input_certs" class="form-label col"
          ><strong
            >Cuanto tiempo (en años) de experiencia tienes en implementación de
            soluciones de tecnología:</strong
          ></label
        >

        <div class="col">
          <input
            class="form-control px-5 py-2"
            type="number"
            id="input_certs"
            v-model="formData.info.time_in_imp"
            ref="input_certs"
          />
        </div>
      </div>
      <br />
      <!--certs-->
      <div>
        <label class="form-label"
          ><strong
            >¿Qué plataformas y/o servicios tienes experiencia o haz
            manejado?</strong
          >(escribe, y luego dale click en el botón de enviar)
        </label>
        <div class="row">
          <div class="col p-2 my-3">
            <label for="input_certs" class="form-label"
              ><strong>Escribe tus certificaciones:</strong></label
            >
          </div>
          <div class="col">
            <input
              class="form-control px-5 py-2 my-3"
              type="text"
              id="input_certs"
              v-model="cert_value"
              ref="input_certs"
            />
          </div>
          <div class="col">
            <label
              class="btn btn-dark m-3 px-5"
              lass="form-label"
              @click="saveCerts"
              >Guardar</label
            >
          </div>
        </div>
        <template v-if="formData.info.certs.length > 0"
          ><div>
            <ul class="certs_list p-3">
              <li
                v-for="(cert, index) in formData.info.certs"
                :key="index"
                class="px-2"
              >
                {{ index }}. {{ cert.cert }}
              </li>
            </ul>
            <label class="btn btn-dark" @click="clearCerts">Limpiar</label>
          </div>
        </template>

        <div
          id="certs_help"
          class="form-text error"
          v-for="error in v$.info.certs.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <br />
        <div class="form-text error" id="cert_help_error">
          {{ cert_value_error }}
        </div>
      </div>

      <br />
    </template>
    <br />
    <va-collapse
      v-model="value[0]"
      header="Por favor, leé lo siguiente"
      solid
      color="#212121"
      color-all
      text-color="backgroundPrimary"
      icon="info"
      class="mb-4"
    >
      <div class="container p-3">
        <p>
          Bajo la gravedad de juramento declaro que este informe ha sido
          examinado por mí y que todos los datos son exactos. Consiento y
          autorizo de manera previa, expresa e inequívoca que mis datos
          personales sean tratados conforme a lo previsto en la Ley 1581 de
          2012, Protección de Datos Personales, según lo anuncia el presente
          documento; y que conozco (he leído) el aviso de privacidad, incluido
          al final de este formato.
          <a
            href="https://gen3sis.net/politicas-g3"
            target="_blank"
            rel="noopener noreferrer"
            >Link</a
          >
        </p>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              <input
                type="checkbox"
                class="form-check-input"
                id="needCheckThis"
                v-model="checkbox"
              />
              <label class="form-check-label mx-2" for="needCheckThis">
                Acepto
              </label>
            </div>
          </div>
        </div>
        <template v-if="checkbox">
          <button class="btn btn-dark mt-3" @click="submitForm">Enviar</button>
        </template>
      </div>
    </va-collapse>
  </div>
</template>

<script setup>
// Stores
import { useModalStore } from "../../../stores/ui/modal";
import { useAlertStore } from "../../../stores/ui/alert";

// Ref, from vue
import { ref } from "vue";

// Vuelidate and stuff
import useVuelidate from "@vuelidate/core";

import {
  required,
  requiredIf,
  helpers,
  minLength,
  maxLength,
  email,
} from "@vuelidate/validators";

import axios from "axios";

// --> State <--
const modalStore = useModalStore();
const alertSotre = useAlertStore();

const checkbox = ref(null);

const value = ref([false]);

const fillForm = ref(false);

const formData = ref({
  email: null,
  password: null,
  info: {
    name: null,
    last_name: null,
    country: null,
    city: null,
    level: null,
    exp_plat_check: null,
    exp_plat: {
      implementation: false,
      cyber_security: false,
      cloud_services: false,
      infrastructure: false,
      structured_cabling: false,
      other: false,
    },
    time_in_imp: null,
    certs: [],
    exp: null,
    exp_in_pro_dir: null,
    exp_in_exec: null,
    tel: null,
    email: null,
  },
});

const exp_plat_value = ref(null);
const exp_plat_value_error = ref(null);

// Cert value, this, will contains the cert input
const cert_value = ref(null);

// Rulse for vuelidate
const rules = {
  email: {
    requiredIf: helpers.withMessage("El email es requerido", required),
    email: helpers.withMessage("El email debe ser válido", email),
  },
  password: {
    requiredIf: helpers.withMessage("La contraseña es requerida", required),
    minLength: helpers.withMessage(
      "La contraseña debe contenerl un minimo de 8 caractres",
      minLength(8)
    ),
    maxLength: helpers.withMessage(
      "La contraseña debe contener menos de 100 caracteres",
      maxLength(100)
    ),
  },
  info: {
    name: {
      requiredIf: helpers.withMessage(
        "El nombre debe de ser requerido",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
      minLength: helpers.withMessage(
        "El nombre debe tener al menos 3 carácteres",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "El nombre debe de ser menor a 80 carácteres",
        maxLength(80)
      ),
    },
    last_name: {
      requiredIf: helpers.withMessage(
        "El apellido es requerido",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
      minLength: helpers.withMessage(
        "El nombre debe tener al menos 3 carácteres",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "El apellido debe de ser menor a 80 carácteres",
        maxLength(80)
      ),
    },
    city: {
      requiredIf: helpers.withMessage(
        "La ciudad es requerida",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
      minLength: helpers.withMessage(
        "La ciudad debe contener al menos 3 carácteres",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "La ciudad debe de ser menor a 80 carácteres",
        maxLength(80)
      ),
    },
    country: {
      requiredIf: helpers.withMessage(
        "El país es requerido",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
      minLength: helpers.withMessage(
        "El país debe contener al menos 3 carácteres",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "La ciudad debe de ser menor a 40 carácteres",
        maxLength(40)
      ),
    },
    tel: {
      requiredIf: helpers.withMessage(
        "El teléfono es requerido",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
      minLength: helpers.withMessage(
        "El teléfono debe contener al menos 10 carácteres",
        minLength(10)
      ),
      maxLength: helpers.withMessage(
        "El teléfono debe de ser menor a 12 carácteres",
        maxLength(12)
      ),
    },
    level: {
      requiredIf: helpers.withMessage(
        "Tu nivel es requerido",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
    },
    exp: {
      requiredIf: helpers.withMessage(
        "Tu experiencia es requerido",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
      minLength: helpers.withMessage(
        "Tu experiencia debe tener al menos 20 carácteres",
        minLength(20)
      ),
      maxLength: helpers.withMessage(
        "Tu experiencia debe tener menos de 3000 carácteres",
        maxLength(3000)
      ),
    },

    exp_plat_check: {
      requiredIf: helpers.withMessage(
        "La experiencia en plataformas es requerida",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
    },
    exp_plat: {
      requiredIf: helpers.withMessage(
        "La plataformas es requerida",
        requiredIf(() => {
          return formData.value.exp_plat_check;
        })
      ),
    },

    time_in_imp: {
      requiredIf: helpers.withMessage(
        "El tiempo es necesario",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
      maxLength: helpers.withMessage(
        "Los años deben ser menor a 80",
        maxLength(80)
      ),
    },
    certs: {
      maxLength: helpers.withMessage(
        "Los certificados deben de ser menor a 14 carácteres",
        maxLength(14)
      ),
    },
    email: {
      email: helpers.withMessage("El email debe ser válido", email),
      requiredIf: helpers.withMessage(
        "El email es requerido",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
    },
    exp_in_pro_dir: {
      requiredIf: helpers.withMessage(
        "Experiencia en dirección de proyectos es requerida",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
    },
    exp_in_exec: {
      requiredIf: helpers.withMessage(
        "Experiencia en ejecución es requerida",
        requiredIf(() => {
          return fillForm.value;
        })
      ),
    },
  },
};

// v$, required for Vuelidate
const v$ = useVuelidate(rules, formData);

// Cert value error, this, if there's any error
const cert_value_error = ref(null);

const submitForm = async () => {
  // Set modal
  modalStore.setType("wait_offcanvas");

  // Check if everything is alright
  const result = await v$.value.$validate();
  // If everything is alright
  if (formData.value.info.exp_plat.other) {
    if (exp_plat_value.value.length < 3 || exp_plat_value.value.length > 80) {
      exp_plat_value_error.value =
        "El valor debe estar entre 3 y 80 carácteres";
      modalStore.resetModal();
      return;
    } else {
      formData.value.info.exp_plat.other = exp_plat_value.value;
    }
  }
  if (result) {
    // Call postForm
    await postForm();
    // Reset modal
    modalStore.resetModal();
  }
  // Else, reset modal
  modalStore.resetModal();
};

const postForm = async () => {
  const formToSubmit = {};
  for (const i in formData.value) {
    formToSubmit[i] = formData.value[i];
  }
  if (!formToSubmit.info.exp_plat_check) {
    delete formToSubmit.info.exp_plat;
  }

  if (!fillForm.value) delete formToSubmit.info;

  await axios
    .post("staff/create-new-eng", formToSubmit)
    .then(async (res) => {
      // Set an alert, with res.data
      alertSotre.setAlert(
        "alert-success",
        Array.isArray(res.data) ? res.data : [res.data]
      );
    })
    .catch((err) => {
      alertSotre.setAlert(
        "alert-danger",
        Array.isArray(err.response.data)
          ? err.response.data
          : [err.response.data]
      );
    });
  modalStore.resetModal();
};

const saveCerts = () => {
  // Check if input has more than 0 and less of 14 characters
  if (
    cert_value.value &&
    cert_value.value.length > 0 &&
    cert_value.value.length < 80
  ) {
    // Push input's content to const certs
    formData.value.info.certs.push({ cert: cert_value.value });
    // Clear input
    cert_value.value = "";
    // And, set the alert to null
    cert_value_error.value = null;
  } else if (cert_value.value && cert_value.value.length > 80) {
    // If input has more than 14 characteres, set an alert
    cert_value_error.value = "El certificado debe ser menos a 80 digítos*";
  }
};
const clearCerts = () => {
  // Clear certs const
  formData.value.certs = [];
  // Clear value cons
  cert_value.value = "";
};
</script>

<style scoped>
.form-text {
  color: #ab0202;
}

ul.certs_list li {
  display: inline !important;
}
</style>
