enum Color {
    "Red" = 1,
    "Green",
    "Blue"
}

const ObtenerColor = (color: Color):string => {
    switch (color) {
        case Color.Red:
            return "Color rojo";
        case Color.Green:
            return "Color verde";
        case Color.Blue:
            return "Color azul";
        default:
            return "Otro color";
    }
}

console.log(ObtenerColor(2));