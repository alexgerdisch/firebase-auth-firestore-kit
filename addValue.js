export const addValue = (targetElement, insertionPoint, button) => {

    const valueArray = [];

    button.addEventListener("click", event => {
        event.preventDefault();

        valueArray.push(targetElement.value);
        console.log(valueArray);
        insertionPoint.insertAdjacentHTML("beforeend", `<p class="value">${targetElement.value}<p>`)
        targetElement.value = '';

    });



}

// right now, thist just adds more input elements. In reality, when you click the plus,
//I want the input.value pushed to the end of the value array.
// from there, we clear the form and display the contents of the array.