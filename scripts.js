let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = parseInt(calculated)
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)
    return isString + parseInt(calculatedAsNumber) + 1
}

const calcUser = () => {
  let userStatus;
  if (logCalc() >= 2){
    userStatus = 'John';
  } else {
    userStatus = 'requesting';
  } return userStatus;
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${calcUser()} (${logCalc()})`)
	}
}

console.log(`User: ${calcUser()} (${logCalc()})`)
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