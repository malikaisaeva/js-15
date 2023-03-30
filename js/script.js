let name = prompt('What`s your name').toLocaleLowerCase().trim()
let balance = 10000

if (name === 'Alex' || name === 'alex') {


    alert('далее')

    let password = +prompt('введите пароль').trim()

    if (password === 7777) {
        
        alert('далее')
        alert(`Здравствуйте ваш баланс: ${balance}`)
        let money = +prompt('сколько хотите обналичить?') 

        if(money <= balance ) {
            alert('все отлично')
            alert(`Withdrawal: ${money}, Balance: ${balance - money}`);
            
        } else {
            alert('недостаточно средств')
        }

    } else{
        alert('не верный пароль')
    }
    
} else {
    alert('пользователь не найден')
}