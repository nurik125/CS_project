export default function card (obj) {
    const src = obj.src || "../assets/default/no_content.png";
    const alt = obj.alt || "card";
    const grid_area = obj.grid_area || false;

    return `
        <section id="card" style='grid-area: area${grid_area};'>
            <img src=${src} alt=${alt}/>
        </section>
    `
}