import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ScreenshotFigure from '../components/ScreenshotFigure';
import ResultBox from '../components/ResultBox';

import netbeansHome from '../assets/week5/netbeans-home.png';
import newJavaProject from '../assets/week5/new-java-project.png';
import javaSourceCode from '../assets/week5/java-source-code.png';
import createDatabase from '../assets/week5/create-database.png';
import createTable from '../assets/week5/create-table.png';
import insertRecords from '../assets/week5/insert-records.png';
import addJdbcDriver from '../assets/week5/add-jdbc-driver.png';
import programExecution from '../assets/week5/program-execution.png';
import finalOutput from '../assets/week5/final-output.png';

export default function Week5() {
  return (
    <WeekLayout
      weekNum={5}
      title="Java Application Connectivity with MySQL Database using JDBC in NetBeans"
    >
      <Section title="Aim">
        <p className="text-slate-700 leading-relaxed">
          To create a Java application in Apache NetBeans IDE that establishes a connection with a MySQL database via JDBC and displays retrieved employee records.
        </p>
      </Section>

      <Section title="Software Requirements">
        <div className="grid sm:grid-cols-2 gap-2.5">
          {[
            'Windows 10 / 11 Operating System',
            'Java Development Kit (JDK 8 / 11 / 17)',
            'Apache NetBeans IDE 8.2 / 12+',
            'WAMP / XAMPP Localhost Server',
            'MySQL Relational Database Service',
            'MySQL Connector/J Driver (com.mysql.jdbc.Driver)',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Algorithm & Step-by-Step Methodology">
        <ol className="space-y-2.5">
          {[
            'Launch the Apache NetBeans IDE environment.',
            'Create a new Java Application project named JavaApplication26.',
            'Start WAMP Server and confirm the MySQL service is operational on localhost:3306.',
            'Access MySQL console, create database "it", and define employee table structure.',
            'Insert sample employee records (rollno, name) into the employee table.',
            'Attach the MySQL JDBC driver JAR file into the NetBeans project Libraries folder.',
            'Author the JDBC database connection and data retrieval logic.',
            'Compile, execute, and verify the console output displaying employee rows.',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-md text-[11px] font-mono font-bold flex items-center justify-center bg-indigo-50 text-indigo-700 border border-indigo-200 mt-0.5">
                {i + 1}
              </span>
              <span className="text-slate-700">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Procedure & Step-by-Step Execution">
        {/* Step 1 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 1: Launch Apache NetBeans IDE
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Open the Apache NetBeans IDE 8.2 workspace.
          </p>
          <ScreenshotFigure
            src={netbeansHome}
            caption="Figure 5.1: Apache NetBeans IDE 8.2 Start Screen"
            alt="Apache NetBeans IDE 8.2 home screen showing Learn and Discover section"
          />
        </div>

        {/* Step 2 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 2: Create New Java Application Project
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-2">
            Navigate to: <code className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-slate-100 text-indigo-700">File → New Project → Java → Java Application</code>
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Name the project <strong>JavaApplication26</strong> and click <strong>Finish</strong>.
          </p>
          <ScreenshotFigure
            src={newJavaProject}
            caption="Figure 5.2: Creating New Java Project in NetBeans IDE"
            alt="NetBeans showing new Java project creation with JavaApplication115.java open"
          />
        </div>

        {/* Step 3 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 3: Implement Java JDBC Source Code
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Write the JDBC database connection and data manipulation code inside <code className="font-mono text-indigo-600">JavaApplication26.java</code>.
          </p>
          <ScreenshotFigure
            src={javaSourceCode}
            caption="Figure 5.3: Source Code Editor in NetBeans IDE showing JDBC Connection Program"
            alt="NetBeans IDE showing JavaApplication26.java with JDBC MySQL connection code"
          />
        </div>

        {/* Step 4 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 4: WAMP Server & MySQL Database Setup
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-2">
            Start WAMP Server, open MySQL console, and execute SQL statements:
          </p>
          <CodeBlock
            lang="sql"
            label="MySQL Database Setup"
            code={`create database it;\nuse it;\n\ncreate table employee(\n    rollno varchar(10),\n    name   varchar(100) primary key\n);\n\ninsert into employee values(1, 'ramesh');\ninsert into employee values(2, 'harshith');\ninsert into employee values(3, 'haswika');\ninsert into employee values(4, 'rajesh');\ninsert into employee values(5, 'suresh');`}
          />

          <ScreenshotFigure
            src={createDatabase}
            caption="Figure 5.4: MySQL Console — CREATE DATABASE it executed successfully"
            alt="MySQL console showing CREATE DATABASE it with Query OK response"
          />

          <ScreenshotFigure
            src={createTable}
            caption="Figure 5.5: MySQL Console — Employee table created with rollno and primary key name"
            alt="MySQL console showing use it and create table employee query"
          />

          <ScreenshotFigure
            src={insertRecords}
            caption="Figure 5.6: MySQL Console — 5 employee records inserted successfully"
            alt="MySQL console showing insert into employee statements with Query OK responses"
          />
        </div>

        {/* Step 5 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 5: Add MySQL JDBC Driver to NetBeans Libraries
          </h4>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs sm:text-sm text-slate-700 mb-3 space-y-1">
            <p>1. Right-click <strong>Libraries</strong> folder under <strong>JavaApplication26</strong> project node.</p>
            <p>2. Select <strong>Add JAR/Folder</strong>.</p>
            <p>3. Browse and select the <code className="font-mono text-indigo-700">mysql-connector-java-5.1.5-bin.jar</code> driver archive.</p>
          </div>

          <ScreenshotFigure
            src={addJdbcDriver}
            caption="Figure 5.7: NetBeans Add JAR/Folder dialog selecting MySQL Connector/J driver"
            alt="NetBeans Add JAR/Folder dialog showing MySQL JDBC driver selection"
          />
        </div>

        {/* Step 6 */}
        <div>
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 6: Build & Run Application
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Click <strong>Run Project</strong> (F6). The application establishes JDBC connection and retrieves employee rows from MySQL.
          </p>

          <ScreenshotFigure
            src={programExecution}
            caption="Figure 5.8: NetBeans Output window showing retrieved employee records"
            alt="NetBeans output window showing employee records: 2 harshith, 3 haswika, 1 ramesh, 5 suresh — BUILD SUCCESSFUL"
          />

          <ScreenshotFigure
            src={finalOutput}
            caption="Figure 5.9: Final NetBeans execution console with BUILD SUCCESSFUL"
            alt="NetBeans output panel showing final employee list output"
          />
        </div>
      </Section>

      {/* Java Program */}
      <Section title="Java Program — JavaApplication26.java">
        <CodeBlock
          lang="java"
          label="JavaApplication26.java"
          code={`package javaapplication26;

import java.sql.*;
import java.util.*;

public class JavaApplication26 {

    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost/it", "root", "");

            Statement st = con.createStatement();

            int delete = st.executeUpdate(
                "delete from employee where rollno=4");

            ResultSet rs = st.executeQuery("select * from employee");

            while(rs.next()) {
                System.out.println(rs.getInt(1) + " " + rs.getString(2));
            }

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />
      </Section>

      {/* Expected Output */}
      <Section title="Retrieved Database Records">
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs max-w-sm mb-3">
          <table className="w-full text-xs sm:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="px-4 py-2.5 font-semibold border-r border-slate-800">Roll No</th>
                <th className="px-4 py-2.5 font-semibold">Employee Name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {[
                ['1', 'ramesh'],
                ['2', 'harshith'],
                ['3', 'haswika'],
                ['5', 'suresh'],
              ].map(([r, n], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-2.5 font-mono border-r border-slate-200">{r}</td>
                  <td className="px-4 py-2.5 font-medium">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 italic">
          * Note: Record rollno 4 (rajesh) was removed by the DML delete operation in the program.
        </p>
      </Section>

      <ResultBox text="The Java application was successfully connected to the MySQL database using JDBC in NetBeans IDE. The records stored in the employee table were retrieved and displayed successfully on the console." />
    </WeekLayout>
  );
}
