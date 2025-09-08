

const url = "https://script.google.com/macros/s/AKfycbxTIk7_bfbH3OETWd-KEQgWlYxd3DrS7-nmFSG4zCDuSdAXxDrZijmA8HrulgjW8Z0cFA/exec"
    const form = document.forms['dform']
            await form.addEventListener('submit', e => {
        e.preventDefault();
    fetch(url, {method: 'POST', body: new FormData(form) })
                    .then(response => alert("thank you"))

                    .catch(error => console.error("error"))
            });
