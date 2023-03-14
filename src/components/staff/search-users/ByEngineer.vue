<template>
  <div class="border border-danger p-3 container">
    <h4>Ingenieros</h4>
    <va-form tag="form" @submit.prevent="getUsers">
      <div class="row px-3">
        <div class="col-sm-3 col-lg-3">
          <div class="my-3">
            <h6><strong>¿Codigo?</strong></h6>
            <input
              type="number"
              class="form-control"
              id="code"
              v-model.number="formData.id_code"
            />
          </div>

          <div class="my-3">
            <h6><strong>¿Verificó su info?</strong></h6>
            <select class="form-select" v-model="formData.verified_info">
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
          <div class="my-3">
            <h6><strong>¿Verificó su email?</strong></h6>
            <select class="form-select" v-model="formData.verified_email">
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
          <div class="my-3">
            <h6><strong>¿Usuario verificado?</strong></h6>
            <select class="form-select" v-model="formData.user_checked">
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
        </div>

        <div class="col-sm-3 col-lg-3">
          <div class="my-3">
            <h6><strong>Nombre</strong></h6>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="name_help"
              v-model="formData.engineer.name"
            />
          </div>
          <div class="my-3">
            <h6><strong>Email</strong></h6>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="email_help"
              v-model="formData.engineer.email"
            />
          </div>
          <div class="my-3">
            <h6><strong>País</strong></h6>
            <select
              id="country"
              name="country"
              class="form-control"
              v-model="formData.engineer.country"
            >
              <option disable :value="null">Selecciona</option>
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
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
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
          <div class="my-3">
            <h6><strong>Nivel</strong></h6>
            <select class="form-select" v-model="formData.engineer.level">
              <option :value="null">Selecciona</option>
              <option value="profesional">Profesional</option>
              <option value="technical">Técnico</option>
              <option value="technologist">Tecnológico</option>
            </select>
          </div>
        </div>
        <div class="col-sm-3 col-lg-3">
          <div class="my-3">
            <h6><strong>Apellido</strong></h6>
            <input
              type="text"
              class="form-control"
              id="last_name"
              aria-describedby="last_name_help"
              v-model="formData.engineer.last_name"
            />
          </div>
          <div class="my-3">
            <h6><strong>Teléfono</strong></h6>
            <input
              type="number"
              class="form-control"
              id="tel"
              aria-describedby="tel_help"
              v-model="formData.engineer.tel"
            />
          </div>
          <div class="my-3">
            <h6><strong>Ciudad</strong></h6>
            <input
              type="text"
              class="form-control"
              id="city"
              aria-describedby="city_help"
              v-model="formData.engineer.city"
            />
          </div>
          <div class="my-3">
            <h6><strong>Certificados</strong></h6>
            <input
              class="form-control"
              type="text"
              id="certs"
              v-model="formData.engineer.certs"
              ref="certs"
            />
          </div>
        </div>
        <div class="col-sm-3 col-lg-3">
          <div class="my-3">
            <h6><strong>Tiempo en imp. de sol.</strong></h6>
            <input
              class="form-control"
              type="number"
              id="time_in_imp"
              v-model="formData.engineer.time_in_imp"
              ref="time_in_imp"
            />
          </div>
          <div class="my-3">
            <h6><strong>Exp. en ejec. de pro.</strong></h6>
            <select class="form-select" v-model="formData.engineer.exp_in_exec">
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
          <div class="my-3">
            <h6><strong>Exp. en dir. de pro.</strong></h6>
            <select
              class="form-select"
              v-model="formData.engineer.exp_in_pro_dir"
            >
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
          <div class="my-3">
            <h6>
              <strong>Exp en imp. y man. de plat.</strong>
            </h6>
            <select
              class="form-select"
              v-model="formData.engineer.exp_plat_check"
            >
              <option :value="null">Selecciona</option>
              <option :value="true">Tiene</option>
              <option :value="false">No tiene</option>
            </select>
          </div>
          <template v-if="formData.engineer.exp_plat_check"
            ><div class="my-3">
              <h6>
                <strong>Selecciona cual</strong>
              </h6>
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="implementación"
                    value="1"
                    v-model="formData.engineer.exp_plat.implementation"
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
                    v-model="formData.engineer.exp_plat.cyber_security"
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
                    v-model="formData.engineer.exp_plat.cloud_services"
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
                    v-model="formData.engineer.exp_plat.infrastructure"
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
                    v-model="formData.engineer.exp_plat.structured_cabling"
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
                    v-model="formData.engineer.exp_plat.other"
                  />
                  <label class="form-check-label" for="other">
                    Otro, cuales?
                  </label>
                </div>
              </div>
            </div>
          </template>
          <template
            v-if="
              formData.engineer.exp_plat.other &&
              formData.engineer.exp_plat_check
            "
            ><div class="my-3">
              <h6><strong>Escribe cuales son:</strong></h6>
              <input
                type="text"
                class="form-control"
                id="city"
                aria-describedby="city_help"
                v-model="exp_plat_value"
              />
            </div>
          </template>
        </div>
      </div>
      <button type="submit" class="btn m-1 bg-dark border-0 text-light">
        Buscar
      </button>
      <template v-if="users">
        <button
          class="btn m-1 bg-dark border-0 text-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Ver usuarios
        </button>
      </template>
    </va-form>
  </div>
  <template v-if="users"
    ><div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <template v-if="Object.keys(paginateOptions).length > 0"> </template>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Ingenieros</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <nav aria-label="navigation" class="m-auto mt-3">
        <ul class="pagination">
          <li
            class="page-item"
            @click="changePage(paginateOptions.prevPage)"
            v-if="paginateOptions.hasPrevPage"
          >
            <a class="page-link text-dark"
              ><va-icon name="chevron_left" size="small" /> Previo
            </a>
          </li>
          <li class="page-item" v-if="paginateOptions.page">
            <a class="page-link text-dark">{{ paginateOptions.page }}</a>
          </li>
          <li
            class="page-item"
            @click="changePage(paginateOptions.nextPage)"
            v-if="paginateOptions.hasNextPage"
          >
            <a class="page-link text-dark"
              >Siguiente <va-icon name="chevron_right" size="small"
            /></a>
          </li>
        </ul>
      </nav>
      <div class="offcanvas-body">
        <div v-for="(item, index) in users" :key="index" id="users">
          <div class="container bg-light border border-danger mb-3">
            <div class="row p-3">
              <div class="col">
                <h5>Cuenta</h5>
                <ul class="list-group">
                  <li class="list-group-item">Email: {{ item.email }}</li>
                  <li class="list-group-item">Tipo: {{ item.type }}</li>
                  <li class="list-group-item">
                    Verificó su email: {{ item.verified_email }}
                  </li>
                  <li class="list-group-item">
                    Verificó su info: {{ item.verified_info }}
                  </li>
                  <li class="list-group-item">
                    Usuario verificado: {{ item.user_checked }}
                  </li>
                  <li class="list-group-item">Código: {{ item.id_code }}</li>
                </ul>
              </div>
              <div class="col my-3" v-if="item.verified_info">
                <h5>Información</h5>
                <ul class="list-group">
                  <li class="list-group-item">Nombre: {{ item.info.name }}</li>
                  <li class="list-group-item">
                    Apellido: {{ item.info.last_name }}
                  </li>
                  <li class="list-group-item">País: {{ item.info.country }}</li>
                  <li class="list-group-item">Ciudad: {{ item.info.city }}</li>
                  <li class="list-group-item">Nivel: {{ item.info.level }}</li>
                  <li class="list-group-item">
                    Experiencia en direción de proyectos:
                    {{ item.info.exp_in_pro_dir }}
                  </li>
                  <li class="list-group-item">
                    Experiencia en ejecución: {{ item.info.exp_in_exec }}
                  </li>
                  <li class="list-group-item">
                    Experiencia:
                    <va-infinite-scroll :load="() => {}">
                      {{ item.info?.exp }}
                    </va-infinite-scroll>
                  </li>
                  <template v-if="item.info.certs?.length > 0">
                    <li class="list-group-item">
                      Certificados:
                      <va-infinite-scroll :load="() => {}">
                        <div
                          v-for="(item, index) in item.info.certs"
                          :key="index"
                        >
                          <strong>Cert</strong>: {{ item.cert }}
                        </div>
                      </va-infinite-scroll>
                    </li>
                  </template>
                  <li class="list-group-item">Teléfono: {{ item.info.tel }}</li>
                  <li class="list-group-item">Email: {{ item.info.email }}</li>
                </ul>
              </div>
            </div>
            <template v-if="item.user_checked">
              <button
                type="submit"
                class="btn btn-dark mb-3"
                @:click="
                  item.type == 'engineer'
                    ? staffStore.setEng(item)
                    : item.type == 'partner'
                    ? staffStore.setPart(item)
                    : null
                "
              >
                Crear ticket
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useAlertStore } from "../../../stores/ui/alert";
import { useModalStore } from "../../../stores/ui/modal";
import { useStaffStore } from "../../../stores/staff";

// State
const staffStore = useStaffStore();
const modalStore = useModalStore();
const alertStore = useAlertStore();
const users = ref(null);
const paginateOptions = ref({});

const formData = ref({
  id_code: null,
  verified_email: null,
  verified_info: null,
  user_checked: null,
  engineer: {
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
    certs: null,
    exp_in_pro_dir: null,
    exp_in_exec: null,
    tel: null,
    email: null,
  },
});

const exp_plat_value = ref(null);

let url = "/staff/get-users?type=engineer&";

const getUsers = async () => {
  // Set off canvas
  modalStore.setType("wait_offcanvas");
  url = "/staff/get-users?type=engineer&";
  if (typeof formData.value.verified_email === "boolean") {
    url = url + `verified_email=${formData.value.verified_email}&`;
  }

  if (typeof formData.value.verified_info === "boolean") {
    url = url + `verified_info=${formData.value.verified_info}&`;
  }

  if (typeof formData.value.user_checked === "boolean") {
    url = url + `user_checked=${formData.value.user_checked}&`;
  }

  if (typeof formData.value.id_code === "number") {
    url = url + `id_code=${formData.value.id_code}&`;
  }

  for (const i in formData.value.engineer) {
    if (formData.value.engineer[i] != null && i != "exp_plat") {
      url = url + `info.${i}=${formData.value.engineer[i]}&`;
    }
  }

  await axios
    .get(url)
    .then((res) => {
      // If data docs exists and, has users
      if (res.data.docs && res.data.docs.length > 0) {
        for (const i in res.data) {
          if (i == "docs") {
            users.value = res.data.docs;
          } else paginateOptions.value[i] = res.data[i];
        }
      } else alertStore.setAlert("alert-danger", ["No hay usuarios"]); // Else, set an alert
    })
    .catch((err) => {
      // If there's any error, set an alert
      alertStore.setAlert("alert-danger", err.response.data);
    });
  // Reset modal
  modalStore.resetModal();
};

// If res has more pages, this functions is called
const changePage = async (page) => {
  // Set off canvas
  modalStore.setType("wait_offcanvas");
  // Call the url, and put it the page that the user wants to go
  const res = await axios.get(url + `page=${page}`).catch((err) => {
    modalStore.resetModal();
    // If there's any error
    if (err.response.data) {
      // If there's an error_msg, set it as an alert
      alertStore.setAlert("alert-danger", err.response.data);
    } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
  });
  // Reset modal
  modalStore.resetModal();
  // If there's users found, set paginateOptios, and set users found in users const
  if (res.data.docs.length > 0) {
    for (const i in res.data) {
      if (i == "docs") {
        users.value = res.data.docs;
      } else paginateOptions.value[i] = res.data[i];
    }
  } else {
    // Else, show an alert
    alertStore.setAlert("alert-danger", ["No hay usuarios"]);
  }
};
</script>

<style scoped>
.page-item:hover {
  cursor: pointer;
}
</style>
