const total = document.querySelector(".total")
const trash = document.getElementsByClassName("btn-warning btn sm-delete")

      total.addEventListener('click', function(){
         // Update the total amount by adding the current amount
       let amount = Array.from(document.querySelectorAll('.amount')).reduce((acc,el)=>acc+ parseFloat(el.innerText), 0)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'amount': amount,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
    const amount = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'amount': amount
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
