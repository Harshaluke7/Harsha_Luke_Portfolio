/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Skills, Projects, Education, Certifications, Footer } from "./components/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
