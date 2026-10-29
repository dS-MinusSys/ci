import {describe, it, expect} from 'vitest'
import { signoNumero } from './funciones'

describe('signoNumero',()=>{
    it('Devuelve positivo',()=>{
        expect(signoNumero(5)).toBe('positivo')
    })
        it('Devuelve negativo',()=>{
        expect(signoNumero(-3)).toBe('negativo')
    })
        it('Devuelve cero',()=>{
        expect(signoNumero(0)).toBe('cero')
    })
})

