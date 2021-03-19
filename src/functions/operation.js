import Big from 'big.js'
Big.DP = 4
Big.RM = 0

export const operation = (num1, num2, operator) =>{

    const x = new Big(num1?num1:0)
    const y = new Big(num2?num2:0)

    switch (operator){
        case '/':{
            if(num2 === '0'){
                return {
                    error:'Cannot Devide with zero'
                }
            }
            const result = x.div(y).toString()
            console.log(result)
            return {value:result}
        }

        case '*':{
            const result = x.times(y).toString()
            console.log(result)
            return {value:result}
        }

        case '+':{
            const result = x.plus(y).toString()
            console.log(result)
            return {value:result}
        }

        case '-':{
            const result = x.minus(y).toString()
            console.log(result)
            return {value:result}
        }
        default:
            {
                return {
                    value: null
                }
            }
    }

}