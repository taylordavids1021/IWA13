let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => {                                                             // put = in the correct place  
    const isString = typeof parseInt(calculated)
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)
    return parseInt(calculated) === calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc
  if (parseInt(calculated) >= 2) user = 'John'
  if (parseInt(calculated) >= 2) state = 'requesting'
  if (parseInt(calculated) >= 3) state = 'idle'
  return logCalc
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
    return checkUser
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