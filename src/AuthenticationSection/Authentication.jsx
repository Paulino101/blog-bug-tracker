import React from "react";

function AuthenticationEntries({ entries }) {
  console.log(entries);
  return (
    <>
      <h1 className="m-5">Authentication</h1>
        {entries.map((entry) => (
          <section id={entry.title}>
            <h2>{entry.title}</h2>
            <p>{entry.date}</p>
            <p>{entry.body}</p>
          </section>
        ))}
    </>
  );
}

export default AuthenticationEntries;
