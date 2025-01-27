import { card_create } from "../js/content_page.js";
import card from "../modules/recent_card.js";

const initial_page = `
    <h1>Your friendly To-Do</h1>
    <h2>Log In</h2>
    <form method="post">
        <section>
            <label for="id">ID:</label><br>
            <input type="text" id="id" name="client_id"><br><br>
        </section>
        <input type="submit" value="Login" aria-label="login">
    </form>

    <section style="text-align: center; display: flex; flex-direction: column; gap: 0px;">
        <p><i>Don't have an account yet?</i></p>
        <a id="sign" style="color:blue"><u>Sign In</u></a>
    </section>
`;
    
const signIn_page = `
    <h1>Your friendly To-Do</h1>
    <h2>Sign In</h2>
    <form method="post">
        <section>
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br><br>
        </section>
        <section>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>
        </section>
        <input type="submit" value="Sign In" aria-label="sign in">
    </form>

    <section style="text-align: center; display: flex; flex-direction: column; gap: 0px;">
        <p><i>Already have an account?</i></p>
        <a href="index.html">Login</a>
    </section>
`;

const content_page = `
    <header>
        <div>
            <img class="icons" src="./assets/light/profile.svg" alt="profile">
            <h3>Recent To-dos</h3>
        </div>
        <section>
            <img class="icons" src="./assets/light/notification.svg" alt="notification">
            <img class="icons" src="./assets/light/settings.svg" alt="settings">
        </section>
    </header>
    <main>
        <section id="recent">
            ${card_create()}
        </section>
        <h3>Review</h3>
        <section>
            <ul>
                <li>
                    <section>
                        ${card({})}
                        <p>Smart_tag_1</p>
                    </section>
                </li>
                <li>
                    <section>
                        ${card({})}
                        <p>Smart_tag_2</p>
                    </section>
                </li>
            </ul>
        </section> 
    </main>
    <footer>
        <nav>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    </footer>
    
`

export {initial_page, signIn_page, content_page};