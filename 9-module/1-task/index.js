export default function promiseClick(button) {
  return new Promise(
    function (resolve) {
      button.addEventListener("click", (event) => resolve(event));
    },
    { once: true }
  );

  // return new Promise((resolve, reject) => {
  //   button.addEventListener('click', e => resolve(e))
  // })
}
