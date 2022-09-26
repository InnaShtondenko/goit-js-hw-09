import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');
const promisesOpt = {
  delay: 0,
  step: 0,
  amount: 0,
};

(() => {
  form.addEventListener('submit', onFormSubmit);
})();

function onFormSubmit(event) {
  event.preventDefault();

  readPromises(promisesOpt);
  const { delay, step, amount } = promisesOpt;

    createPromise(position, delay)
      .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  
delay += step;
}
  
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
    }
  }, delay);
});
};
