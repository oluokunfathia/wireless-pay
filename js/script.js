/* ================= YEAR ================= */

document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    year.textContent = new Date().getFullYear();


    /* ================= ACCOUNT FORM ================= */

    const form = document.getElementById("accountForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Your account application has been started successfully!"
        );

        form.reset();


        const modalElement =
            document.getElementById("accountModal");

        const modal =
            bootstrap.Modal.getInstance(modalElement);

        modal.hide();

    });

});


/* ================= OPEN ACCOUNT ================= */

function openAccount() {

    const modalElement =
        document.getElementById("accountModal");

    const modal =
        new bootstrap.Modal(modalElement);

    modal.show();

}


/* ================= APP STORE ================= */

function downloadApp(event, store) {

    event.preventDefault();

    alert(
        store +
        " download button clicked."
    );

}


/* ================= BUSINESS ================= */

function businessMessage() {

    alert(
        "Business account registration selected."
    );

}