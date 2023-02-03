const metros = Number(prompt("Qual o tamanho em metros???"))
console.log(typeof metros)
console.log(metros)
if(typeof metros === 'number' && !(isNaN(metros))) {

    A = metros * 1000
    B = metros * 100
    C = metros * 10
    D = metros / 10
    E = metros / 100
    F = metros / 1000

    const medida = prompt("Para qual medida deseja converter? (digite a letra correspondente!)" + 
        "\nA) Milímetro (mm)" + "\nB) Centimetro (cm) " + "\nC) Decímetro (dm)" + "\nD) Decâmetro (dam)"
        + "\nE) Hectômetro (hm)" + "\nF) Quilômetro (km)");

    switch (medida.toUpperCase()) {
        case "A":
            alert ("O resultado em milimetros é igual a: " + A + " mm")
            break
        case "B":
            alert ("O resultado em milimetros é igual a: " + B + " cm")
            break
        case "C":
            alert ("O resultado em milimetros é igual a: " + C + " dm")
            break
        case "D":
            alert ("O resultado em milimetros é igual a: " + D + " dam")
            break
        case "E":
            alert ("O resultado em milimetros é igual a: " + E + " hm")
            break
        case "F":
            alert ("O resultado em milimetros é igual a: " + F + " km")
            break
        default:
            alert ("Opção invalida, tente novamente!")
            break
    }
} else {
    alert ("Opção invalida, tente novamente!")
}


