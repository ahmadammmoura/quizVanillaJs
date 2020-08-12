
const correctAwnser = ['B','B','B','B',];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener("submit",e => {
    e.preventDefault()
    let score = 0 ;
    let userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,];

    userAnswers.forEach((answer,index) => {
        if(answer === correctAwnser[index]){
            score += 25
        }
    })

    result.classList.remove('d-none');

    
    let i = 0
    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${i}%`;
        if(i === score){
            clearInterval(timer)
        }else{
            i++
        }
    },10);



    let y = 560

    const scroll = setInterval(() =>{
        scrollTo(0,y)
        if(y === 0){
            clearInterval(scroll)
        }else{
            y = y-5
        }
    },0.3)

});


