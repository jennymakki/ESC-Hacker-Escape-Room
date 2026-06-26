export default function Footer() {
  return (
    <footer>

      <article className="footer__article">

        <h4 className="footer__h4">
          [ESC] Hacker Escape Rooms
        </h4>

        <p className="footer__information">
          Quodsi haberent magnalia inter potentiam et divitias, et non illam
          quidem haec eo spectant haec quoque vos omnino desit illud quo solo
          felicitatis libertatisque perficiuntur.
        </p>

      </article>

      <div className="footer__links1">

        <h4 className="footer__h4">
          Site map
        </h4>

        <a href="#">The Story</a>
        <br />

        <a href="#">Contact us</a>
        <br />

        <a href="#">Legal</a>
        <br />
        <br />

        <a href="#">Play online</a>
        <br />

        <a href="#">Play on-site</a>

      </div>

      <div className="footer__links2">

        <h4 className="footer__h4">
          Follow us on
        </h4>

        <a href="#">Facebook</a>
        <br />

        <a href="#">Instagram</a>
        <br />

        <a href="#">Twitter</a>

      </div>

    </footer>
  );
}