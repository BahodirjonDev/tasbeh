let zikr = document.querySelector('.zikr'),
    count = document.querySelector('.count'),
    increment = document.querySelector('.increment'),
    reset = document.querySelector('.reset'),
    num = 0

let zikrlar = {
    one:'Subhanalloh',
    two:'Alhamdulillah',
    sree:'Allohu akbar'
}

increment.addEventListener('click',function () {
    num ++
    count.innerHTML = num
    if (num >= 0) {
        zikr.innerHTML = zikrlar.one
    }
    if (num >= 11) {
        zikr.innerHTML = zikrlar.two
    }
    if (num >= 22) {
        zikr.innerHTML = zikrlar.sree
    }
    if (num == 33) {
        num=0
    }
});
reset.addEventListener('click',function () {
    num = 0
    count.innerHTML = num
    if (num == 0) {
        zikr.innerHTML = zikrlar.one
    }
})
