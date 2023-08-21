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
    if (logCalc() > 2) user = 'John'
    if (logCalc() > 2) state = 'requesting'
    if (logCalc() > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${logCalc()})`)
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