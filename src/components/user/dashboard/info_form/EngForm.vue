<template>
  <div class="container px-5">
    <div class="row">
      <!--name-->
      <div class="col">
        <label for="name" class="form-label"><strong>Tu nombre</strong></label>
        <div
          id="name_help"
          class="form-text error"
          v-for="error in v$.name.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <input
          type="text"
          class="form-control px-5 py-2"
          id="name"
          aria-describedby="name_help"
          v-model="formData.name"
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
          v-for="error in v$.last_name.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <input
          type="text"
          class="form-control px-5 py-2"
          id="last_name"
          aria-describedby="last_name_help"
          v-model="formData.last_name"
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
            v-for="error in v$.country.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <select
            id="country"
            name="country"
            class="form-control"
            v-model="formData.country"
          >
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">
              British Indian Ocean Territory
            </option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">
              Congo, The Democratic Republic of The
            </option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">
              Falkland Islands (Malvinas)
            </option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">
              French Southern Territories
            </option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">
              Heard Island and Mcdonald Islands
            </option>
            <option value="Holy See (Vatican City State)">
              Holy See (Vatican City State)
            </option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">
              Iran, Islamic Republic of
            </option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">
              Korea, Democratic People's Republic of
            </option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">
              Lao People's Democratic Republic
            </option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">
              Libyan Arab Jamahiriya
            </option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">
              Macedonia, The Former Yugoslav Republic of
            </option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">
              Micronesia, Federated States of
            </option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">
              Northern Mariana Islands
            </option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">
              Palestinian Territory, Occupied
            </option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">
              Saint Pierre and Miquelon
            </option>
            <option value="Saint Vincent and The Grenadines">
              Saint Vincent and The Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">
              South Georgia and The South Sandwich Islands
            </option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">
              Svalbard and Jan Mayen
            </option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">
              Tanzania, United Republic of
            </option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">
              Turks and Caicos Islands
            </option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">
              United States Minor Outlying Islands
            </option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">
              Virgin Islands, British
            </option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
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
            v-for="error in v$.city.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control px-5 py-2"
            id="city"
            aria-describedby="city_help"
            v-model="formData.city"
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
        v-for="error in v$.level.$errors"
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
          v-model="formData.level"
        />
        <label class="form-check-label" for="profesional"> Profesional </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="checkLevel"
          id="technical"
          value="technical"
          v-model="formData.level"
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
          v-model="formData.level"
        />
        <label class="form-check-label" for="technologist"> Tecnológico </label>
      </div>
    </div>
    <br />
    <!--exp_plat-->
    <div>
      <label for="level" class="form-label"
        ><strong
          >Tienes experiencia en implementación y manejo de plataformas y/o
          servicios, selecciona cuales</strong
        ></label
      >
      <div
        id="exp_plat_check_help"
        class="form-text error"
        v-for="error in v$.exp_plat_check.$errors"
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
          v-model="formData.exp_plat_check"
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
          v-model="formData.exp_plat_check"
        />
        <label class="form-check-label" for="no"> No </label>
      </div>
      <div
        v-if="
          formData.exp_plat_check == 'true' || formData.exp_plat_check == true
        "
      >
        <h5>Si tu respuesta anterior fue si, selecciona caul</h5>
        <div
          id="email_help"
          class="form-text error"
          v-for="error in v$.exp_plat.$errors"
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
            v-model="formData.exp_plat.implementation"
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
            v-model="formData.exp_plat.cyber_security"
          />
          <label class="form-check-label" for="cyber_security">
            Ciber seguridad
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="cloud_services"
            value="1"
            v-model="formData.exp_plat.cloud_services"
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
            v-model="formData.exp_plat.infrastructure"
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
            v-model="formData.exp_plat.structured_cabling"
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
            v-model="formData.exp_plat.other"
          />
          <label class="form-check-label" for="other"> Otro, cuales? </label>
        </div>

        <div v-if="formData.exp_plat.other">
          <h6><strong>Escribe cuales son:</strong></h6>
          <div id="email_help" class="form-text error">
            {{ exp_plat_value_error }}
          </div>
          <input
            type="text"
            class="form-control"
            id="exp_plat_value"
            aria-describedby="exp_plat_value_help"
            v-model="exp_plat_value"
          />
        </div>
      </div>
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
          v-model="formData.time_in_imp"
          ref="input_certs"
        />
      </div>
    </div>
    <br />
    <!--certs-->
    <div>
      <label class="form-label"
        ><strong>Tus certificados </strong>(escribe, y luego dale en el botón de
        enviar)</label
      >
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
      <div v-if="formData.certs.length > 0">
        <ul class="certs_list p-3">
          <li v-for="(cert, index) in formData.certs" :key="index" class="px-2">
            {{ index }}. {{ cert.cert }}
          </li>
        </ul>
        <label class="btn btn-dark" @click="clearCerts">Limpiar</label>
      </div>
      <div
        id="certs_help"
        class="form-text error"
        v-for="error in v$.certs.$errors"
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
          v-for="error in v$.exp_in_pro_dir.$errors"
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
            v-model="formData.exp_in_pro_dir"
          />
          <label class="form-check-label" for="exp_in_pro_dir_check">
            Si
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exp_in_pro_dir_check"
            id="exp_in_pro_dir_check1"
            :value="false"
            v-model="formData.exp_in_pro_dir"
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
          v-for="error in v$.exp_in_exec.$errors"
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
            v-model="formData.exp_in_exec"
          />
          <label class="form-check-label" for="exp_in_exec_check"> Si </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exp_in_exec_check"
            id="exp_in_exec_check1"
            :value="false"
            v-model="formData.exp_in_exec"
          />
          <label class="form-check-label" for="exp_in_exec_check1"> No </label>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <!--tel-->
      <div class="col">
        <label for="tel" class="form-label"><strong>Tu teléfono</strong></label>
        <div
          id="tel_help"
          class="form-text error"
          v-for="error in v$.tel.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <input
          type="text"
          class="form-control"
          id="tel"
          aria-describedby="tel_help"
          v-model="formData.tel"
        />
      </div>
      <br />
      <!--email-->
      <div class="col">
        <label for="email" class="form-label"><strong>Tu email</strong></label>
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
          class="form-control"
          id="email"
          aria-describedby="email_help"
          v-model="formData.email"
        />
      </div>
    </div>
    <br />
    <button class="btn btn-dark" @click="submitForm">Enviar</button>
  </div>
</template>

<script setup>
// Stores
import { useModalStore } from "../../../../stores/ui/modal";
import { useAlertStore } from "../../../../stores/ui/alert";

import { useAuthStore } from "../../../../stores/auth";

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
import router from "../../../../router";

// --> State <--
const modalStore = useModalStore();
const alertSotre = useAlertStore();
const authstore = useAuthStore();

const formData = ref({
  name: null,
  last_name: null,
  country: null,
  city: null,
  level: null,
  exp_plat_check: null,
  exp_plat: {
    implementation: null,
    cyber_security: null,
    cloud_services: null,
    infrastructure: null,
    structured_cabling: null,
    other: null,
  },
  time_in_imp: null,
  certs: [],
  exp_in_pro_dir: "",
  exp_in_exec: "",
  tel: "",
  email: "",
});

const exp_plat_value = ref(null);
const exp_plat_value_error = ref(null);

// Cert value, this, will contains the cert input
const cert_value = ref(null);

// Rulse for vuelidate
const rules = {
  name: {
    required: helpers.withMessage("El nombre debe de ser requerido", required),
    minLength: helpers.withMessage(
      "El nombre debe tener al menos 3 carácteres",
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      "El nombre debe de ser menor a 15 carácteres",
      maxLength(15)
    ),
  },
  last_name: {
    required: helpers.withMessage("El apellido es requerido", required),
    minLength: helpers.withMessage(
      "El nombre debe tener al menos 3 carácteres",
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      "El apellido debe de ser menor a 15 carácteres",
      maxLength(15)
    ),
  },
  city: {
    required: helpers.withMessage("La ciudad es requerida", required),
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
    required: helpers.withMessage("El país es requerido", required),
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
    required: helpers.withMessage("El teléfono es requerido", required),
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
    required: helpers.withMessage("Tu nivel es requerido", required),
  },
  exp_plat_check: {
    required: helpers.withMessage(
      "La experiencia en plataformas es requerida",
      required
    ),
  },
  exp_plat: {
    requiredIfTrue: helpers.withMessage(
      "La plataformas es requerida",
      requiredIf(() => {
        return formData.value.exp_plat_check;
      })
    ),
  },

  time_in_imp: {
    required: helpers.withMessage("El tiempo es necesario", required),
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
    required: helpers.withMessage("El email es requerido", required),
  },
  exp_in_pro_dir: {
    required: helpers.withMessage(
      "Experiencia en dirección de proyectos es requerida",
      required
    ),
  },
  exp_in_exec: {
    required: helpers.withMessage(
      "Experiencia en ejecución es requerida",
      required
    ),
  },
};

// v$, required for Vuelidate
const v$ = useVuelidate(rules, formData);

// Cert value error, this, if there's any error
const cert_value_error = ref(null);

const submitForm = async () => {
  let formToSubmit = formData.value;
  // Set modal
  modalStore.setType("wait_offcanvas");

  // Check if everything is alright
  const result = await v$.value.$validate();
  // If everything is alright
  if (formToSubmit.exp_plat.other) {
    if (exp_plat_value.value.length < 3 || exp_plat_value.value.length > 80) {
      exp_plat_value_error.value =
        "El valor debe estar entre 3 y 80 carácteres";
      modalStore.resetModal();
      return;
    } else {
      formToSubmit.exp_plat.other = exp_plat_value.value;
    }
  }
  if (result) {
    if (!formToSubmit.exp_plat_check) {
      formToSubmit.exp_plat_value = null;
      formToSubmit.exp_plat = null;
    }

    // Call postForm
    await postForm();
    // Reset modal
    modalStore.resetModal();
  }
  // Else, reset modal
  modalStore.resetModal();
};

const postForm = async () => {
  let formToSubmit = formData.value;
  await axios
    .post("eng/post-infoform", formToSubmit)
    .then(async (res) => {
      // Set an alert with res.ddta
      alertSotre.setAlert("alert-success", res.data);
      // Refresh authStore's state
      await authstore.refreshSate();
      // Push user to index
      router.push("/");
    })
    .catch((err) => {
      // If there's any error, set an alert with err.response.data
      alertSotre.setAlert("alert-danger", err.response.data);
    });
  modalStore.resetModal();
};

const saveCerts = () => {
  // Check if input has more than 0 and less of 14 characters
  if (
    cert_value.value &&
    cert_value.value.length > 0 &&
    cert_value.value.length < 14
  ) {
    // Push input's content to const certs
    formData.value.certs.push({ cert: cert_value.value });
    // Clear input
    cert_value.value = "";
    // And, set the alert to null
    cert_value_error.value = null;
  } else if (cert_value.value && cert_value.value.length > 14) {
    // If input has more than 14 characteres, set an alert
    cert_value_error.value = "El certificado debe ser menos a 14 digítos*";
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
