let myForm = document.querySelector('#myForm');
let input = document.querySelector('.input');
let elements = myForm.elements;
let sum = elements.sum;
let add = elements.addText;
let quest = elements.quest;
let count = elements.count;
let text = document.querySelector('#text');
let countSum = document.querySelector('#countSum');
let surname = document.querySelector('#surname');
let name = document.querySelector('#name');
let secondName = document.querySelector('#secondName');
let countValue = document.querySelector('#countValue');

add.addEventListener('click', function(evt){
    evt.preventDefault();
    text.append(input.value);
})


sum.addEventListener('click', function(evt){
    evt.preventDefault();
    let sum = 0;
    let str = input.value;
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
	} 
    countSum.append(sum)
    })


quest.addEventListener('click', (evt) => {
    evt.preventDefault();
    let mus = input.value.split(' ');
    surname.append(mus[0])
    name.append(mus[1])
    secondName.append(mus[2])
})


count.addEventListener('click', (evt) => {
    evt.preventDefault();
    let mus = input.value.split(' ');
    countValue.append(mus.length)
})


input.addEventListener('blur', function(){
        if (this.value) {
          this.value = this.value.split(/\s+/).map(n => 
            n[0].toUpperCase() + n.slice(1)).join(' ');
        }
      });