export function areaQuadrado(lado) {
    return lado * lado;
}

export function perimetroQuadrado(lado) {
    return lado * 4;
}

const quadrado = {
    areaQuadrado,
    perimetroQuadrado
}

export default quadrado;