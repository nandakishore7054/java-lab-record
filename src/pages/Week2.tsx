import WeekLayout from '../components/WeekLayout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ResultBox from '../components/ResultBox';

export default function Week2() {
  return (
    <WeekLayout
      weekNum={2}
      title="Downloading, Installing, and Configuring OpenJDK & Oracle JDK SE 26 on Ubuntu"
    >
      <Section title="Aim">
        <p className="text-slate-700 leading-relaxed">
          To download, install, and configure OpenJDK and Oracle JDK SE 26 on the Ubuntu operating system and verify the installation environment variables.
        </p>
      </Section>

      <Section title="Software Requirements">
        <div className="grid sm:grid-cols-2 gap-2.5">
          {[
            'Ubuntu Linux Operating System (x86_64)',
            'Active Internet Connection',
            'Terminal Access (bash shell)',
            'Oracle JDK SE 26 Archive (.tar.gz)',
            'Administrator (sudo) Privileges',
            'OpenJDK 21 / Default JDK Package',
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Procedure & Installation Workflow">
        {/* Part A */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              Part A
            </span>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif">
              Installing & Verifying OpenJDK via APT
            </h4>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 1: Update the package repository index.</p>
              <CodeBlock lang="terminal" code="sudo apt update" />
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 2: Install OpenJDK runtime and compiler development kit.</p>
              <CodeBlock lang="terminal" code="sudo apt install openjdk-21-jdk -y" />
              <p className="text-xs text-slate-500 mt-1">If your Ubuntu repository provides a different standard LTS version, install that version.</p>
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 3: Verify the Java Runtime Environment (JRE) version.</p>
              <CodeBlock lang="terminal" code="java -version" />
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 4: Check the Java compiler (javac) version.</p>
              <CodeBlock lang="terminal" code="javac -version" />
            </div>
          </div>
        </div>

        {/* Part B */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              Part B
            </span>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif">
              Downloading Oracle JDK SE 26 Archive
            </h4>
          </div>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside pl-1">
            <li>Open a web browser in Ubuntu.</li>
            <li>Navigate to the official Oracle Java Downloads portal.</li>
            <li>Select and download the Linux x64 Archive (<code className="font-mono text-indigo-600 bg-slate-100 px-1 py-0.5 rounded">.tar.gz</code>) for Oracle JDK SE 26.</li>
            <li>Save the downloaded archive in the <code className="font-mono text-slate-800 bg-slate-100 px-1 py-0.5 rounded">~/Downloads</code> folder.</li>
          </ol>
        </div>

        {/* Part C */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              Part C
            </span>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif">
              Extracting and Installing Oracle JDK SE 26
            </h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 1: Open the terminal and move to the Downloads folder.</p>
              <CodeBlock lang="terminal" code="cd ~/Downloads" />
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 2: Create the standard Java virtual machine directory.</p>
              <CodeBlock lang="terminal" code="sudo mkdir -p /usr/lib/jvm" />
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 3: Extract the downloaded archive into the JVM directory.</p>
              <CodeBlock lang="terminal" code="sudo tar -xvzf jdk-26_linux-x64_bin.tar.gz -C /usr/lib/jvm" />
            </div>
          </div>
        </div>

        {/* Part D */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              Part D
            </span>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif">
              Configuring Environment Variables (JAVA_HOME & PATH)
            </h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 1: Open the global system profile configuration file.</p>
              <CodeBlock lang="terminal" code="sudo nano /etc/profile" />
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 2: Append the JAVA_HOME and PATH export statements at the end of the file.</p>
              <CodeBlock lang="terminal" code={`export JAVA_HOME=/usr/lib/jvm/jdk-26\nexport PATH=$JAVA_HOME/bin:$PATH`} />
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-700 mb-1">Step 3: Reload the system profile in the active shell.</p>
              <CodeBlock lang="terminal" code="source /etc/profile" />
            </div>
          </div>
        </div>

        {/* Part E */}
        <div className="mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              Part E
            </span>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif">
              Setting Default Java Alternative
            </h4>
          </div>
          <p className="text-xs text-slate-600 mb-2">Configure update-alternatives to ensure the active Java command maps to Oracle JDK SE 26:</p>
          <CodeBlock lang="terminal" code={`sudo update-alternatives --config java\n# Select the Oracle JDK option number\nsudo update-alternatives --config javac`} />
        </div>

        {/* Part F */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              Part F
            </span>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif">
              Final Verification
            </h4>
          </div>
          <CodeBlock lang="terminal" code={`java -version\njavac -version`} />
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            The terminal will confirm that Oracle JDK SE 26 and its associated compiler javac are successfully configured as the primary runtime environment.
          </p>
        </div>
      </Section>

      <ResultBox text="OpenJDK and Oracle JDK SE 26 were successfully downloaded, installed, configured, and verified on the Ubuntu operating system. The Java environment was successfully configured and the installed version was confirmed using the java -version and javac -version commands." />
    </WeekLayout>
  );
}
