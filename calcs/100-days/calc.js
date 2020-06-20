document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()
  
  const $cardLimit = document.getElementById('cardLimit')
  const $percent = document.getElementById('percent')
  const $income100days = document.getElementById('income100days')
  const $incomeDay = document.getElementById('incomeDay')
  const $incomeMonth = document.getElementById('incomeMonth')
  const $incomeYear = document.getElementById('incomeYear')
  const $incomeWithService = document.getElementById('incomeWithService')
  const SERVICE = 1490

  const getIncome = (money, days) => {
    const percent = +$percent.value
    return +((money*(percent/365)*days/100)).toFixed(0)
  }

  let cardLimit = +$cardLimit.value
  let limit = cardLimit
  let days = 100
  let amount = 0

  while (days !== null) {
    if (days === 100) {
      if (limit < 50000) {
        alert('Не имеет смысла :)')
        break
      }
      limit -= 50000
      amount += 50000
      days -= 30
    } else if (days >= 10 && days < 100) {
      amount += getIncome(amount, 30)
      let minimumPayment = +((cardLimit-limit)*5/100).toFixed(0)
      amount -= minimumPayment
      limit += minimumPayment
      if (limit >= 50000) {
        limit -= 50000
        amount += 50000
      } else if (limit < 50000 && limit !== 0) {
        amount += limit
        limit = 0
      }
      days -= 30
    } else {
      amount += getIncome(amount, 10)
      days = null
    }
  }
  const resultIncome = amount-(cardLimit-limit)

  $income100days.innerHTML = resultIncome.toFixed(2)
  $incomeDay.innerHTML = (resultIncome/100).toFixed(2)
  $incomeMonth.innerHTML = (resultIncome/100*30).toFixed(2)
  $incomeYear.innerHTML = (resultIncome/100*365).toFixed(2)
  $incomeWithService.innerHTML = ((resultIncome/100*365)-SERVICE).toFixed(2)
})