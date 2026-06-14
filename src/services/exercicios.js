class Service {
    Somar(num1, num2) {
        if(num1 === "" || num2 === ""){
            throw new Error("Envie todos os campos");
        }
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Insira apenas números!");
        }
        return num1 + num2;
    }

    Subtrair(num1, num2) {
        if(num1 === "" || num2 === ""){
            throw new Error("Envie todos os campos");
        }
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Insira apenas números!");
        }
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if(num1 === "" || num2 === ""){
            throw new Error("Envie todos os campos");
        }
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Insira apenas números!");
        }
        return num1 * num2;
    }

    Dividir(num1, num2) {
        if(num1 === "" || num2 === ""){
            throw new Error("Envie todos os campos");
        }
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Insira apenas números!");
        }
        return num1 / num2;
    }

    Raiz(rad, index){
        if(rad === "" || index === ""){
            throw new Error("Envie todos os campos");
        }
        if(isNaN(rad) || isNaN(index)){
            throw new Error("Insira apenas números!");
        }

        if (rad === 0) return 0;

        if(index <= 0) throw new Error("Envie um indice maior que 0!");

        let raiz = rad ** (1/index);

        return raiz
    }

    Potencia(base, expo){
        if(base === "" || expo === ""){
            throw new Error("Envie todos os campos");
        }
        if(isNaN(base) || isNaN(expo)){
            throw new Error("Insira apenas números!");
        }1

        if(base === 0) return 0;

        if(expo === 0) return 1;

        return base ** expo;
    }
}

export default new Service()