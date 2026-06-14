import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios.js';

describe("Testes para a função Somar", () => {

    it("CT 1: Chamar a função somar, e enviar como primeiro parametro 2, como segundo parametro 95", () => {
        const result = Service.Somar(2, 95);
        expect(result).toBe(97);
    })

    it("CT 2:  Chamar a função somar, e enviar como primeiro parametro -5, como segundo parametro 10", () => {
        const result = () => Service.Somar(-5, 10);
        expect(result).toBe(5);
    })

    it("CT 3: Chamar a função somar, e enviar como primeiro parametro 10, como segundo parametro -5", () => {
        const result = () => Service.Somar(10, -5);
        expect(result).toBe(5);
    })

    it("CT 4: Chamar a função somar, e enviar como primeiro parametro -5, como segundo parametro -10", () => {
        const result = () => Service.Somar(-5, -10);
        expect(result).toBe(-15);
    })

    it("CT 5: Chamar a função somar, e enviar como primeiro parametro 0.5, como segundo parametro 1.7", () => {
        const result = () => Service.Somar(0.5, 1.7);
        expect(result).toBe(2.2);
    })
    
    it("CT 6: Chamar a função somar, e enviar como primeiro parametro 'a', como segundo parametro 1", () => {
        const result = () => Service.Somar("a", 1);
        expect(result).toThrow();
    })

    it("CT 7: Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 'a'", () => {
        const result = () => Service.Somar(1, "a");
        expect(result).toThrow();
    })

    it("CT 8: Chamar a função somar, e enviar como primeiro parametro 0, como segundo parametro 1", () => {
        const result = () => Service.Somar(0, 1);
        expect(result).toBe(1);
    })

    
    it("CT 9: Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 0", () => {
        const result = () => Service.Somar(1, 0);
        expect(result).toBe(1);
    })

    
    it("CT 10: Chamar a função somar sem o primeiro parâmetro", () => {
        const result = () => Service.Somar("", 1);
        expect(result).toThrow();
    })

    it("CT 11: Chamar a função somar sem o segundo parâmetro", () => {
        const result = () => Service.Somar(1, "");
        expect(result).toThrow();
    })

    
    it("CT 12: Chamar a função somar sem os dois parâmetros", () => {
        const result = () => Service.Somar();
        expect(result).toThrow();
    })
    
    it("CT 13: Chamar a função somar, e enviar simbolo como primeiro parâmetro", () => {
        const result = () => Service.Somar("$", 2);
        expect(result).toThrow();
    })

    it("CT 14: Chamar a função somar, e enviar simbolo como segundo parâmetro", () => {
        const result = () => Service.Somar(2, "$");
        expect(result).toThrow();
    })
})

describe("Testes para a função Subtrair", () => {
    it("CT 15: Chamar a função subtrair, e enviar como primeiro parametro 2, como segundo parametro 95", () => {
        const result = () => Service.Subtrair(2, 95);
        expect(result).toBe(-93);
    })

    it("CT 16:  Chamar a função subtrair, e enviar como primeiro parametro -5, como segundo parametro 10", () => {
        const result = () => Service.Subtrair(-5, 10);
        expect(result).toBe(-15);
    })

    it("CT 17: Chamar a função subtrair, e enviar como primeiro parametro 10, como segundo parametro -5", () => {
        const result = () => Service.Subtrair(10, -5);
        expect(result).toBe(15);
    })

    it("CT 18: Chamar a função subtrair, e enviar como primeiro parametro -5, como segundo parametro -10", () => {
        const result = () => Service.Subtrair(-5, -10);
        expect(result).toBe(5);
    })

    it("CT 19: Chamar a função subtrair, e enviar como primeiro parametro 0.5, como segundo parametro 1.7", () => {
        const result = () => Service.Subtrair(0.5, 1.7);
        expect(result).toBe(-1.2);
    })
    
    it("CT 20: Chamar a função subtrair, e enviar como primeiro parametro 'a', como segundo parametro 1", () => {
        const result = () => Service.Subtrair("a", 1);
        expect(result).toThrow();
    })

    it("CT 21: Chamar a função subtrair, e enviar como primeiro parametro 1, como segundo parametro 'a'", () => {
        const result = () => Service.Subtrair(1, "a");
        expect(result).toThrow();
    })

    it("CT 22: Chamar a função subtrair, e enviar como primeiro parametro 0, como segundo parametro 1", () => {
        const result = () => Service.Subtrair(0, 1);
        expect(result).toBe(-1);
    })

    
    it("CT 23: Chamar a função subtrair, e enviar como primeiro parametro 1, como segundo parametro 0", () => {
        const result = () => Service.Subtrair(1, 0);
        expect(result).toBe(1);
    })

    
    it("CT 24: Chamar a função subtrair sem o primeiro parâmetro", () => {
        const result = () => Service.Subtrair("", 1);
        expect(result).toThrow();
    })

    it("CT 25: Chamar a função subtrair sem o segundo parâmetro", () => {
        const result = () => Service.Subtrair(1, "");
        expect(result).toThrow();
    })

    
    it("CT 26: Chamar a função subtrair sem os dois parâmetros", () => {
        const result = () => Service.Subtrair();
        expect(result).toThrow();
    })
    
    it("CT 27: Chamar a função subtrair, e enviar simbolo como primeiro parâmetro", () => {
        const result = () => Service.Subtrair("%", 2);
        expect(result).toThrow();
    })

    it("CT 28: Chamar a função subtrair, e enviar simbolo como segundo parâmetro", () => {
        const result = () => Service.Subtrair(2, "%");
        expect(result).toThrow();
    })
})

describe('Testes para a função Multiplicação', () => {
        it("CT 29: Chamar a função Multiplicar, e enviar como primeiro parametro 2, como segundo parametro 95", () => {
        const result = () => Service.Multiplicar(2, 95);
        expect(result).toBe(190);
    })

    it("CT 30:  Chamar a função Multiplicar, e enviar como primeiro parametro -5, como segundo parametro 10", () => {
        const result = () => Service.Multiplicar(-5, 10);
        expect(result).toBe(-50);
    })

    it("CT 31: Chamar a função Multiplicar, e enviar como primeiro parametro 10, como segundo parametro -5", () => {
        const result = () => Service.Multiplicar(10, -5);
        expect(result).toBe(-50);
    })

    it("CT 32: Chamar a função Multiplicar, e enviar como primeiro parametro -5, como segundo parametro -10", () => {
        const result = () => Service.Multiplicar(-5, -10);
        expect(result).toBe(50);
    })

    it("CT 33: Chamar a função Multiplicar, e enviar como primeiro parametro 0.5, como segundo parametro 1.7", () => {
        const result = () => Service.Multiplicar(0.5, 1.7);
        expect(result).toBe(0.85);
    })
    
    it("CT 34: Chamar a função Multiplicar, e enviar como primeiro parametro 'a', como segundo parametro 1", () => {
        const result = () => Service.Multiplicar("a", 1);
        expect(result).toThrow();
    })

    it("CT 35: Chamar a função Multiplicar, e enviar como primeiro parametro 1, como segundo parametro 'a'", () => {
        const result = () => Service.Multiplicar(1, "a");
        expect(result).toThrow();
    })

    it("CT 36: Chamar a função Multiplicar, e enviar como primeiro parametro 0, como segundo parametro 1", () => {
        const result = () => Service.Multiplicar(0, 1);
        expect(result).toBe(0);
    })

    
    it("CT 37: Chamar a função Multiplicar, e enviar como primeiro parametro 1, como segundo parametro 0", () => {
        const result = () => Service.Multiplicar(1, 0);
        expect(result).toBe(0);
    })

    
    it("CT 38: Chamar a função Multiplicar sem o primeiro parâmetro", () => {
        const result = () => Service.Multiplicar("", 1);
        expect(result).toThrow();
    })

    it("CT 39: Chamar a função Multiplicar sem o segundo parâmetro", () => {
        const result = () => Service.Multiplicar(1, "");
        expect(result).toThrow();
    })

    
    it("CT 40: Chamar a função Multiplicar sem os dois parâmetros", () => {
        const result = () => Service.Multiplicar();
        expect(result).toThrow();
    })
    
    it("CT 41: Chamar a função Multiplicar, e enviar simbolo como primeiro parâmetro", () => {
        const result = () => Service.Multiplicar("$", 1);
        expect(result).toThrow();
    })

    it("CT 42: Chamar a função Multiplicar, e enviar simbolo como segundo parâmetro", () => {
        const result = () => Service.Multiplicar(1,"$");
        expect(result).toThrow();
    })
})

describe('Testes para a função Dividir', () => {
    it("CT 43: Chamar a função Dividir, e enviar como primeiro parametro 2, como segundo parametro 95", () => {
        const result = () => Service.Dividir(2, 95);
        expect(result).toBe(0.02105263157);
    })

    it("CT 44:  Chamar a função Dividir, e enviar como primeiro parametro -5, como segundo parametro 10", () => {
        const result = () => Service.Dividir(-5, 10);
        expect(result).toBe(-0.5);
    })

    it("CT 45: Chamar a função Dividir, e enviar como primeiro parametro 10, como segundo parametro -5", () => {
        const result = () => Service.Dividir(10, -5);
        expect(result).toBe(-2);
    })

    it("CT 46: Chamar a função Dividir, e enviar como primeiro parametro -5, como segundo parametro -10", () => {
        const result = () => Service.Dividir(-5, -10);
        expect(result).toBe(5);
    })

    it("CT 47: Chamar a função Dividir, e enviar como primeiro parametro 0.5, como segundo parametro 1.7", () => {
        const result = () => Service.Dividir(0.5, 1.7);
        expect(result).toBe(0.5);
    })
    
    it("CT 48: Chamar a função Dividir, e enviar como primeiro parametro 'a', como segundo parametro 1", () => {
        const result = () => Service.Dividir("a", 1);
        expect(result).toThrow();
    })

    it("CT 49: Chamar a função Dividir, e enviar como primeiro parametro 1, como segundo parametro 'a'", () => {
        const result = () => Service.Dividir(1, "a");
        expect(result).toThrow();
    })

    it("CT 50: Chamar a função Dividir, e enviar como primeiro parametro 0, como segundo parametro 1", () => {
        const result = () => Service.Dividir(0, 1);
        expect(result).toBe(0);
    })

    
    it("CT 51: Chamar a função Dividir, e enviar como primeiro parametro 1, como segundo parametro 0", () => {
        const result = () => Service.Dividir(1, 0);
        expect(result).toBe(undefined);
    })

    
    it("CT 52: Chamar a função Dividir sem o primeiro parâmetro", () => {
        const result = () => Service.Dividir("", 1);
        expect(result).toThrow();
    })

    it("CT 53: Chamar a função Dividir sem o segundo parâmetro", () => {
        const result = () => Service.Dividir(1, "");
        expect(result).toThrow();
    })

    
    it("CT 54: Chamar a função Dividir sem os dois parâmetros", () => {
        const result = () => Service.Dividir();
        expect(result).toThrow();
    })
    
    it("CT 55: Chamar a função Dividir, e enviar simbolo como primeiro parâmetro", () => {
        const result = () => Service.Dividir("$", 1);
        expect(result).toThrow();
    })

    it("CT 56: Chamar a função Dividir, e enviar simbolo como segundo parâmetro", () => {
        const result = () => Service.Dividir(1,"$");
        expect(result).toThrow();
    })
})

describe('Testes para a função de Raiz', () => {
    it("CT 57: Chamar a função Raiz, e enviar como primeiro parametro 2, como segundo parametro 95", () => {
        const result = () => Service.Raiz(9, 2);
        expect(result).toBe(3);
    })

    it("CT 58:  Chamar a função Raiz, e enviar como primeiro parametro -5, como segundo parametro 10", () => {
        const result = () => Service.Raiz(27, 3);
        expect(result).toBe(-0.5);
    })

    it("CT 59: Chamar a função Raiz, e enviar como primeiro parametro 10, como segundo parametro -5", () => {
        const result = () => Service.Raiz(-9, 2);
        expect(result).toBe(-2);
    })

    it("CT 60: Chamar a função Raiz, e enviar como primeiro parametro -5, como segundo parametro -10", () => {
        const result = () => Service.Raiz(-27, 3);
        expect(result).toBe(5);
    })

    it("CT 61: Chamar a função Raiz, e enviar como primeiro parametro a, como segundo parametro 2", () => {
        const result = () => Service.Raiz("a", 2);
        expect(result).toThrow();
    })
    
    it("CT 62: Chamar a função Raiz, e enviar como primeiro parametro 9, como segundo parametro a", () => {
        const result = () => Service.Raiz(9, "a");
        expect(result).toThrow();
    })

    it("CT 63: Chamar a função Raiz, e enviar como primeiro parametro 0, como segundo parametro 2", () => {
        const result = () => Service.Raiz(0, 2);
        expect(result).toBe(0);
    })

    it("CT 64: Chamar a função Raiz, e enviar como primeiro parametro 9, como segundo parametro 0", () => {
        const result = () => Service.Raiz(9, 0);
        expect(result).toThrow();
    })

    
    it("CT 65: Chamar a função Raiz, e enviar como primeiro parametro 9, como segundo parametro 1", () => {
        const result = () => Service.Raiz(9, 1);
        expect(result).toBe(9);
    })

    
    it("CT 66: Chamar a função raiz, e enviar como radicando 9, como indice -2", () => {
        const result = () => Service.Raiz(9, -2);
        expect(result).toThrow();
    })

    it("CT 67: Chamar a função Raiz sem os dois parâmetros", () => {
        const result = () => Service.Raiz();
        expect(result).toThrow();
    })

    
    it("CT 68: Chamar a função Raiz, e enviar simbolo como primeiro parâmetro", () => {
        const result = () => Service.Raiz("$", 2);
        expect(result).toThrow();
    })
    
    it("CT 69: Chamar a função Raiz, e enviar simbolo como segundo parâmetro", () => {
        const result = () => Service.Raiz(9, "$");
        expect(result).toThrow();
    })
})

describe('Testes para a função de Potencia', () => {
    it("CT 70: Chamar a função potencia, e enviar como base 2, como expoente 3", () => {
        const result = () => Service.Potencia(2, 3);
        expect(result).toBe(8);
    })

    it("CT 71:  Chamar a função potencia, e enviar como base -2, como expoente 3", () => {
        const result = () => Service.Potencia(-2, 3);
        expect(result).toBe(-8);
    })

    it("CT 72: Chamar a função potencia, e enviar como base -2, como expoente 2", () => {
        const result = () => Service.Potencia(-2, 2);
        expect(result).toBe(4);
    })

    it("CT 73: Chamar a função potencia, e enviar como base 2, como expoente -3", () => {
        const result = () => Service.Potencia(2, -3);
        expect(result).toBe(1/8);
    })

    it("CT 74: Chamar a função potencia, e enviar como base 0.5, como expoente 2", () => {
        const result = () => Service.Potencia(0.5, 2);
        expect(result).toBe(0.25);
    })
    
    it("CT 75: Chamar a função potencia, e enviar como base a, como expoente 2", () => {
        const result = () => Service.Potencia("a", 2);
        expect(result).toThrow();
    })

    it("CT 76: Chamar a função potencia, e enviar como base 2, como expoente a", () => {
        const result = () => Service.Potencia(2, "a");
        expect(result).toThrow();
    })

    it("CT 77: Chamar a função potencia, e enviar como base 0, como expoente 2", () => {
        const result = () => Service.Potencia(0, 2);
        expect(result).toBe(0);
    })

    
    it("CT 78: Chamar a função potencia, e enviar como base 2, como expoente 0", () => {
        const result = () => Service.Potencia(2, 0);
        expect(result).toBe(1);
    })

    
    it("CT 79: Chamar a função potencia, e enviar como base 2, sem expoente", () => {
        const result = () => Service.Potencia(2, "");
        expect(result).toThrow();
    })

    it("CT 80: Chamar a função potencia, e enviar sem base, como expoente 2", () => {
        const result = () => Service.Potencia("", 2);
        expect(result).toThrow();
    })

    
    it("CT 81: Chamar a função Potencia, sem base e expoente", () => {
        const result = () => Service.Potencia("", "");
        expect(result).toThrow();
    })
    
    it("CT 82: Chamar a função potencia, e enviar como base um simbolo, como expoente 2", () => {
        const result = () => Service.Potencia("$", 2);
        expect(result).toThrow();
    })

    it("CT 83: Chamar a função potencia, e enviar como base 2, como expoente um simbolo", () => {
        const result = () => Service.Potencia(2, "$");
        expect(result).toThrow();
    })
})
