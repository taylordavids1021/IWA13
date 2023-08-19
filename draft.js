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
  if (logCalc() && parseInt(calculated) === 2){
    user = 'John'
  } else if (logCalc() && parseInt(calculated) === 1){
    state = 'requesting'
  } else (logCalc() && parseInt(calculated) === 3){
    state = 'idle'
  }
  return logCalc() === calcUser()
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