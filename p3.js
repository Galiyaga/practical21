let userName = localStorage.getItem("userName");
let lastVisit = localStorage.getItem("lastVisit");

if(!userName) {
    userName = prompt("Добро пожаловать! Напишите, пожалуйста, ваше имя.")
    if (userName){
        localStorage.setItem("userName", userName);
        let currentDate = new Date;
        localStorage.setItem("lastVisit", currentDate.toString());
    }
} else {
    let lastVisitDate = new Date(lastVisit);
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisitDate}`);
    let currentDate = new Date;
    localStorage.setItem("lastVisit", currentDate.toString());
}
