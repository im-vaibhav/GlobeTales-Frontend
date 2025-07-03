import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About GlobeTales.</h2>
          <p>
            WorldWide is your personal travel companion — a simple, intuitive
            app that helps you keep track of the places you visit and the
            memories you make. Whether it’s a hidden café in your city or a
            breathtaking destination halfway across the world, WorldWide lets
            you log each stop with notes, reflections, and more.
          </p>
          <p>
            Easily add locations, write down what made them special, and revisit
            your journeys anytime. It’s your digital travel journal — built to
            help you relive every adventure and stay inspired for the next one.
          </p>
        </div>
      </section>
    </main>
  );
}
