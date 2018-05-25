(() => {
    preventDefault(e);
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.handleFormData');
    console.log("Form");
    form.onsubmit = () => {
        const data = JSON.stringify({
            'album': form.album.value,
            'fk_land': form.fk_land.value
        });
    };
})();
/*
handleSubmit(e){
    e.preventDefault();
    let reqBody = {
      email: this.refs.email.value,
      password: this.refs.password.value,
      confirmPassword: this.refs.confirmPassword.value
    };

    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(reqBody)
    })
      .then((res) => {
        if (res.ok){
          return res.json();
        } else {
          throw new Error ('Something went wrong with your fetch');
        }
      }).then((json) => {
        console.log(json);
      })
  }
  */