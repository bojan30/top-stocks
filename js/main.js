//toggle question button

let toggleButtons = document.querySelectorAll('.toggle-custom');

toggleButtons.forEach((button,index)=>{
  button.addEventListener('click',()=>{
    //toggle between plus and minus sign
    button.classList.toggle('open');
    let answer = document.querySelectorAll('.answer-text')[index];
    //check if max height of answer wrapper is not null
    if(answer.style.maxHeight){
      //set it to null
      answer.style.maxHeight = null;
      answer.style.opacity = 0;
    }
    else{
      //else set it to the height of answer text 
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      answer.style.opacity = 1;
    }
  })
})