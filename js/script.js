const passwordInput = document.querySelector('.pass-field input')
const eyeIcon = document.querySelector('.pass-field i')
const requirementList = document.querySelector('.requirement-list li')

// An array of password requirements with corresponding
// regular expressions and index of the requirement list item

const requirement = [
    {RegExp: /.{8,}/, index: 0}, // Minimum of 8 characters
    {RegExp: /[0-9]/, index: 1}, // At least one number
    {RegExp: /[a-z]/, index: 2}, // At least one lowecase letter
    {RegExp: /[^A-Za-z0-9]/, index: 3}, // At least one especial character
    {RegExp: /[A-Z]/, index: 4} // At least one uppercase letter
]

passworInput.addEventListener("keyup", (e) => {
    requirement.forEach(item => {
        // check if the password matches the requirement regex
        const isValid = item.RegExp.test(e.target.value)
        const requirementItem = requirementList[item.index]

        // updating class and icon of requirement item if requirement matched or not
        if(isValid) {
            requirementItem.classList.add("valid")
            requirementItem.firstElementChild.className = "fa-solid fa-check"
        }
        else {
            requirementItem.classList.remove("valid")
            requirementItem.firstElementChild.className = "fa-solid fa-circle"
        }
    })
})

eyeIcon.addEventListener("click", () => {
    // Toggle the password inpute type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password"

    // Update the eye icon class basead on the password input type
    eyeIcon.className = `fa-solid fa-eye$(passwordInput.type === "password" ? "" : "-slash")`
})