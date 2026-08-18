import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import { BookOpen } from 'lucide-react';

export default function Week1() {
  return (
    <WeekLayout
      weekNum={1}
      title="Java Assignment — Core vs Advanced Java, Applets, Servlets, JDBC, ODBC, Cookies, Spring Boot"
    >
      {/* Assignment note */}
      <div className="p-4 rounded-xl text-xs sm:text-sm bg-indigo-50/70 border border-indigo-200/80 text-indigo-950 flex items-start gap-3">
        <BookOpen size={18} className="text-indigo-600 flex-shrink-0 mt-0.5" />
        <div>
          <strong>Assignment Overview:</strong> Comprehensive theoretical study covering conceptual comparisons, architectural differences, and technical reference tables for Advanced Java technologies.
        </div>
      </div>

      {/* Q1 */}
      <Section title="1. Differences between Core Java and Advanced Java">
        <p className="text-slate-700">
          Core Java is the fundamental part of Java programming used for developing general-purpose applications, whereas Advanced Java is used for developing dynamic web and enterprise applications. Advanced Java is built on Core Java concepts and provides additional technologies for distributed computing.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="px-4 py-3 font-semibold w-1/2 border-r border-slate-800">Core Java</th>
                <th className="px-4 py-3 font-semibold w-1/2">Advanced Java</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['Used to develop standalone applications.', 'Used to develop web-based and enterprise applications.'],
                ['Includes basic concepts such as OOP, Exception Handling, Collections, Multithreading, File Handling, and basic JDBC.', 'Includes technologies such as Servlets, JSP, JDBC, Hibernate, Spring, Spring Boot, and Web Services.'],
                ['Applications run on a single system.', 'Applications run in client-server and distributed environments.'],
                ['Does not require a web server.', 'Requires a web server or application server like Apache Tomcat.'],
                ['Focuses on basic programming structure and logic building.', 'Focuses on enterprise-level application development and database connectivity.'],
                ['Used for desktop applications and console programs.', 'Used for web applications, banking systems, e-commerce, and ERP systems.'],
                ['Easier to learn and forms the base of Java.', 'More complex and requires knowledge of Core Java.'],
                ['Example: Calculator, Notepad application.', 'Example: Online shopping system, banking portal.'],
              ].map(([a, b], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-3 align-top leading-relaxed border-r border-slate-200">{a}</td>
                  <td className="px-4 py-3 align-top leading-relaxed">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> Core Java provides the basic foundation of Java programming, while Advanced Java extends these concepts to develop powerful, secure, and scalable enterprise applications.
        </p>
      </Section>

      {/* Q2 */}
      <Section title="2. Main Important Features of Applets in Java">
        <p className="text-slate-700">
          An Applet is a small Java program that runs inside a web browser or applet viewer. It was mainly used to create interactive web applications before modern web technologies like HTML5 and JavaScript became popular.
        </p>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-3">Key Features of Applets:</h4>
          <ol className="space-y-2.5">
            {[
              ['Client-Side Execution', 'Applets run on the client machine inside a browser using JVM, reducing server load.'],
              ['Platform Independent', 'Applets are written in Java bytecode and can run on any system with JVM support.'],
              ['Secure Execution (Sandbox Model)', 'Applets run in a restricted environment and cannot access local system files directly.'],
              ['Lifecycle Methods', 'Applets work using lifecycle methods like init(), start(), stop(), paint(), and destroy().'],
              ['Graphical User Interface (GUI)', 'Applets support GUI using AWT and Swing components such as buttons, text fields, and labels.'],
              ['Event Handling', 'Applets respond to user actions like mouse clicks and keyboard inputs.'],
              ['Multimedia Support', 'They can display images, animations, and audio.'],
              ['Dynamic Content', 'Applets can update content dynamically without reloading the web page.'],
            ].map(([name, desc], i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-md text-[11px] font-mono font-bold flex items-center justify-center bg-indigo-50 text-indigo-700 border border-indigo-200/80 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-slate-900">{name}:</strong> <span className="text-slate-600">{desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> Applets were useful for interactive web applications but are now obsolete due to security issues and modern web technologies.
        </p>
      </Section>

      {/* Q3 */}
      <Section title="3. Key Features of Java Servlets">
        <p className="text-slate-700">
          A Servlet is a server-side Java program used to handle client requests and generate dynamic web content. It runs inside a servlet container such as Apache Tomcat.
        </p>
        <ol className="space-y-2.5">
          {[
            ['Server-Side Technology', 'Servlets run on the server and process client requests.'],
            ['Platform Independent', 'Written in Java, so they can run on any operating system.'],
            ['High Performance', 'Uses multithreading, where a single servlet handles multiple requests efficiently.'],
            ['Robust Lifecycle Management', 'Uses init(), service(), and destroy() methods managed by the servlet container.'],
            ['Session Management', 'Maintains user data using sessions and cookies.'],
            ['Database Connectivity', 'Can connect to databases using JDBC for data operations.'],
            ['Secure', 'Provides better security as processing is done on the server side.'],
            ['Scalable', 'Can handle a large number of users simultaneously.'],
            ['Integration Support', 'Easily integrates with JSP, Spring, and Hibernate.'],
          ].map(([name, desc], i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-md text-[11px] font-mono font-bold flex items-center justify-center bg-slate-900 text-white mt-0.5">
                {i + 1}
              </span>
              <div>
                <strong className="text-slate-900">{name}:</strong> <span className="text-slate-600">{desc}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> Servlets are an important technology for building dynamic, secure, and scalable web applications.
        </p>
      </Section>

      {/* Q4 */}
      <Section title="4. Differences between Applets and Servlets">
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="px-4 py-3 font-semibold w-1/2 border-r border-slate-800">Applets</th>
                <th className="px-4 py-3 font-semibold w-1/2">Servlets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['Applets run on the client side.', 'Servlets run on the server side.'],
                ['Executed inside a web browser.', 'Executed inside a web server or servlet container.'],
                ['Used for GUI-based applications.', 'Used for generating dynamic web pages.'],
                ['Requires JVM in browser.', 'Requires servlet container like Tomcat.'],
                ['Limited access to system resources.', 'Full access to server resources.'],
                ['Mainly used for user interaction.', 'Mainly used for business logic processing.'],
                ['Less secure in modern systems.', 'More secure and widely used.'],
                ['Now mostly obsolete.', 'Still widely used in enterprise applications.'],
              ].map(([a, b], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-3 align-top leading-relaxed border-r border-slate-200">{a}</td>
                  <td className="px-4 py-3 align-top leading-relaxed">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> Applets are client-side GUI programs, whereas Servlets are server-side components used for web application development.
        </p>
      </Section>

      {/* Q5 */}
      <Section title="5. Role of JDBC and ODBC in Database Connectivity">
        <p className="text-slate-700">
          Database connectivity allows applications to interact with databases for storing and retrieving data. JDBC and ODBC are two important technologies used for this purpose.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
            <h4 className="font-bold text-xs uppercase tracking-wider text-blue-900 mb-2">JDBC (Java Database Connectivity)</h4>
            <p className="text-xs text-slate-600 mb-2">JDBC is a Java API used to connect Java applications with databases.</p>
            <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
              <li>Establishes connection between Java application and database.</li>
              <li>Executes SQL queries like SELECT, INSERT, UPDATE, DELETE.</li>
              <li>Retrieves and updates database data.</li>
              <li>Supports transaction management.</li>
              <li>Works with MySQL, Oracle, PostgreSQL.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-2">ODBC (Open Database Connectivity)</h4>
            <p className="text-xs text-slate-600 mb-2">ODBC is a standard API used to connect applications written in different languages to databases.</p>
            <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
              <li>Provides a common interface for database access.</li>
              <li>Uses ODBC drivers for communication.</li>
              <li>Supports multiple programming languages.</li>
              <li>Allows database switching without changing application code.</li>
            </ul>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> JDBC is Java-specific database connectivity, while ODBC is language-independent and used for general database access.
        </p>
      </Section>

      {/* Q6 */}
      <Section title="6. Differences between ODBC and JDBC">
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="px-4 py-3 font-semibold w-1/2 border-r border-slate-800">ODBC</th>
                <th className="px-4 py-3 font-semibold w-1/2">JDBC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['ODBC stands for Open Database Connectivity.', 'JDBC stands for Java Database Connectivity.'],
                ['It is language independent.', 'It is specific to Java programming language.'],
                ['Uses ODBC drivers for database communication.', 'Uses JDBC drivers for database communication.'],
                ['Can connect to multiple types of applications written in different languages.', 'Can only be used in Java applications.'],
                ['Requires ODBC driver installation on the system.', 'Does not require external installation; included in Java API.'],
                ['Slightly slower due to additional layers.', 'Faster and more efficient for Java applications.'],
                ['Mostly used in Windows-based applications.', 'Used in platform-independent Java applications.'],
              ].map(([a, b], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-3 align-top leading-relaxed border-r border-slate-200">{a}</td>
                  <td className="px-4 py-3 align-top leading-relaxed">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> ODBC is a universal database connectivity standard, while JDBC is optimized for Java applications.
        </p>
      </Section>

      {/* Q7 */}
      <Section title="7. Differences between Cookies and Sessions in Web Applications">
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="px-4 py-3 font-semibold w-1/2 border-r border-slate-800">Cookies</th>
                <th className="px-4 py-3 font-semibold w-1/2">Sessions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['Stored on the client-side (browser).', 'Stored on the server-side.'],
                ['Less secure because data is stored in the browser.', 'More secure because data is stored on the server.'],
                ['Has limited storage capacity (around 4KB).', 'Can store large amounts of data.'],
                ['Can persist even after browser is closed (if set).', 'Ends when session expires or user logs out.'],
                ['Easy to implement.', 'Slightly complex to manage.'],
                ['Example: Remembering login preferences.', 'Example: Maintaining logged-in user session.'],
              ].map(([a, b], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-3 align-top leading-relaxed border-r border-slate-200">{a}</td>
                  <td className="px-4 py-3 align-top leading-relaxed">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> Cookies store data on the client side, while sessions store data securely on the server side.
        </p>
      </Section>

      {/* Q8 */}
      <Section title="8. Differences between Spring Boot and Traditional Spring Framework">
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="px-4 py-3 font-semibold w-1/2 border-r border-slate-800">Spring Framework</th>
                <th className="px-4 py-3 font-semibold w-1/2">Spring Boot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['Requires manual configuration.', 'Provides auto-configuration.'],
                ['Needs XML or Java-based configuration setup.', 'Uses annotation-based configuration.'],
                ['Requires external server setup.', 'Comes with embedded servers like Tomcat.'],
                ['More complex to start a project.', 'Very easy and quick project setup.'],
                ['Suitable for experienced developers.', 'Suitable for rapid application development.'],
                ['Provides flexibility but requires more coding.', 'Reduces boilerplate code significantly.'],
              ].map(([a, b], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-3 align-top leading-relaxed border-r border-slate-200">{a}</td>
                  <td className="px-4 py-3 align-top leading-relaxed">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> Spring Boot simplifies Spring Framework by providing auto-configuration and faster development.
        </p>
      </Section>

      {/* Q9 */}
      <Section title="9. Differences between Standalone Applications and Web Applications">
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="px-4 py-3 font-semibold w-1/2 border-r border-slate-800">Standalone Applications</th>
                <th className="px-4 py-3 font-semibold w-1/2">Web Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['Run on a single computer.', 'Run on client-server architecture.'],
                ['Do not require internet connection.', 'Require internet or network connection.'],
                ['Installed on a local system.', 'Accessed through web browsers.'],
                ['Example: Notepad, Calculator.', 'Example: Online banking, shopping websites.'],
                ['Limited accessibility.', 'Accessible from anywhere.'],
                ['No server required.', 'Requires web server and database.'],
                ['Built using Core Java or similar languages.', 'Built using technologies like Servlets, JSP, Spring.'],
              ].map(([a, b], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-3 align-top leading-relaxed border-r border-slate-200">{a}</td>
                  <td className="px-4 py-3 align-top leading-relaxed">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> Standalone applications run locally, while web applications run over a network and are accessible remotely.
        </p>
      </Section>

      {/* Q10 */}
      <Section title="10. Basic Requirements for Executing a Web Application">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Client-Side Requirements',
              color: 'border-blue-200 bg-blue-50/50 text-blue-900',
              items: ['A web browser such as Chrome, Firefox, or Edge.', 'Operating system like Windows, Linux, macOS, or Android.', 'Internet connection to communicate with the server.', 'Basic hardware resources (CPU, RAM).'],
            },
            {
              title: 'Server-Side Requirements',
              color: 'border-emerald-200 bg-emerald-50/50 text-emerald-900',
              items: ['Web server such as Apache HTTP Server or Nginx.', 'Application server / servlet container like Apache Tomcat.', 'Database Management System (DBMS) such as MySQL, Oracle, or PostgreSQL.', 'Server-side programming language (Java, PHP, etc.).'],
            },
            {
              title: 'Network Requirements',
              color: 'border-purple-200 bg-purple-50/50 text-purple-900',
              items: ['HTTP/HTTPS protocol for communication.', 'Stable internet or intranet connection.', 'DNS system for domain name resolution.'],
            },
          ].map(({ title, color, items }) => (
            <div key={title} className={`p-4 rounded-xl border ${color}`}>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-2.5">{title}</h4>
              <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                {items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Conclusion:</strong> A web application requires both client and server environments connected through a network to function properly.
        </p>
      </Section>

      {/* Comparison table */}
      <Section title="Comparative Study: Java vs C vs C++ vs Python vs JavaScript">
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                {['Feature', 'Java', 'C', 'C++', 'Python', 'JavaScript'].map((h, idx) => (
                  <th key={h} className={`px-3.5 py-3 font-semibold ${idx !== 5 ? 'border-r border-slate-800' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['Language Type', 'High-level, OOP', 'Procedural', 'Multi-paradigm', 'High-level, interpreted', 'High-level, scripting'],
                ['OOP Support', 'Yes (fully OOP)', 'No', 'Yes', 'Yes', 'Yes'],
                ['Execution', 'Compiler + JVM', 'Compiled', 'Compiled', 'Interpreted', 'Interpreted (JIT)'],
                ['Developer Org', 'Oracle', 'Bell Labs', 'Bjarne Stroustrup', 'Python Software Foundation', 'Netscape / ECMA'],
                ['Primary Purpose', 'Enterprise, web apps', 'System programming', 'System + app programming', 'AI, ML, scripting', 'Web development'],
                ['Memory Management', 'Automatic (GC)', 'Manual', 'Manual', 'Automatic', 'Automatic'],
                ['Security Features', 'High', 'Low–Medium', 'Medium', 'High', 'Medium'],
                ['Platform Independence', 'Yes (WORA)', 'No', 'No', 'Yes', 'Yes'],
                ['Ease of Learning', 'Moderate', 'Difficult', 'Difficult', 'Easy', 'Easy'],
                ['Performance', 'High', 'Very high', 'Very high', 'Medium', 'High'],
              ].map(([feature, ...vals], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-3.5 py-2.5 font-bold text-slate-900 font-mono border-r border-slate-200">{feature}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-3.5 py-2.5 ${j !== vals.length - 1 ? 'border-r border-slate-200' : ''}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </WeekLayout>
  );
}
