import { useState, useEffect } from "react";

const MONTHS = [
  {
    id: 1, name: "Mai", emoji: "🌱", color: "#4ECDC4", theme: "Construire les bases",
    objectives: [
      { label: "Strict Press", target: "35 kg" },
      { label: "Squat", target: "50 kg" },
      { label: "Deadlift", target: "Établir ta base" },
      { label: "Rameur", target: "9 min continu" },
    ],
    forceProtocol: "4 séries × 5 reps",
    forceNote: "Priorité à la technique — charges légères",
    forceExercises: [
      { name: "Strict Press barre", detail: "4 × 5 reps — technique parfaite" },
      { name: "Squat arrière barre", detail: "4 × 5 reps — descente complète" },
      { name: "Deadlift", detail: "3 × 5 reps — dos bien droit" },
      { name: "Tractions / Dips", detail: "3 × MAX en superset" },
      { name: "Élévations latérales", detail: "3 × 15 reps" },
      { name: "Relevés de jambes à la barre", detail: "3 × 12 reps" },
    ],
    endurance: [
      { week: "S1", rameur: "6 min", athx: "750m course + rameur × 2" },
      { week: "S2", rameur: "7 min", athx: "750m course + rameur × 2" },
      { week: "S3", rameur: "8 min", athx: "750m course + rameur × 3" },
      { week: "S4", rameur: "9 min", athx: "750m course + rameur × 3" },
    ],
    metconFreq: "1 fois par semaine",
    metconGoal: "Finir sans s'arrêter — peu importe le temps",
    progression: [
      { label: "Strict Press", rule: "+2.5 kg par semaine" },
      { label: "Squat", rule: "+5 kg par semaine" },
      { label: "Deadlift", rule: "+5 kg par semaine" },
    ],
  },
  {
    id: 2, name: "Juin", emoji: "☀️", color: "#FF6B35", theme: "Monter en charge",
    objectives: [
      { label: "Strict Press", target: "40 kg" },
      { label: "Squat", target: "57 kg" },
      { label: "Deadlift", target: "+10 kg vs mai" },
      { label: "Rameur", target: "13 min continu" },
    ],
    forceProtocol: "4 séries × 3 reps",
    forceNote: "Charges plus lourdes — technique toujours propre",
    forceExercises: [
      { name: "Strict Press barre", detail: "4 × 3 reps — plus lourd qu'en mai" },
      { name: "Squat arrière barre", detail: "4 × 3 reps — profondeur complète" },
      { name: "Deadlift", detail: "3 × 3 reps — explosif à la montée" },
      { name: "Tractions lestées", detail: "4 × 6 reps" },
      { name: "Dips lestés", detail: "4 × 8 reps" },
      { name: "Élévations latérales", detail: "3 × 15 reps" },
      { name: "Relevés de jambes à la barre", detail: "3 × 12 reps" },
    ],
    endurance: [
      { week: "S1", rameur: "10 min", athx: "750m course + rameur × 3" },
      { week: "S2", rameur: "11 min", athx: "750m course + rameur × 4" },
      { week: "S3", rameur: "12 min", athx: "750m course + rameur × 4" },
      { week: "S4", rameur: "13 min", athx: "1km course + rameur × 3" },
    ],
    metconFreq: "2 fois par semaine",
    metconGoal: "Améliorer ton temps à chaque séance",
    progression: [
      { label: "Strict Press", rule: "+2.5 kg par semaine" },
      { label: "Squat", rule: "+5 kg par semaine" },
      { label: "Deadlift", rule: "+5 kg par semaine" },
    ],
  },
  {
    id: 3, name: "Juillet", emoji: "🔥", color: "#E74C3C", theme: "Charges lourdes",
    objectives: [
      { label: "Strict Press", target: "45 kg" },
      { label: "Squat", target: "62 kg" },
      { label: "Deadlift", target: "+10 kg vs juin" },
      { label: "Rameur", target: "17 min continu" },
    ],
    forceProtocol: "5 séries × 2 reps",
    forceNote: "Très lourd — repos complet entre les séries",
    forceExercises: [
      { name: "Strict Press barre", detail: "5 × 2 reps — très lourd" },
      { name: "Squat arrière barre", detail: "5 × 2 reps — très lourd" },
      { name: "Deadlift", detail: "4 × 2 reps — très lourd" },
      { name: "Tractions lestées", detail: "4 × 5 reps" },
      { name: "Dips lestés", detail: "4 × 6 reps" },
      { name: "Élévations latérales", detail: "3 × 15 reps" },
      { name: "Relevés de jambes à la barre", detail: "3 × 12 reps" },
    ],
    endurance: [
      { week: "S1", rameur: "14 min", athx: "1km course + rameur × 4" },
      { week: "S2", rameur: "15 min", athx: "1km course + rameur × 4" },
      { week: "S3", rameur: "16 min", athx: "1km course + rameur × 5" },
      { week: "S4", rameur: "17 min", athx: "1km course + rameur × 5" },
    ],
    metconFreq: "2 fois par semaine",
    metconGoal: "Objectif : terminer sous 22 minutes",
    progression: [
      { label: "Strict Press", rule: "+2.5 kg par semaine" },
      { label: "Squat", rule: "+5 kg par semaine" },
      { label: "Deadlift", rule: "+5 kg par semaine" },
    ],
  },
  {
    id: 4, name: "Août", emoji: "⚡", color: "#9B59B6", theme: "Peak & Tests",
    objectives: [
      { label: "Strict Press 1RM", target: "50-55 kg" },
      { label: "Squat 3RM", target: "65-70 kg" },
      { label: "Deadlift 5RM", target: "80-90 kg" },
      { label: "Rameur", target: "20 min continu" },
      { label: "MetCon ATHX", target: "Sous 18 min" },
    ],
    forceProtocol: "1 à 2 reps — charges maximales",
    forceNote: "Semaine 3 : test officiel de tes 1RM / 3RM / 5RM",
    forceExercises: [
      { name: "Strict Press barre", detail: "S1-S2 : 3 × 2 reps max — S3 : TEST 1RM — S4 : décharge 70%" },
      { name: "Squat arrière barre", detail: "S1-S2 : 3 × 2 reps max — S3 : TEST 3RM — S4 : décharge 70%" },
      { name: "Deadlift", detail: "S1-S2 : 3 × 2 reps max — S3 : TEST 5RM — S4 : décharge 70%" },
      { name: "Tractions lestées", detail: "4 × 5 reps" },
      { name: "Dips lestés", detail: "4 × 6 reps" },
      { name: "Élévations latérales", detail: "3 × 15 reps" },
      { name: "Relevés de jambes à la barre", detail: "3 × 12 reps" },
    ],
    endurance: [
      { week: "S1", rameur: "18 min", athx: "1km course + rameur × 5" },
      { week: "S2", rameur: "19 min", athx: "1km course + rameur × 6" },
      { week: "S3", rameur: "20 min", athx: "Format officiel complet 22 min" },
      { week: "S4", rameur: "Repos actif", athx: "Repos actif" },
    ],
    metconFreq: "2 fois par semaine",
    metconGoal: "Objectif : terminer sous 18 minutes",
    progression: [
      { label: "Strict Press", rule: "Maximale — teste tes limites" },
      { label: "Squat", rule: "Maximale — teste tes limites" },
      { label: "Deadlift", rule: "Maximale — teste tes limites" },
    ],
  },
  {
    id: 5, name: "Sept.", emoji: "🏆", color: "#F39C12", theme: "Affûtage — Compétition",
    objectives: [
      { label: "ATHX Games Marseille", target: "19 Septembre 🎯" },
    ],
    forceProtocol: "Volume réduit de 50%",
    forceNote: "Charges normales mais moitié moins de séries — arriver frais",
    forceExercises: [
      { name: "Strict Press barre", detail: "S1 : 2 × 5 léger — S2 : repos actif" },
      { name: "Squat arrière barre", detail: "S1 : 2 × 5 léger — S2 : repos actif" },
      { name: "Deadlift", detail: "S1 : 2 × 5 léger — S2 : repos actif" },
      { name: "Mobilité & récupération", detail: "Priorité absolue" },
    ],
    endurance: [
      { week: "S1", rameur: "Repos actif", athx: "Repos actif" },
      { week: "S2", rameur: "Repos actif", athx: "Repos actif" },
      { week: "S3", rameur: "—", athx: "—" },
      { week: "S4", rameur: "—", athx: "—" },
    ],
    metconFreq: "0 — repos complet",
    metconGoal: "Récupérer — arriver à 100% le 19 septembre",
    progression: [
      { label: "Objectif", rule: "Arriver frais et reposé le 19 septembre" },
    ],
  },
];

const LIFTS = [
  { id: "press", label: "Strict Press", unit: "kg", color: "#FF6B35" },
  { id: "squat", label: "Squat", unit: "kg", color: "#4ECDC4" },
  { id: "deadlift", label: "Deadlift", unit: "kg", color: "#E74C3C" },
  { id: "rameur", label: "Rameur", unit: "min", color: "#9B59B6" },
  { id: "metcon", label: "MetCon ATHX", unit: "min", color: "#F39C12" },
];

const SESSION_TYPES = ["Force", "Endurance", "MetCon", "Libre"];
const TYPE_COLORS = { Force: "#4ECDC4", Endurance: "#9B59B6", MetCon: "#FF6B35", Libre: "#96CEB4" };

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
}

function getWeekAvg(sessions, liftId, monthId, weekId) {
  const relevant = sessions.filter(s => s.month === monthId && s.week === weekId && s.lifts?.[liftId] && parseFloat(s.lifts[liftId]) > 0);
  if (!relevant.length) return null;
  const avg = relevant.reduce((sum, s) => sum + parseFloat(s.lifts[liftId]), 0) / relevant.length;
  return Math.round(avg * 10) / 10;
}

export default function ATHXPrep() {
  const [tab, setTab] = useState("plan");
  const [activeMonth, setActiveMonth] = useState(0);
  const [enduranceMode, setEnduranceMode] = useState("rameur"); // "rameur" or "athx"
  const [sessions, setSessions] = useState(() => {
    try { return JSON.parse(localStorage.getItem("athx_sessions_v3") || "[]"); } catch { return []; }
  });
  const [logForm, setLogForm] = useState({
    date: new Date().toISOString().split("T")[0],
    month: 1, week: 1, type: "", notes: "", lifts: {}
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("athx_sessions_v3", JSON.stringify(sessions)); } catch {}
  }, [sessions]);

  const handleLogSave = () => {
    if (!logForm.type) return;
    setSessions(s => [{ ...logForm, id: Date.now() }, ...s]);
    setLogForm({ date: new Date().toISOString().split("T")[0], month: logForm.month, week: logForm.week, type: "", notes: "", lifts: {} });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setTab("history");
  };

  const getBest = (liftId) => {
    const vals = sessions.map(s => parseFloat(s.lifts?.[liftId])).filter(v => !isNaN(v) && v > 0);
    return vals.length ? Math.max(...vals) : null;
  };

  const getAllProgress = (liftId) => {
    const all = [];
    MONTHS.forEach(m => {
      [1,2,3,4].forEach(w => {
        const avg = getWeekAvg(sessions, liftId, m.id, w);
        if (avg !== null) all.push({ label: `${m.name} S${w}`, val: avg });
      });
    });
    return all;
  };

  const daysLeft = () => {
    const diff = Math.ceil((new Date("2025-09-19") - new Date()) / (1000*60*60*24));
    return diff > 0 ? diff : 0;
  };

  const inp = { background: "#F8F9FA", border: "1.5px solid #E8E8E8", borderRadius: 8, color: "#1a1a1a", padding: "9px 12px", fontSize: 14, fontFamily: "inherit", width: "100%", boxSizing: "border-box", outline: "none" };
  const card = { background: "#fff", borderRadius: 14, padding: 16, boxShadow: "0 2px 10px rgba(0,0,0,0.06)", marginBottom: 14 };
  const sectionTitle = { fontSize: 11, color: "#999", fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 };

  return (
    <div style={{ minHeight: "100vh", background: "#F2F4F7", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1a1a1a" }}>

      {/* Header */}
      <div style={{ background: "#1a1a2e", padding: "20px 20px 0", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>⚡ ATHX Prep</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>Marseille — 19 Septembre 2025</div>
          </div>
          <div style={{ background: "#FF6B35", borderRadius: 12, padding: "8px 14px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{daysLeft()}</div>
            <div style={{ fontSize: 9, color: "#FFD4C2", letterSpacing: 1, marginTop: 2 }}>JOURS</div>
          </div>
        </div>
        <div style={{ display: "flex", overflowX: "auto" }}>
          {[["plan","📋 Plan"],["log","＋ Log"],["history","📋 Séances"],["perfs","📈 Perfs"],["stats","🏆 Records"]].map(([k,label]) => (
            <button key={k} onClick={() => setTab(k)} style={{ flexShrink: 0, background: "none", border: "none", borderBottom: tab===k ? "2.5px solid #FF6B35" : "2.5px solid transparent", color: tab===k ? "#FF6B35" : "#555", padding: "8px 12px", fontSize: 12, fontWeight: tab===k ? 700 : 400, cursor: "pointer", fontFamily: "inherit" }}>{label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 16px", maxWidth: 480, margin: "0 auto" }}>

        {/* PLAN */}
        {tab === "plan" && (() => {
          const m = MONTHS[activeMonth];
          return (
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
                {MONTHS.map((mo, i) => (
                  <button key={mo.id} onClick={() => setActiveMonth(i)} style={{ flexShrink: 0, background: activeMonth===i ? mo.color : "#fff", color: activeMonth===i ? "#fff" : "#555", border: "none", borderRadius: 20, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 2px 6px rgba(0,0,0,0.08)" }}>
                    {mo.emoji} {mo.name}
                  </button>
                ))}
              </div>

              <div style={{ ...card, borderTop: `4px solid ${m.color}` }}>
                <div style={{ fontSize: 11, color: m.color, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>{m.emoji} {m.name.toUpperCase()}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", marginBottom: 16 }}>{m.theme}</div>
                <div style={sectionTitle}>OBJECTIFS DU MOIS</div>
                {m.objectives.map((obj, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < m.objectives.length-1 ? "1px solid #F2F4F7" : "none" }}>
                    <div style={{ fontSize: 14, color: "#555" }}>{obj.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: m.color }}>{obj.target}</div>
                  </div>
                ))}
              </div>

              <div style={card}>
                <div style={sectionTitle}>💪 SÉANCE FORCE — 3x PAR SEMAINE</div>
                <div style={{ background: m.color + "15", borderRadius: 10, padding: "10px 14px", marginBottom: 14 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: m.color }}>{m.forceProtocol}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 3 }}>{m.forceNote}</div>
                </div>
                {m.forceExercises.map((ex, i) => (
                  <div key={i} style={{ padding: "10px 0", borderBottom: i < m.forceExercises.length-1 ? "1px solid #F8F8F8" : "none" }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 3 }}>{ex.name}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{ex.detail}</div>
                  </div>
                ))}
              </div>

              {/* ENDURANCE avec switch */}
              <div style={card}>
                <div style={sectionTitle}>🚣 ENDURANCE — 2x PAR SEMAINE</div>

                {/* Switch genou */}
                <div style={{ background: "#F8F9FA", borderRadius: 12, padding: 12, marginBottom: 14 }}>
                  <div style={{ fontSize: 12, color: "#666", marginBottom: 10, fontWeight: 600 }}>Comment est ton genou aujourd'hui ?</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => setEnduranceMode("rameur")} style={{ flex: 1, background: enduranceMode==="rameur" ? "#9B59B6" : "#fff", color: enduranceMode==="rameur" ? "#fff" : "#666", border: enduranceMode==="rameur" ? "none" : "1.5px solid #E8E8E8", borderRadius: 10, padding: "10px 8px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textAlign: "center" }}>
                      🦵 Genou douloureux<br/>
                      <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.8 }}>Rameur uniquement</span>
                    </button>
                    <button onClick={() => setEnduranceMode("athx")} style={{ flex: 1, background: enduranceMode==="athx" ? "#FF6B35" : "#fff", color: enduranceMode==="athx" ? "#fff" : "#666", border: enduranceMode==="athx" ? "none" : "1.5px solid #E8E8E8", borderRadius: 10, padding: "10px 8px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textAlign: "center" }}>
                      ✅ Genou OK<br/>
                      <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.8 }}>Format ATHX</span>
                    </button>
                  </div>
                </div>

                {enduranceMode === "rameur" ? (
                  <div>
                    <div style={{ background: "#9B59B615", borderRadius: 10, padding: "10px 14px", marginBottom: 12 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#9B59B6" }}>🚣 Rameur continu uniquement</div>
                      <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Sans impact sur le genou — progression douce</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {m.endurance.map((e, i) => (
                        <div key={i} style={{ flex: 1, background: "#F8F9FA", borderRadius: 10, padding: "12px 8px", textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#AAA", fontWeight: 600, marginBottom: 6 }}>{e.week}</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "#9B59B6" }}>{e.rameur}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: 12, color: "#AAA", fontStyle: "italic", marginTop: 10 }}>Augmente d'une minute chaque semaine — sans t'arrêter</div>
                  </div>
                ) : (
                  <div>
                    <div style={{ background: "#FF6B3515", borderRadius: 10, padding: "10px 14px", marginBottom: 12 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#FF6B35" }}>🏃 Format ATHX officiel</div>
                      <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Alterne course à pied et rameur — temps limite 22 min</div>
                    </div>
                    <div style={{ fontSize: 11, color: "#555", fontWeight: 600, marginBottom: 8 }}>COMMENT ÇA MARCHE</div>
                    <div style={{ background: "#F8F9FA", borderRadius: 10, padding: 12, marginBottom: 12, fontSize: 12, color: "#555", lineHeight: 1.8 }}>
                      Tu cours la distance indiquée → tu passes au rameur → tu courses à nouveau → et ainsi de suite jusqu'à la fin du temps imparti.<br/>
                      <span style={{ color: "#FF6B35", fontWeight: 700 }}>Score = distance totale parcourue</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {m.endurance.map((e, i) => (
                        <div key={i} style={{ background: "#F8F9FA", borderRadius: 10, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#555" }}>{e.week}</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "#FF6B35" }}>{e.athx}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: 12, color: "#AAA", fontStyle: "italic", marginTop: 10 }}>⚠️ Si ton genou devient douloureux pendant la séance — passe immédiatement au rameur uniquement</div>
                  </div>
                )}
              </div>

              <div style={card}>
                <div style={sectionTitle}>🔥 METCON ATHX — {m.metconFreq.toUpperCase()}</div>
                <div style={{ background: "#FFF3EE", borderRadius: 10, padding: "10px 14px", marginBottom: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#FF6B35" }}>{m.metconGoal}</div>
                </div>
                <div style={sectionTitle}>ENCHAÎNER DANS L'ORDRE SANS REPOS</div>
                {["Rameur — 45 cal","KB Ground to Overhead — 30 reps","Sandbag Carry — 30 mètres","Box Jumps — 30 reps","Fentes DB — 30 mètres","Broad Jumps — 30 mètres"].map((ex, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < 5 ? "1px solid #F8F8F8" : "none" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#FF6B35", color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i+1}</div>
                    <div style={{ fontSize: 13, color: "#333" }}>{ex}</div>
                  </div>
                ))}
              </div>

              <div style={card}>
                <div style={sectionTitle}>📈 RÈGLES DE PROGRESSION</div>
                {m.progression.map((p, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < m.progression.length-1 ? "1px solid #F8F8F8" : "none" }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{p.label}</div>
                    <div style={{ fontSize: 13, color: "#888" }}>{p.rule}</div>
                  </div>
                ))}
                <div style={{ background: "#F8F9FA", borderRadius: 10, padding: 12, marginTop: 12 }}>
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 2 }}>
                    ✅ Tu réussis toutes les reps → augmente la charge<br/>
                    ⚠️ Tu rates une séance → garde la même charge<br/>
                    ❌ Tu rates 2 séances de suite → garde la même charge
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* LOG */}
        {tab === "log" && (
          <div>
            <div style={card}>
              <div style={sectionTitle}>DATE</div>
              <input type="date" value={logForm.date} onChange={e => setLogForm(f => ({ ...f, date: e.target.value }))} style={inp} />
            </div>
            <div style={card}>
              <div style={sectionTitle}>MOIS & SEMAINE</div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: "#AAA", marginBottom: 8 }}>MOIS</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {MONTHS.map(m => (
                    <button key={m.id} onClick={() => setLogForm(f => ({ ...f, month: m.id }))} style={{ background: logForm.month===m.id ? m.color : "#F2F4F7", color: logForm.month===m.id ? "#fff" : "#555", border: "none", borderRadius: 8, padding: "7px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{m.emoji} {m.name}</button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#AAA", marginBottom: 8 }}>SEMAINE</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {[1,2,3,4].map(w => (
                    <button key={w} onClick={() => setLogForm(f => ({ ...f, week: w }))} style={{ flex: 1, background: logForm.week===w ? "#1a1a2e" : "#F2F4F7", color: logForm.week===w ? "#fff" : "#555", border: "none", borderRadius: 8, padding: "10px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>S{w}</button>
                  ))}
                </div>
              </div>
            </div>
            <div style={card}>
              <div style={sectionTitle}>TYPE DE SÉANCE</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SESSION_TYPES.map(t => (
                  <button key={t} onClick={() => setLogForm(f => ({ ...f, type: t }))} style={{ background: logForm.type===t ? TYPE_COLORS[t] : "#F2F4F7", color: logForm.type===t ? "#fff" : "#555", border: "none", borderRadius: 20, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{t}</button>
                ))}
              </div>
            </div>
            <div style={card}>
              <div style={sectionTitle}>PERFS DU JOUR</div>
              <div style={{ fontSize: 12, color: "#AAA", marginBottom: 12, fontStyle: "italic" }}>Ces perfs seront automatiquement liées à ta semaine dans l'onglet Perfs</div>
              {LIFTS.map(l => (
                <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #F8F8F8" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{l.label}</div>
                    <div style={{ fontSize: 11, color: "#AAA" }}>en {l.unit}</div>
                  </div>
                  <input type="number" placeholder="—" value={logForm.lifts[l.id]||""} onChange={e => setLogForm(f => ({ ...f, lifts: { ...f.lifts, [l.id]: e.target.value } }))} style={{ ...inp, width: 85, textAlign: "center", padding: "9px 4px" }} />
                  {getBest(l.id) && <div style={{ fontSize: 11, color: l.color, fontWeight: 700, minWidth: 55, textAlign: "right" }}>best {getBest(l.id)}</div>}
                </div>
              ))}
            </div>
            <div style={card}>
              <div style={sectionTitle}>NOTES</div>
              <textarea value={logForm.notes} onChange={e => setLogForm(f => ({ ...f, notes: e.target.value }))} placeholder="Sensations, douleurs, objectif prochain..." rows={3} style={{ ...inp, resize: "none" }} />
            </div>
            <button onClick={handleLogSave} disabled={!logForm.type} style={{ background: logForm.type ? "#FF6B35" : "#E0E0E0", color: "#fff", border: "none", borderRadius: 12, padding: 16, fontSize: 15, fontWeight: 700, cursor: logForm.type ? "pointer" : "not-allowed", fontFamily: "inherit", width: "100%", marginBottom: 32 }}>
              {saved ? "✓ Séance sauvegardée !" : "Sauvegarder la séance"}
            </button>
          </div>
        )}

        {/* HISTORIQUE */}
        {tab === "history" && (
          <div>
            <div style={{ fontSize: 13, color: "#AAA", marginBottom: 16, textAlign: "center" }}>
              {sessions.length} séance{sessions.length > 1 ? "s" : ""} enregistrée{sessions.length > 1 ? "s" : ""}
            </div>
            {sessions.length === 0 && (
              <div style={{ ...card, textAlign: "center", padding: 40 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>📋</div>
                <div style={{ fontSize: 14, color: "#AAA" }}>Aucune séance enregistrée</div>
                <div style={{ fontSize: 12, color: "#CCC", marginTop: 4 }}>Va dans l'onglet Log pour ajouter ta première séance</div>
              </div>
            )}
            {sessions.map(s => {
              const monthData = MONTHS.find(m => m.id === s.month);
              return (
                <div key={s.id} style={{ ...card, borderLeft: `4px solid ${TYPE_COLORS[s.type] || "#DDD"}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: TYPE_COLORS[s.type] || "#333" }}>{s.type}</div>
                      <div style={{ fontSize: 11, color: "#AAA", marginTop: 2 }}>{monthData?.emoji} {monthData?.name} — Semaine {s.week}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "#AAA" }}>{formatDate(s.date)}</div>
                  </div>
                  {LIFTS.some(l => s.lifts?.[l.id]) && (
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 10, color: "#AAA", fontWeight: 600, letterSpacing: 1, marginBottom: 6 }}>PERFS</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {LIFTS.filter(l => s.lifts?.[l.id]).map(l => (
                          <div key={l.id} style={{ background: l.color + "15", borderRadius: 8, padding: "5px 10px" }}>
                            <span style={{ fontSize: 11, color: "#666" }}>{l.label} </span>
                            <span style={{ fontSize: 13, fontWeight: 800, color: l.color }}>{s.lifts[l.id]} {l.unit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {s.notes && (
                    <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginTop: 6, padding: "8px 10px", background: "#F8F9FA", borderRadius: 8 }}>{s.notes}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* PERFS */}
        {tab === "perfs" && (
          <div>
            <div style={{ ...card, background: "#F8F9FA", padding: 12, marginBottom: 14 }}>
              <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>
                📊 Les moyennes sont calculées automatiquement à partir de tes séances enregistrées.
              </div>
            </div>
            {LIFTS.map(l => (
              <div key={l.id} style={card}>
                <div style={{ fontSize: 15, fontWeight: 700, color: l.color, marginBottom: 14 }}>
                  {l.label} <span style={{ fontSize: 11, color: "#AAA", fontWeight: 400 }}>({l.unit})</span>
                </div>
                {MONTHS.map(m => (
                  <div key={m.id} style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, color: "#AAA", fontWeight: 600, marginBottom: 8 }}>{m.emoji} {m.name}</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      {[1,2,3,4].map(w => {
                        const avg = getWeekAvg(sessions, l.id, m.id, w);
                        const count = sessions.filter(s => s.month===m.id && s.week===w && s.lifts?.[l.id]).length;
                        return (
                          <div key={w} style={{ flex: 1, background: avg ? l.color+"15" : "#F8F9FA", borderRadius: 10, padding: "10px 6px", textAlign: "center", border: avg ? `1.5px solid ${l.color}40` : "1.5px solid #EEE" }}>
                            <div style={{ fontSize: 9, color: "#AAA", fontWeight: 600, marginBottom: 4 }}>S{w}</div>
                            <div style={{ fontSize: 15, fontWeight: 800, color: avg ? l.color : "#CCC" }}>{avg || "—"}</div>
                            {count > 0 && <div style={{ fontSize: 8, color: "#AAA", marginTop: 2 }}>{count} séance{count>1?"s":""}</div>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* RECORDS */}
        {tab === "stats" && (
          <div>
            {LIFTS.map(l => {
              const progress = getAllProgress(l.id);
              const best = getBest(l.id);
              return (
                <div key={l.id} style={card}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>{l.label}</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: best ? l.color : "#CCC" }}>{best ? `${best} ${l.unit}` : "—"}</div>
                  </div>
                  {progress.length > 1 ? (
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
                      {progress.map((p, i) => {
                        const max = Math.max(...progress.map(x => x.val));
                        const h = (p.val / max) * 60;
                        const isLast = i === progress.length-1;
                        return (
                          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                            <div style={{ fontSize: 8, color: isLast ? l.color : "#CCC", fontWeight: isLast ? 700 : 400 }}>{p.val}</div>
                            <div style={{ width: "100%", height: h, background: isLast ? l.color : "#EEE", borderRadius: "3px 3px 0 0" }} />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div style={{ fontSize: 12, color: "#CCC" }}>Pas encore assez de données</div>
                  )}
                </div>
              );
            })}
            <div style={{ ...card, background: "#1a1a2e" }}>
              <div style={{ fontSize: 12, color: "#555", fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>🏆 OBJECTIFS FINAUX — 19 SEPT.</div>
              {[
                ["Strict Press 1RM","50-55 kg","#FF6B35"],
                ["Squat 3RM","65-70 kg","#4ECDC4"],
                ["Deadlift 5RM","80-90 kg","#E74C3C"],
                ["Rameur","20 min","#9B59B6"],
                ["MetCon ATHX","< 18 min","#F39C12"],
              ].map(([label,target,color],i,arr) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i<arr.length-1 ? "1px solid #222" : "none" }}>
                  <div style={{ fontSize: 13, color: "#888" }}>{label}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color }}>{target}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
