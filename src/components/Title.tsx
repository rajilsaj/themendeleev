import React from "react";

const Title: React.FC = () => {
  return (
    <>
      <h1 style={{ fontSize: "48px", textAlign: "center" }}>Periodic Table</h1>
      <section className="quote-section">
        <blockquote>
          "With more than 10³² possible designs, there are more data structure
          designs than stars in the sky."
        </blockquote>
        <cite>
          —{" "}
          <a
            href="https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            *The Periodic Table of Data Structures*, Harvard CIDR 2021
          </a>
        </cite>
      </section>
    </>
  );
};

export default Title;
