export default function index_js(page) {
    switch(page){
        case "initial_page":
            document.getElementById('module').href = "./css/initial_page.css";
            import("../js/initial_page.js")
            .catch(err => {
                console.error('Failed to load script:', err);
            });
            break;
        case "signIn":
            document.getElementById('module').href = "./css/signIn.css";
            import("../js/signIn.js")
            .catch(err => {
                console.error('Failed to load script:', err);
            });
            break;
        case "content_page":
            document.getElementById('module').href = "./css/content_page.css";
            import("../js/content_page.js")
            .catch(err => {
                console.error('Failed to load script:', err);
            });
            break;
    }
};