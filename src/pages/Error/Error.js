import style from "./Error.module.scss";

export default function Error() {
    return (
        <main>
            <section className={`page-width page-max-width center-horizontal ${style.error}`}>
                <h2>Erreur 404</h2>
                <p>Page introuvable vous avez roulé un 1 !</p>
            </section>
        </main>
    );
}
