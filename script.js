let characters = [
    {
        Nombre: "Phil Dunphy",
        Sexo: "h",
        Edad: "43",
        Pelo: "Rubio",
        Familia: "Dumphy",
        Ocupacion: "Agencia Inmobiliaria",
        esPapa: "1"
    },
    {
        Nombre: "Claire Dunphy",
        Sexo: "m",
        Edad: "43",
        Pelo: "Rubio",
        Familia: "Dumphy",
        Ocupacion: "CEO de prichetts closets",
        esPapa: "1"
    },
    {
        Nombre: "Haley Dunphy",
        Sexo: "m",
        Edad: "26",
        Pelo: "Castaño",
        Familia: "Dumphy",
        Ocupacion: "Trabajadora de Nerp",
        esPapa: "1"
    },
    {
        Nombre: "Alex Dunphy",
        Sexo: "m",
        Edad: "23",
        Pelo: "Castaño",
        Familia: "Dumphy",
        Ocupacion: "Investigadora Cientifica",
        esPapa: "0"
    },
    {
        Nombre: "Luke Dunphy",
        Sexo: "h",
        Edad: "20",
        Pelo: "Castaño",
        Familia: "Dumphy",
        Ocupacion: "Estudiante de universidad",
        esPapa: "0"
    },
    {
        Nombre: "Mitch Pritchett",
        Sexo: "h",
        Edad: "43",
        Pelo: "Pelirojo",
        Familia: "Pritchett",
        Ocupacion: "Abogado",
        esPapa: "1"
    },
    {
        Nombre: "Cam Tucker",
        Sexo: "h",
        Edad: "43",
        Pelo: "Negro",
        Familia: "Tucker",
        Ocupacion: "Maestro",
        esPapa: "1"
    },
    {
        Nombre: "Lily",
        Sexo: "f",
        Edad: "13",
        Pelo: "Negro",
        Familia: "Tucker-Pritchett",
        Ocupacion: "Alumno",
        esPapa: "0"
    },
    {
        Nombre: "Gloria Pritchett",
        Sexo: "f",
        Edad: "40",
        Pelo: "Cafe",
        Familia: "Delgado-Pritchett",
        Ocupacion: "Casa",
        esPapa: "1"
    },
    {
        Nombre: "Jay Pritchett",
        Sexo: "h",
        Edad: "70",
        Pelo: "Negro",
        Familia: "Pritchett",
        Ocupacion: "Emprendedor",
        esPapa: "1"
    },
    {
        Nombre: "Manny Delgado",
        Sexo: "h",
        Edad: "21",
        Pelo: "Negro",
        Familia: "Delgado-Pritchett",
        Ocupacion: "Alumno",
        esPapa: "0"
    }
]



function cerrarVirus() {
    var inicio = document.getElementById("inicio");
    inicio.style.display = 'none';

    var main = document.getElementById("main");
    main.style.display = 'inline';
}

function cerrarMain() {
    var main = document.getElementById("main");
    main.style.display = 'none';

    var resultado = document.getElementById("resultado");
    resultado.style.display = 'inline';
}

document.addEventListener("DOMContentLoaded", function() {
    const storyContainer = document.getElementById("main");
    const storyText = document.getElementById("pregunta");
    const choicesContainer = document.getElementById("botones");

    let preguntas = [
        {
            question: "¿Tu personaje es mujer?",
            choices: [
                {text: "Si", nextQuestion: 1},
                {text: "No", nextQuestion: 2}
            ]
        },
        {
            question: "¿Tu personaje es mayor a 30?",
            choices: [
                {text: "Si", nextQuestion: 3},
                {text: "No", nextQuestion: 4}
            ]
        },
        {
            question: "¿Tu personaje es mayor a 30?",
            choices: [
                {text: "Si", nextQuestion: 5},
                {text: "No", nextQuestion: 6}
            ]
        },
        {
            question: "¿Tu perosnaje es de la familia Dunphy?",
            choices: [
                {text: "Si", nextQuestion: 10},
                {text: "No", nextQuestion: 11}
            ]
        },
        {
            question: "¿Tu perosnaje es de la familia Dunphy?",
            choices: [
                {text: "Si", nextQuestion: 7},
                {text: "No", nextQuestion: 4}
            ]
        },
        {
            question: "¿Tu perosnaje es de la familia Tucker?",
            choices: [
                {text: "Si", nextQuestion: 8},
                {text: "No", nextQuestion: 9}
            ]
        },
        {
            question: "¿Tu perosnaje es de la familia Dunphy?",
            choices: [
                {text: "Si", nextQuestion: 19},
                {text: "No", nextQuestion: 20}
            ]
        },
        {
            question: "¿Tu personaje tiene hijos?",
            choices: [
                {text: "Si", nextQuestion: 12},
                {text: "No", nextQuestion: 13}
            ]
        },
        {
            question: "¿Tu personaje es pelirrojo?",
            choices: [
                {text: "Si", nextQuestion: 15},
                {text: "No", nextQuestion: 16}
            ]
        },
        {
            question: "¿Tu personaje trabaja en una inmobiliaria?",
            choices: [
                {text: "Si", nextQuestion: 17},
                {text: "No", nextQuestion: 18}
            ]
        },
        {
            question: "¿Tu personaje es Claire?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Gloria?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Haley?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Alex?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Liy?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Mitch?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Cam?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Phil?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Jay?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Luke?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },
        {
            question: "¿Tu personaje es Manny?",
            choices: [
                {text: "Gracias por jugar!!", nextQuestion: undefined}
            ]
        },];

    let currentQuestionIndex = 0;

    function displayQuestion() {
        const currentQuestion = preguntas[currentQuestionIndex];
        pregunta.textContent = currentQuestion.question;


    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement("button");
        choiceButton.className = "opciones";
        choiceButton.textContent = choice.text;
        choiceButton.addEventListener("click", () => navigateTo(choice.Question));
        choicesContainer.appendChild(choiceButton);
    })
    } //falta terminar logica de este metodo

    function navigateTo(nextStoryIndex){
        if(nextStoryIndex !== undefined && preguntas[nextStoryIndex]){
            currentQuestionIndex = nextStoryIndex;
            displayQuestion();
        }else{
            storyText.textContent = choice.text;
            choicesContainer.innerHTML = "";
        }
    }

    displayQuestion();
});


