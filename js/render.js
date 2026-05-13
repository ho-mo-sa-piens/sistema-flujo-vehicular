// render.js — Renderiza los datos del sistema en el DOM

document.addEventListener("DOMContentLoaded", () => {
  // Año en el footer
  document.getElementById("year").textContent = new Date().getFullYear();

  const d = sistemaData;

  // ── Fronteras ──────────────────────────────────
  renderList("list-inside", d.fronteras.dentro);
  renderList("list-outside", d.fronteras.fuera);

  // ── Componentes ────────────────────────────────
  const chipsContainer = document.getElementById("chips-componentes");
  d.componentes.forEach((comp) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = comp;
    chipsContainer.appendChild(chip);
  });

  // ── Inputs / Outputs ───────────────────────────
  renderList("list-inputs", d.inputs);
  renderList("list-outputs", d.outputs);

  // ── Feedback ───────────────────────────────────
  const feedbackGrid = document.getElementById("feedback-grid");
  d.feedback.forEach((fb) => {
    const card = document.createElement("div");
    card.className = `feedback-card ${fb.tipo}`;
    card.innerHTML = `<h3>${fb.titulo}</h3><p>${fb.descripcion}</p>`;
    feedbackGrid.appendChild(card);
  });

  // ── Entorno ────────────────────────────────────
  const envGrid = document.getElementById("env-grid");
  d.entorno.forEach((item) => {
    const div = document.createElement("div");
    div.className = "env-item";
    div.innerHTML = `
      <span class="env-icon">${item.icono}</span>
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    `;
    envGrid.appendChild(div);
  });

  // ── Interacciones ──────────────────────────────
  const interList = document.getElementById("interactions-list");
  d.interacciones.forEach((inter) => {
    const li = document.createElement("li");
    li.textContent = inter;
    interList.appendChild(li);
  });
});

// ── Helper ─────────────────────────────────────────
function renderList(id, items) {
  const ul = document.getElementById(id);
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}
