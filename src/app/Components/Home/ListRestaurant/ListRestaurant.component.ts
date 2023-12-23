import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location, Address, Contact, RestaurantInterface } from 'src/app/Core/Interfaces/RestaurantInterface';
import { ServicesService } from 'src/app/Core/Services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../DialogModal/DialogModal.component';
import { RestaurantSelect } from '../DialogModal/RestaurantSelect';

@Component({
  selector: 'app-ListRestaurant',
  templateUrl: './ListRestaurant.component.html',
  styleUrls: ['./ListRestaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  objetosOriginales = [
    {
      "id": "851f799f-0852-439e-b9b2-df92c43e7672",
      "rating": 1,
      "name": "Barajas, Bahena and Kano",
      "contact": {
          "site": "https://federico.com",
          "email": "Anita_Mata71@hotmail.com",
          "phone": "534 814 204"
      },
      "address": {
          "street": "82247 Mariano Entrada",
          "city": "Mérida Alfredotown",
          "state": "Durango",
          "location": {
              "lat": 19.440057053713137,
              "lng": -99.12704709742486
          }
      }
  },
  {
      "id": "4e17896d-a26f-44ae-a8a4-5fbd5cde79b0",
      "rating": 0,
      "name": "Hernández - Lira",
      "contact": {
          "site": "http://graciela.com.mx",
          "email": "Brandon_Vigil@hotmail.com",
          "phone": "570 746 998"
      },
      "address": {
          "street": "93725 Erick Arroyo",
          "city": "Mateofurt",
          "state": "Hidalgo",
          "location": {
              "lat": 19.437904276994995,
              "lng": -99.12865767750226
          }
      }
  },
  {
      "id": "c0ffd058-e773-47f1-974b-42d41cb555bf",
      "rating": 3,
      "name": "Rendón - Elizondo",
      "contact": {
          "site": "https://cristina.mx",
          "email": "Hugo.Casanova49@gmail.com",
          "phone": "5866-337-812"
      },
      "address": {
          "street": "5518 Monserrat Explanada",
          "city": "Chignahuapan María",
          "state": "Sinaloa",
          "location": {
              "lat": 19.43607059103484,
              "lng": -99.12978657319944
          }
      }
  },
  {
      "id": "c29082c4-4352-4517-9b4b-c45f86fc1830",
      "rating": 2,
      "name": "Nájera - Chávez",
      "contact": {
          "site": "https://pedro.gob.mx",
          "email": "Carlota31@hotmail.com",
          "phone": "5532-129-406"
      },
      "address": {
          "street": "79224 Mariano Travesía",
          "city": "Nezahualcóyotl Timoteo",
          "state": "Coahuila",
          "location": {
              "lat": 19.442486911665654,
              "lng": -99.12383325991955
          }
      }
  },
  {
      "id": "2b8f5a44-1e8b-44ec-9b25-0edc5b64b7e6",
      "rating": 3,
      "name": "Hurtado, Rolón and Segovia",
      "contact": {
          "site": "https://elías.org",
          "email": "RosaMara_Figueroa@corpfolder.com",
          "phone": "559.867.074"
      },
      "address": {
          "street": "039 Susana Polígono",
          "city": "Marco Antonioland",
          "state": "Colima",
          "location": {
              "lat": 19.43349766301504,
              "lng": -99.12851350657212
          }
      }
  },
  {
      "id": "ddb77425-2c3f-435c-8391-021b40010b0d",
      "rating": 0,
      "name": "Serrato Hermanos",
      "contact": {
          "site": "https://octavio.org",
          "email": "Yamileth_Lugo28@corpfolder.com",
          "phone": "571.744.718"
      },
      "address": {
          "street": "14476 Delgadillo Partida",
          "city": "Nevárezfort",
          "state": "Michoacan",
          "location": {
              "lat": 19.434704225487547,
              "lng": -99.12638178153931
          }
      }
  },
  {
      "id": "7b845a5f-94d4-4d52-bbb7-838839a180d6",
      "rating": 1,
      "name": "Saiz, Aponte and Muñoz",
      "contact": {
          "site": "https://homero.com",
          "email": "Carolina_Merino@nearbpo.com",
          "phone": "584212054"
      },
      "address": {
          "street": "563 Verduzco Vía Pública",
          "city": "Nuevo Laredo Alejandrahaven",
          "state": "San Luis Potosí",
          "location": {
              "lat": 19.441487824321264,
              "lng": -99.12748993185849
          }
      }
  },
  {
      "id": "030eaf75-da6e-4748-9727-f2704f831498",
      "rating": 2,
      "name": "Niño - Negrete",
      "contact": {
          "site": "https://elizabeth.gob.mx",
          "email": "Luz_Sevilla@gmail.com",
          "phone": "5178-668-409"
      },
      "address": {
          "street": "3041 Gael Torrente",
          "city": "Querétaro Saratown",
          "state": "Oaxaca",
          "location": {
              "lat": 19.4416814748901,
              "lng": -99.12657324380974
          }
      }
  },
  {
      "id": "1ce4a7f8-ff21-4450-9107-f4f952f39f99",
      "rating": 4,
      "name": "Kortajarena - Rangel",
      "contact": {
          "site": "http://débora.gob.mx",
          "email": "Brandon_Quiros@gmail.com",
          "phone": "560 092 151"
      },
      "address": {
          "street": "59897 Esquivel Aldea",
          "city": "Monterrey Dulce María",
          "state": "Querétaro",
          "location": {
              "lat": 19.440701969312975,
              "lng": -99.12601493396133
          }
      }
  },
  {
      "id": "9f98fad3-ecd6-421b-ba8c-2bd63340473d",
      "rating": 2,
      "name": "Macías S.L.",
      "contact": {
          "site": "http://miguel.com.mx",
          "email": "Jazmin_Santiago7@yahoo.com",
          "phone": "508272671"
      },
      "address": {
          "street": "1736 Adela Urbanización",
          "city": "Puerto Vallarta Dorotea",
          "state": "Baja California Sur",
          "location": {
              "lat": 19.436925777914475,
              "lng": -99.13156075135142
          }
      }
  },
  {
      "id": "38c965f9-74b0-4d8e-9cc2-2e457a1ebb83",
      "rating": 3,
      "name": "Arreola Hermanos",
      "contact": {
          "site": "https://alejandra.com.mx",
          "email": "Ximena_Domnquez62@yahoo.com",
          "phone": "531.757.355"
      },
      "address": {
          "street": "9061 Fernando Puente",
          "city": "Campeche Mercedes",
          "state": "Guanajuato",
          "location": {
              "lat": 19.434988822590565,
              "lng": -99.12630734779674
          }
      }
  },
  {
      "id": "4501fb34-eefe-4f63-90c9-a9a1272df71d",
      "rating": 0,
      "name": "Gallardo - Angulo",
      "contact": {
          "site": "https://josé antonio.mx",
          "email": "Brandon34@gmail.com",
          "phone": "5191-333-084"
      },
      "address": {
          "street": "7229 Villarreal Gran Subida",
          "city": "Campeche Daniela",
          "state": "Quintana Roo",
          "location": {
              "lat": 19.434132032294766,
              "lng": -99.13262356083642
          }
      }
  },
  {
      "id": "d04fd5aa-4a56-43a6-91c9-35edaaadadc9",
      "rating": 0,
      "name": "Calvillo S.L.",
      "contact": {
          "site": "https://martín.info",
          "email": "JuanPablo.Cervntez@nearbpo.com",
          "phone": "501 812 092"
      },
      "address": {
          "street": "38836 Emilio Partida",
          "city": "Rubénchester",
          "state": "Tabasco",
          "location": {
              "lat": 19.442393166493165,
              "lng": -99.12657698284404
          }
      }
  },
  {
      "id": "a850ff07-516e-44e4-acd7-26fa0c12f4fc",
      "rating": 1,
      "name": "Palomo - Cardona",
      "contact": {
          "site": "http://marco antonio.org",
          "email": "Lizbeth.Laboy@hotmail.com",
          "phone": "508.505.560"
      },
      "address": {
          "street": "5588 Leticia Torrente",
          "city": "Tetela de Ocampo Silviafurt",
          "state": "Colima",
          "location": {
              "lat": 19.434869863060776,
              "lng": -99.12808952204918
          }
      }
  },
  {
      "id": "7173d827-3308-46d8-9b9e-86306ec64f78",
      "rating": 3,
      "name": "Carreón e Hijos",
      "contact": {
          "site": "http://dolores.org",
          "email": "Benjamn.Arenas27@yahoo.com",
          "phone": "572.204.703"
      },
      "address": {
          "street": "7124 Granado Parcela",
          "city": "Celaya Carlos",
          "state": "Puebla",
          "location": {
              "lat": 19.440554355539387,
              "lng": -99.12680347446155
          }
      }
  },
  {
      "id": "d6782cfc-29ef-4241-985b-0a6ff6cf4c64",
      "rating": 4,
      "name": "Munguía S.L.",
      "contact": {
          "site": "https://emmanuel.com.mx",
          "email": "Yaretzi_Saldivar28@yahoo.com",
          "phone": "573.429.070"
      },
      "address": {
          "street": "05203 Martín Lado",
          "city": "León Césarland",
          "state": "Guerrero",
          "location": {
              "lat": 19.438892040900427,
              "lng": -99.13033427038731
          }
      }
  },
  {
      "id": "dd56e1e9-bd67-41cd-baac-a8f9f47ad5c8",
      "rating": 4,
      "name": "Fuentes, Porras and Barajas",
      "contact": {
          "site": "http://ariadna.com.mx",
          "email": "Jimena25@hotmail.com",
          "phone": "5087-469-378"
      },
      "address": {
          "street": "81414 Luz Ferrocarril",
          "city": "Paolabury",
          "state": "Michoacan",
          "location": {
              "lat": 19.439351178762045,
              "lng": -99.13306612705149
          }
      }
  },
  {
      "id": "ac3bafbe-ea67-47cb-af99-63d945f71bf5",
      "rating": 1,
      "name": "Ledesma, Vélez and Matías",
      "contact": {
          "site": "https://miranda.mx",
          "email": "Amalia27@gmail.com",
          "phone": "593 520 541"
      },
      "address": {
          "street": "7630 Collado Huerta",
          "city": "Irapuato Carolina",
          "state": "Jalisco",
          "location": {
              "lat": 19.44271475041798,
              "lng": -99.12725416936946
          }
      }
  },
  {
      "id": "3e26a92c-defb-4475-8c23-450750556fb9",
      "rating": 4,
      "name": "Galarza, Griego and Orozco",
      "contact": {
          "site": "https://josé luis.com.mx",
          "email": "JosEduardo_Narvez@nearbpo.com",
          "phone": "5177-114-746"
      },
      "address": {
          "street": "0785 José Luis Mercado",
          "city": "Tampico-Pánuco Mercedes",
          "state": "Guerrero",
          "location": {
              "lat": 19.435311811282773,
              "lng": -99.13091740433163
          }
      }
  },
  {
      "id": "6b7cd221-7859-4ece-8ed6-fd79283f0e65",
      "rating": 2,
      "name": "Hurtado, Armijo and Soto",
      "contact": {
          "site": "https://iker.org",
          "email": "Patricio.Alonso52@gmail.com",
          "phone": "5234-475-063"
      },
      "address": {
          "street": "830 Valentín Colonia",
          "city": "La Laguna Ana Maríamouth",
          "state": "Tabasco",
          "location": {
              "lat": 19.433433875076478,
              "lng": -99.13044725382271
          }
      }
  },
  {
      "id": "d7888ed4-52f0-4be8-a210-f0d28ce0e565",
      "rating": 0,
      "name": "Paredes - Montero",
      "contact": {
          "site": "http://abraham.com.mx",
          "email": "Vanessa_Quinterodelacruz84@hotmail.com",
          "phone": "5783-052-043"
      },
      "address": {
          "street": "237 Regina Jardines",
          "city": "Pilarshire",
          "state": "Nuevo León",
          "location": {
              "lat": 19.439240182675892,
              "lng": -99.13319044094335
          }
      }
  },
  {
      "id": "e6c4bf95-dba4-44b5-af90-b0ab7214146e",
      "rating": 0,
      "name": "Zavala - Chavarría",
      "contact": {
          "site": "https://ignacio.mx",
          "email": "Jernimo_Armas@nearbpo.com",
          "phone": "588078464"
      },
      "address": {
          "street": "019 Aragón Urbanización",
          "city": "Carrasquillobury",
          "state": "Yucatán",
          "location": {
              "lat": 19.4332403037143,
              "lng": -99.13229423638235
          }
      }
  },
  {
      "id": "1d7e6cac-013e-404b-8d93-19d838ef30e1",
      "rating": 1,
      "name": "Padilla, Mata and Posada",
      "contact": {
          "site": "https://gabriel.com.mx",
          "email": "Josefina_Cano@corpfolder.com",
          "phone": "554 352 295"
      },
      "address": {
          "street": "0658 Espino Conjunto",
          "city": "Mérida Emilio",
          "state": "Guerrero",
          "location": {
              "lat": 19.439150270929566,
              "lng": -99.12413153740846
          }
      }
  },
  {
      "id": "811fa2fc-f29c-4152-a821-7c2a67ab5d21",
      "rating": 4,
      "name": "Gallegos, Anguiano and Jurado",
      "contact": {
          "site": "http://eduardo.com",
          "email": "Carla.Ramn81@corpfolder.com",
          "phone": "5572-745-754"
      },
      "address": {
          "street": "2179 José Plaza",
          "city": "Sofiaville",
          "state": "Durango",
          "location": {
              "lat": 19.434062623980463,
              "lng": -99.12380258213298
          }
      }
  },
  {
      "id": "6e658154-be6f-409c-9c38-b53cc38c2705",
      "rating": 3,
      "name": "Figueroa e Hijos",
      "contact": {
          "site": "http://maría cristina.org",
          "email": "FernandoJavier.Batista@nearbpo.com",
          "phone": "576.091.302"
      },
      "address": {
          "street": "166 Gaona Ferrocarril",
          "city": "Tetela de Ocampo Ester",
          "state": "Yucatán",
          "location": {
              "lat": 19.43416304360424,
              "lng": -99.13069784346072
          }
      }
  },
  {
      "id": "40424cd9-a4ff-466f-bea9-51cacb2dd2d5",
      "rating": 3,
      "name": "Cruz, Korta hernandez and Yáñez",
      "contact": {
          "site": "http://pedro.info",
          "email": "Jorge.Carrion@gmail.com",
          "phone": "551 482 751"
      },
      "address": {
          "street": "684 Barrientos Monte",
          "city": "Orizaba Nataliahaven",
          "state": "Estado de México",
          "location": {
              "lat": 19.442036614777063,
              "lng": -99.13275606825518
          }
      }
  },
  {
      "id": "ed23040e-6d68-4211-b31c-62e2f36d120a",
      "rating": 3,
      "name": "Casanova - Jaramillo",
      "contact": {
          "site": "http://brayan.com",
          "email": "Valentina_Gracia59@nearbpo.com",
          "phone": "573.342.065"
      },
      "address": {
          "street": "220 Ángel Gabriel Solar",
          "city": "Cancún Yaretzi",
          "state": "Durango",
          "location": {
              "lat": 19.43380997549324,
              "lng": -99.12934457901667
          }
      }
  },
  {
      "id": "8e086874-60ff-44d5-a327-e4bccf3a90ed",
      "rating": 2,
      "name": "Moya - Cepeda",
      "contact": {
          "site": "https://claudia.info",
          "email": "Silvia20@hotmail.com",
          "phone": "592.612.849"
      },
      "address": {
          "street": "28658 José Antonio Aldea",
          "city": "Guardadoview",
          "state": "Chihuahua",
          "location": {
              "lat": 19.441974594328094,
              "lng": -99.13210572285148
          }
      }
  },
  {
      "id": "5675b76e-738a-4f6f-9adc-2a1b708b67fc",
      "rating": 1,
      "name": "Yanes S.A.",
      "contact": {
          "site": "http://rubén.info",
          "email": "MaraLuisa_Amador@nearbpo.com",
          "phone": "555 572 993"
      },
      "address": {
          "street": "358 María Soledad Arrabal",
          "city": "Tlalnepantla Cristobal",
          "state": "Baja California Sur",
          "location": {
              "lat": 19.439235495534266,
              "lng": -99.12893260113465
          }
      }
  },
  {
      "id": "c4965d5d-4c08-4806-8cfc-77099379ce4e",
      "rating": 1,
      "name": "Rael, Mota and Cintrón",
      "contact": {
          "site": "https://francisco.org",
          "email": "Miguelngel4@corpfolder.com",
          "phone": "511.280.590"
      },
      "address": {
          "street": "821 Lorena Ramal",
          "city": "Tula Adánville",
          "state": "Chihuahua",
          "location": {
              "lat": 19.441598231213174,
              "lng": -99.12635208666127
          }
      }
  },
  {
      "id": "da7c9bad-6036-4a3a-8873-81dfaa585b26",
      "rating": 0,
      "name": "Hinojosa Hermanos",
      "contact": {
          "site": "https://erick.mx",
          "email": "XimenaGuadalupe.Mireles@nearbpo.com",
          "phone": "5382-692-003"
      },
      "address": {
          "street": "8772 Marrero Huerta",
          "city": "Zaragozafort",
          "state": "Morelos",
          "location": {
              "lat": 19.43710945808143,
              "lng": -99.12925726175577
          }
      }
  },
  {
      "id": "71795f1c-4ca0-4ec7-b925-5b906711329b",
      "rating": 3,
      "name": "Zamudio S.L.",
      "contact": {
          "site": "http://cecilia.com.mx",
          "email": "Estela.Quinta80@hotmail.com",
          "phone": "590.101.852"
      },
      "address": {
          "street": "928 Benavídez Municipio",
          "city": "Terrazasside",
          "state": "Baja California Sur",
          "location": {
              "lat": 19.436545609192,
              "lng": -99.12559145733051
          }
      }
  },
  {
      "id": "556091ed-3047-4f07-a2e3-1abbb37ff1bd",
      "rating": 4,
      "name": "Kamat S.L.",
      "contact": {
          "site": "http://melissa.mx",
          "email": "Eva88@corpfolder.com",
          "phone": "5756-043-582"
      },
      "address": {
          "street": "4820 Gurule Rambla",
          "city": "León Kimberlyland",
          "state": "Aguascalientes",
          "location": {
              "lat": 19.440250257340267,
              "lng": -99.129177464601
          }
      }
  },
  {
      "id": "87b35453-f063-461a-b17b-9173f7f09805",
      "rating": 0,
      "name": "Arevalo - Reséndez",
      "contact": {
          "site": "http://esteban.info",
          "email": "Valeria.Espinal@yahoo.com",
          "phone": "560 091 544"
      },
      "address": {
          "street": "481 Raquel Huerta",
          "city": "Ríoshaven",
          "state": "Guanajuato",
          "location": {
              "lat": 19.436266291055833,
              "lng": -99.13294280296459
          }
      }
  },
  {
      "id": "8d567e51-e73c-47b3-ad15-9ca14c32da14",
      "rating": 0,
      "name": "Ñañez S.L.",
      "contact": {
          "site": "http://cristobal.mx",
          "email": "Eduardo_Montes75@nearbpo.com",
          "phone": "506.416.955"
      },
      "address": {
          "street": "705 Gloria Avenida",
          "city": "Armijomouth",
          "state": "Tabasco",
          "location": {
              "lat": 19.434803135355942,
              "lng": -99.12484891342733
          }
      }
  },
  {
      "id": "84314586-29fb-420f-95e5-f15fbe7a619c",
      "rating": 0,
      "name": "Mayorga S.L.",
      "contact": {
          "site": "https://eva.com.mx",
          "email": "Melissa51@corpfolder.com",
          "phone": "521.791.308"
      },
      "address": {
          "street": "4152 Karem Mercado",
          "city": "Coatzacoalcos Nicolásstad",
          "state": "Baja California Norte",
          "location": {
              "lat": 19.439665032625673,
              "lng": -99.13242158991088
          }
      }
  },
  {
      "id": "1b413a3a-e894-4142-a954-37176f12003b",
      "rating": 1,
      "name": "Báez, Karan and Armijo",
      "contact": {
          "site": "https://fernando.info",
          "email": "Alexa.Ortega@yahoo.com",
          "phone": "545520700"
      },
      "address": {
          "street": "08030 Juan Manuel Torrente",
          "city": "Uruapan del Progreso Juan Pabloland",
          "state": "Tabasco",
          "location": {
              "lat": 19.433699568941265,
              "lng": -99.13109211186448
          }
      }
  },
  {
      "id": "15c7fea0-89e8-4539-8632-46a619ef4ce9",
      "rating": 1,
      "name": "García e Hijos",
      "contact": {
          "site": "http://victor manuel.gob.mx",
          "email": "JosEmilio31@corpfolder.com",
          "phone": "5250-478-668"
      },
      "address": {
          "street": "3239 Apodaca Parque",
          "city": "Campeche Ramiroborough",
          "state": "Puebla",
          "location": {
              "lat": 19.432912518063567,
              "lng": -99.13120791786618
          }
      }
  },
  {
      "id": "073aa6dc-3363-417c-b3f4-eba74fb75de8",
      "rating": 3,
      "name": "Palacios, Moreno and Bustamante",
      "contact": {
          "site": "http://bernardo.mx",
          "email": "Luis.Anaya25@corpfolder.com",
          "phone": "581 978 966"
      },
      "address": {
          "street": "37097 Florencia Senda",
          "city": "Octavioville",
          "state": "Chiapas",
          "location": {
              "lat": 19.434565724053428,
              "lng": -99.13242484646419
          }
      }
  },
  {
      "id": "36d43234-edd6-4680-8054-f2f6e4e4ab47",
      "rating": 3,
      "name": "Polanco - Rodríguez",
      "contact": {
          "site": "http://paola.gob.mx",
          "email": "Mayte.Camacho@nearbpo.com",
          "phone": "5778-085-952"
      },
      "address": {
          "street": "31916 Daniel Glorieta",
          "city": "Zitacuaro Monserratchester",
          "state": "Sinaloa",
          "location": {
              "lat": 19.434522272423383,
              "lng": -99.12684009064955
          }
      }
  },
  {
      "id": "7b97ebd0-6c61-43b1-80c6-bdc88846c727",
      "rating": 3,
      "name": "Aragón, Robles and Echevarría",
      "contact": {
          "site": "https://mario.org",
          "email": "MaradeJess32@gmail.com",
          "phone": "558.191.752"
      },
      "address": {
          "street": "5983 Tapia Lado",
          "city": "Juanaborough",
          "state": "Baja California Sur",
          "location": {
              "lat": 19.43695412010933,
              "lng": -99.13007207327325
          }
      }
  },
  {
      "id": "58c0549f-4b2c-43d4-af8d-d4641ffa9f66",
      "rating": 4,
      "name": "Zabaleta S.A.",
      "contact": {
          "site": "http://sofia.com",
          "email": "Bernardo.Yebra48@hotmail.com",
          "phone": "538173475"
      },
      "address": {
          "street": "65562 Olivas Rincón",
          "city": "Durango Elizabethchester",
          "state": "Campeche",
          "location": {
              "lat": 19.435310294579722,
              "lng": -99.12920438299224
          }
      }
  },
  {
      "id": "5dccd552-2941-485c-a80d-8a769f4df5c5",
      "rating": 0,
      "name": "Pelayo, Puente and Echevarría",
      "contact": {
          "site": "https://homero.gob.mx",
          "email": "Eva.Ferrer47@hotmail.com",
          "phone": "568360596"
      },
      "address": {
          "street": "96024 Ana Sofía Polígono",
          "city": "Chetumal Liliafort",
          "state": "Tlaxcala",
          "location": {
              "lat": 19.440702997339432,
              "lng": -99.12748068650754
          }
      }
  },
  {
      "id": "6308a2f2-6719-4ff6-818e-4e62f41a5296",
      "rating": 4,
      "name": "Benítez - Carbajal",
      "contact": {
          "site": "https://jaime.com.mx",
          "email": "Eva_Faras11@corpfolder.com",
          "phone": "566384264"
      },
      "address": {
          "street": "795 Gaytán Colonia",
          "city": "Nicolásview",
          "state": "Durango",
          "location": {
              "lat": 19.43928626240744,
              "lng": -99.13152403518593
          }
      }
  },
  {
      "id": "72cc52c1-7aa5-4098-a391-5a713e2d9781",
      "rating": 0,
      "name": "Lozada, Chávez and Guerrero",
      "contact": {
          "site": "https://estefanía.mx",
          "email": "Victoria.Valadez@corpfolder.com",
          "phone": "567 287 108"
      },
      "address": {
          "street": "66998 Tejada Colegio",
          "city": "Isabelbury",
          "state": "Oaxaca",
          "location": {
              "lat": 19.438667685892906,
              "lng": -99.12583769045106
          }
      }
  },
  {
      "id": "601c7236-e03c-4ba1-beb5-38fbc09108f9",
      "rating": 1,
      "name": "Mesa e Hijos",
      "contact": {
          "site": "http://sofia.org",
          "email": "Julia_Chavarra@nearbpo.com",
          "phone": "565 772 068"
      },
      "address": {
          "street": "6236 Axel Masía",
          "city": "Francisco Javierland",
          "state": "Baja California Sur",
          "location": {
              "lat": 19.433213549524552,
              "lng": -99.13172434009414
          }
      }
  },
  {
      "id": "3e21e0c4-3f89-42fb-8676-8350b95883e2",
      "rating": 3,
      "name": "Muñoz, Armendáriz and Moya",
      "contact": {
          "site": "https://abraham.com.mx",
          "email": "Emilio.Kortahernandez@nearbpo.com",
          "phone": "500 103 302"
      },
      "address": {
          "street": "626 Adriana Ramal",
          "city": "Rochaport",
          "state": "Veracruz",
          "location": {
              "lat": 19.43472436811822,
              "lng": -99.12411203046598
          }
      }
  },
  {
      "id": "8b8af894-bc42-4664-b08c-6cf4ef28081f",
      "rating": 3,
      "name": "Delgadillo - Escobar",
      "contact": {
          "site": "http://cristian.mx",
          "email": "JosLuis.Valds86@yahoo.com",
          "phone": "5325-988-654"
      },
      "address": {
          "street": "73621 Gloria Colegio",
          "city": "Delgadilloshire",
          "state": "Michoacan",
          "location": {
              "lat": 19.434993410241333,
              "lng": -99.13172327674961
          }
      }
  },
  {
      "id": "0b9447e8-6253-4337-b9a0-d6573149fde0",
      "rating": 1,
      "name": "Palomino - Vargas",
      "contact": {
          "site": "http://abigail.mx",
          "email": "Cecilia_Zabaleta76@nearbpo.com",
          "phone": "566.689.802"
      },
      "address": {
          "street": "396 Abreu Bloque",
          "city": "Kortajarenaside",
          "state": "Quintana Roo",
          "location": {
              "lat": 19.434472053968822,
              "lng": -99.13177862952965
          }
      }
  },
  {
      "id": "cc9c245d-8b02-44c3-868e-90a3149edd5b",
      "rating": 2,
      "name": "Vallejo, Jiménez and Jaimes",
      "contact": {
          "site": "https://alfredo.gob.mx",
          "email": "Ramn_Campos@nearbpo.com",
          "phone": "534 642 223"
      },
      "address": {
          "street": "9775 Amaya Cuesta",
          "city": "Valle de México Juanborough",
          "state": "Tlaxcala",
          "location": {
              "lat": 19.435657646344517,
              "lng": -99.12528320019402
          }
      }
  },
  {
      "id": "b6c3a6d0-4082-4353-926a-b903132b29f4",
      "rating": 4,
      "name": "Ramón Hermanos",
      "contact": {
          "site": "http://gloria.gob.mx",
          "email": "Abril.Yez@yahoo.com",
          "phone": "526.705.438"
      },
      "address": {
          "street": "41601 Lucia Manzana",
          "city": "Vallechester",
          "state": "Quintana Roo",
          "location": {
              "lat": 19.437348595278344,
              "lng": -99.12789598220063
          }
      }
  },
  {
      "id": "32084e1d-41b9-4dc8-9b8a-83b5003302c1",
      "rating": 2,
      "name": "Sáenz - Romo",
      "contact": {
          "site": "https://juan.gob.mx",
          "email": "Pablo_Alicea@yahoo.com",
          "phone": "523671866"
      },
      "address": {
          "street": "65816 Sergio Parque",
          "city": "Becerraport",
          "state": "Sonora",
          "location": {
              "lat": 19.439706773804975,
              "lng": -99.1294421685118
          }
      }
  },
  {
      "id": "5b04ad6d-54c1-419c-b8cd-69090fee4e76",
      "rating": 0,
      "name": "Ramos S.L.",
      "contact": {
          "site": "https://matías.gob.mx",
          "email": "Daniela_Castillo26@yahoo.com",
          "phone": "565166901"
      },
      "address": {
          "street": "919 Salvador Colonia",
          "city": "Ángel Gabrielfurt",
          "state": "Chiapas",
          "location": {
              "lat": 19.43285464782548,
              "lng": -99.13344355437242
          }
      }
  },
  {
      "id": "fdc12e77-af11-496a-846b-94068dcded56",
      "rating": 2,
      "name": "Aragón, Herrera and Cortez",
      "contact": {
          "site": "https://camila.com.mx",
          "email": "Victoria14@hotmail.com",
          "phone": "5359-320-036"
      },
      "address": {
          "street": "18089 Ramírez Partida",
          "city": "Los Mochis Carlachester",
          "state": "Jalisco",
          "location": {
              "lat": 19.43730960169156,
              "lng": -99.13168673798943
          }
      }
  },
  {
      "id": "39292d20-d201-4f0f-91a2-58e0f38fb2a2",
      "rating": 0,
      "name": "Carrillo - Ozuna",
      "contact": {
          "site": "https://carlos.mx",
          "email": "Armando82@yahoo.com",
          "phone": "515577461"
      },
      "address": {
          "street": "18190 Villagómez Ronda",
          "city": "Reynosa-Río Bravo Sofia",
          "state": "Colima",
          "location": {
              "lat": 19.442636402745737,
              "lng": -99.12821944947855
          }
      }
  }
    // Otros objetos...
  ];

  listaDeRestaurantes: RestaurantInterface[] = [];
  selectedValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input', { static: false }) input: any;


  displayedColumns: string[] = ['Calificacion', 'Nombre', 'Acciones'];
  dataSource = new MatTableDataSource<RestaurantInterface>(this.listaDeRestaurantes);
  
  constructor(private http:ServicesService, public dialog: MatDialog, private ModalDialog:RestaurantSelect) {
    this.FilterRating(5);
  }
  
  ngOnInit() {
  }
  
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private mapContact(contactObj: any): Contact {
    return {
      site: contactObj.site,
      email: contactObj.email,
      phone: contactObj.phone,
    };
  }

  private mapAddress(addressObj: any): Address {
    return {
      street: addressObj.street,
      city: addressObj.city,
      state: addressObj.state,
      location: this.mapLocation(addressObj.location),
    };
  }

  private mapLocation(locationObj: any): Location {
    return {
      lat: locationObj.lat,
      lng: locationObj.lng,
    };
  }
  FilterRating(listSelect:number){
    if (this.input) {
        this.input.value = '';
    }
    this.listaDeRestaurantes = [];
    if(listSelect === 5){
        this.objetosOriginales.forEach(objetoOriginal => {
            const restaurante: RestaurantInterface = {
              id: objetoOriginal.id,
              rating: objetoOriginal.rating,
              name: objetoOriginal.name,
              contact: this.mapContact(objetoOriginal.contact),
              address: this.mapAddress(objetoOriginal.address),
            };
        this.listaDeRestaurantes.push(restaurante);
        });
    }else{
        this.listaDeRestaurantes = this.getRestaurantesPorRating(listSelect);
    }
    this.dataSource = new MatTableDataSource<RestaurantInterface>(this.listaDeRestaurantes);
    this.ngAfterViewInit();
  }
  redirigirAMapa(lat: number, lng: number) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  }
  getRestaurantesPorRating(rating: number): RestaurantInterface[] {
    const restaurantesFiltrados = this.objetosOriginales.filter(
      restaurante => restaurante.rating === rating
    );
  
    const listaFiltrada: RestaurantInterface[] = restaurantesFiltrados.map(objetoOriginal => ({
      id: objetoOriginal.id,
      rating: objetoOriginal.rating,
      name: objetoOriginal.name,
      contact: this.mapContact(objetoOriginal.contact),
      address: this.mapAddress(objetoOriginal.address),
    }));
  
    return listaFiltrada;
  }
  openDialog(restaurantSelet:any) {
    this.ModalDialog.miVariable = restaurantSelet;
    this.dialog.open(DialogModalComponent);
  }

}

