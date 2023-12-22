import style from "./LeagalNotices.module.scss";

export default function LeagalNotices() {
    return (
        <main>
            <section className={`page-width page-max-width center-horizontal ${style.legal_notices}`}>
                <h1>Mentions légales</h1>
                Conformément aux dispositons des articles 6-III et 19 de la <Link to="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164">loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique</Link>, il est porté à la connaissance des utilisateurs du site "", les présentes mentions légales.
                <article>
                    <h2>Édition, développement et intégration du site</h2>
                    <p>
                        Gwendal Mouvet <br />
                        45 rue du champ de fraises <br />
                        62138 DOUVRIN <br />
                        Téléphone : 06.44.07.00.58 <br />
                        Email: gwenmouv26@gmail.com
                    </p>
                </article>
                <article>
                    <h2>Hébergement du site</h2>

                </article>
                <article>
                    <h2>Politique de confidentialité</h2>
                    <p>Role Initiative s'engage à ce que la collecte et le traitement des données, effectués sur le site, soient conformes au règlement général sur la protection des données (RGPD).</p>
                </article>
                <article>
                    <h2>Réutilisation du contenu</h2>
                </article>
            </section>
        </main>
    );
}
