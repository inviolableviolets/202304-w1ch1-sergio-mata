const questions = [
  {
    letter: "a",
    answer: ["ahorrar", "alcachofa", "abducir"],
    status: 0,
    question: [
      "CON LA A <span class='arrow'>&#10162;</span> Guardar dinero como previsión para necesidades futuras.",
      "CON LA A <span class='arrow'>&#10162;</span> Planta comestible de hojas verdes que también se encuentra en la ducha.",
      "CON LA A <span class='arrow'><span class='arrow'>&#10162;</span></span> Dicho de una supuesta criatura extraterrestre: apoderarse de alguien.",
    ],
  },
  {
    letter: "b",
    answer: ["beca", "bache", "bingo"],
    status: 0,
    question: [
      "CON LA B <span class='arrow'>&#10162;</span> Subvención para realizar estudios o investigaciones.",
      "CON LA B <span class='arrow'>&#10162;</span> Pequeño desnivel en el suelo o en el pavimento que causa un peligro en la conducción por carretera.",
      "CON LA B <span class='arrow'>&#10162;</span> Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    ],
  },
  {
    letter: "c",
    answer: ["careta", "culpar", "churumbel"],
    status: 0,
    question: [
      "CON LA C <span class='arrow'>&#10162;</span> Pieza de cartón o plástico que sirve para taparse la cara. Se usa especialmente en fiestas.",
      "CON LA C <span class='arrow'>&#10162;</span> Atribuir la responsabilidad de algo a alguien",
      "CON LA C <span class='arrow'>&#10162;</span> Niño, crío, bebé.",
    ],
  },
  {
    letter: "d",
    answer: ["diarrea", "delantal", "despojar"],
    status: 0,
    question: [
      "CON LA D <span class='arrow'>&#10162;</span> Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.",
      "CON LA D <span class='arrow'>&#10162;</span> Prenda que se pone por encima de la ropa y que generalmente sirve para no mancharla al cocinar.",
      "CON LA D <span class='arrow'>&#10162;</span> Quitar algo a una cosa. Privar a una persona de lo que tiene, generalmente con violencia o jurídicamente.",
    ],
  },
  {
    letter: "e",
    answer: ["esqueleto", "ectoplasma", "empujar"],
    status: 0,
    question: [
      "CON LA E <span class='arrow'>&#10162;</span> Conjunto de huesos de un vertebrado.",
      "CON LA E <span class='arrow'>&#10162;</span> Materia gelatinosa que se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.",
      "CON LA E <span class='arrow'>&#10162;</span> Hacer fuerza contra algo para moverlo.",
    ],
  },
  {
    letter: "f",
    answer: ["flequillo", "frenar", "flojo"],
    status: 0,
    question: [
      "CON LA F <span class='arrow'>&#10162;</span> Parte del cabello que cae sobre la frente.",
      "CON LA F <span class='arrow'>&#10162;</span> Moderar o parar el movimiento de algo.",
      "CON LA F <span class='arrow'>&#10162;</span> Que está mal atado, poco apretado, ajustado o tirante.",
    ],
  },
  {
    letter: "g",
    answer: ["galaxia", "gajo", "grupo"],
    status: 0,
    question: [
      "CON LA G <span class='arrow'>&#10162;</span> Conjunto enorme de estrellas, polvo interestelar, gases y partículas.",
      "CON LA G <span class='arrow'>&#10162;</span> Porción o parte individual en la que están divididas algunas frutas como la mandarina.",
      "CON LA G <span class='arrow'>&#10162;</span> Pluralidad de seres o cosas que forman un conjunto.",
    ],
  },
  {
    letter: "h",
    answer: ["huelga", "harakiri", "hebilla"],
    status: 0,
    question: [
      "CON LA H <span class='arrow'>&#10162;</span> Interrupción colectiva de la actividad laboral por parte de los trabajadores con el fin de reivindicar ciertas condiciones o manifestar una protesta.",
      "CON LA H <span class='arrow'>&#10162;</span> Suicidio ritual japonés por desentrañamiento.",
      "CON LA H <span class='arrow'>&#10162;</span> Pieza metálica que sirve de cierre para bolsos o cinturones.",
    ],
  },
  {
    letter: "i",
    answer: ["iceberg", "imperdible", "iglesia"],
    status: 0,
    question: [
      "CON LA I <span class='arrow'>&#10162;</span> Tipo de lechuga o gran masa de hielo que flota en océano.",
      "CON LA I <span class='arrow'>&#10162;</span> Alfiler que se abrocha quedando su punta dentro de un gancho.",
      "CON LA I <span class='arrow'>&#10162;</span> Templo cristiano.",
    ],
  },
  {
    letter: "j",
    answer: ["jinete", "jabato", "jubilado"],
    status: 0,
    question: [
      "CON LA J <span class='arrow'>&#10162;</span> Persona que monta a lomos de un animal.",
      "CON LA J <span class='arrow'>&#10162;</span> Cría de jabalí.",
      "CON LA J <span class='arrow'>&#10162;</span> Persona que ha dejado de trabajar y percibe una pensión.",
    ],
  },
  {
    letter: "k",
    answer: ["koala", "kamikaze", "kilo"],
    status: 0,
    question: [
      "CON LA K <span class='arrow'>&#10162;</span> Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos.",
      "CON LA K <span class='arrow'>&#10162;</span> Persona que se juega la vida realizando una acción temeraria.",
      "CON LA K <span class='arrow'>&#10162;</span> Medida de peso que equivale a 1000 gramos.",
    ],
  },
  {
    letter: "l",
    answer: ["lanzar", "liberar", "lazo"],
    status: 0,
    question: [
      "CON LA L <span class='arrow'>&#10162;</span> Arrojar un objeto con fuerza.",
      "CON LA L <span class='arrow'>&#10162;</span> Hacer que alguien o algo quede libre. Eximir a alguien de una obligación.",
      "CON LA L <span class='arrow'>&#10162;</span> Cinta anudada que sirve para atar o adornar.",
    ],
  },
  {
    letter: "m",
    answer: ["moraleja", "manada", "mantel"],
    status: 0,
    question: [
      "CON LA M <span class='arrow'>&#10162;</span> Enseñanza al final de una fábula.",
      "CON LA M <span class='arrow'>&#10162;</span> Grupo de animales de una misma especie que andan o viven en grupo.",
      "CON LA M <span class='arrow'>&#10162;</span> Pieza de tela con la que se cubre la mesa durante las comidas.",
    ],
  },
  {
    letter: "n",
    answer: ["necedad", "nacionalidad", "nuez"],
    status: 0,
    question: [
      "CON LA N <span class='arrow'>&#10162;</span> Demostración de poca inteligencia.",
      "CON LA N <span class='arrow'>&#10162;</span> Estado propio de la persona nacida o naturalizada en una nación.",
      "CON LA N <span class='arrow'>&#10162;</span> Fruto comestible del nogal, cuya cáscara es dura y rugosa.",
    ],
  },
  {
    letter: "ñ",
    answer: ["señal", "sueño", "pezuña"],
    status: 0,
    question: [
      "CONTIENE LA Ñ <span class='arrow'>&#10162;</span> Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      "CONTIENE LA Ñ <span class='arrow'>&#10162;</span> Somnolencia. Representación en la fantasía de imágenes o sucesos mientras se duerme.",
      "CONTIENE LA Ñ <span class='arrow'>&#10162;</span> Conjunto de dedos de una misma pata, cubiertos con un casco en los animales cuadrúpedos de pata hendida.",
    ],
  },
  {
    letter: "o",
    answer: ["olivo", "orquesta", "oculista"],
    status: 0,
    question: [
      "CON LA O <span class='arrow'>&#10162;</span> Árbol de tronco corto y grueso cuyo fruto es la aceituna.",
      "CON LA O <span class='arrow'>&#10162;</span> Conjunto de instrumentistas que interpretan obras musicales, sinfónicas o de cámara, siguiendo las indicaciones de un director, normalmente en auditorios.",
      "CON LA O <span class='arrow'>&#10162;</span> Médico especialista en oftalmología.",
    ],
  },
  {
    letter: "p",
    answer: ["promover", "planchar", "pompa"],
    status: 0,
    question: [
      "CON LA P <span class='arrow'>&#10162;</span> Iniciar o impulsar una idea o proyecto procurando su logro.",
      "CON LA P <span class='arrow'>&#10162;</span> Quitar las arrugas a una prenda, generalmente mediante vapor de agua.",
      "CON LA P <span class='arrow'>&#10162;</span> Esfera transparente de jabón, llena de aire.",
    ],
  },
  {
    letter: "q",
    answer: ["queso", "delinquir", "quicio"],
    status: 0,
    question: [
      "CON LA Q <span class='arrow'>&#10162;</span> Producto obtenido por la maduración de la cuajada de la leche.",
      "CONTIENE LA Q <span class='arrow'>&#10162;</span> Cometer un delito.",
      "CON LA Q <span class='arrow'>&#10162;</span> Ángulo formado por la hoja de una puerta o de una ventana y la parte del muro en que están las bisagras.",
    ],
  },
  {
    letter: "r",
    answer: ["recreo", "recuperar", "rebosar"],
    status: 0,
    question: [
      "CON LA R <span class='arrow'>&#10162;</span> Intervalo entre clases en los colegios para que los niños se distraigan o descansen.",
      "CON LA R <span class='arrow'>&#10162;</span> Volver a tener lo que antes se poseía.",
      "CON LA R <span class='arrow'>&#10162;</span> Salirse un líquido por encima de los bordes del recipiente que lo contiene.",
    ],
  },
  {
    letter: "s",
    answer: ["silbato", "sombra", "soplete"],
    status: 0,
    question: [
      "CON LA S <span class='arrow'>&#10162;</span> Objeto pequeño y hueco que produce un sonido agudo cuando se sopla por él.",
      "CON LA S <span class='arrow'>&#10162;</span> Imagen oscura que proyecta un cuerpo opaco sobre una superficie al interceptar los rayos de luz.",
      "CON LA S <span class='arrow'>&#10162;</span> Instrumento para soldar piezas de metal y para trabajar el vidrio.",
    ],
  },
  {
    letter: "t",
    answer: ["terminator", "tiza", "tronco"],
    status: 0,
    question: [
      "CON LA T <span class='arrow'>&#10162;</span> Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.",
      "CON LA T <span class='arrow'>&#10162;</span> Arcilla blanca, arenosa y blanda que se utiliza para escribir en un pizarra.",
      "CON LA T <span class='arrow'>&#10162;</span> Tallo central leñoso, fuerte y macizo de los árboles y arbustos.",
    ],
  },
  {
    letter: "u",
    answer: ["ukelele", "ubre", "ultrasonido"],
    status: 0,
    question: [
      "CON LA U <span class='arrow'>&#10162;</span> Instrumento musical de cuerpo parecido a la guitarra pero de menor tamaño y con cuatro cuerdas.",
      "CON LA U <span class='arrow'>&#10162;</span> Teta de la hembra, en un animal mamífero.",
      "CON LA U <span class='arrow'>&#10162;</span> Vibración mecánica de frecuencia superior a la de las que puede percibir el oído.",
    ],
  },
  {
    letter: "v",
    answer: ["vikingos", "ventosa", "velero"],
    status: 0,
    question: [
      "CON LA V <span class='arrow'>&#10162;</span> Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "CON LA V <span class='arrow'>&#10162;</span> Pieza cóncava de material elástico que se adhiere fuertemente a una superficie lisa por presión, al producirse el vacío en su interior.",
      "CON LA V <span class='arrow'>&#10162;</span> Embarcación que se mueve por medio de una o más velas.",
    ],
  },
  {
    letter: "w",
    answer: ["whisky", "waterpolo", "wolframio"],
    status: 0,
    question: [
      "CON LA W <span class='arrow'>&#10162;</span> Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales.",
      "CON LA W <span class='arrow'>&#10162;</span> Deporte que se practica en una piscina y en el que se enfrentan dos equipos de siete nadadores.",
      "CON LA W <span class='arrow'>&#10162;</span> Elemento químico de número atómico 74 y símbolo W.",
    ],
  },
  {
    letter: "x",
    answer: ["excelente", "botox", "xenofobia"],
    status: 0,
    question: [
      "CONTIENE LA X <span class='arrow'>&#10162;</span> Que es muy bueno o que sobresale en alguna cualidad con respecto a otras cosas de su misma especie.",
      "CONTIENE LA X <span class='arrow'>&#10162;</span> Toxina bacteriana utilizada en cirugía estética.",
      "CON LA X <span class='arrow'>&#10162;</span> Rechazo a los extranjeros.",
    ],
  },
  {
    letter: "y",
    answer: ["yugular", "peyote", "yunque"],
    status: 0,
    question: [
      "CON LA Y <span class='arrow'>&#10162;</span> Vena que se encuentra a uno y otro lado del cuello y que recoge la mayor parte de la sangre del cerebro.",
      "CONTIENE LA Y <span class='arrow'>&#10162;</span> Planta cactácea no espinosa, de pequeño tamaño y cubierta de pelos sedosos que contiene mescalina, alcaloide que produce efectos narcóticos.",
      "CON LA Y <span class='arrow'>&#10162;</span> Bloque de hierro, generalmente con uno de sus lados acabado en punta, sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo.",
    ],
  },
  {
    letter: "z",
    answer: ["zen", "zafiro", "zanja"],
    status: 0,
    question: [
      "CON LA Z <span class='arrow'>&#10162;</span> Sistema filosófico budista. Se caracteriza por potenciar la meditación.",
      "CON LA Z <span class='arrow'>&#10162;</span> Mineral compuesto de óxido de aluminio, de color azul y extraordinaria dureza, que se usa para tallar diamantes; es una variedad del corindón.",
      "CON LA Z <span class='arrow'>&#10162;</span> Excavación larga y estrecha que se hace en la tierra con diversos fines, como echar los cimientos de un edificio, colocar tuberías, permitir que corra el agua, etcétera.",
    ],
  },
];

let index = 0;
let round = 0;
let questionAsked = questions[index];
let positiveCount = 0;
let negativeCount = 0;
let timer = 3;
let timeout;

const positiveCounter = document.querySelector(".positive-count");
const negativeCounter = document.querySelector(".negative-count");
const form = document.querySelector(".questions");
const correctAnswerOverlay = document.querySelector(".correct-overlay");
const wrongAnswerOverlay = document.querySelector(".wrong-overlay");
const passOverlay = document.querySelector(".pass-overlay");
const darkOverlay = document.querySelector(".dark-overlay");
const confettiOverlay = document.querySelector(".confetti");
const modalInstructions = document.querySelector(".instructions");
const modalTimeover = document.querySelector(".timeover");
const modalCongratulations = document.querySelector(".congratulations");
const modalTryAgain = document.querySelector(".tryagain");
const modalCondolences = document.querySelector(".condolences");
const modalError = document.querySelector(".error");
const correctAnswer = document.querySelector(".correct-answer");
const pasapalabra = document.querySelector(".pass");
const wordField = document.querySelector(".user-answer");
const circles = document.querySelectorAll(".circle");
const closeButton = document.querySelector(".close-button");
const currentQuestion = document.querySelector(".current-question");
const rankings = document.querySelectorAll(".ranking");
const exitButtons = document.querySelectorAll(".exit");
const realExitButton = document.querySelector(".real-exit");
const retryButtons = document.querySelectorAll(".retry");
const hearts = document.querySelectorAll(".hearts");
const footer = document.querySelector("footer");
const modalEnd = document.querySelector(".end");
const cover = document.querySelector(".cover");
const pasapalabraCover = document.querySelector(".pasapalabra");

const coverFadeOut = () => {
  setTimeout(() => {
    cover.style.opacity = 0;
  }, 2700);
  setTimeout(() => {
    cover.style.opacity = 0;
  }, 5000);
  setTimeout(() => {
    pasapalabraCover.style.borderColor = "transparent";
  }, 2700);
  setTimeout(() => {
    pasapalabraCover.style.textShadow = "0 0 10px white";
  }, 2700);
  setTimeout(() => {
    cover.style.scale = 0;
  }, 5000);
};

coverFadeOut();

const getRanking = () => {
  const players = [
    { player: "Hilario", points: 20 },
    { player: "Paco el Borracho", points: -5 },
    { player: "Felipe González", points: 24 },
    { player: "Amparo", points: 9 },
    { player: "Johnny Pompino", points: 12 },
  ];

  let userRanking = { player: "Usted", points: positiveCount };
  players.push(userRanking);

  players.sort((a, b) => b.points - a.points);

  rankings.forEach((ranking) => {
    ranking.innerHTML = `
      Veamos en qué posición de nuestro ranking histórico se encuentra:<br><br>
      1#  ${players[0].player}, con ${players[0].points} puntos.<br>
      2#  ${players[1].player}, con ${players[1].points} puntos.<br>
      3#  ${players[2].player}, con ${players[2].points} puntos.<br>
      4#  ${players[3].player}, con ${players[3].points} puntos.<br>
      5#  ${players[4].player}, con ${players[4].points} puntos.<br>
      6#  ${players[5].player}, con ${players[5].points} puntos.<br><br>`;
  });
};

const loseLife = () => {
  const footer = document.querySelector("footer");
  footer.children[round].classList.add("heartless");
  round++;
};

const setTimer = () => {
  document.querySelector(".timer").innerHTML = timer;

  if (timer === 0) {
    loseLife();
    checkEndGame();
    document.querySelector(".timer").innerHTML = "•︵•";
    currentQuestion.innerHTML = "¡Se acabó el tiempo!";
    wordField.setAttribute("disabled", true);
    form.reset();
    getRanking();
    setTimeout(() => {
      darkOverlay.classList.remove("closed");
    }, 1800);
    setTimeout(() => {
      modalTimeover.classList.remove("closed");
    }, 2000);
    return;
  } else {
    timer--;
    timeout = setTimeout(setTimer, 1000);
  }
};

const closeWindow = () => {
  modalInstructions.classList.add("closed");
  darkOverlay.classList.add("closed");
  wordField.removeAttribute("disabled");
  setTimer();
  wordField.focus();
  currentQuestion.innerHTML = questions[index].question[round];
};

closeButton.addEventListener("click", closeWindow);

const nextQuestion = () => {
  circles[index].classList.remove("current-letter");
  let nextQuestionIndex = index + 1;

  while (nextQuestionIndex !== index) {
    if (nextQuestionIndex >= questions.length) {
      nextQuestionIndex = 0;
    }
    if (questions[nextQuestionIndex].status === 0) {
      index = nextQuestionIndex;
      questionAsked = questions[index];
      currentQuestion.innerHTML = questions[index].question[round];
      circles[index].classList.add("current-letter");
      return;
    }
    nextQuestionIndex++;
  }
};

const victoryEndGame = () => {
  loseLife();
  currentQuestion.innerHTML = "¡Impresionante!";
  wordField.setAttribute("disabled", true);
  form.reset();
  clearTimeout(timeout);
  document.querySelector(".timer").innerHTML = "♥";
  getRanking();
  setTimeout(() => {
    confettiOverlay.style.scale = 1;
  }, 2000);
  setTimeout(() => {
    confettiOverlay.style.opacity = 0.5;
  }, 1800);
  setTimeout(() => {
    modalCongratulations.classList.remove("closed");
  }, 2000);
};

const lameEndGame = () => {
  loseLife();
  currentQuestion.innerHTML = "Lamentable.";
  wordField.setAttribute("disabled", true);
  form.reset();
  clearTimeout(timeout);
  document.querySelector(".timer").innerHTML = "•︵•";
  getRanking();
  setTimeout(() => {
    darkOverlay.classList.remove("closed");
  }, 2800);
  setTimeout(() => {
    modalCondolences.classList.remove("closed");
  }, 3000);
};

const standardEndGame = () => {
  loseLife();
  currentQuestion.innerHTML = "¡Fin del juego!";
  wordField.setAttribute("disabled", true);
  form.reset();
  clearTimeout(timeout);
  document.querySelector(".timer").innerHTML = "•‿•";
  getRanking();
  setTimeout(() => {
    darkOverlay.classList.remove("closed");
  }, 2800);
  setTimeout(() => {
    modalTryAgain.classList.remove("closed");
  }, 3000);
};

const trueEndGame = () => {
  currentQuestion.innerHTML = "Ahora sí que sí, fin del juego.";
  wordField.setAttribute("disabled", true);
  form.reset();
  clearTimeout(timeout);
  document.querySelector(".timer").innerHTML = "•︵•";
  getRanking();
  setTimeout(() => {
    darkOverlay.classList.remove("closed");
  }, 2800);
  setTimeout(() => {
    modalEnd.classList.remove("closed");
  }, 3000);
};

const checkEndGame = () => {
  if (questions.every((question) => question.status === 1)) {
    victoryEndGame();
  } else if (questions.every((question) => question.status === 2)) {
    lameEndGame();
  } else if (!questions.some((question) => question.status === 0)) {
    standardEndGame();
  }
  if (round > 2 && !questions.every((question) => question.status === 1)) {
    trueEndGame();
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  answer = wordField.value.trim().toLowerCase();

  switch (answer) {
    case questions[index].answer[round]:
      questionAsked.status = 1;
      correctAnswerOverlay.classList.add("on");
      setTimeout(() => {
        correctAnswerOverlay.classList.remove("on");
      }, 500);
      circles.item(index).style.backgroundColor = "lime";
      positiveCount++;
      positiveCounter.textContent = positiveCount + "/27";
      form.reset();
      nextQuestion();
      checkEndGame();
      break;

    case "":
      questionAsked.status = 0;
      passOverlay.classList.add("on");
      setTimeout(() => {
        passOverlay.classList.remove("on");
      }, 500);
      form.reset();
      nextQuestion();
      break;

    default:
      circles.item(index).style.backgroundColor = "crimson";
      questionAsked.status = 2;
      wrongAnswerOverlay.classList.add("on");
      setTimeout(() => {
        wrongAnswerOverlay.classList.remove("on");
      }, 1800);
      wordField.setAttribute("disabled", true);
      if (questions.some((question) => question.status === 0)) {
        setTimeout(() => {
          wordField.removeAttribute("disabled");
        }, 2000);
        setTimeout(() => {
          wordField.focus();
        }, 2001);
      }
      modalError.classList.remove("closed");
      setTimeout(() => {
        modalError.classList.add("closed");
      }, 2000);
      document.querySelector(".timer").style.opacity = 0;
      document.querySelector(".pause").style.opacity = 1;
      timer = timer + 2;
      setTimeout(() => {
        document.querySelector(".timer").style.opacity = 1;
      }, 2000);
      setTimeout(() => {
        document.querySelector(".pause").style.opacity = 0;
      }, 2000);
      negativeCount++;
      negativeCounter.textContent = negativeCount + "/27";
      correctAnswer.innerHTML = questions[index].answer[round];
      form.reset();
      setTimeout(() => {
        nextQuestion();
      }, 2000);
      checkEndGame();
      break;
  }
};

form.addEventListener("submit", handleSubmit);

const handlePasapalabra = (event) => {
  event.preventDefault();
  form.reset();
  nextQuestion();
  wordField.focus();
};

pasapalabra.addEventListener("click", handlePasapalabra);

const restartGame = () => {
  modalCondolences.classList.add("closed");
  modalCongratulations.classList.add("closed");
  modalTimeover.classList.add("closed");
  modalTryAgain.classList.add("closed");
  darkOverlay.classList.add("closed");
  circles[index].classList.remove("current-letter");
  circles.forEach((circle) => {
    circle.style.backgroundColor = "rgb(90, 170, 200)";
  });
  index = 0;
  questionAsked = questions[index];
  positiveCount = 0;
  positiveCounter.textContent = "0/27";
  negativeCount = 0;
  negativeCounter.textContent = "0/27";
  circles[index].classList.add("current-letter");
  timer = 3;
  setTimer();
  wordField.focus();
  questions.forEach((question) => (question.status = 0));
  currentQuestion.innerHTML = questions[index].question[round];
};

retryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    wordField.removeAttribute("disabled");
    form.reset();
    restartGame();
  });
});

exitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=Aq-be7Y_yyY";
  });
});

realExitButton.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=PHGkI0Zyk8E";
});
