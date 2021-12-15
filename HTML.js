export function CreaDiv(element, texte) {
    let dviC = document.createElement(element);
    dviC.innerHTML = texte;
    return dviC;
}

export function CreaInput(element, type, id, value) {
    let creatI = document.createElement(element);
    creatI.type = type;
    creatI.id = id;
    creatI.value = value;
    return creatI;
}

export function CreaLabel(element, texte, association) {
    let creatL = document.createElement(element);
    creatL.innerHTML = texte;
    creatL.htmlFor = association;
    return creatL;
}