<template>
  <div class="container px-lg-5 my-5">
    <form v-on:submit.prevent id="form">
      <h4>Información de cuenta</h4>
      <div class="row">
        <!--Activity-->
        <div class="col mb-3">
          <div
            id="tel_help"
            class="form-text error"
            v-for="error in v$.account.activity.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="formData.account.activity"
          >
            <option :value="null" selected>Selcciona tu actividad</option>
            <option
              selected
              v-for="(item, index) in activity"
              :key="index"
              :value="item"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <!--r_social-->
        <div class="col">
          <label for="r_social" class="form-label"
            ><strong>Razón social</strong></label
          >
          <div
            id="r_social_help"
            class="form-text error"
            v-for="error in v$.account.r_social.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="r_social"
            aria-describedby="r_social_help"
            v-model="formData.account.r_social"
          />
        </div>
        <br />
        <!--nit-->
        <div class="col">
          <label for="nit" class="form-label"><strong>Tu NIT</strong></label>
          <div
            id="nit_help"
            class="form-text error"
            v-for="error in v$.account.nit.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="number"
            class="form-control"
            id="nit"
            aria-describedby="nit_help"
            v-model="formData.account.nit"
          />
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
            v-for="error in v$.account.tel.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <div id="tel_help" class="form-text error">
            {{ countryCodeError }}
          </div>
          <div class="row tel-input">
            <div class="col-3 p-0">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="countryCode"
              >
                <option value="0">Codigo país</option>
                <option data-countryCode="DZ" value="213">
                  Algeria (+213)
                </option>
                <option data-countryCode="AD" value="376">
                  Andorra (+376)
                </option>
                <option data-countryCode="AO" value="244">Angola (+244)</option>
                <option data-countryCode="AI" value="1264">
                  Anguilla (+1264)
                </option>
                <option data-countryCode="AG" value="1268">
                  Antigua &amp; Barbuda (+1268)
                </option>
                <option data-countryCode="AR" value="54">
                  Argentina (+54)
                </option>
                <option data-countryCode="AM" value="374">
                  Armenia (+374)
                </option>
                <option data-countryCode="AW" value="297">Aruba (+297)</option>
                <option data-countryCode="AU" value="61">
                  Australia (+61)
                </option>
                <option data-countryCode="AT" value="43">Austria (+43)</option>
                <option data-countryCode="AZ" value="994">
                  Azerbaijan (+994)
                </option>
                <option data-countryCode="BS" value="1242">
                  Bahamas (+1242)
                </option>
                <option data-countryCode="BH" value="973">
                  Bahrain (+973)
                </option>
                <option data-countryCode="BD" value="880">
                  Bangladesh (+880)
                </option>
                <option data-countryCode="BB" value="1246">
                  Barbados (+1246)
                </option>
                <option data-countryCode="BY" value="375">
                  Belarus (+375)
                </option>
                <option data-countryCode="BE" value="32">Belgium (+32)</option>
                <option data-countryCode="BZ" value="501">Belize (+501)</option>
                <option data-countryCode="BJ" value="229">Benin (+229)</option>
                <option data-countryCode="BM" value="1441">
                  Bermuda (+1441)
                </option>
                <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                <option data-countryCode="BO" value="591">
                  Bolivia (+591)
                </option>
                <option data-countryCode="BA" value="387">
                  Bosnia Herzegovina (+387)
                </option>
                <option data-countryCode="BW" value="267">
                  Botswana (+267)
                </option>
                <option data-countryCode="BR" value="55">Brazil (+55)</option>
                <option data-countryCode="BN" value="673">Brunei (+673)</option>
                <option data-countryCode="BG" value="359">
                  Bulgaria (+359)
                </option>
                <option data-countryCode="BF" value="226">
                  Burkina Faso (+226)
                </option>
                <option data-countryCode="BI" value="257">
                  Burundi (+257)
                </option>
                <option data-countryCode="KH" value="855">
                  Cambodia (+855)
                </option>
                <option data-countryCode="CM" value="237">
                  Cameroon (+237)
                </option>
                <option data-countryCode="CA" value="1">Canada (+1)</option>
                <option data-countryCode="CV" value="238">
                  Cape Verde Islands (+238)
                </option>
                <option data-countryCode="KY" value="1345">
                  Cayman Islands (+1345)
                </option>
                <option data-countryCode="CF" value="236">
                  Central African Republic (+236)
                </option>
                <option data-countryCode="CL" value="56">Chile (+56)</option>
                <option data-countryCode="CN" value="86">China (+86)</option>
                <option data-countryCode="CO" value="57">Colombia (+57)</option>
                <option data-countryCode="KM" value="269">
                  Comoros (+269)
                </option>
                <option data-countryCode="CG" value="242">Congo (+242)</option>
                <option data-countryCode="CK" value="682">
                  Cook Islands (+682)
                </option>
                <option data-countryCode="CR" value="506">
                  Costa Rica (+506)
                </option>
                <option data-countryCode="HR" value="385">
                  Croatia (+385)
                </option>
                <option data-countryCode="CU" value="53">Cuba (+53)</option>
                <option data-countryCode="CY" value="90392">
                  Cyprus North (+90392)
                </option>
                <option data-countryCode="CY" value="357">
                  Cyprus South (+357)
                </option>
                <option data-countryCode="CZ" value="42">
                  Czech Republic (+42)
                </option>
                <option data-countryCode="DK" value="45">Denmark (+45)</option>
                <option data-countryCode="DJ" value="253">
                  Djibouti (+253)
                </option>
                <option data-countryCode="DM" value="1809">
                  Dominica (+1809)
                </option>
                <option data-countryCode="DO" value="1809">
                  Dominican Republic (+1809)
                </option>
                <option data-countryCode="EC" value="593">
                  Ecuador (+593)
                </option>
                <option data-countryCode="EG" value="20">Egypt (+20)</option>
                <option data-countryCode="SV" value="503">
                  El Salvador (+503)
                </option>
                <option data-countryCode="GQ" value="240">
                  Equatorial Guinea (+240)
                </option>
                <option data-countryCode="ER" value="291">
                  Eritrea (+291)
                </option>
                <option data-countryCode="EE" value="372">
                  Estonia (+372)
                </option>
                <option data-countryCode="ET" value="251">
                  Ethiopia (+251)
                </option>
                <option data-countryCode="FK" value="500">
                  Falkland Islands (+500)
                </option>
                <option data-countryCode="FO" value="298">
                  Faroe Islands (+298)
                </option>
                <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                <option data-countryCode="FI" value="358">
                  Finland (+358)
                </option>
                <option data-countryCode="FR" value="33">France (+33)</option>
                <option data-countryCode="GF" value="594">
                  French Guiana (+594)
                </option>
                <option data-countryCode="PF" value="689">
                  French Polynesia (+689)
                </option>
                <option data-countryCode="GA" value="241">Gabon (+241)</option>
                <option data-countryCode="GM" value="220">Gambia (+220)</option>
                <option data-countryCode="GE" value="7880">
                  Georgia (+7880)
                </option>
                <option data-countryCode="DE" value="49">Germany (+49)</option>
                <option data-countryCode="GH" value="233">Ghana (+233)</option>
                <option data-countryCode="GI" value="350">
                  Gibraltar (+350)
                </option>
                <option data-countryCode="GR" value="30">Greece (+30)</option>
                <option data-countryCode="GL" value="299">
                  Greenland (+299)
                </option>
                <option data-countryCode="GD" value="1473">
                  Grenada (+1473)
                </option>
                <option data-countryCode="GP" value="590">
                  Guadeloupe (+590)
                </option>
                <option data-countryCode="GU" value="671">Guam (+671)</option>
                <option data-countryCode="GT" value="502">
                  Guatemala (+502)
                </option>
                <option data-countryCode="GN" value="224">Guinea (+224)</option>
                <option data-countryCode="GW" value="245">
                  Guinea - Bissau (+245)
                </option>
                <option data-countryCode="GY" value="592">Guyana (+592)</option>
                <option data-countryCode="HT" value="509">Haiti (+509)</option>
                <option data-countryCode="HN" value="504">
                  Honduras (+504)
                </option>
                <option data-countryCode="HK" value="852">
                  Hong Kong (+852)
                </option>
                <option data-countryCode="HU" value="36">Hungary (+36)</option>
                <option data-countryCode="IS" value="354">
                  Iceland (+354)
                </option>
                <option data-countryCode="IN" value="91">India (+91)</option>
                <option data-countryCode="ID" value="62">
                  Indonesia (+62)
                </option>
                <option data-countryCode="IR" value="98">Iran (+98)</option>
                <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                <option data-countryCode="IE" value="353">
                  Ireland (+353)
                </option>
                <option data-countryCode="IL" value="972">Israel (+972)</option>
                <option data-countryCode="IT" value="39">Italy (+39)</option>
                <option data-countryCode="JM" value="1876">
                  Jamaica (+1876)
                </option>
                <option data-countryCode="JP" value="81">Japan (+81)</option>
                <option data-countryCode="JO" value="962">Jordan (+962)</option>
                <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                <option data-countryCode="KE" value="254">Kenya (+254)</option>
                <option data-countryCode="KI" value="686">
                  Kiribati (+686)
                </option>
                <option data-countryCode="KP" value="850">
                  Korea North (+850)
                </option>
                <option data-countryCode="KR" value="82">
                  Korea South (+82)
                </option>
                <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                <option data-countryCode="KG" value="996">
                  Kyrgyzstan (+996)
                </option>
                <option data-countryCode="LA" value="856">Laos (+856)</option>
                <option data-countryCode="LV" value="371">Latvia (+371)</option>
                <option data-countryCode="LB" value="961">
                  Lebanon (+961)
                </option>
                <option data-countryCode="LS" value="266">
                  Lesotho (+266)
                </option>
                <option data-countryCode="LR" value="231">
                  Liberia (+231)
                </option>
                <option data-countryCode="LY" value="218">Libya (+218)</option>
                <option data-countryCode="LI" value="417">
                  Liechtenstein (+417)
                </option>
                <option data-countryCode="LT" value="370">
                  Lithuania (+370)
                </option>
                <option data-countryCode="LU" value="352">
                  Luxembourg (+352)
                </option>
                <option data-countryCode="MO" value="853">Macao (+853)</option>
                <option data-countryCode="MK" value="389">
                  Macedonia (+389)
                </option>
                <option data-countryCode="MG" value="261">
                  Madagascar (+261)
                </option>
                <option data-countryCode="MW" value="265">Malawi (+265)</option>
                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                <option data-countryCode="MV" value="960">
                  Maldives (+960)
                </option>
                <option data-countryCode="ML" value="223">Mali (+223)</option>
                <option data-countryCode="MT" value="356">Malta (+356)</option>
                <option data-countryCode="MH" value="692">
                  Marshall Islands (+692)
                </option>
                <option data-countryCode="MQ" value="596">
                  Martinique (+596)
                </option>
                <option data-countryCode="MR" value="222">
                  Mauritania (+222)
                </option>
                <option data-countryCode="YT" value="269">
                  Mayotte (+269)
                </option>
                <option data-countryCode="MX" value="52">Mexico (+52)</option>
                <option data-countryCode="FM" value="691">
                  Micronesia (+691)
                </option>
                <option data-countryCode="MD" value="373">
                  Moldova (+373)
                </option>
                <option data-countryCode="MC" value="377">Monaco (+377)</option>
                <option data-countryCode="MN" value="976">
                  Mongolia (+976)
                </option>
                <option data-countryCode="MS" value="1664">
                  Montserrat (+1664)
                </option>
                <option data-countryCode="MA" value="212">
                  Morocco (+212)
                </option>
                <option data-countryCode="MZ" value="258">
                  Mozambique (+258)
                </option>
                <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                <option data-countryCode="NA" value="264">
                  Namibia (+264)
                </option>
                <option data-countryCode="NR" value="674">Nauru (+674)</option>
                <option data-countryCode="NP" value="977">Nepal (+977)</option>
                <option data-countryCode="NL" value="31">
                  Netherlands (+31)
                </option>
                <option data-countryCode="NC" value="687">
                  New Caledonia (+687)
                </option>
                <option data-countryCode="NZ" value="64">
                  New Zealand (+64)
                </option>
                <option data-countryCode="NI" value="505">
                  Nicaragua (+505)
                </option>
                <option data-countryCode="NE" value="227">Niger (+227)</option>
                <option data-countryCode="NG" value="234">
                  Nigeria (+234)
                </option>
                <option data-countryCode="NU" value="683">Niue (+683)</option>
                <option data-countryCode="NF" value="672">
                  Norfolk Islands (+672)
                </option>
                <option data-countryCode="NP" value="670">
                  Northern Marianas (+670)
                </option>
                <option data-countryCode="NO" value="47">Norway (+47)</option>
                <option data-countryCode="OM" value="968">Oman (+968)</option>
                <option data-countryCode="PW" value="680">Palau (+680)</option>
                <option data-countryCode="PA" value="507">Panama (+507)</option>
                <option data-countryCode="PG" value="675">
                  Papua New Guinea (+675)
                </option>
                <option data-countryCode="PY" value="595">
                  Paraguay (+595)
                </option>
                <option data-countryCode="PE" value="51">Peru (+51)</option>
                <option data-countryCode="PH" value="63">
                  Philippines (+63)
                </option>
                <option data-countryCode="PL" value="48">Poland (+48)</option>
                <option data-countryCode="PT" value="351">
                  Portugal (+351)
                </option>
                <option data-countryCode="PR" value="1787">
                  Puerto Rico (+1787)
                </option>
                <option data-countryCode="QA" value="974">Qatar (+974)</option>
                <option data-countryCode="RE" value="262">
                  Reunion (+262)
                </option>
                <option data-countryCode="RO" value="40">Romania (+40)</option>
                <option data-countryCode="RU" value="7">Russia (+7)</option>
                <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                <option data-countryCode="SM" value="378">
                  San Marino (+378)
                </option>
                <option data-countryCode="ST" value="239">
                  Sao Tome &amp; Principe (+239)
                </option>
                <option data-countryCode="SA" value="966">
                  Saudi Arabia (+966)
                </option>
                <option data-countryCode="SN" value="221">
                  Senegal (+221)
                </option>
                <option data-countryCode="CS" value="381">Serbia (+381)</option>
                <option data-countryCode="SC" value="248">
                  Seychelles (+248)
                </option>
                <option data-countryCode="SL" value="232">
                  Sierra Leone (+232)
                </option>
                <option data-countryCode="SG" value="65">
                  Singapore (+65)
                </option>
                <option data-countryCode="SK" value="421">
                  Slovak Republic (+421)
                </option>
                <option data-countryCode="SI" value="386">
                  Slovenia (+386)
                </option>
                <option data-countryCode="SB" value="677">
                  Solomon Islands (+677)
                </option>
                <option data-countryCode="SO" value="252">
                  Somalia (+252)
                </option>
                <option data-countryCode="ZA" value="27">
                  South Africa (+27)
                </option>
                <option data-countryCode="ES" value="34">Spain (+34)</option>
                <option data-countryCode="LK" value="94">
                  Sri Lanka (+94)
                </option>
                <option data-countryCode="SH" value="290">
                  St. Helena (+290)
                </option>
                <option data-countryCode="KN" value="1869">
                  St. Kitts (+1869)
                </option>
                <option data-countryCode="SC" value="1758">
                  St. Lucia (+1758)
                </option>
                <option data-countryCode="SD" value="249">Sudan (+249)</option>
                <option data-countryCode="SR" value="597">
                  Suriname (+597)
                </option>
                <option data-countryCode="SZ" value="268">
                  Swaziland (+268)
                </option>
                <option data-countryCode="SE" value="46">Sweden (+46)</option>
                <option data-countryCode="CH" value="41">
                  Switzerland (+41)
                </option>
                <option data-countryCode="SI" value="963">Syria (+963)</option>
                <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                <option data-countryCode="TH" value="66">Thailand (+66)</option>
                <option data-countryCode="TG" value="228">Togo (+228)</option>
                <option data-countryCode="TO" value="676">Tonga (+676)</option>
                <option data-countryCode="TT" value="1868">
                  Trinidad &amp; Tobago (+1868)
                </option>
                <option data-countryCode="TN" value="216">
                  Tunisia (+216)
                </option>
                <option data-countryCode="TR" value="90">Turkey (+90)</option>
                <option data-countryCode="TM" value="7">
                  Turkmenistan (+7)
                </option>
                <option data-countryCode="TM" value="993">
                  Turkmenistan (+993)
                </option>
                <option data-countryCode="TC" value="1649">
                  Turks &amp; Caicos Islands (+1649)
                </option>
                <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                <option data-countryCode="UG" value="256">Uganda (+256)</option>
                <option data-countryCode="GB" value="44">UK (+44)</option>
                <option data-countryCode="UA" value="380">
                  Ukraine (+380)
                </option>
                <option data-countryCode="AE" value="971">
                  United Arab Emirates (+971)
                </option>
                <option data-countryCode="UY" value="598">
                  Uruguay (+598)
                </option>
                <option data-countryCode="US" value="1">USA (+1)</option>
                <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                <option data-countryCode="VU" value="678">
                  Vanuatu (+678)
                </option>
                <option data-countryCode="VA" value="379">
                  Vatican City (+379)
                </option>
                <option data-countryCode="VE" value="58">
                  Venezuela (+58)
                </option>
                <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                <option data-countryCode="VG" value="84">
                  Virgin Islands - British (+1284)
                </option>
                <option data-countryCode="VI" value="84">
                  Virgin Islands - US (+1340)
                </option>
                <option data-countryCode="WF" value="681">
                  Wallis &amp; Futuna (+681)
                </option>
                <option data-countryCode="YE" value="969">
                  Yemen (North)(+969)
                </option>
                <option data-countryCode="YE" value="967">
                  Yemen (South)(+967)
                </option>
                <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                <option data-countryCode="ZW" value="263">
                  Zimbabwe (+263)
                </option>
              </select>
            </div>
            <div class="col p-0">
              <input
                type="number"
                class="form-control"
                id="tel"
                aria-describedby="tel_help"
                v-model="formData.account.tel"
              />
            </div>
          </div>
        </div>
        <br />
        <!--ext-->
        <div class="col">
          <label for="ext" class="form-label"
            ><strong>Extensión del teléfono (opcional)</strong></label
          >
          <div
            id="ext_help"
            class="form-text error"
            v-for="error in v$.account.ext.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="number"
            class="form-control"
            id="ext"
            aria-describedby="ext_help"
            v-model="formData.account.ext"
          />
        </div>
      </div>
      <br />
      <!--web_page-->
      <div class="row justify-content-center">
        <div class="col-6">
          <label for="web_page" class="form-label"
            ><strong>Tu página web (opcional)</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="web_page"
            aria-describedby="web_page_help"
            v-model="formData.account.web_page"
          />
        </div>
      </div>
      <br />
      <h4>Información de contacto</h4>
      <br />
      <div class="row">
        <br />
        <!--name-->
        <div class="col">
          <label for="name" class="form-label"
            ><strong>Nombre de la persona de contacto</strong></label
          >
          <div
            id="name_help"
            class="form-text error"
            v-for="error in v$.cont.name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name_help"
            v-model="formData.cont.name"
          />
        </div>
        <!--last_name-->
        <div class="col">
          <label for="last_name" class="form-label"
            ><strong>Apellido de la persona de contacto</strong></label
          >
          <div
            id="last_name_help"
            class="form-text error"
            v-for="error in v$.cont.last_name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="last_name"
            aria-describedby="last_name_help"
            v-model="formData.cont.last_name"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <!--email-->
        <div class="col">
          <label for="email" class="form-label"
            ><strong>Email de la persona de contacto</strong></label
          >
          <div
            id="email_help"
            class="form-text error"
            v-for="error in v$.cont.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="email_help"
            v-model="formData.cont.email"
          />
        </div>
        <br />
        <!--tel-->
        <div class="col">
          <label for="tel" class="form-label"
            ><strong>Teléfono de la persona de contacto</strong></label
          >
          <div
            id="tel_help"
            class="form-text error"
            v-for="error in v$.cont.tel.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="tel"
            aria-describedby="tel_help"
            v-model="formData.cont.tel"
          />
        </div>
      </div>

      <br />
      <!--pos-->
      <div class="row justify-content-center">
        <div class="col-6">
          <label for="pos" class="form-label"
            ><strong
              >Área de trabajo en la empresa de la persona de contacto</strong
            ></label
          >
          <div
            id="pos_help"
            class="form-text error"
            v-for="error in v$.cont.pos.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="pos"
            aria-describedby="pos_help"
            v-model="formData.cont.pos"
          />
        </div>
      </div>
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
            <button class="btn btn-dark mt-3" @click="submitForm">
              Enviar
            </button>
          </template>
        </div>
      </va-collapse>
    </form>
  </div>
</template>

<script setup>
// Stores
import { useModalStore } from "../../../../stores/ui/modal";
import { useAlertStore } from "../../../../stores/ui/alert";
import { activity } from "../../../../libs/bases";
import { useAuthStore } from "../../../../stores/auth";

// Ref, from vue
import { ref } from "vue";

// Vuelidate and stuff
import useVuelidate from "@vuelidate/core";

import {
  required,
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

const checkbox = ref(null);

const value = ref([false]);

const formData = ref({
  account: {
    activity: null,
    r_social: null,
    nit: null,
    tel: null,
    ext: null,
    web_page: null,
  },
  cont: {
    pos: null,
    name: null,
    last_name: null,
    email: null,
    tel: null,
  },
});

const countryCode = ref("0");
const countryCodeError = ref(null);

// Rules for vuelidate -->
const rules = {
  account: {
    activity: {
      required: helpers.withMessage("Actividad es requerida", required),
    },
    r_social: {
      required: helpers.withMessage("La razón social es requerida", required),
      minLength: helpers.withMessage(
        "La razón social debe contener al menos 3 carácteres",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "La razón social debe contener menos 80 carácteres",
        maxLength(80)
      ),
    },
    nit: {
      required: helpers.withMessage("El nit es requerido", required),
      minLength: helpers.withMessage(
        "El nit contener al menos 8 carácteres",
        minLength(8)
      ),
      maxLength: helpers.withMessage(
        "El nit debe contener menos de 15 carácteres",
        maxLength(15)
      ),
    },
    tel: {
      required: helpers.withMessage("El teléfono es requerido", required),
      minLength: helpers.withMessage(
        "El teléfono contener al menos 10 carácteres",
        minLength(10)
      ),
      maxLength: helpers.withMessage(
        "El teléfono debe contener menos de 14 carácteres",
        maxLength(12)
      ),
    },
    ext: {
      maxLength: helpers.withMessage(
        "La extensión debe contener menos de 6 carácteres",
        maxLength(6)
      ),
    },
  },
  cont: {
    pos: {
      required: helpers.withMessage("La posición es requerida", required),
      minLength: helpers.withMessage(
        "La posición debe tener al menos 3 carácteres ",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "La posición debe tener menos de 80 carácteres ",
        maxLength(80)
      ),
    },
    name: {
      required: helpers.withMessage("El nombre es requerido", required),
      minLength: helpers.withMessage(
        "El nombre debe tener al menos 3 carácteres",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "El nombre debe tener menos de 15 carácteres",
        maxLength(15)
      ),
    },
    last_name: {
      required: helpers.withMessage("El apellido es requerido", required),
      minLength: helpers.withMessage(
        "El apellido debe tener al menos 3 carácteres",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "El apellido debe tener menos de 15 carácteres",
        maxLength(15)
      ),
    },
    email: {
      required: helpers.withMessage("El email es requerido", required),
      email: helpers.withMessage("El email debe ser válido", email),
    },
    tel: {
      required: helpers.withMessage("El teléfono es requerido", required),
      minLength: helpers.withMessage(
        "El teléfono debe tener al menos 10 carácteres",
        minLength(10)
      ),
      maxLength: helpers.withMessage(
        "El teléfono debe tener menos de 12 carácteres",
        maxLength(12)
      ),
    },
  },
};

// v$ required for vuelidate
const v$ = useVuelidate(rules, formData);

const sample_form = {
  account: {
    r_social: null,
    nit: null,
    tel: null,
    ext: null,
    web_page: null,
  },
  cont: {
    pos: null,
    name: null,
    last_name: null,
    email: null,
    tel: null,
  },
};

const submitForm = async () => {
  // Set modal
  modalStore.setType("wait_offcanvas");
  for (const i in formData.value.account) {
    sample_form.account[i] = formData.value.account[i];
  }
  for (const i in formData.value.cont) {
    sample_form.cont[i] = formData.value.cont[i];
  }
  // Check all information
  const result = await v$.value.$validate();
  if (
    countryCode.value &&
    countryCode.value != "0" &&
    sample_form.account.tel
  ) {
    sample_form.account.tel = countryCode.value + sample_form.account.tel;
    countryCodeError.value = null;
  } else {
    countryCodeError.value = "El codigo de país de necesario";
    modalStore.resetModal();
    return;
  }

  if (result) {
    // If everithing is ok, call postForm
    await postForm();
    // Reset modal
    modalStore.resetModal();
  }
  // Else, reset modal
  modalStore.resetModal();
};

const postForm = async () => {
  await axios
    .post("part/post-infoform", sample_form)
    .then(async (res) => {
      // Set an alert, with res.data
      alertSotre.setAlert("alert-success", res.data);
      // Refresh authStore
      await authstore.refreshSate();
      // Push user to index
      router.push("/");
    })
    .catch((err) => {
      // If there's an error_msg, set an alert
      if (err.response.data.error_msg) {
        alertSotre.setAlert("alert-danger", err.response.data);
      } else {
        console.error(err);
        alertSotre.setAlert("alert-danger", ["Hubo un error"]); // Else, set an alert
      }
    });
};
</script>

<style scoped>
.form-text {
  color: #ab0202;
}

.tel-input {
  display: flex;
}

input {
  text-align: center;
}
</style>
