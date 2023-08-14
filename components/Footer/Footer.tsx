"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="infoContainer">
          <div className="infoItem">
            <h4>Nosotros</h4>
            <Link href="/about">Conoce mas</Link>
          </div>
          <div className="infoItem">
            <h4>Servicios</h4>
            <Link href="/">
              <p>Todos los productos</p>
            </Link>
          </div>
          <div className="infoItem">
            <h4>Hecho para</h4>
            <p>
              <a href="https://platzi.com/cursos/next/" target="_blank">
                Platzi y su curso de Next.JS
              </a>
            </p>
            <div className="socialsContainer">
              <div className="socialItem">
                <a href="https://github.com/VivianaS14" target="_blank">
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="socialItem">
                <a
                  href="https://www.linkedin.com/in/viviana-soriano/"
                  target="_blank"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="linkContainer">
          <p>
            Hecho por <FavoriteIcon />{" "}
            <a href="https://personal-portfolio-vs.netlify.app" target="_blank">
              VivianaS14
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
