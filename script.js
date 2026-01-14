const intros = [
    "Dans un contexte de transformation globale,",
    "Face aux enjeux actuels du marché,",
    "Dans une dynamique d'innovation continue,",
    "Afin d'accompagner notre croissance durable,"
];

const verbs = [
    "nous devons capitaliser sur",
    "il est essentiel d’aligner",
    "nous cherchons à optimiser",
    "nous nous engageons à renforcer"
];

const concepts = [
    "les synergies transverses",
    "la valeur ajoutée collective",
    "les leviers de performance",
    "l’agilité organisationnelle",
    "les process collaboratifs"
];

const conclusions = [
    "pour répondre aux attentes des parties prenantes.",
    "afin de rester compétitifs sur le long terme.",
    "dans une logique gagnant-gagnant.",
    "au cœur de notre vision stratégique."
];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateSpeech() {
    const speech = `
        ${randomItem(intros)}
        ${randomItem(verbs)}
        ${randomItem(concepts)}
        ${randomItem(conclusions)}
    `;
    document.getElementById("output").innerText = speech;
}
