(function(){

    const tittleQuestions = [...document.querySelectorAll('.questions__tittle')]
    
    tittleQuestions.forEach(question =>{
       question.addEventListener('click', ()=>{
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('questions__padding--add')

        question.children[0].classList.toggle('questions__arrow--rotate')

        if(answer.clientHeight === 0){
            height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`
       });
    

    });
})();
