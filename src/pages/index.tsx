import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.scss";
import { addTopping } from "../store/pizzaSlice";

const Home: NextPage = () => {
  const pizza = useSelector((state: any) => state.pizza);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1>
        this is the best pizza app anyone has ever made and if you dont agree
        with me you have bad opinyuns and racist
      </h1>
      <div className={styles.toppings}>
        {pizza.toppings.map((el: any) => {
          if (el.count <= 0) return;
          return (
            <span key={el.name}>
              {el.name}: x{el.count}
            </span>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button onClick={() => dispatch(addTopping("Pepperoni"))}>
          Add the pepperoni
        </button>
        <button onClick={() => dispatch(addTopping("Anchoveeees (ew)"))}>
          Add the ahnchouvies (ew)
        </button>
        <button onClick={() => dispatch(addTopping("MyBalls"))}>
          Add the my balls (yum)
        </button>
      </div>
    </div>
  );
};

export default Home;
