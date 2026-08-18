import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ScreenshotFigure from '../components/ScreenshotFigure';
import ResultBox from '../components/ResultBox';

import mysqlSetup from '../assets/week4/mysql-setup.png';
import wgetConnector from '../assets/week4/wget-connector.png';
import statementOutput from '../assets/week4/statement-output.png';

export default function Week4() {
  return (
    <WeekLayout
      weekNum={4}
      title="Java & MySQL Database Connections – Simple – Prepared – Callable – Three Execution Types"
    >
      <Section title="Aim">
        <p className="text-slate-700 leading-relaxed">
          To establish a connection between a Java application and a MySQL database using JDBC and perform database operations using Statement, PreparedStatement, and CallableStatement.
        </p>
      </Section>

      <Section title="Software Requirements">
        <div className="grid sm:grid-cols-2 gap-2.5">
          {[
            'Ubuntu Linux Operating System',
            'Java Development Kit (JDK)',
            'MySQL Database Server (v8.0+)',
            'MySQL Connector/J (JDBC Type-4 Driver)',
            'Terminal & MySQL Command Line Client',
            'TCP/IP Port 3306 Configuration',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Theoretical Overview of JDBC Execution Interfaces">
        <p className="text-slate-700 leading-relaxed mb-4">
          Java Database Connectivity (JDBC) is a standard Java API providing uniform access to relational databases. JDBC defines interfaces to establish connections, execute queries, process result sets, and commit transactions.
        </p>
        <p className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-3">
          The Three Fundamental JDBC Execution Interfaces:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              num: '01',
              title: 'Statement',
              color: 'border-blue-200 bg-blue-50/50 text-blue-900',
              points: [
                'Executes static, unparameterized SQL queries.',
                'Compiles and parses SQL on each invocation.',
                'Best suited for one-off generic administrative DDL/DML.',
              ],
            },
            {
              num: '02',
              title: 'PreparedStatement',
              color: 'border-emerald-200 bg-emerald-50/50 text-emerald-900',
              points: [
                'Executes precompiled, parameterized SQL queries.',
                'Provides defense against SQL Injection attacks.',
                'Significantly faster for repeated query execution.',
              ],
            },
            {
              num: '03',
              title: 'CallableStatement',
              color: 'border-purple-200 bg-purple-50/50 text-purple-900',
              points: [
                'Executes stored procedures and functions in RDBMS.',
                'Supports IN, OUT, and INOUT parameter binding.',
                'Encapsulates business and computational logic in database.',
              ],
            },
          ].map(({ num, title, color, points }) => (
            <div key={num} className={`p-4 rounded-xl border ${color} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded shadow-2xs">
                    Type {num}
                  </span>
                  <h4 className="font-bold text-sm">{title}</h4>
                </div>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700 mt-2">
                  {points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Database Schema & Sample Dataset Creation">
        <p className="text-xs sm:text-sm text-slate-600 mb-2">
          Create the college database, student table, and seed initial records in the MySQL command line client:
        </p>
        <CodeBlock
          lang="sql"
          label="MySQL Schema Setup"
          code={`CREATE DATABASE college;
USE college;

CREATE TABLE student(
    id   INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO student VALUES
    (101, 'Ramesh'),
    (102, 'Haswika'),
    (103, 'Harshith');`}
        />

        <ScreenshotFigure
          src={mysqlSetup}
          caption="Figure 4.1: MySQL CLI console — Database college and student table created with 3 sample rows"
          alt="MySQL database and table creation"
        />
      </Section>

      <Section title="Download & Configure MySQL Connector/J JDBC Driver">
        <p className="text-xs sm:text-sm text-slate-600 mb-2">
          Download MySQL Connector/J (Type-4 pure Java driver) archive using wget and extract the archive:
        </p>
        <CodeBlock
          lang="terminal"
          code={`wget https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-j-9.4.0.tar.gz\ntar -xzf mysql-connector-j-9.4.0.tar.gz`}
        />

        <ScreenshotFigure
          src={wgetConnector}
          caption="Figure 4.2: Terminal download and extraction of mysql-connector-j driver archive"
          alt="downloading the MySQL connector"
        />
      </Section>

      <Section title="Program 1 — Static Query Execution using Statement">
        <p className="text-xs sm:text-sm text-slate-600 mb-3">
          The <strong>Statement</strong> interface connects to MySQL and fetches records using a static SELECT query:
        </p>
        <CodeBlock
          lang="java"
          label="JdbcDemo.java (Statement)"
          code={`import java.sql.*;

public class JdbcDemo {

    public static void main(String args[]) {

        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "password");

            Statement stmt = con.createStatement();

            ResultSet rs = stmt.executeQuery(
                "SELECT * FROM student");

            while(rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name"));
            }

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />
        
        <p className="text-xs font-semibold text-slate-700 mt-4 mb-1">Compilation & Execution:</p>
        <CodeBlock
          lang="terminal"
          code={`javac -cp .:~/mysql-connector-j-9.4.0/mysql-connector-j-9.4.0.jar JdbcDemo.java\njava -cp .:~/mysql-connector-j-9.4.0/mysql-connector-j-9.4.0.jar JdbcDemo`}
        />

        <ScreenshotFigure
          src={statementOutput}
          caption="Figure 4.3: Terminal output from Statement execution displaying student records: 101 Ramesh, 102 Haswika, 103 Harshith"
          alt="Statement output"
        />
      </Section>

      <Section title="Program 2 — Parameterized Query Execution using PreparedStatement">
        <p className="text-xs sm:text-sm text-slate-600 mb-3">
          The <strong>PreparedStatement</strong> interface inserts a parameterized record and retrieves updated rows safely:
        </p>
        <CodeBlock
          lang="java"
          label="JdbcPrepared.java (PreparedStatement)"
          code={`import java.sql.*;

public class JdbcPrepared {

    public static void main(String args[]) {

        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "password");

            // Insert parameterized record
            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO student VALUES(?, ?)");

            ps.setInt(1, 104);
            ps.setString(2, "Priya");
            ps.executeUpdate();

            System.out.println("Record inserted using PreparedStatement");

            // Read all records
            PreparedStatement ps2 = con.prepareStatement(
                "SELECT * FROM student");
            ResultSet rs = ps2.executeQuery();

            while(rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name"));
            }

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />
        <CodeBlock
          lang="output"
          label="PreparedStatement Output"
          code={`Record inserted using PreparedStatement\n101 Ramesh\n102 Haswika\n103 Harshith\n104 Priya`}
        />
      </Section>

      <Section title="Program 3 — Stored Procedure Execution using CallableStatement">
        <p className="text-xs sm:text-sm text-slate-600 mb-2">
          First, register the stored procedure in MySQL:
        </p>
        <CodeBlock
          lang="sql"
          label="MySQL Stored Procedure"
          code={`DELIMITER $$
CREATE PROCEDURE GetStudents()
BEGIN
    SELECT * FROM student;
END$$
DELIMITER ;`}
        />

        <p className="text-xs sm:text-sm text-slate-600 my-2">
          Execute the stored procedure via <strong>CallableStatement</strong>:
        </p>
        <CodeBlock
          lang="java"
          label="JdbcCallable.java (CallableStatement)"
          code={`import java.sql.*;

public class JdbcCallable {

    public static void main(String args[]) {

        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "password");

            CallableStatement cs =
                con.prepareCall("{call GetStudents()}");

            ResultSet rs = cs.executeQuery();

            while(rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name"));
            }

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />
        <CodeBlock
          lang="output"
          label="CallableStatement Output"
          code={`101 Ramesh\n102 Haswika\n103 Harshith`}
        />
      </Section>

      <ResultBox text="Thus, the Java application was successfully connected to the MySQL database using JDBC. SQL operations were performed successfully using Statement, PreparedStatement, and CallableStatement, and the expected results were obtained." />
    </WeekLayout>
  );
}
