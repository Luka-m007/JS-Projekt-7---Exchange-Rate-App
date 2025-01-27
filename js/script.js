const amoundOne = document.querySelector('.amound-one')
const amoundTwo = document.querySelector('.amound-two')
const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

function calculate() {
	const currency1 = currencyOne.value
	const currency2 = currencyTwo.value

	fetch(
		`https://api.exchangerate.host/convert?access_key=dd17b94cfa7c7e8d1ccceb54c0250f54&from=${currencyOne.value}&to=${currencyTwo.value}&amount=10`
	)
		.then(res => res.json())
		.then(data => {
			const rate = data.info.quote[currency1]
			// console.log(data)
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`
			amoundTwo.value = (amoundOne.value * rate).toFixed(2)
		})
}

function swap() {
	const temp = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = temp
}

calculate()

currencyOne.addEventListener('change', calculate)
amoundOne.addEventListener('input', calculate)
currencyTwo.addEventListener('change', calculate)
swapBtn.addEventListener('click', swap)
