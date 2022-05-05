import React from "react";
import styles from "./Expenses.module.scss";
import personsOne from "../../assets/png/person1.png";
import personsTwo from "../../assets/png/person2.png";
import personsThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const Expenses = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expensesActions}>
                <div className={styles.personImages}>
                  <img src={personsOne} alt="person one" />
                  <img src={personsTwo} alt="person one" />
                  <img src={personsThree} alt="person one" />
                </div>
                <button>
                  <img src={addIcon} alt="add" />
                </button>
              </div>
            </div>

            <p className={styles.dateRange}>01 - 25 March, 2020</p>

            <ResponsiveContainer width="100%" minHeight="9vh">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
                
              </BarChart>
            </ResponsiveContainer>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Expenses;
