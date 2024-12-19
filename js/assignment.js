"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare a constant variable here.
const resolution = "read more";
const currentYear = 2025;
let willmeetResolution = true;

function updateYear () {
    // Update this function
    yearElement.innerText = currentYear;
}

function updateResolution() {
    // update this function
    resolutionElement.innerText=resolution;
}

function updateWillmeetResolution() {
    // update this function
    willMeetResolutionElement.innerText = willMeetResolution
}

function render() {
    // update this function
    updateYear();
    updateResolution();
    updatewillMeetResolution();
}

submissionBtn.addEventListener("click", function () {
    // update this function
    render();
});
