const pistas = [
  {
    local: "Bahrain",
    imagens: {
      bandeira: "bahrain.png",
      pista: "bahrain.png",
    },
    info: {
      nome: "Circuito Internacional do Bahrain",
      primeiro_gp: "2004",
      num_voltas: "57",
      comp_circuito: "5,412 km",
      dist_corrida: "308,238 km",
      volta_record: "1:31.447 Pedro de la Rosa (2005)"
    }
  },
  {
    local: "Arábia Saudita",
    imagens: {
      bandeira: "arabia_saudita.png",
      pista: "arabia_saudita.png",
    },
    info: {
      nome: "Circuito Urbano de Jeddah",
      primeiro_gp: "2021",
      num_voltas: "50",
      comp_circuito: "6,174 km",
      dist_corrida: "308,045 km",
      volta_record: "1:20.734 Lewis Hamilton (2021)"
    }
  },
  {
    local: "Austrália",
    imagens: {
      bandeira: "australia.png",
      pista: "australia.png",
    },
    info: {
      nome: "Circuito do Grande Prêmio de Melbourne",
      primeiro_gp: "1996",
      num_voltas: "58",
      comp_circuito: "5,303 km",
      dist_corrida: "307,574 km",
      volta_record: "1:24.125 Michael Schumacher (2004)"
    }
  },
  {
    local: "Itália",
    imagens: {
      bandeira: "italia.png",
      pista: "italia.png",
    },
    info: {
      nome: "Autódromo Enzo e Dino Ferrari",
      primeiro_gp: "1980",
      num_voltas: "63",
      comp_circuito: "4,909 km",
      dist_corrida: "309,049 km",
      volta_record: "1:15.484 Lewis Hamilton (2020)"
    }
  },
  {
    local: "Estados Unidos",
    imagens: {
      bandeira: "estados_unidos.png",
      pista: "estados_unidos2.png",
    },
    info: {
      nome: "Autódromo Internacional de Miami",
      primeiro_gp: "2022",
      num_voltas: "57",
      comp_circuito: "5,041 km",
      dist_corrida: "308,037 km",
      volta_record: "Nenhuma"
    }
  },
  {
    local: "Espanha",
    imagens: {
      bandeira: "espanha.png",
      pista: "espanha.png",
    },
    info: {
      nome: "Circuito de Barcelona-Catalunya",
      primeiro_gp: "1991",
      num_voltas: "66",
      comp_circuito: "4,675 km",
      dist_corrida: "308,424 km",
      volta_record: "1:18.149 Max Verstappen (2021)"
    }
  },
  {
    local: "Mônaco",
    imagens: {
      bandeira: "monaco.png",
      pista: "monaco.png",
    },
    info: {
      nome: "Circuito de Mônaco",
      primeiro_gp: "1950",
      num_voltas: "78",
      comp_circuito: "3,337 km",
      dist_corrida: "260,286 km",
      volta_record: "1:12.909 Lewis Hamilton (2021)"
    }
  },
  {
    local: "Azerbaijão",
    imagens: {
      bandeira: "azerbaijao.png",
      pista: "azerbaijao.png",
    },
    info: {
      nome: "Circuito Urbano de Baku",
      primeiro_gp: "2016",
      num_voltas: "51",
      comp_circuito: "6,003 km",
      dist_corrida: "306,049 km",
      volta_record: "1:43.009 Charles Leclerc (2019)"
    }
  },
  {
    local: "Canadá",
    imagens: {
      bandeira: "canada.png",
      pista: "canada.png",
    },
    info: {
      nome: "Circuito Gilles-Villeneuve",
      primeiro_gp: "1978",
      num_voltas: "70",
      comp_circuito: "4,361 km",
      dist_corrida: "305,027 km",
      volta_record: "1:13.078 Valtteri Bottas (2019)"
    }
  },
  {
    local: "Grã Bretanha",
    imagens: {
      bandeira: "gra_bretanha.png",
      pista: "gra_bretanha.png",
    },
    info: {
      nome: "Circuito de Silverstone",
      primeiro_gp: "1950",
      num_voltas: "52",
      comp_circuito: "5,891 km",
      dist_corrida: "306,198 km",
      volta_record: "1:27.097 Max Verstappen (2020)"
    }
  },
  {
    local: "Áustria",
    imagens: {
      bandeira: "austria.png",
      pista: "austria.png",
    },
    info: {
      nome: "Red Bull Ring",
      primeiro_gp: "1970",
      num_voltas: "71",
      comp_circuito: "4,318 km",
      dist_corrida: "306,452 km",
      volta_record: "1:05.619 Carlos Sainz (2020)"
    }
  },
  {
    local: "França",
    imagens: {
      bandeira: "franca.png",
      pista: "franca.png",
    },
    info: {
      nome: "Circuito Paul Ricard",
      primeiro_gp: "1971",
      num_voltas: "53",
      comp_circuito: "5,842 km",
      dist_corrida: "309,069 km",
      volta_record: "1:32.740 Sebastian Vettel (2019)"
    }
  },
  {
    local: "Hungria",
    imagens: {
      bandeira: "hungria.png",
      pista: "hungria.png",
    },
    info: {
      nome: "Hungaroring",
      primeiro_gp: "1986",
      num_voltas: "70",
      comp_circuito: "4,381 km",
      dist_corrida: "306,063 km",
      volta_record: "1:16.627 Lewis Hamilton (2020)"
    }
  },
  {
    local: "Bélgica",
    imagens: {
      bandeira: "belgica.png",
      pista: "belgica.png",
    },
    info: {
      nome: "Circuito de Spa-Francorchamps",
      primeiro_gp: "1950",
      num_voltas: "44",
      comp_circuito: "7,004 km",
      dist_corrida: "308,052 km",
      volta_record: "1:46.286 Valtteri Bottas (2018)"
    }
  },
  {
    local: "Países Baixos",
    imagens: {
      bandeira: "paises_baixos.png",
      pista: "paises_baixos.png",
    },
    info: {
      nome: "Circuito Zandvoort",
      primeiro_gp: "1952",
      num_voltas: "72",
      comp_circuito: "4,259 km",
      dist_corrida: "306,648 km",
      volta_record: "1:11.097 Lewis Hamilton (2021)"
    }
  },
  {
    local: "Itália",
    imagens: {
      bandeira: "italia.png",
      pista: "italia2.png",
    },
    info: {
      nome: "Autódromo Nacional de Monza",
      primeiro_gp: "1950",
      num_voltas: "53",
      comp_circuito: "5,793 km",
      dist_corrida: "306,072 km",
      volta_record: "1:21.046 Rubens Barrichello (2004)"
    }
  },
  {
    local: "Singapura",
    imagens: {
      bandeira: "singapura.png",
      pista: "singapura.png",
    },
    info: {
      nome: "Circuito Urbano de Manina Bay",
      primeiro_gp: "2008",
      num_voltas: "61",
      comp_circuito: "5,063 km",
      dist_corrida: "308,706 km",
      volta_record: "1:41.905 Kevin Magnussen (2018)"
    }
  },
  {
    local: "Japão",
    imagens: {
      bandeira: "japao.png",
      pista: "japao.png",
    },
    info: {
      nome: "Circuito de Suzuka",
      primeiro_gp: "1987",
      num_voltas: "53",
      comp_circuito: "5,807 km",
      dist_corrida: "307,471 km",
      volta_record: "1:30.983 Lewis Hamilton (2019)"
    }
  },
  {
    local: "Estados Unidos",
    imagens: {
      bandeira: "estados_unidos.png",
      pista: "estados_unidos.png",
    },
    info: {
      nome: "Circuito das Américas",
      primeiro_gp: "2012",
      num_voltas: "56",
      comp_circuito: "5,513 km",
      dist_corrida: "308,405 km",
      volta_record: "1:36.169 Charles Leclerc (2019)"
    }
  },
  {
    local: "México",
    imagens: {
      bandeira: "mexico.png",
      pista: "mexico.png",
    },
    info: {
      nome: "Autódromo Hermanos Rodríguez",
      primeiro_gp: "1963",
      num_voltas: "71",
      comp_circuito: "4,304 km",
      dist_corrida: "305,354 km",
      volta_record: "1:17.774 Valtteri Bottas (2021)"
    }
  },
  {
    local: "Brasil",
    imagens: {
      bandeira: "brasil.png",
      pista: "brasil.png",
    },
    info: {
      nome: "Autódromo José Carlos Pace",
      primeiro_gp: "1973",
      num_voltas: "71",
      comp_circuito: "4,309 km",
      dist_corrida: "305,909 km",
      volta_record: "1:10.540 Valtteri Bottas (2018)"
    }
  },
  {
    local: "Abu Dhabi",
    imagens: {
      bandeira: "abu_dhabi.png",
      pista: "abu_dhabi.png",
    },
    info: {
      nome: "Circuito Yas Marina",
      primeiro_gp: "2009",
      num_voltas: "55",
      comp_circuito: "5,554 km",
      dist_corrida: "305,355 km",
      volta_record: "1:26.103 Max Verstappen (2021)"
    }
  },  
]

const pilotos = [
  {
    piloto: {
      nome: "Lewis",
      sobrenome: "Hamilton",
      numero: "44"
    },
    foto: "hamilton.png",
    info: {
      equipe: "Mercedes",
      pais: "Reino Unido",
      podios: "182",
      mundiais: "7",
      nascimento: "07/01/1985"
    }
  },
  {
    piloto: {
      nome: "Max",
      sobrenome: "Verstappen",
      numero: "1"
    },
    foto: "verstappen.png",
    info: {
      equipe: "Red Bull Racing",
      pais: "Países Baixos",
      podios: "60",
      mundiais: "1",
      nascimento: "30/09/1997"
    }
  },
  {
    piloto: {
      nome: "Charles",
      sobrenome: "Leclerc",
      numero: "16"
    },
    foto: "leclerc.png",
    info: {
      equipe: "Ferrari",
      pais: "Mônaco",
      podios: "13",
      mundiais: "Nenhum",
      nascimento: "16/10/1997"
    }
  },
  {
    piloto: {
      nome: "Daniel",
      sobrenome: "Ricciardo",
      numero: "3"
    },
    foto: "riccardo.png",
    info: {
      equipe: "McLaren",
      pais: "Austrália",
      podios: "32",
      mundiais: "Nenhum",
      nascimento: "01/07/1989"
    }
  },
  {
    piloto: {
      nome: "Fernando",
      sobrenome: "Alonso",
      numero: "14"
    },
    foto: "alonso.png",
    info: {
      equipe: "Alpine",
      pais: "Espanha",
      podios: "98",
      mundiais: "2",
      nascimento: "29/07/1981"
    }
  },
  {
    piloto: {
      nome: "Pierre",
      sobrenome: "Gasly",
      numero: "10"
    },
    foto: "gasly.png",
    info: {
      equipe: "AlphaTauri",
      pais: "França",
      podios: "3",
      mundiais: "Nenhum",
      nascimento: "07/02/1996"
    }
  },
  {
    piloto: {
      nome: "Sebastian",
      sobrenome: "Vettel",
      numero: "5"
    },
    foto: "vettel.png",
    info: {
      equipe: "Aston Martin",
      pais: "Alemanha",
      podios: "122",
      mundiais: "4",
      nascimento: "03/07/1987"
    }
  },
  {
    piloto: {
      nome: "Nicholas",
      sobrenome: "Latifi",
      numero: "6"
    },
    foto: "latifi.png",
    info: {
      equipe: "Williams",
      pais: "Canadá",
      podios: "Nenhum",
      mundiais: "Nenhum",
      nascimento: "29/06/1995"
    }
  },
  {
    piloto: {
      nome: "Valtteri",
      sobrenome: "Bottas",
      numero: "77"
    },
    foto: "bottas.png",
    info: {
      equipe: "Alfa Romeo",
      pais: "Finlândia",
      podios: "67",
      mundiais: "Nenhum",
      nascimento: "28/08/1989"
    }
  },
  {
    piloto: {
      nome: "Mick",
      sobrenome: "Schumacher",
      numero: "47"
    },
    foto: "schumacher.png",
    info: {
      equipe: "Haas F1 Team",
      pais: "Alemanha",
      podios: "Nenhum",
      mundiais: "Nenhum",
      nascimento: "22/03/1999"
    }
  },
  {
    piloto: {
      nome: "George",
      sobrenome: "Russell",
      numero: "63"
    },
    foto: "russell.png",
    info: {
      equipe: "Mercedes",
      pais: "Reino Unido",
      podios: "1",
      mundiais: "Nenhum",
      nascimento: "15/02/1998"
    }
  },
  {
    piloto: {
      nome: "Sergio",
      sobrenome: "Perez",
      numero: "11"
    },
    foto: "perez.png",
    info: {
      equipe: "Red Bull Racing",
      pais: "México",
      podios: "15",
      mundiais: "Nenhum",
      nascimento: "26/01/1990"
    }
  },
  {
    piloto: {
      nome: "Carlos",
      sobrenome: "Sainz",
      numero: "55"
    },
    foto: "sainz.png",
    info: {
      equipe: "Ferrari",
      pais: "Espanha",
      podios: "6",
      mundiais: "Nenhum",
      nascimento: "01/09/1994"
    }
  },
  {
    piloto: {
      nome: "Lando",
      sobrenome: "Norris",
      numero: "4"
    },
    foto: "norris.png",
    info: {
      equipe: "McLaren",
      pais: "Reino Unido",
      podios: "5",
      mundiais: "Nenhum",
      nascimento: "13/11/1999"
    }
  },
  {
    piloto: {
      nome: "Esteban",
      sobrenome: "Ocon",
      numero: "31"
    },
    foto: "ocon.png",
    info: {
      equipe: "Alpine",
      pais: "França",
      podios: "2",
      mundiais: "Nenhum",
      nascimento: "17/09/1996"
    }
  },
  {
    piloto: {
      nome: "Yuki",
      sobrenome: "Tsunoda",
      numero: "22"
    },
    foto: "tsunoda.png",
    info: {
      equipe: "AlphaTauri",
      pais: "Japão",
      podios: "Nenhum",
      mundiais: "Nenhum",
      nascimento: "11/05/2000"
    }
  },
  {
    piloto: {
      nome: "Lance",
      sobrenome: "Stroll",
      numero: "18"
    },
    foto: "stroll.png",
    info: {
      equipe: "Aston Martin",
      pais: "Canadá",
      podios: "3",
      mundiais: "Nenhum",
      nascimento: "29/10/1998"
    }
  },
  {
    piloto: {
      nome: "Alexander",
      sobrenome: "Albon",
      numero: "23"
    },
    foto: "albon.png",
    info: {
      equipe: "Willians",
      pais: "Tailândia",
      podios: "2",
      mundiais: "Nenhum",
      nascimento: "23/03/1996"
    }
  },
  {
    piloto: {
      nome: "Guanyu",
      sobrenome: "Zhou",
      numero: "24"
    },
    foto: "zhou.png",
    info: {
      equipe: "Alfa Romeo",
      pais: "China",
      podios: "Nenhum",
      mundiais: "Nenhum",
      nascimento: "30/05/1999"
    }
  },
  {
    piloto: {
      nome: "Kevin",
      sobrenome: "Magnussen",
      numero: "20"
    },
    foto: "magnussen.png",
    info: {
      equipe: "Haas F1 Team",
      pais: "Dinamarca",
      podios: "1",
      mundiais: "Nenhum",
      nascimento: "05/10/1992"
    }
  },
]

const equipes = [
  {
    nome: "Mercedes",
    imagens: {
      logo: "mercedes.png",
      carro: "mercedes.png"
    },
    info: {
      nomeCompleto: "Mercedes-AMG Petronas Formula One Team",
      chefe: "Toto Wolff",
      estreia: "1970",
      mundiais: "8",
      motor: "Mercedes",
      base: "Brackley, Reino Unido"
    },
    pilotos: {
      primeiro: "Lewis Hamilton",
      segundo: "George Russell"
    }
  },
  {
    nome: "Red Bull",
    imagens: {
      logo: "redbull.png",
      carro: "redbull.png"
    },
    info: {
      nomeCompleto: "Red Bull Racing",
      chefe: "Christian Horner",
      estreia: "1997",
      mundiais: "4",
      motor: "Red Bull Motores",
      base: "Milton Keynes, Reino Unido"
    },
    pilotos: {
      primeiro: "Max Verstappen",
      segundo: "Sergio Perez"
    }
  },
  {
    nome: "Ferrari",
    imagens: {
      logo: "ferrari.png",
      carro: "ferrari.png"
    },
    info: {
      nomeCompleto: "Scuderia Ferrari",
      chefe: "Mattia Binotto",
      estreia: "1950",
      mundiais: "16",
      motor: "Ferrari",
      base: "Maranello, Itália"
    },
    pilotos: {
      primeiro: "Charles Leclerc",
      segundo: "Carlos Sainz"
    }
  },
  {
    nome: "McLaren",
    imagens: {
      logo: "mclaren.png",
      carro: "mclaren.png"
    },
    info: {
      nomeCompleto: "McLaren F1 Team",
      chefe: "Andreas Seidl",
      estreia: "1966",
      mundiais: "8",
      motor: "Mercedes",
      base: "Woking, Reino Unido"
    },
    pilotos: {
      primeiro: "Daniel Riccardo",
      segundo: "Lando Norris"
    }
  },
  {
    nome: "Alpine",
    imagens: {
      logo: "alpine.png",
      carro: "alpine.png"
    },
    info: {
      nomeCompleto: "Alpine F1 Team",
      chefe: "Otmar Szafnauer",
      estreia: "1986",
      mundiais: "2",
      motor: "Renault",
      base: "Enstone, Reino Unido"
    },
    pilotos: {
      primeiro: "Fernando Alonso",
      segundo: "Esteban Ocon"
    }
  },
  {
    nome: "AlphaTauri",
    imagens: {
      logo: "alphatauri.png",
      carro: "alphatauri.png"
    },
    info: {
      nomeCompleto: "Scuderia AlphaTauri",
      chefe: "Franz Tost",
      estreia: "1985",
      mundiais: "Nenhum",
      motor: "Red Bull Motores",
      base: "Faenza, Itália"
    },
    pilotos: {
      primeiro: "Pierre Gasly",
      segundo: "Yuki Tsunoda"
    }
  },
  {
    nome: "Aston Martin",
    imagens: {
      logo: "astonmartin.png",
      carro: "astonmartin.png"
    },
    info: {
      nomeCompleto: "Aston Martin Cognizant Formula One Team",
      chefe: "Mike Krack",
      estreia: "2018",
      mundiais: "Nenhum",
      motor: "Mercedes",
      base: "Silverstone, Reino Unido"
    },
    pilotos: {
      primeiro: "Sebastian Vettel",
      segundo: "Lance Stroll"
    }
  },
  {
    nome: "Williams",
    imagens: {
      logo: "williams.png",
      carro: "williams.png"
    },
    info: {
      nomeCompleto: "Williams Racing",
      chefe: "Jost Capito",
      estreia: "1978",
      mundiais: "9",
      motor: "Mercedes",
      base: "Grove, Reino Unido"
    },
    pilotos: {
      primeiro: "Nicholas Latifi",
      segundo: "Alexander Albon"
    }
  },
  {
    nome: "Alfa Romeo",
    imagens: {
      logo: "alfaromeo.png",
      carro: "alfaromeo.png"
    },
    info: {
      nomeCompleto: "Alfa Romeo F1 Team ORLEN",
      chefe: "Frédéric Vasseur",
      estreia: "1993",
      mundiais: "Nenhum",
      motor: "Ferrari",
      base: "Hinwil, Suíça"
    },
    pilotos: {
      primeiro: "Valtteri Bottas",
      segundo: "Guanyu Zhou"
    }
  },
  {
    nome: "Haas",
    imagens: {
      logo: "haas.png",
      carro: "haas.png"
    },
    info: {
      nomeCompleto: "Uralkali Haas F1 Team",
      chefe: "Guenther Steiner",
      estreia: "2016",
      mundiais: "Nenhum",
      motor: "Ferrari",
      base: "Kannapolis, Estados Unidos"
    },
    pilotos: {
      primeiro: "Mick Schumacher",
      segundo: "Kevin Magnussen"
    }
  },
]
