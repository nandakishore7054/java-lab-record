import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ScreenshotFigure from '../components/ScreenshotFigure';
import ResultBox from '../components/ResultBox';

import mkdirTerminal from '../assets/week3/mkdir-terminal.png';
import wgetDriver from '../assets/week3/wget-driver.png';
import nanoSourceCode from '../assets/week3/nano-source-code.png';
import compileRunOutput from '../assets/week3/compile-run-output.png';

export default function Week3() {
  return (
    <WeekLayout
      weekNum={3}
      title="Java Database Connectivity (JDBC) with Microsoft Access Database using UCanAccess Driver"
    >
      <Section title="Aim">
        <p className="text-slate-700 leading-relaxed">
          To connect a Java application to a Microsoft Access database using JDBC and retrieve records from a table.
        </p>
      </Section>

      <Section title="Procedure & Terminal Execution Steps">
        {/* Step 1 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 1: Create a Working Project Directory
          </h4>
          <CodeBlock lang="terminal" code={`mkdir ~/Downloads/ucanaccess\ncd ~/Downloads/ucanaccess`} />

          <ScreenshotFigure
            src={mkdirTerminal}
            caption="Figure 3.1: Terminal directory creation — mkdir ~/Downloads/ucanaccess"
            alt="Terminal showing mkdir command"
          />
        </div>

        {/* Step 2 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 2: Download the UCanAccess JDBC Driver JAR
          </h4>
          <CodeBlock lang="terminal" code={`wget https://repo1.maven.org/maven2/io/github/spannm/ucanaccess/5.1.3/ucanaccess-5.1.3.jar`} />
          <p className="text-xs text-slate-500 mt-2 mb-3">
            Download the driver JAR along with the required Jackcess and HSQLDB dependencies if using non-uber distribution.
          </p>

          <ScreenshotFigure
            src={wgetDriver}
            caption="Figure 3.2: Downloading UCanAccess driver archive via wget"
            alt="Terminal showing wget download of ucanaccess jar"
          />
        </div>

        {/* Step 3 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 3: Copy Microsoft Access Database File
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-2">
            Place the database file <code className="px-1.5 py-0.5 rounded text-xs font-mono font-semibold bg-slate-100 text-indigo-700">Database1.accdb</code> inside the working directory.
          </p>
          <p className="text-xs font-semibold text-slate-700 mb-1">Verify directory contents:</p>
          <CodeBlock lang="terminal" code="ls -la" />
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 mt-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">Expected Workspace Files:</span>
            <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
              <li><code className="font-mono">AccessDemo.java</code> (Source Code)</li>
              <li><code className="font-mono">Database1.accdb</code> (MS Access Database)</li>
              <li><code className="font-mono">ucanaccess-5.1.2-uber.jar</code> (JDBC Driver)</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 4: Create & Edit AccessDemo.java Source Code
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-2">Open the source code file in GNU nano:</p>
          <CodeBlock lang="terminal" code="nano AccessDemo.java" />

          <ScreenshotFigure
            src={nanoSourceCode}
            caption="Figure 3.3: AccessDemo.java JDBC connection program opened in GNU nano editor"
            alt="nano editor showing AccessDemo.java JDBC source code"
          />
        </div>

        {/* Step 5 */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 5: Compile the Java Program
          </h4>
          <CodeBlock lang="terminal" code="javac AccessDemo.java" />
          <div className="mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">
            Compilation Successful: AccessDemo.class generated
          </div>
        </div>

        {/* Step 6 */}
        <div>
          <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif mb-2">
            Step 6: Execute with UCanAccess Classpath
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-2">
            Execute the compiled class by attaching the UCanAccess driver in the classpath parameter:
          </p>
          <CodeBlock lang="terminal" code={`java -cp ".:ucanaccess-5.1.2-uber.jar" AccessDemo`} />

          <ScreenshotFigure
            src={compileRunOutput}
            caption="Figure 3.4: Program execution showing database connection success and retrieved student records"
            alt="Terminal showing javac and java execution with Connected Successfully and records output"
          />
        </div>
      </Section>

      {/* Java Program */}
      <Section title="Java Program — AccessDemo.java">
        <CodeBlock
          lang="java"
          label="AccessDemo.java"
          code={`import java.sql.*;

public class AccessDemo {

    public static void main(String[] args) {

        try {
            String url =
                "jdbc:ucanaccess:////home/itlab3/Downloads/ucanaccess/Database1.accdb";

            Connection con =
                DriverManager.getConnection(url);

            System.out.println("Connected Successfully");

            Statement st =
                con.createStatement();

            ResultSet rs =
                st.executeQuery("SELECT * FROM student");

            while(rs.next()) {
                System.out.println(
                    rs.getInt("ID")  + " " +
                    rs.getString("NAME") + " " +
                    rs.getInt("MARKS"));
            }

            con.close();

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}`}
        />
      </Section>

      {/* Program Logic */}
      <Section title="Program Logic & Architecture">
        <ol className="space-y-2.5">
          {[
            'Import standard java.sql.* JDBC package interfaces.',
            'Specify UCanAccess connection URL with absolute path to Database1.accdb.',
            'Establish database connection through DriverManager.getConnection(url).',
            'Create a SQL Statement object through the active connection.',
            'Execute SQL query SELECT * FROM student to retrieve table records.',
            'Iterate through ResultSet rows and print ID, NAME, and MARKS.',
            'Release and close all database connection resources.',
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

      {/* Sample Output */}
      <Section title="Sample Console Output">
        <CodeBlock
          lang="output"
          label="Execution Output"
          code={`Connected Successfully\n\n1 RAMESH 10\n2 MAHESH 20\n3 SURESH 30\n4 RAJESH 40`}
        />
      </Section>

      <ResultBox text="The Java program successfully connected to the Microsoft Access database using the UCanAccess JDBC driver and retrieved all records from the database table. The output was displayed successfully on the terminal." />
    </WeekLayout>
  );
}
