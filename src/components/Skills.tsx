import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Terminal, Database, Cpu, Check, Sparkles } from 'lucide-react';

const SKILL_SNIPPETS: Record<string, { lang: string; title: string; snippet: string }> = {
  Java: {
    lang: 'java',
    title: 'Object-Oriented Design & Collections',
    snippet: `public class ProductManager {
    private final Map<String, InventoryItem> catalog = new ConcurrentHashMap<>();

    public synchronized void recordTransaction(String sku, int quantity) {
        InventoryItem item = catalog.computeIfAbsent(sku, InventoryItem::new);
        item.adjustStock(quantity);
    }
}`
  },
  Python: {
    lang: 'python',
    title: 'Predictive Heuristics & Scripting',
    snippet: `def calculate_attendance_recovery(attended: int, total: int, target=0.75) -> int:
    current_pct = attended / total
    if current_pct >= target:
        return 0
    # Mandatory consecutive sessions required to reach 75%
    needed = math.ceil((target * total - attended) / (1 - target))
    return max(0, needed)`
  },
  C: {
    lang: 'c',
    title: 'Systems & Dynamic Memory Allocation',
    snippet: `typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* create_node(int val) {
    Node* n = (Node*)malloc(sizeof(Node));
    n->data = val;
    n->next = NULL;
    return n;
}`
  },
  'C++': {
    lang: 'cpp',
    title: 'STL & Algorithmic Optimization',
    snippet: `template <typename T>
void dijkstra(int src, const vector<vector<pair<int, T>>>& adj, vector<T>& dist) {
    priority_queue<pair<T, int>, vector<pair<T, int>>, greater<>> pq;
    dist[src] = 0;
    pq.push({0, src});
    // O((V + E) log V) shortest path traversal
}`
  },
  HTML5: {
    lang: 'html',
    title: 'Semantic Web Architecture',
    snippet: `<main class="app-viewport" role="main">
  <article class="case-study" aria-labelledby="project-title">
    <header><h1 id="project-title">FarmIQ System</h1></header>
    <section class="telemetry-grid" aria-live="polite"></section>
  </article>
</main>`
  },
  CSS3: {
    lang: 'css',
    title: 'Responsive Layouts & Glassmorphism',
    snippet: `.glass-container {
  backdrop-filter: blur(16px);
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}`
  },
  JavaScript: {
    lang: 'javascript',
    title: 'Asynchronous State & DOM Events',
    snippet: `async function fetchTelemetryStream(sensorId) {
  try {
    const res = await fetch(\`/api/sensors/\${sensorId}/stream\`);
    const streamData = await res.json();
    return streamData.map(normalizeMetric);
  } catch (err) {
    console.error('Sensor stream offline:', err);
  }
}`
  },
  MySQL: {
    lang: 'sql',
    title: 'Relational Schemas & Foreign Keys',
    snippet: `CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  sku VARCHAR(64) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  stock_quantity INT NOT NULL DEFAULT 0,
  reorder_level INT NOT NULL DEFAULT 10,
  INDEX idx_sku (sku)
) ENGINE=InnoDB;`
  },
  SQL: {
    lang: 'sql',
    title: 'Complex Queries & Aggregations',
    snippet: `SELECT 
  s.student_id,
  ROUND((SUM(a.attended) / COUNT(a.session_id)) * 100, 2) AS attendance_rate
FROM students s
JOIN attendance_logs a ON s.student_id = a.student_id
GROUP BY s.student_id
HAVING attendance_rate < 75.00
ORDER BY attendance_rate ASC;`
  },
  'Data Structures': {
    lang: 'dsa',
    title: 'Balanced Trees, Graphs & Hash Tables',
    snippet: `// Space-Time Analysis:
// Hash Maps: O(1) average lookup & insertion
// Balanced BST (AVL/Red-Black): O(log N) worst-case search
// Priority Queues (Binary Heap): O(log N) push/pop, O(1) peek
// Graphs: Adjacency list representation with BFS/DFS traversal`
  },
  Algorithms: {
    lang: 'dsa',
    title: 'Dynamic Programming & Divide-and-Conquer',
    snippet: `// Algorithmic Strategy:
// 1. Problem Decomposition & Invariant Proofs
// 2. State definition: dp[i][j] optimal substructure
// 3. Memoization / Bottom-up tabulation
// 4. Space complexity reduction via rolling states`
  }
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Languages: <Code className="w-4 h-4 text-cyan-400" />,
  'Web Technologies': <Terminal className="w-4 h-4 text-sky-400" />,
  'Databases & Storage': <Database className="w-4 h-4 text-indigo-400" />,
  'Core Fundamentals': <Cpu className="w-4 h-4 text-purple-400" />
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Java');

  const currentSnippet = SKILL_SNIPPETS[selectedSkill] || SKILL_SNIPPETS['Java'];

  return (
    <section id="skills" className="relative py-28 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Subtle sweeping light */}
      <div
        className="absolute top-1/3 right-1/4 w-[450px] h-[300px] rounded-full blur-[130px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(99, 102, 241, 0.15) 60%, transparent 75%)',
        }}
      />

      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <span className="w-2 h-0.5 bg-cyan-400 rounded-full" />
          <span>02 / Capabilities</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Technical Skills & Foundations
        </h2>
        <p className="text-slate-400 text-base max-w-2xl font-normal">
          Curated core competencies derived from coursework, algorithmic practice, and hands-on application builds. No vanity percentage bars.
        </p>
      </div>

      {/* Main Grid: Skills Categories on Left + Interactive Code Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Categories (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="glass-panel rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-white/20"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  {CATEGORY_ICONS[cat.title] || <Code className="w-4 h-4 text-cyan-400" />}
                </div>
                <h3 className="font-display font-semibold text-base text-white">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-4 font-normal">
                {cat.description}
              </p>

              {/* Skills Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill.name)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer group relative overflow-hidden ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/30'
                          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-semibold transition-colors ${
                          isSelected ? 'text-cyan-300' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {skill.details}
                      </p>
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code / Usage Inspector (5 cols) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="relative group">
            {/* Soft border gradient shimmer */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-transparent rounded-2xl blur-sm opacity-50" />

            <div className="relative bg-[#0c0f18] rounded-2xl border border-white/10 p-5 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    {selectedSkill}.impl
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400/90 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Interactive Context</span>
                </div>
              </div>

              {/* Title & Concept */}
              <div className="mb-3">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Technical Focus
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {currentSnippet.title}
                </h4>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-[#07090e] rounded-xl p-4 border border-white/[0.06] overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[320px] scrollbar-thin">
                <pre>
                  <code>{currentSnippet.snippet}</code>
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Select any skill to inspect practical syntax & focus</span>
                <span className="text-cyan-400 font-semibold">{selectedSkill}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
