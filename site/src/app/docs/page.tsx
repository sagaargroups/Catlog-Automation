export default function Docs() {
  return (
    <section className="mx-auto max-w-6xl p-6 space-y-10">
      <header>
        <h1 className="mb-2 text-3xl font-semibold">Catalog Automation Documentation</h1>
        <p className="opacity-70">Complete guide to using our Google Sheets add‑on for catalog automation</p>
      </header>

      <article className="space-y-10">
        <section id="big-picture" className="space-y-3">
          <h2 className="text-2xl font-semibold">Big Picture</h2>
          <p>
            The Catalog Automation app is a helper for Google Sheets™ that fills out lists quickly and consistently using smart, reusable rules.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Organize headers like Color, Size, Type and generate rows</li>
            <li>Save and reuse setups</li>
            <li>Write many rows at once with rules</li>
          </ul>
        </section>

        <section id="robots-brain" className="space-y-3">
          <h2 className="text-2xl font-semibold">Robot’s Brain (Code.js)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <code>getAvailableRanges()</code>: Finds named ranges to discover useful lists
            </li>
            <li>
              <code>getValuesFromActiveRange(headerName)</code>: Reads values from your selection
            </li>
            <li>
              <code>updateAutomationOptions(updatedAutomationData)</code>: Updates saved automations
            </li>
            <li>
              <code>DB_SHEET_ID</code> / <code>DB_SHEET_NAME</code>: Identifies the memory sheet
            </li>
            <li>
              <code>_addNumberingToOptions</code> / <code>_removeNumberingFromOption</code>: Toggle numbering on options
            </li>
            <li>
              <code>onOpen()</code>: Adds the Catalog Automation menu
            </li>
            <li>
              <code>_getColumnLetterFromIndex()</code>: Converts indices to column letters
            </li>
            <li>
              <code>openSidebar()</code>: Opens the sidebar UI
            </li>
            <li>
              <code>getHeadersAndOptions()</code>: Reads header row and options
            </li>
            <li>
              <code>writeRow()</code> / <code>writeMultipleRows()</code>: Write one or many rows using rules
            </li>
            <li>
              <code>saveAutomation()</code> / <code>listAutomations()</code>: Manage saved automations per user
            </li>
            <li>
              <code>addNumberingToOptionsServer()</code>: Prepares numbered options for the UI
            </li>
            <li>
              <code>getActiveUserEmail()</code>: Gets the active user’s email
            </li>
          </ul>
        </section>

        <section id="robots-playroom" className="space-y-3">
          <h2 className="text-2xl font-semibold">Robot’s Playroom (Sidebar.html)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Saved Automations: Load and reuse setups</li>
            <li>Automation Fields: Drag headers into containers, pick options, build logic</li>
            <li>+ Create New Automation / + Add Container</li>
            <li>Fields & Containers: Map fields to headers and manage options</li>
            <li>+ next to dropdowns: import values from active range</li>
          </ul>
        </section>

        <section id="rules" className="space-y-3">
          <h2 className="text-2xl font-semibold">Rules Against Container</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Multiply in number: repeat a container’s values N times</li>
            <li>Which option to start from: pick a start index then advance per row</li>
            <li>All Time Fix Container: lock a container’s picks regardless of other rules</li>
          </ul>
        </section>

        <section id="how-it-works" className="space-y-3">
          <h2 className="text-2xl font-semibold">How It All Works Together</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Open your Google Sheets™ file (onOpen adds the menu)</li>
            <li>Click Catalog Automation (opens the sidebar)</li>
            <li>Robot inspects headers and options</li>
            <li>Build an automation: drag fields, pick options, add rules</li>
            <li>Click Fire (Write Data) or Save as Automation</li>
            <li>The robot writes new rows automatically</li>
          </ol>
        </section>
      </article>
    </section>
  );
}


