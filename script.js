
/* Hamburger menu */

const nav = document.getElementsByTagName("nav")[0];

function toggleMenu() {
    if (nav.style.display === "none") {
        nav.style.display = "initial";
    } else {
        nav.style.display = "none";
    }
}

/* Smooth scrolling feature */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        anchor => {
            anchor
                .addEventListener(
                    'click',
                    function (e) {
                        e.preventDefault();

                        document
                            .querySelector(
                                this.getAttribute('href')
                            )
                            .scrollIntoView(
                                {
                                    behavior: 'smooth'
                                }
                            );
                    }
                );
        }
    );

/* Project filter feature */

function filterProjects(category) {
    const projects =
        document
            .querySelectorAll(
                "#projects article"
            );


    projects
        .forEach(
            article => {
                const projectCategory =
                    article
                        .querySelector(
                            ".project__category"
                        )
                        .textContent;

                article.style.display =
                    (
                        category === "All" ||
                        projectCategory
                            .includes(
                                category
                            )
                    )
                        ? "flex"
                        : "none";
            }
        );


}

/* Modal feature */

const modal =
    document
        .getElementById(
            "projects_images_modal"
        );

function closeModal() {
    modal.style.display = "none";
}

function openModal(image) {
    const modal_image =
        modal
            .querySelector(
                "img"
            );

    modal_image.src = image.src;
    modal_image.alt = image.alt;

    modal.style.display = "flex";
}

/* Form real-time feedback feature */
const form =
    document
        .getElementById(
            "contact_form"
        );

const form_feedback =
    document
        .getElementsByClassName(
            "contact_form__feedback"
        )[0];

form
    .querySelector('#name')
    .addEventListener(
        'input',
        function () {
            if (this.value.trim() === '') {
                form_feedback.textContent = '[X] Name is required.';
            } else {
                form_feedback.textContent = '';
            }
        }
    );

form
    .querySelector('#email')
    .addEventListener(
        'input',
        function () {
            if (this.value.trim() === '') {
                form_feedback.textContent = '[X] Email is required.';
            }
            else if (!/\S+@\S+\.\S+/.test(this.value)) {
                form_feedback.textContent = '[X] Please enter a valid email address.';
            }
            else {
                form_feedback.textContent = '';
            }
        }
    );

form
    .querySelector('#message')
    .addEventListener(
        'input',
        function () {
            if (this.value.trim() === '') {
                form_feedback.textContent = '[X] Message cannot be empty.';
            }
            else {
                form_feedback.textContent = '';
            }
        }
    );