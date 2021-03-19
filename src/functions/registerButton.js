import { operation } from "./operation"
import Big from 'big.js'
Big.DP = 4
Big.RM = 0

const operator = ['-', '+', '/', '*']

export const registerButton = (buttonName, obj) => {
    if(buttonName === 'AC'){
        return {
            first_number: null,
            second_number: null,
            operator:null,
            error:null
        }
    }

    if((!obj.operator && (!isNaN(parseInt(buttonName)) || buttonName === '.') && !obj.operator)){
        if(obj.first_number === null){
            if(buttonName === '.'){
                return {
                    first_number: '0.',
                    error:null
                }
            } else {
                return {
                    first_number : buttonName,
                    error:null
                }
            }
        } else if(obj.first_number === '0' && buttonName === '0'){
                return {
                    first_number: '0',
                    error:null
                }
        } else {
            if(buttonName === '.' && obj.first_number.indexOf('.') !== -1){
                return {
                    error:null
                }
            }
            return {
                first_number: obj.first_number + buttonName,
                error:null 
            }
        }
    }

    if(operator.includes(buttonName) && obj.first_number){
        if(obj.operator && obj.second_number){
            const result = operation(obj.first_number, obj.second_number, obj.operator)
            return result.error?{
                error:result.error,
                first_number:null,
                second_number:null,
                operator:null
            }:{
                first_number:result.value,
                operator:buttonName,
                second_number:null,
                error:null
            }
        }
        console.log('operator')
        return {
            operator:buttonName
        }
    }

    if(obj.operator && obj.first_number && (!isNaN(parseInt(buttonName)) || buttonName === '.')){
        if(obj.second_number === null){
            if(buttonName === '.'){
                return {
                    second_number: '0.',
                    error:null
                }
            } else {
                return {
                    second_number : buttonName,
                    error:null
                }
            }
        } else if(obj.second_number === '0' && buttonName === '0'){
                return {
                    second_number: '0',
                    error:null
                }
        } else {
            if(buttonName === '.' && obj.second_number.indexOf('.') !== -1){
                return {
                    error:null
                }
            }
            return {
                second_number: obj.second_number + buttonName ,
                error:null
            }
        }
    }

    if(buttonName === '='){
        if(obj.first_number && obj.second_number && obj.operator){
            const result = operation(obj.first_number, obj.second_number, obj.operator)
            return result.error ? {
                first_number:null,
                second_number:null,
                operator:null,
                error:result.error
            } : {
                first_number:result.value,
                second_number:null,
                operator:null,
                error:null
            }
        }
        if(obj.first_number && !obj.second_number){
            return {
                first_number:obj.first_number,
                second_number:null,
                operator:null,
                error:null
            }
        }
    }

    if(buttonName === '%'){
        let value = ''
        if(obj.first_number && obj.second_number){
            console.log("operation")
            const result = operation(obj.first_number, obj.second_number,obj.operator)
            if(result.error){
                return {
                    first_number:result,
                    second_number:null,
                    operator:null,
                    error:result.error
                }
            }
            value = result.value
        } 

        value = value || obj.first_number
        const result = (new Big(value)).div('100').toString()
        return {
            first_number:result,
            second_number:null,
            operator:null,
            error:null
        }
    }

    if(buttonName === '+/-'){
        let num
        let str
        if(obj.error){
            return {}
        } else if (obj.second_number){
            num = obj.second_number
            str='second_number'
        } else if(obj.first_number){
            num = obj.first_number
            str='first_number'
        }

        if(num[0] === '-'){
            return{
                [str]: num.split('-')[1]
            }
        } else {
            return{
                [str]: '-' + num
            }
        }
    }
}

