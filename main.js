document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const codeSnippet = document.getElementById("codeSnippet");
  
    copyButton.addEventListener("click", function () {
      const textToCopy = codeSnippet.innerText;
      const tempInput = document.createElement("textarea");
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Code copied to clipboard!");
    });
  });
  