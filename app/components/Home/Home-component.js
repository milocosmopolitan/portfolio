/*
 * Stateless Functional Component
 * =====================================
 * https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.7qmv5qk1o
 */

import React from 'react';

export default () => (
  <div>
  	<section id="about" className="fullHeight">
      About
    </section>
    {/*<Projects />*/}
    <section id="projects" className="fullHeight">
      Projects
    </section>
    {/*<Contact />*/}
    <section id="contact" className="fullHeight">
      Contacts
    </section>
  </div>
);