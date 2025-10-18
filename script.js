function handleClick(divId) {
    alert("Hai cliccato su " + divId);
}

function handleInput() {
    const inputText = document.getElementById('input1').value;
    console.log("Hai scritto: " + inputText);
}

function handleButtonClick() {
    alert("Hai cliccato sul bottone");
}

function handleSelectChange() {
    const selectedValue = document.getElementById('select1').value;
    console.log("Hai selezionato: " + selectedValue);
}

function handleTextClick() {
    document.getElementById('text1').style.color = 'red';
}

function handleFocus() {
    console.log("Textarea selezionata");
}

function handleBlur() {
    console.log("Textarea deselezionata");
}

function handleLinkClick(event) {
    event.preventDefault();
    alert("Link cliccato!");
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert("Form inviato!");
}
