const form = document.querySelector(".form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = {};
    // Correctly accessing form elements by name or id
    data['title'] = form.querySelector('[name="title"]').value;
    data['hisaab'] = form.querySelector('[name="hisaab"]').value;

    // Iterate over all checkboxes and add their values to the data object
    document.querySelectorAll('[type="checkbox"]').forEach((item) => {
        data[item.name] = item.checked;
    });

    // Sending the data to the backend
    fetch('/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
       
    }).catch((err) => {
        console.log(err);
    });
});
