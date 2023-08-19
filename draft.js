let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = parseInt(calculated)
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)
    return isString + parseInt(calculatedAsNumber) + 1
}
logCalc()



const calcUser = () => {
  logCalc()
  if (parseInt(calculated) = 2) {user = 'John'}
  if (parseInt(calculated) = 1) {state = 'requesting'}
  if (parseInt(calculated) = 3) {state = 'idle'}
//   return logCalc() === 2
    console.log(calcUser())
}


const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()