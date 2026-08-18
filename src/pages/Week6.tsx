import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ScreenshotFigure from '../components/ScreenshotFigure';
import ResultBox from '../components/ResultBox';

import dbCreation from '../assets/week6/database-creation.png';
import tablesCreated from '../assets/week6/tables-created.png';
import storedProcedures from '../assets/week6/stored-procedures.png';
import insertPersonOutput from '../assets/week6/insert-person-output.png';
import personVerification from '../assets/week6/person-verification.png';
import employeeSelectionOutput from '../assets/week6/employee-selection-output.png';
import employeeTable from '../assets/week6/employee-table.png';
import productInsertionOutput from '../assets/week6/product-insertion-output.png';
import productTable from '../assets/week6/product-table.png';
import departmentDeletedOutput from '../assets/week6/department-deleted-output.png';
import departmentVerification from '../assets/week6/department-verification.png';
import crudBookOutput from '../assets/week6/crud-book-output.png';

export default function Week6() {
  return (
    <WeekLayout
      weekNum={6}
      title="JDBC CRUD Operations using MySQL Database"
    >
      <Section title="Aim">
        <p className="text-slate-700 leading-relaxed">
          To connect a Java application to a MySQL database using JDBC and perform complete CRUD (Create, Read, Update, Delete) operations using PreparedStatement and CallableStatement.
        </p>
      </Section>

      <Section title="Software Requirements">
        <div className="grid sm:grid-cols-2 gap-2.5">
          {[
            'WAMP Server (MySQL Relational Engine)',
            'Apache NetBeans IDE (v8.2 / 12+)',
            'Java Development Kit (JDK 8 / 11+)',
            'MySQL Connector/J (Type-4 Pure Java Driver)',
            'MySQL Command Line Interface / phpMyAdmin',
            'TCP/IP Localhost Port 3306 Configuration',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Theoretical Foundations of JDBC CRUD Architecture">
        <p className="text-slate-700 leading-relaxed mb-4">
          JDBC (Java Database Connectivity) provides standard programmatic interfaces for client-server database interaction.
        </p>

        <p className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-3">
          Core JDBC Architectural Components:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {['JDBC Driver', 'DriverManager', 'Connection', 'Statement', 'PreparedStatement', 'CallableStatement', 'ResultSet'].map((comp) => (
            <span
              key={comp}
              className="text-xs px-3 py-1 rounded-lg font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
            >
              {comp}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
            <h4 className="font-bold text-xs uppercase tracking-wider text-blue-900 mb-2">
              PreparedStatement
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Executes precompiled parameterized SQL queries with bind variables (<code className="font-mono text-indigo-700">?</code>), preventing SQL injection and improving execution efficiency.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50">
            <h4 className="font-bold text-xs uppercase tracking-wider text-purple-900 mb-2">
              CallableStatement
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Invokes server-side stored procedures and functions using the standard JDBC escape syntax (<code className="font-mono text-indigo-700">{`{call procedure_name(?)}`}</code>).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-2">
              CRUD Operations Matrix
            </h4>
            <ul className="text-xs space-y-1 text-slate-700">
              <li><strong>Create:</strong> <code className="font-mono">INSERT INTO</code></li>
              <li><strong>Read:</strong> <code className="font-mono">SELECT FROM</code></li>
              <li><strong>Update:</strong> <code className="font-mono">UPDATE SET</code></li>
              <li><strong>Delete:</strong> <code className="font-mono">DELETE FROM</code></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Laboratory Procedure & Execution Workflow">
        <ol className="space-y-2">
          {[
            'Start WAMP Server and confirm MySQL service is active.',
            'Open MySQL console and create database named college.',
            'Create 5 required relational tables: Person, Employee, Product, Department, Book.',
            'Create stored procedures: InsertPerson and DeleteDepartment.',
            'Create a Java application project in NetBeans IDE and add MySQL Connector/J driver.',
            'Establish database connectivity via DBConnection helper class.',
            'Develop Java test modules using PreparedStatement and CallableStatement.',
            'Execute test programs and verify persistent changes in MySQL console.',
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

      {/* Step 1 Database Creation */}
      <Section title="Step 1: Database Creation (college)">
        <CodeBlock lang="sql" label="SQL Command" code={`CREATE DATABASE college;\nUSE college;`} />
        <ScreenshotFigure
          src={dbCreation}
          caption="Figure 6.1: MySQL CLI — CREATE DATABASE college and USE college executed successfully"
          alt="MySQL console showing CREATE DATABASE college and USE college commands"
        />
      </Section>

      {/* Step 2 Creating Tables */}
      <Section title="Step 2: Relational Tables Definition">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1">1. Person Table</h4>
            <CodeBlock
              lang="sql"
              code={`CREATE TABLE Person(\n    PersonID  INT PRIMARY KEY,\n    FirstName VARCHAR(255),\n    City      VARCHAR(255)\n);`}
            />
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1">2. Employee Table & Seed Records</h4>
            <CodeBlock
              lang="sql"
              code={`CREATE TABLE Employee(\n    EmpNo   INT PRIMARY KEY,\n    EmpName VARCHAR(100),\n    Salary  DOUBLE\n);\n\nINSERT INTO Employee VALUES\n    (101, 'Rahul', 35000),\n    (102, 'Ravi',  45000),\n    (103, 'Priya', 60000);`}
            />
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1">3. Product Table</h4>
            <CodeBlock
              lang="sql"
              code={`CREATE TABLE Product(\n    ProductNo   INT PRIMARY KEY,\n    ProductName VARCHAR(100),\n    Price       DOUBLE\n);`}
            />
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1">4. Department Table</h4>
            <CodeBlock
              lang="sql"
              code={`CREATE TABLE Department(\n    DepartmentID   INT PRIMARY KEY,\n    DepartmentName VARCHAR(255),\n    City           VARCHAR(255)\n);`}
            />
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1">5. Book Table</h4>
            <CodeBlock
              lang="sql"
              code={`CREATE TABLE Book(\n    BookNo   INT PRIMARY KEY,\n    BookName VARCHAR(100),\n    Price    DOUBLE\n);`}
            />
          </div>
        </div>

        <ScreenshotFigure
          src={tablesCreated}
          caption="Figure 6.2: MySQL CLI — SHOW TABLES displays all 5 created entities in college database"
          alt="MySQL console showing SHOW TABLES with book, department, employee, person, product"
        />
      </Section>

      {/* Step 3 Stored Procedures */}
      <Section title="Step 3: Stored Procedures Registration">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1">Procedure 1: InsertPerson</h4>
        <CodeBlock
          lang="sql"
          code={`DELIMITER $$\n\nCREATE PROCEDURE InsertPerson(\n    IN pid   INT,\n    IN pname VARCHAR(255),\n    IN pcity VARCHAR(255))\nBEGIN\n    INSERT INTO Person VALUES(pid, pname, pcity);\nEND$$\n\nDELIMITER ;`}
        />

        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1 mt-4">Procedure 2: DeleteDepartment</h4>
        <CodeBlock
          lang="sql"
          code={`DELIMITER $$\n\nCREATE PROCEDURE DeleteDepartment(IN did INT)\nBEGIN\n    DELETE FROM Department\n    WHERE DepartmentID = did;\nEND$$\n\nDELIMITER ;`}
        />

        <ScreenshotFigure
          src={storedProcedures}
          caption="Figure 6.3: MySQL CLI — SHOW PROCEDURE STATUS confirms InsertPerson and DeleteDepartment routines"
          alt="MySQL console showing stored procedures InsertPerson and DeleteDepartment in college database"
        />
      </Section>

      {/* Task 1 */}
      <Section title="Task 1: Insert Record into Person via CallableStatement">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">Java Program: InsertPerson.java</h4>
        <CodeBlock
          lang="java"
          label="InsertPerson.java"
          code={`import java.sql.*;

public class InsertPerson {

    public static void main(String args[]) {

        try {
            Connection con = DBConnection.getConnection();

            CallableStatement cs =
                con.prepareCall("{call InsertPerson(?, ?, ?)}");

            cs.setInt(1, 101);
            cs.setString(2, "Rahul");
            cs.setString(3, "Hyderabad");

            cs.execute();

            System.out.println("Record Inserted Successfully");

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />

        <p className="font-semibold text-xs text-slate-700 mt-3 mb-1">Execution Output:</p>
        <CodeBlock lang="output" code="Record Inserted Successfully" />

        <ScreenshotFigure
          src={insertPersonOutput}
          caption="Figure 6.4A: NetBeans Execution — Record Inserted Successfully with BUILD SUCCESSFUL"
          alt="NetBeans output panel: Record Inserted Successfully, BUILD SUCCESSFUL total time 0 seconds"
        />

        <p className="font-semibold text-xs text-slate-700 mt-4 mb-2">SQL Console Verification:</p>
        <CodeBlock lang="sql" code="SELECT * FROM Person;" />
        <CodeBlock lang="output" code="101   Rahul   Hyderabad" />

        <ScreenshotFigure
          src={personVerification}
          caption="Figure 6.4B: MySQL Verification — SELECT * FROM Person confirms inserted record"
          alt="MySQL console showing Person table with 101 Rahul Hyderabad"
        />
      </Section>

      {/* Task 2 */}
      <Section title="Task 2: Filter Employees by Salary Threshold using PreparedStatement">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">Java Program: SelectEmployee.java</h4>
        <CodeBlock
          lang="java"
          label="SelectEmployee.java"
          code={`import java.sql.*;
import java.util.Scanner;

public class SelectEmployee {

    public static void main(String args[]) {

        try {
            Connection con = DBConnection.getConnection();

            Scanner sc = new Scanner(System.in);
            System.out.print("Enter Salary:");
            double x = sc.nextDouble();

            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM Employee WHERE Salary > ?");

            ps.setDouble(1, x);

            ResultSet rs = ps.executeQuery();

            while(rs.next()) {
                System.out.println(
                    rs.getInt(1)    + " " +
                    rs.getString(2) + " " +
                    rs.getDouble(3));
            }

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />

        <p className="font-semibold text-xs text-slate-700 mt-3 mb-1">Console Output (Threshold = 40000):</p>
        <CodeBlock lang="output" code={`Enter Salary: 40000\nEmployee Details:\n102 Ravi 45000.0\n103 Priya 60000.0`} />

        <ScreenshotFigure
          src={employeeSelectionOutput}
          caption="Figure 6.5A: NetBeans Execution — Filtered employees with salary > 40000"
          alt="NetBeans output: Enter Salary 40000, Employee Details, 102 Ravi 45000.0, 103 Priya 60000.0"
        />

        <p className="font-semibold text-xs text-slate-700 mt-4 mb-2">Database Verification:</p>
        <CodeBlock lang="sql" code="SELECT * FROM Employee;" />

        <ScreenshotFigure
          src={employeeTable}
          caption="Figure 6.5B: MySQL CLI — Employee table showing baseline rows (101, 102, 103)"
          alt="MySQL console showing Employee table with 101 Rahul 35000, 102 Ravi 45000, 103 Priya 60000"
        />
      </Section>

      {/* Task 3 */}
      <Section title="Task 3: Insert & Retrieve Product Records using PreparedStatement">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">Java Program: ProductDemo.java</h4>
        <CodeBlock
          lang="java"
          label="ProductDemo.java"
          code={`import java.sql.*;

public class ProductDemo {

    public static void main(String args[]) {

        try {
            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO Product VALUES(?, ?, ?)");

            ps.setInt(1, 101);
            ps.setString(2, "Laptop");
            ps.setDouble(3, 65000);

            ps.executeUpdate();

            System.out.println("Product Inserted Successfully");

            PreparedStatement ps2 = con.prepareStatement(
                "SELECT * FROM Product");

            ResultSet rs = ps2.executeQuery();

            while(rs.next()) {
                System.out.println(
                    rs.getInt(1)    + " " +
                    rs.getString(2) + " " +
                    rs.getDouble(3));
            }

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />

        <p className="font-semibold text-xs text-slate-700 mt-3 mb-1">Execution Output:</p>
        <CodeBlock lang="output" code={`Product Inserted Successfully\nProduct Details:\n101 Laptop 65000.0`} />

        <ScreenshotFigure
          src={productInsertionOutput}
          caption="Figure 6.6A: NetBeans Execution — Product Inserted Successfully with details"
          alt="NetBeans output: Product Inserted Successfully, Product Details, 101 Laptop 65000.0"
        />

        <p className="font-semibold text-xs text-slate-700 mt-4 mb-2">SQL Table Verification:</p>
        <CodeBlock lang="sql" code="SELECT * FROM Product;" />

        <ScreenshotFigure
          src={productTable}
          caption="Figure 6.6B: MySQL CLI — SELECT * FROM Product confirms 101 Laptop 65000 record"
          alt="MySQL console showing Product table with 101 Laptop 65000"
        />
      </Section>

      {/* Task 4 */}
      <Section title="Task 4: Delete Department via CallableStatement Stored Procedure">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">Java Program: DeleteDepartment.java</h4>
        <CodeBlock
          lang="java"
          label="DeleteDepartment.java"
          code={`import java.sql.*;

public class DeleteDepartment {

    public static void main(String args[]) {

        try {
            Connection con = DBConnection.getConnection();

            CallableStatement cs = con.prepareCall(
                "{call DeleteDepartment(?)}");

            cs.setInt(1, 1);

            cs.execute();

            System.out.println("Department Deleted Successfully");

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />

        <p className="font-semibold text-xs text-slate-700 mt-3 mb-1">Execution Output:</p>
        <CodeBlock lang="output" code="Department Deleted Successfully" />

        <ScreenshotFigure
          src={departmentDeletedOutput}
          caption="Figure 6.7A: NetBeans Execution — Department Deleted Successfully"
          alt="NetBeans output: Department Deleted Successfully, BUILD SUCCESSFUL total time 0 seconds"
        />

        <p className="font-semibold text-xs text-slate-700 mt-4 mb-2">SQL Verification:</p>
        <CodeBlock lang="sql" code="SELECT * FROM Department;" />
        <p className="text-xs text-slate-500 mb-2">After deletion (DepartmentID=1 removed):</p>
        <CodeBlock lang="output" code={`2 Mechanical Chennai\n3 Electrical Bangalore`} />

        <ScreenshotFigure
          src={departmentVerification}
          caption="Figure 6.7B: MySQL CLI — Department table before and after deletion of Computer Science (ID=1)"
          alt="MySQL console showing Department table before deletion with 3 rows and after with 2 rows"
        />
      </Section>

      {/* Task 5 */}
      <Section title="Task 5: End-to-End CRUD Lifecycle on Book Entity">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">Java Program: BookCRUD.java</h4>
        <p className="text-xs sm:text-sm text-slate-600 mb-3">Sequential execution of all four CRUD operations:</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { op: 'Create', desc: 'Inserted book record (101, Java, 650)', color: 'border-emerald-200 bg-emerald-50/70 text-emerald-900' },
            { op: 'Read', desc: 'Fetched all active book rows via SELECT', color: 'border-blue-200 bg-blue-50/70 text-blue-900' },
            { op: 'Update', desc: 'Updated price to 750 where BookNo=101', color: 'border-amber-200 bg-amber-50/70 text-amber-900' },
            { op: 'Delete', desc: 'Removed book record where BookNo=101', color: 'border-rose-200 bg-rose-50/70 text-rose-900' },
          ].map(({ op, desc, color }) => (
            <div key={op} className={`p-3 rounded-xl border ${color} text-center`}>
              <div className="font-bold text-xs uppercase tracking-wider mb-1">{op}</div>
              <div className="text-[11px] text-slate-600">{desc}</div>
            </div>
          ))}
        </div>

        <CodeBlock
          lang="java"
          label="BookCRUD.java"
          code={`import java.sql.*;

public class BookCRUD {

    public static void main(String args[]) {

        try {
            Connection con = DBConnection.getConnection();

            // 1. CREATE — Insert a book record
            PreparedStatement psInsert = con.prepareStatement(
                "INSERT INTO Book VALUES(?, ?, ?)");
            psInsert.setInt(1, 101);
            psInsert.setString(2, "Java Programming");
            psInsert.setDouble(3, 650);
            psInsert.executeUpdate();
            System.out.println("Insert Successful");

            // 2. READ — Display book records
            PreparedStatement psRead = con.prepareStatement(
                "SELECT * FROM Book");
            ResultSet rs = psRead.executeQuery();
            System.out.println("Book Details:");
            while(rs.next()) {
                System.out.println(
                    rs.getInt(1)    + " " +
                    rs.getString(2) + " " +
                    rs.getDouble(3));
            }

            // 3. UPDATE — Update book price
            PreparedStatement psUpdate = con.prepareStatement(
                "UPDATE Book SET Price = ? WHERE BookNo = ?");
            psUpdate.setDouble(1, 750);
            psUpdate.setInt(2, 101);
            psUpdate.executeUpdate();
            System.out.println("Update Successful");

            // 4. DELETE — Delete book record
            PreparedStatement psDelete = con.prepareStatement(
                "DELETE FROM Book WHERE BookNo = ?");
            psDelete.setInt(1, 101);
            psDelete.executeUpdate();
            System.out.println("Delete Successful");

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}`}
        />

        <p className="font-semibold text-xs text-slate-700 mt-3 mb-1">Sequential Console Output:</p>
        <CodeBlock lang="output" code={`Insert Successful\nBook Details:\n101 Java Programming 650.0\nUpdate Successful\nDelete Successful`} />

        <ScreenshotFigure
          src={crudBookOutput}
          caption="Figure 6.8: NetBeans Output — Full CRUD operations cycle (Create, Read, Update, Delete) completed successfully"
          alt="NetBeans output: Insert Successful, Book Details 101 Java Programming 650.0, Update Successful, Delete Successful"
        />
      </Section>

      <ResultBox text={[
        "The Java application was successfully connected to the MySQL database using JDBC.",
        "CRUD operations were successfully performed using PreparedStatement and CallableStatement. The records were inserted, retrieved, updated, and deleted successfully from the MySQL database.",
      ]} />

      <Section title="Conclusion">
        <p className="text-slate-700 leading-relaxed">
          JDBC provides an efficient, portable, and secure mechanism for Java applications to communicate with enterprise relational databases. Using PreparedStatement and CallableStatement, parameterized queries and database-side stored procedures were successfully executed and verified on MySQL.
        </p>
      </Section>
    </WeekLayout>
  );
}
