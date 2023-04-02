import React from 'react';

function App(): JSX.Element {
  return (
    <>
      <header>
        <section>Tipbar goes here</section>
        <section>Header goes here</section>
      </header>
      <main>
        <section>
          <div>Categories goes here</div>
          <div>Banner goes here</div>
        </section>
        <section>
          <div>
            <h3>Shelf title goes here</h3>
          </div>
          <div>Shelf goes here</div>
        </section>
        <section>
          <div>
            <h3>Rotating Shelf title goes here</h3>
          </div>
          <div>Rotating Shelf goes here</div>
        </section>
      </main>
      <footer>
        <section>
          <div>
            <h4>Footer title goes here</h4>
          </div>
          <div>Footer link goes here</div>
        </section>
      </footer>
    </>
  );
}

export default App;
