import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios.js';

describe("Testes para a função Somar", () => {

    it("Deve somar dois números positivos 2 e 1, retornar 3", () => {
        const result = Service.Somar(2, 1);
        expect(result).toBe(3);
    })

    it("Deve somar dois números negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2, -1);
        expect(result).toBe(-3);
    })

})

describe("Testes para a função Subtrair", () => {
    it("Deve Subtrair dois números positivos, 2 e 1, retornar 1", () => {
        const result = Service.Subtrair(2, 1);
        expect(result).toBe(1);
    })
})

describe('Testes para a função Divisão', () => {
    it("Deve dividir dois numeros positivos, 2 e 2, retornar 1", () => {
        const result = Service.Dividir(2, 2);
        expect(result).toBe(1);
    })
})

describe('Testes para a função Multiplicar', () => {
    it("Deve multiplicar dois numeros positivos, 2 e 2, retornar 4", () => {
        const result = Service.Multiplicar(2,2);
        expect(result).toBe(4);
    })
})
