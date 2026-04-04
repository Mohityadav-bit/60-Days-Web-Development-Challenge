const router = {
    load(page) {
        const main = document.getElementById("main");

        import(`./modules/${page}.js`)
            .then(module => {
                main.innerHTML = "";
                main.appendChild(module.render());
            })
            .catch(err => {
                main.innerHTML = "<h2>Page not found</h2>";
            });
    }
};

export default router;
