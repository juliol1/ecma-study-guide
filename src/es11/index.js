const b = document.getElementById("btn");

b.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});