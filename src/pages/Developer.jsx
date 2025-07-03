import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Developer() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            About the Developer
            <br />
            <span style={{ marginTop: "8px", display: "inline-block" }}>
              Vaibhav Raj
            </span>
          </h2>
          <p>
            Hey! I'm a full-stack web developer passionate about building clean,
            user-friendly apps. I built Globe-Tales to combine my love for
            travel, maps, and coding. <br /> <br />
            I’m currently pursuing my Master's from NIT and working with the
            MERN stack (MongoDB, Express, React, Node.js).
          </p>
          <p>
            You can find me on{" "}
            <a
              href="https://github.com/im-vaibhav"
              style={{
                color: "#00c46a",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Github
            </a>{" "}
            or reach out directly via email at{" "}
            <a
              href="mailto:vaibhavraj9958@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00c46a",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              vaibhavraj9958@gmail.com
            </a>
          </p>
        </div>

        <img src="img-2.jpg" alt="Vaibhav Raj portrait or coding desk" />
      </section>
    </main>
  );
}
