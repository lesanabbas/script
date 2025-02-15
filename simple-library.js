!(function (e, t) {
  // UMD Pattern for module loading (CommonJS, AMD, Global)
  if ("object" == typeof exports && "object" == typeof module) {
    // CommonJS
    module.exports = t();
  } else if ("function" == typeof define && define.amd) {
    // AMD
    define([], t);
  } else if ("object" == typeof exports) {
    // Node.js or other CommonJS environments
    exports.SimpleLibrary = t();
  } else {
    // Browser Global (window object)
    e.SimpleLibrary = t();
  }
})(this, () => {
  "use strict";

  // Define components
  const SimpleLibrary = {
    H1: function H1(text = "") {
      return text;
    },

    Button: function Button() {
      return `<button class="btn">Submit</button>`;
    },

    InputBox: function InputBox(type="text", placeholder = "Enter text here...") {
      return `<input type="${type}" class="input-box" placeholder="${placeholder}" />`;
    },

    InputTextBox: function InputTextBox(type="text", placeholder = "Enter your message here...") {
      return `<textarea class="input-box" placeholder="${placeholder}"></textarea>`
    },

    // Form component that auto-renders when added to a container with class 'simple-form'
    Form: function Form() {
      return `
        <form class="simple-form">
          <label for="email">Email:</label>
          ${SimpleLibrary.InputBox("email","Enter your email")}
          <label for="subject">Subject:</label>
          ${SimpleLibrary.InputBox("Enter the subject")}
          <label for="message">Message:</label>
          ${SimpleLibrary.InputTextBox("Enter your message here...")}
          ${SimpleLibrary.Button()}
        </form>
      `;
    },

    // Function to initialize components automatically on elements with the 'simple-form' class
    initialize: function () {
      const formContainers = document.querySelectorAll(
        ".simple-form-container"
      );
      formContainers.forEach((container) => {
        container.innerHTML = SimpleLibrary.Form();
      });

      const h1Elements = document.querySelectorAll(".simple-h1-red");
      h1Elements.forEach((h1) => {
        h1.style.color = "red"; // Apply the red color style
        h1.textContent = h1.textContent; // Set the content of the h1 element
      });
    },
  };

  // Expose the library globally (window.SimpleLibrary)
  if (typeof window !== "undefined") {
    window.SimpleLibrary = SimpleLibrary;
    window.addEventListener("load", SimpleLibrary.initialize);
  }

  return SimpleLibrary;
});
