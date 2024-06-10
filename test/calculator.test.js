import { describe, expect, it } from 'vitest';
import { calculator } from "../js/calculadora.js";

describe('Simple Calculator', () => {

    it('calculator can sum numbers', () => {

    //Given 
    const five = 5
    const six = 6
    const operator = '+'

    //when
    const result = calculator(five,six,operator)
    //then
    expect(result).toEqual(11)
    });


    it('calculator can substract numbers', () => {

        //Given 
        const three = 3
        const two = 2
        const operator = '-'
    
        //when
        const result = calculator(three,two,operator)
        //then
        expect(result).toEqual(1)
        });

        it('calculator can multiplication numbers', () => {

            //Given 
            const three = 3
            const two = 2
            const operator = '*'
        
            //when
            const result = calculator(three,two,operator)
            //then
            expect(result).toEqual(6)
            });

            it('calculator can division numbers', () => {

                //Given 
                const three = 3
                const two = 2
                const operator = '/'
            
                //when
                const result = calculator(three,two,operator)
                //then
                expect(result).toEqual(1.5)
                });

                it('calculator: numbers are not numbers', () => {

                    //Given 
                    const character = 'B'
                    const sixString = '6'
                    const operator = '*'
                
                    //when
                    const result = calculator(character,sixString,operator)
                    //then
                    expect(result).toEqual("unknown value")
                    });
});