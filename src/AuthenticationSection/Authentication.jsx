import React from "react";

function AuthenticationEntries({entries}) {
  return (
      <>
          <h1 className="m-5">Authentication</h1>
          {entries.map(entry => (
            <section className="ms-3">
                  <h2>{entry.title}</h2>
                  <p className="text-right font-weight-bold"> {entry.date}</p>
                  <p>{entry.body}</p>
                  {/* need img and img cap here still */}
                  
              </section>
          ))}
      </>
  );
}

export default AuthenticationEntries;
