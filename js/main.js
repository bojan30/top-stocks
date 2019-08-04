//elements
const buttonOne = document.querySelector('#first-step-button');
const buttonTwo = document.querySelector('#second-step-button');
const phoneInput = document.querySelector('#second-step');
const privacy = document.querySelector("#privacy");
const firstStepNumber = document.querySelector('#first-step-number');
const secondStepNumber = document.querySelector('#second-step-number');
const toggleButtons = document.querySelectorAll('.toggle-custom');
const scrollLink = document.querySelector('#scroll-link');

//form steps

buttonOne.addEventListener('click', stepOne);
buttonTwo.addEventListener('click', stepTwo);

function stepOne(e){
  e.preventDefault();
  phoneInput.classList.add('active');
  buttonTwo.classList.add('active');
  privacy.style.display = "none";
  firstStepNumber.classList.add('active');
  this.style.display = "none";
}

function stepTwo(e){
  e.preventDefault();
  secondStepNumber.classList.add("active");
}

//toggle question button

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

//smooth scroll to steps section

function scroll(target, duration){
  //animation target(destination)
  const el = document.querySelector(target);
  //scroll amount
  const scrollAmount = window.pageYOffset;
  //distance from the top
  const position = el.getBoundingClientRect().top + scrollAmount;
  //animation distance
  const animationDistance = position - scrollAmount;
  let startTime = null;
  function animate(time){
    if(startTime === null) startTime = time;
    let timeElapsed = time - startTime;
    let run = easing(timeElapsed, scrollAmount, animationDistance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animate);
  }
  //accelerate half way, than decelerate
  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animate);
}

scrollLink.addEventListener('click',(e)=>{
  e.preventDefault();
  scroll('#steps-section', 800);
})

