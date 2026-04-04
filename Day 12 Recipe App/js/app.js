import router from "./router.js";

document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", () => {
        const page = item.dataset.page;
        router.load(page);
    });
});

// Load default page
router.load("pasta");
