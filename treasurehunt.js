
const changeToEmoji = (placeholder) => {
    var moneyBag = Math.floor(Math.random() * 8)
    var notFound = Math.floor(Math.random() * 8)
    if(placeholder === moneyBag){
        alert('WINNER')
        document.getElementById(placeholder).innerHTML = "💰"
    }
    else if(placeholder === notFound){
        alert("LODER")
        document.getElementById(placeholder).innerHTML = "😔"
    }
}