import React from "react";

function Authentication() {
  return (
      <>
          <h1 className="mt-5">Authentication</h1>
          <section id='ui'>
              <h2>Making the UI</h2>
             <p>Not much to talk about this part of authentication I made a simple form that has 2 inputs and a submit button.</p>
            {/* need and image with caption */}
          </section>
          <section id="firebase">
              <h2>FireBase</h2>
              <p>After making the inputs it was time to add functionality. I chose to use Firebase because I loved their documentation. Also there was a lot of support online if I ever got stuck on something(which I did, a lot). I spent a good week implementing the email sign in and an extra week implementing the google sign in.</p>

          </section>
      </>
  );
}

export default Authentication;
