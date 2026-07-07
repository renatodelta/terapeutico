// ==========================================
// STATE MANAGEMENT & MOCK DATA INITIALIZATION
// ==========================================

const DEFAULT_DATA = {
    clients: [
        { id: "c-1", name: "Thiago Ramos Martins", email: "thiago.ramos@email.com", phone: "(11) 98122-3443", birthDate: "1994-08-12", status: "ativo", profession: "Engenheiro de Software", emergencyContact: "Carla Ramos (Mãe) - (11) 98122-3400", clinicalNotes: "Busca terapia devido a queixas de estresse ocupacional e sintomas de burnout secundários à sobrecarga de trabalho. Apresenta ansiedade social leve em apresentações corporativas. Sem histórico psiquiátrico prévio relevante." },
        { id: "c-2", name: "Mariana Costa Sousa", email: "mariana.costa@email.com", phone: "(11) 97344-9988", birthDate: "1989-03-24", status: "ativo", profession: "Designer Gráfica", emergencyContact: "Pedro Sousa (Esposo) - (11) 97344-9900", clinicalNotes: "Encaminhada por psiquiatra para acompanhamento de Transtorno Depressivo Recorrente (Atualmente em episódio leve). Faz uso de Escitalopram 10mg/dia. Histórico de instabilidade de humor na adolescência." },
        { id: "c-3", name: "Carolina Mendes Santos", email: "carol.mendes@email.com", phone: "(21) 96522-1144", birthDate: "1998-11-05", status: "lead", profession: "Estudante de Medicina", emergencyContact: "Roberto Mendes (Pai) - (21) 96522-1100", clinicalNotes: "Lead de triagem vindo do Instagram. Relatou crise de pânico recente antes de provas acadêmicas importantes. Apresenta sintomas psicossomáticos (taquicardia, sudorese, insônia)." },
        { id: "c-4", name: "Felipe Albuquerque Rocha", email: "felipe.rocha@email.com", phone: "(11) 99122-4455", birthDate: "1983-06-15", status: "inativo", profession: "Gerente Comercial", emergencyContact: "Clara Albuquerque (Irmã) - (11) 99122-0000", clinicalNotes: "Realizou 12 sessões focadas em luto e transição de carreira após divórcio. Teve alta terapêutica programada em março de 2026 com bom prognóstico e estabilização emocional." },
        { id: "c-5", name: "Beatriz Santos Azevedo", email: "beatriz.azevedo@email.com", phone: "(11) 98311-2288", birthDate: "2001-09-30", status: "lead", profession: "Estagiária Jurídica", emergencyContact: "Lucas Azevedo (Irmão) - (11) 98311-0000", clinicalNotes: "Lead entrou em contato via site buscando atendimento social. Relata dificuldades interpessoais e regulação emocional. Agendada primeira sessão de triagem." }
    ],
    services: [
        { id: "s-1", name: "Psicoterapia Individual (TCC)", price: 180, duration: 50, description: "Atendimento psicoterapêutico clínico baseado na abordagem Cognitivo-Comportamental, focado em reestruturação cognitiva e modificação de padrões disfuncionais." },
        { id: "s-2", name: "Terapia de Casal", price: 250, duration: 60, description: "Foco na mediação de conflitos conjugais, melhoria de padrões de comunicação e resolução conjunta de impasses emocionais familiares." },
        { id: "s-3", name: "Avaliação Psicológica / Triagem", price: 200, duration: 50, description: "Entrevistas de triagem inicial e testes rápidos para dimensionamento de sintomas, definição de metas terapêuticas e diagnóstico preliminar." }
    ],
    sessions: [
        { id: "ses-1", clientId: "c-1", date: "2026-07-06", duration: 50, humor: "Ansioso", notes: "Paciente relatou alta carga de trabalho na última semana e insônia nas duas últimas noites. Trabalhamos a identificação de pensamentos automáticos catastróficos relacionados à entrega de um projeto. Aplicamos respiração diafragmática ao final." },
        { id: "ses-2", clientId: "c-2", date: "2026-07-06", duration: 50, humor: "Estável", notes: "Mariana demonstrou humor estável. Relatou que conseguiu implementar o registro de pensamentos disfuncionais prescrito na sessão anterior. Houve melhora na interação social com a família." },
        { id: "ses-3", clientId: "c-1", date: "2026-06-29", duration: 50, humor: "Estável", notes: "Sessão focada na organização de rotina. Identificamos gatilhos de procrastinação no início da tarde e estabelecemos pequenas metas diárias de trabalho para reduzir a ansiedade acumulada." },
        { id: "ses-4", clientId: "c-2", date: "2026-06-29", duration: 50, humor: "Depressivo / Desanimado", notes: "Paciente relata cansaço severo e ideação passiva de fuga. Discutimos a importância da ativação comportamental, agendando uma caminhada de 15 minutos em dias alternados." }
    ],
    payments: [
        { id: "p-1", clientId: "c-1", serviceName: "Psicoterapia Individual (TCC)", dueDate: "2026-07-10", value: 180, status: "pendente" },
        { id: "p-2", clientId: "c-2", serviceName: "Psicoterapia Individual (TCC)", dueDate: "2026-07-05", value: 180, status: "pago" },
        { id: "p-3", clientId: "c-1", serviceName: "Psicoterapia Individual (TCC)", dueDate: "2026-06-29", value: 180, status: "pago" },
        { id: "p-4", clientId: "c-2", serviceName: "Psicoterapia Individual (TCC)", dueDate: "2026-06-29", value: 180, status: "pago" },
        { id: "p-5", clientId: "c-3", serviceName: "Avaliação Psicológica / Triagem", dueDate: "2026-07-04", value: 200, status: "atrasado" }
    ],
    tasks: [
        { id: "t-1", title: "Preparar protocolo de ansiedade", desc: "Elaborar lâminas de reestruturação cognitiva para o paciente Thiago Ramos.", priority: "Alta", status: "todo", clientId: "c-1" },
        { id: "t-2", title: "Enviar recibo de pagamento", desc: "Enviar recibo referente à sessão de 29/06 para Mariana Costa.", priority: "Baixa", status: "done", clientId: "c-2" },
        { id: "t-3", title: "Ligar para lead Beatriz", desc: "Realizar contato telefônico para agendar a primeira consulta de triagem.", priority: "Média", status: "inprogress", clientId: "c-5" },
        { id: "t-4", title: "Estudar caso clínico de depressão", desc: "Revisar artigos de ativação comportamental e guidelines de TCC para o caso da Mariana.", priority: "Alta", status: "todo", clientId: "c-2" }
    ],
    formResponses: [
        {
            id: "fr-1",
            clientId: "c-2",
            date: "2026-06-22",
            type: "ansiedade",
            title: "Inventário de Ansiedade (GAD-7)",
            summary: "Score: 12 (Ansiedade Moderada)",
            answers: {
                q1: "2", // Sentir-se nervoso, ansioso ou no limite (Vários dias)
                q2: "2", // Não ser capaz de parar ou controlar a preocupação (Vários dias)
                q3: "1", // Preocupar-se muito com diversas coisas (Vários dias)
                q4: "2", // Dificuldade para relaxar (Vários dias)
                q5: "1", // Ficar tão agitado que é difícil permanecer sentado (Vários dias)
                q6: "2", // Ficar facilmente irritado ou aborrecido (Vários dias)
                q7: "2"  // Sentir medo como se algo horrível pudesse acontecer (Vários dias)
            }
        }
    ]
};

// Application state loaded from localStorage or seeded
let appState = {};

function initData() {
    const stored = localStorage.getItem("mentesa_data");
    if (stored) {
        try {
            appState = JSON.parse(stored);
        } catch (e) {
            console.error("Erro ao analisar dados do localStorage. Restaurando dados padrão.");
            appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
            saveToStorage();
        }
    } else {
        appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveToStorage();
    }
}

function saveToStorage() {
    localStorage.setItem("mentesa_data", JSON.stringify(appState));
}

// ==========================================
// AUTHENTICATION FLOW
// ==========================================

function checkAuth() {
    const isLoggedIn = localStorage.getItem("mentesa_logged_in") === "true";
    const loginOverlay = document.getElementById("loginOverlay");
    
    if (isLoggedIn) {
        loginOverlay.classList.add("hidden");
    } else {
        loginOverlay.classList.remove("hidden");
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    
    if (email === "terapeuta@exemplo.com" && pass === "senha123") {
        localStorage.setItem("mentesa_logged_in", "true");
        checkAuth();
        switchView("dashboard");
        showToast("Bem-vinda de volta, Dra. Amanda!");
    } else {
        alert("Credenciais incorretas! Use terapeuta@exemplo.com / senha123");
    }
}

function handleLogout() {
    localStorage.removeItem("mentesa_logged_in");
    checkAuth();
}

// ==========================================
// SPA ROUTING / VIEWS
// ==========================================

let activeView = "dashboard";

function switchView(viewName) {
    activeView = viewName;
    
    // Toggle active classes in Sidebar
    document.querySelectorAll(".nav-menu .nav-item").forEach(item => {
        if (item.dataset.view === viewName) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    
    // Toggle view visibility
    document.querySelectorAll(".app-view").forEach(view => {
        if (view.id === `view-${viewName}`) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });
    
    // Render view-specific elements
    renderViewData(viewName);
}

function renderViewData(viewName) {
    switch (viewName) {
        case "dashboard":
            renderDashboard();
            break;
        case "clients":
            renderClients();
            break;
        case "sessions":
            renderSessions();
            break;
        case "forms":
            renderForms();
            break;
        case "services":
            renderServices();
            break;
        case "financial":
            renderFinancial();
            break;
        case "tasks":
            renderTasks();
            break;
    }
}

// ==========================================
// DASHBOARD COMPONENT RENDER
// ==========================================

let myChartInstance = null;

function renderDashboard() {
    // 1. Calculate Metrics
    const activeClientsCount = appState.clients.filter(c => c.status === "ativo").length;
    const leadsCount = appState.clients.filter(c => c.status === "lead").length;
    const weeklySessionsCount = appState.sessions.length; // Simple metric mock
    
    const pendingTotal = appState.payments
        .filter(p => p.status === "pendente")
        .reduce((sum, p) => sum + p.value, 0);
        
    document.getElementById("dashTotalClients").innerText = activeClientsCount;
    document.getElementById("dashTotalLeads").innerText = leadsCount;
    document.getElementById("dashSessionsWeek").innerText = weeklySessionsCount;
    document.getElementById("dashPendingPayments").innerText = `R$ ${pendingTotal}`;

    // 2. Render Financial Chart
    renderFinancialChart();

    // 3. Render Today's Agenda (Simulated)
    renderTodayAgenda();

    // 4. Render Dashboard Incomplete Tasks
    renderDashTasks();

    // 5. Render Recent Leads List
    renderDashLeads();
}

function renderFinancialChart() {
    const ctx = document.getElementById("financeChart").getContext("2d");
    if (myChartInstance) {
        myChartInstance.destroy();
    }
    
    // Simulate past 6 months
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
    const revenueData = [4200, 4800, 5200, 4900, 5600, 5400];
    const pendingData = [200, 450, 300, 150, 480, 580];
    
    const isDark = document.body.parentElement.getAttribute("data-theme") === "dark";
    const textMainColor = isDark ? "#94a3b8" : "#475569";
    const borderGridColor = isDark ? "#1e293b" : "#f1f5f9";
    
    myChartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: months,
            datasets: [
                {
                    label: "Faturamento Recebido (R$)",
                    data: revenueData,
                    borderColor: "#0d9488",
                    backgroundColor: "rgba(13, 148, 136, 0.1)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                },
                {
                    label: "Cobranças Pendentes (R$)",
                    data: pendingData,
                    borderColor: "#6366f1",
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textMainColor,
                        font: { family: 'Plus Jakarta Sans', weight: '600' }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: borderGridColor },
                    ticks: { color: textMainColor }
                },
                y: {
                    grid: { color: borderGridColor },
                    ticks: { color: textMainColor }
                }
            }
        }
    });
}

function renderTodayAgenda() {
    const agendaList = document.getElementById("todayAgendaList");
    agendaList.innerHTML = "";
    
    // Simulate active client sessions for "today"
    const activeClients = appState.clients.filter(c => c.status === "ativo");
    
    if (activeClients.length === 0) {
        agendaList.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size:0.875rem; padding: 2rem 0;">Sem sessões agendadas para hoje.</p>`;
        return;
    }
    
    const times = ["09:00", "11:00", "14:00", "16:00"];
    
    activeClients.slice(0, 4).forEach((client, idx) => {
        const time = times[idx] || "17:00";
        const service = appState.services[0]?.name || "Consulta Psicológica";
        
        agendaList.innerHTML += `
            <div style="display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
                <div style="background-color: var(--primary-light); color: var(--primary-text); font-weight:700; padding: 0.35rem 0.65rem; border-radius: var(--radius-sm); font-size:0.8rem; text-align:center;">
                    ${time}
                </div>
                <div style="flex: 1;">
                    <a onclick="viewClientProfile('${client.id}')" style="font-weight:700; font-size:0.9rem; color: var(--text-main); cursor:pointer; hover:text-decoration: underline;">
                        ${client.name}
                    </a>
                    <div style="font-size:0.75rem; color: var(--text-muted); margin-top: 0.15rem;">
                        ${service} • 50 min
                    </div>
                </div>
                <button class="btn btn-secondary btn-icon-only" onclick="triggerSessionNoteForToday('${client.id}')" title="Registrar Notas da Sessão">
                    <i data-lucide="pencil-line" style="width:14px;"></i>
                </button>
            </div>
        `;
    });
    lucide.createIcons();
}

function triggerSessionNoteForToday(clientId) {
    openModal('modalAddSession');
    document.getElementById("sesClient").value = clientId;
    document.getElementById("sesDate").value = new Date().toISOString().split('T')[0];
}

function renderDashTasks() {
    const list = document.getElementById("dashTasksList");
    list.innerHTML = "";
    
    const pendingTasks = appState.tasks.filter(t => t.status !== "done");
    
    if (pendingTasks.length === 0) {
        list.innerHTML = `<p style="color: var(--text-muted); font-size:0.875rem;">Todas as tarefas concluídas!</p>`;
        return;
    }
    
    pendingTasks.slice(0, 3).forEach(task => {
        const clientName = appState.clients.find(c => c.id === task.clientId)?.name || "Sem vínculo";
        const priorityColor = task.priority === "Alta" ? "var(--danger-text)" : (task.priority === "Média" ? "var(--warning-text)" : "var(--text-muted)");
        const priorityBg = task.priority === "Alta" ? "var(--danger-light)" : (task.priority === "Média" ? "var(--warning-light)" : "var(--border-color)");
        
        list.innerHTML += `
            <div style="padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-primary); margin-bottom: 0.75rem; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h4 style="font-size: 0.85rem; font-weight:700; color: var(--text-main);">${task.title}</h4>
                    <p style="font-size:0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Paciente: ${clientName}</p>
                </div>
                <span class="badge" style="background-color: ${priorityBg}; color: ${priorityColor};">${task.priority}</span>
            </div>
        `;
    });
}

function renderDashLeads() {
    const list = document.getElementById("dashLeadsList");
    list.innerHTML = "";
    
    const leads = appState.clients.filter(c => c.status === "lead");
    
    if (leads.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size:0.875rem; padding: 2rem 0;">Nenhum lead em triagem no momento.</p>`;
        return;
    }
    
    leads.slice(0, 3).forEach(lead => {
        list.innerHTML += `
            <div style="padding: 0.95rem 1.5rem; border-bottom: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <a onclick="viewClientProfile('${lead.id}')" style="font-weight:700; font-size:0.875rem; color: var(--text-main); cursor:pointer;">${lead.name}</a>
                    <p style="font-size:0.75rem; color: var(--text-muted); margin-top:0.15rem;">${lead.phone} • ${lead.email || 'Sem email'}</p>
                </div>
                <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size:0.75rem;" onclick="viewClientProfile('${lead.id}')">
                    Efetivar / Triar
                </button>
            </div>
        `;
    });
}

// ==========================================
// CLIENTS & LEADS VIEW
// ==========================================

let clientStatusFilter = "all";

function renderClients() {
    const tbody = document.getElementById("clientsTableBody");
    tbody.innerHTML = "";
    
    let list = appState.clients;
    
    // Apply Status Filter
    if (clientStatusFilter !== "all") {
        list = list.filter(c => c.status === clientStatusFilter);
    }
    
    // Apply Search
    const searchVal = document.getElementById("clientSearch").value.toLowerCase().trim();
    if (searchVal) {
        list = list.filter(c => 
            c.name.toLowerCase().includes(searchVal) || 
            c.phone.includes(searchVal) || 
            (c.email && c.email.toLowerCase().includes(searchVal))
        );
    }
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 3rem 0;">Nenhum cliente cadastrado correspondente aos filtros.</td></tr>`;
        return;
    }
    
    list.forEach(client => {
        const lastSession = appState.sessions.filter(s => s.clientId === client.id).sort((a,b) => new Date(b.date) - new Date(a.date))[0];
        const lastSessionDateStr = lastSession ? formatDate(lastSession.date) : "Nenhum registro";
        
        let statusBadge = "";
        if (client.status === "ativo") statusBadge = '<span class="badge badge-active">Ativo</span>';
        else if (client.status === "lead") statusBadge = '<span class="badge badge-lead">Lead</span>';
        else if (client.status === "inativo") statusBadge = '<span class="badge badge-inactive">Inativo</span>';
        
        tbody.innerHTML += `
            <tr>
                <td>
                    <div style="font-weight: 700; color: var(--text-main);">${client.name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">${client.profession || 'Não informou profissão'}</div>
                </td>
                <td>${statusBadge}</td>
                <td>${client.phone}</td>
                <td>${client.email || '<span style="opacity:0.4;">—</span>'}</td>
                <td>${lastSessionDateStr}</td>
                <td style="text-align: right;">
                    <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="viewClientProfile('${client.id}')">
                        <i data-lucide="eye" style="width:12px;"></i> Dossiê Clínico
                    </button>
                </td>
            </tr>
        `;
    });
    lucide.createIcons();
}

function filterClients() {
    renderClients();
}

function filterClientsStatus(status) {
    clientStatusFilter = status;
    document.querySelectorAll(".filters-group .btn").forEach(btn => {
        btn.classList.remove("btn-active-filter");
        btn.style.backgroundColor = "var(--bg-secondary)";
        btn.style.color = "var(--text-main)";
    });
    
    const activeBtn = document.getElementById(`filter-${status}`);
    activeBtn.classList.add("btn-active-filter");
    activeBtn.style.backgroundColor = "var(--primary-light)";
    activeBtn.style.color = "var(--primary-text)";
    
    renderClients();
}

function saveClient(event) {
    event.preventDefault();
    
    const newClient = {
        id: "c-" + Date.now(),
        name: document.getElementById("cliName").value.trim(),
        email: document.getElementById("cliEmail").value.trim(),
        phone: document.getElementById("cliPhone").value.trim(),
        status: document.getElementById("cliStatus").value,
        birthDate: document.getElementById("cliBirth").value,
        clinicalNotes: document.getElementById("cliNotes").value.trim(),
        profession: "",
        emergencyContact: ""
    };
    
    appState.clients.push(newClient);
    saveToStorage();
    
    closeModal("modalAddClient");
    document.getElementById("formAddClient").reset();
    
    if (activeView === "clients") renderClients();
    else if (activeView === "dashboard") renderDashboard();
    
    showToast("Ficha do cliente criada com sucesso!");
}

// ==========================================
// CLIENT DETAIL CLINICAL DOSSIER MODAL
// ==========================================

let activeProfileClientId = null;
let activeProfileTab = "tab-evolucao";

function viewClientProfile(clientId) {
    const client = appState.clients.find(c => c.id === clientId);
    if (!client) return;
    
    activeProfileClientId = clientId;
    activeProfileTab = "tab-evolucao";
    
    // Set Profile Header and Avatar
    document.getElementById("profName").innerText = client.name;
    const initials = client.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
    document.getElementById("profAvatar").innerText = initials;
    document.getElementById("profPhone").innerText = client.phone;
    document.getElementById("profEmail").innerText = client.email || "Não informado";
    
    // Age Calculator
    let ageStr = "Idade não cadastrada";
    if (client.birthDate) {
        const diff = Date.now() - new Date(client.birthDate).getTime();
        const age = new Date(diff).getUTCFullYear() - 1970;
        ageStr = `${age} anos`;
    }
    document.getElementById("profAge").innerText = ageStr;
    
    // Badge status in drawer
    const container = document.getElementById("profBadgeContainer");
    if (client.status === "ativo") container.innerHTML = '<span class="badge badge-active">Paciente Ativo</span>';
    else if (client.status === "lead") container.innerHTML = '<span class="badge badge-lead">Lead</span>';
    else if (client.status === "inativo") container.innerHTML = '<span class="badge badge-inactive">Inativo</span>';
    
    // Pre-populate Edit Form inputs
    document.getElementById("editCliName").value = client.name;
    document.getElementById("editCliStatus").value = client.status;
    document.getElementById("editCliEmail").value = client.email || "";
    document.getElementById("editCliPhone").value = client.phone;
    document.getElementById("editCliBirth").value = client.birthDate || "";
    document.getElementById("editCliProfession").value = client.profession || "";
    document.getElementById("editCliEmergency").value = client.emergencyContact || "";
    
    // Clinical Intake notes
    document.getElementById("editCliNotes").value = client.clinicalNotes || "";
    
    // Render profile specific views
    switchProfileTab("tab-evolucao");
    openModal("modalClientProfile");
}

function switchProfileTab(tabId) {
    activeProfileTab = tabId;
    
    // Handle tab buttons css
    document.querySelectorAll(".tabs-nav .tab-btn").forEach(btn => {
        if (btn.innerText === document.querySelector(`[onclick="switchProfileTab('${tabId}')"]`).innerText) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Handle tab panel display
    document.querySelectorAll(".profile-main .tab-content").forEach(panel => {
        if (panel.id === tabId) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });
    
    // Load Tab Data
    if (tabId === "tab-evolucao") {
        renderProfileTimeline();
    } else if (tabId === "tab-financeiro") {
        renderProfileFinancial();
    }
}

function renderProfileTimeline() {
    const timeline = document.getElementById("profTimeline");
    timeline.innerHTML = "";
    
    const clientSessions = appState.sessions
        .filter(s => s.clientId === activeProfileClientId)
        .sort((a,b) => new Date(b.date) - new Date(a.date));
        
    if (clientSessions.length === 0) {
        timeline.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size:0.875rem; padding: 2rem 0;">Nenhuma sessão registrada para este paciente.</p>`;
        return;
    }
    
    clientSessions.forEach(session => {
        timeline.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-badge"></div>
                <div class="timeline-header">
                    <span class="timeline-title">Humor: <strong>${session.humor}</strong></span>
                    <span class="timeline-date">${formatDate(session.date)} (${session.duration} min)</span>
                </div>
                <div class="timeline-text">
                    ${session.notes.replace(/\n/g, '<br>')}
                    <div style="text-align: right; margin-top:0.75rem;">
                        <button class="btn btn-secondary" style="padding: 2px 6px; font-size:0.7rem; border-color:var(--border-color);" onclick="deleteSession('${session.id}')">
                            Excluir Nota
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderProfileFinancial() {
    const tbody = document.getElementById("profPaymentsTableBody");
    tbody.innerHTML = "";
    
    const clientPayments = appState.payments
        .filter(p => p.clientId === activeProfileClientId)
        .sort((a,b) => new Date(b.dueDate) - new Date(a.dueDate));
        
    if (clientPayments.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem 0;">Sem lançamentos financeiros.</td></tr>`;
        return;
    }
    
    clientPayments.forEach(pay => {
        let statusBadge = "";
        let actionBtn = "";
        
        if (pay.status === "pago") {
            statusBadge = '<span class="badge badge-paid">Pago</span>';
        } else if (pay.status === "pendente") {
            statusBadge = '<span class="badge badge-pending">Pendente</span>';
            actionBtn = `<button class="btn btn-secondary" style="padding: 2px 6px; font-size:0.7rem;" onclick="setPaymentStatus('${pay.id}', 'pago')">Marcar Pago</button>`;
        } else if (pay.status === "atrasado") {
            statusBadge = '<span class="badge badge-delayed">Atrasado</span>';
            actionBtn = `<button class="btn btn-secondary" style="padding: 2px 6px; font-size:0.7rem;" onclick="setPaymentStatus('${pay.id}', 'pago')">Marcar Pago</button>`;
        }
        
        tbody.innerHTML += `
            <tr>
                <td>${formatDate(pay.dueDate)}</td>
                <td>${pay.serviceName}</td>
                <td>R$ ${pay.value}</td>
                <td>${statusBadge}</td>
                <td style="text-align: right;">${actionBtn}</td>
            </tr>
        `;
    });
}

function updateClientHandler(event) {
    event.preventDefault();
    
    const client = appState.clients.find(c => c.id === activeProfileClientId);
    if (!client) return;
    
    client.name = document.getElementById("editCliName").value.trim();
    client.status = document.getElementById("editCliStatus").value;
    client.email = document.getElementById("editCliEmail").value.trim();
    client.phone = document.getElementById("editCliPhone").value.trim();
    client.birthDate = document.getElementById("editCliBirth").value;
    client.profession = document.getElementById("editCliProfession").value.trim();
    client.emergencyContact = document.getElementById("editCliEmergency").value.trim();
    
    saveToStorage();
    
    // Refresh GUI
    document.getElementById("profName").innerText = client.name;
    document.getElementById("profPhone").innerText = client.phone;
    document.getElementById("profEmail").innerText = client.email || "Não informado";
    
    let ageStr = "Idade não cadastrada";
    if (client.birthDate) {
        const diff = Date.now() - new Date(client.birthDate).getTime();
        const age = new Date(diff).getUTCFullYear() - 1970;
        ageStr = `${age} anos`;
    }
    document.getElementById("profAge").innerText = ageStr;
    
    const container = document.getElementById("profBadgeContainer");
    if (client.status === "ativo") container.innerHTML = '<span class="badge badge-active">Paciente Ativo</span>';
    else if (client.status === "lead") container.innerHTML = '<span class="badge badge-lead">Lead</span>';
    else if (client.status === "inativo") container.innerHTML = '<span class="badge badge-inactive">Inativo</span>';
    
    if (activeView === "clients") renderClients();
    else if (activeView === "dashboard") renderDashboard();
    
    showToast("Dados do paciente atualizados!");
}

function saveClientClinicalNotes() {
    const client = appState.clients.find(c => c.id === activeProfileClientId);
    if (!client) return;
    
    client.clinicalNotes = document.getElementById("editCliNotes").value.trim();
    saveToStorage();
    showToast("Histórico de Anamnese atualizado!");
}

function deleteClientHandler() {
    if (!confirm("Tem certeza que deseja excluir permanentemente esta ficha? Todos os prontuários e faturas serão mantidos mas desvinculados.")) return;
    
    appState.clients = appState.clients.filter(c => c.id !== activeProfileClientId);
    saveToStorage();
    
    closeModal("modalClientProfile");
    
    if (activeView === "clients") renderClients();
    else if (activeView === "dashboard") renderDashboard();
    
    showToast("Cliente removido com sucesso!");
}

function triggerAddSessionFromProfile() {
    closeModal("modalClientProfile");
    setTimeout(() => {
        openModal("modalAddSession");
        document.getElementById("sesClient").value = activeProfileClientId;
        document.getElementById("sesDate").value = new Date().toISOString().split('T')[0];
    }, 300);
}

function triggerAddPaymentFromProfile() {
    closeModal("modalClientProfile");
    setTimeout(() => {
        openModal("modalAddPayment");
        document.getElementById("payClient").value = activeProfileClientId;
        document.getElementById("payDate").value = new Date().toISOString().split('T')[0];
    }, 300);
}

// ==========================================
// CLINICAL NOTES & SESSIONS SKELETON
// ==========================================

function renderSessions() {
    const timeline = document.getElementById("sessionsTimeline");
    timeline.innerHTML = "";
    
    const list = appState.sessions.sort((a,b) => new Date(b.date) - new Date(a.date));
    
    if (list.length === 0) {
        timeline.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size:0.875rem; padding: 3rem 0;">Sem sessões registradas no prontuário geral.</p>`;
        return;
    }
    
    list.forEach(session => {
        const client = appState.clients.find(c => c.id === session.clientId);
        const clientName = client ? client.name : "Paciente Deletado";
        
        timeline.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-badge"></div>
                <div class="timeline-header">
                    <span class="timeline-title">
                        <a onclick="viewClientProfile('${session.clientId}')" style="font-weight:700; color: var(--primary); cursor:pointer; text-decoration:none; hover:underline;">
                            ${clientName}
                        </a>
                        <span style="font-weight: normal; color: var(--text-muted); font-size:0.8rem; margin-left: 0.5rem;">
                            (Humor: ${session.humor})
                        </span>
                    </span>
                    <span class="timeline-date">${formatDate(session.date)} (${session.duration} min)</span>
                </div>
                <div class="timeline-text">
                    ${session.notes.replace(/\n/g, '<br>')}
                    <div style="text-align: right; margin-top:0.75rem;">
                        <button class="btn btn-secondary" style="padding: 2px 6px; font-size:0.7rem; border-color:var(--border-color);" onclick="deleteSession('${session.id}')">
                            Excluir Nota
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function saveSession(event) {
    event.preventDefault();
    
    const newSession = {
        id: "ses-" + Date.now(),
        clientId: document.getElementById("sesClient").value,
        date: document.getElementById("sesDate").value,
        duration: parseInt(document.getElementById("sesDuration").value, 10),
        humor: document.getElementById("sesHumor").value,
        notes: document.getElementById("sesNotes").value.trim()
    };
    
    appState.sessions.push(newSession);
    
    // Automatically trigger financial entry for the session
    const client = appState.clients.find(c => c.id === newSession.clientId);
    if (client) {
        const defaultService = appState.services[0]; // Psicoterapia Individual
        const payment = {
            id: "p-" + Date.now(),
            clientId: client.id,
            serviceName: defaultService ? defaultService.name : "Psicoterapia Individual (TCC)",
            dueDate: newSession.date,
            value: defaultService ? defaultService.price : 180,
            status: "pendente"
        };
        appState.payments.push(payment);
    }
    
    saveToStorage();
    
    closeModal("modalAddSession");
    document.getElementById("formAddSession").reset();
    
    if (activeView === "sessions") renderSessions();
    else if (activeView === "dashboard") renderDashboard();
    
    showToast("Evolução clínica registrada e cobrança pendente gerada!");
}

function deleteSession(sessionId) {
    if (!confirm("Tem certeza que deseja excluir esta nota de evolução?")) return;
    
    appState.sessions = appState.sessions.filter(s => s.id !== sessionId);
    saveToStorage();
    
    if (activeView === "sessions") renderSessions();
    else if (activeView === "clients") renderProfileTimeline();
    
    showToast("Nota de prontuário removida.");
}

// ==========================================
// CLINICAL FORMS SYSTEM
// ==========================================

const QUESTIONS_DB = {
    anamnese: [
        { key: "q1", label: "Descreva a queixa principal que motivou a busca por psicoterapia:", type: "textarea" },
        { key: "q2", label: "Existe histórico de tratamentos psiquiátricos ou psicológicos anteriores?", type: "text" },
        { key: "q3", label: "Histórico familiar de saúde mental (depressão, ansiedade, abuso de substâncias etc.):", type: "textarea" },
        { key: "q4", label: "Como descreve a qualidade do sono e a alimentação no último mês?", type: "text" }
    ],
    ansiedade: [
        { key: "q1", label: "1. Sentir-se nervoso(a), ansioso(a) ou muito tenso(a):", type: "scale" },
        { key: "q2", label: "2. Não ser capaz de impedir ou controlar as preocupações:", type: "scale" },
        { key: "q3", label: "3. Preocupar-se muito com diversas coisas diferentes:", type: "scale" },
        { key: "q4", label: "4. Dificuldade para relaxar:", type: "scale" },
        { key: "q5", label: "5. Ficar tão agitado(a) que se torna difícil permanecer sentado(a):", type: "scale" },
        { key: "q6", label: "6. Ficar facilmente irritado(a) ou chateado(a):", type: "scale" },
        { key: "q7", label: "7. Sentir medo como se algo horrível pudesse acontecer:", type: "scale" }
    ]
};

function renderForms() {
    const tbody = document.getElementById("formResponsesTableBody");
    tbody.innerHTML = "";
    
    const responses = appState.formResponses.sort((a,b) => new Date(b.date) - new Date(a.date));
    
    if (responses.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem 0;">Nenhuma resposta cadastrada ainda.</td></tr>`;
        return;
    }
    
    responses.forEach(resp => {
        const client = appState.clients.find(c => c.id === resp.clientId);
        const clientName = client ? client.name : "Paciente Deletado";
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${clientName}</strong></td>
                <td>${resp.title}</td>
                <td>${formatDate(resp.date)}</td>
                <td><span style="font-weight:600; color: var(--primary);">${resp.summary}</span></td>
                <td style="text-align: right;">
                    <button class="btn btn-secondary" style="padding: 2px 8px; font-size:0.75rem;" onclick="viewFormResponse('${resp.id}')">
                        Visualizar Resposta
                    </button>
                </td>
            </tr>
        `;
    });
}

function openFormFiller(type) {
    const questions = QUESTIONS_DB[type];
    if (!questions) return;
    
    document.getElementById("formFillerType").value = type;
    document.getElementById("formFillerTitle").innerText = type === "anamnese" ? "Ficha de Anamnese Geral Adulto" : "Inventário de Ansiedade (GAD-7)";
    document.getElementById("formFillerDate").value = new Date().toISOString().split('T')[0];
    
    // Load Client Select Options
    const select = document.getElementById("formFillerClient");
    select.innerHTML = `<option value="">Selecione o paciente...</option>`;
    appState.clients.forEach(c => {
        select.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
    
    const container = document.getElementById("formQuestionsContainer");
    container.innerHTML = "";
    
    questions.forEach(q => {
        if (q.type === "scale") {
            container.innerHTML += `
                <div class="form-group" style="margin-bottom: 1.5rem; background: var(--bg-primary); padding: 1rem; border-radius: var(--radius-md);">
                    <label class="form-label" style="font-size:0.9rem; margin-bottom: 0.75rem;">${q.label}</label>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <label style="font-size: 0.8rem; display:flex; align-items:center; gap:0.25rem; cursor:pointer;">
                            <input type="radio" name="ans_${q.key}" value="0" required> Nenhuma vez
                        </label>
                        <label style="font-size: 0.8rem; display:flex; align-items:center; gap:0.25rem; cursor:pointer;">
                            <input type="radio" name="ans_${q.key}" value="1"> Vários dias
                        </label>
                        <label style="font-size: 0.8rem; display:flex; align-items:center; gap:0.25rem; cursor:pointer;">
                            <input type="radio" name="ans_${q.key}" value="2"> Mais de metade dos dias
                        </label>
                        <label style="font-size: 0.8rem; display:flex; align-items:center; gap:0.25rem; cursor:pointer;">
                            <input type="radio" name="ans_${q.key}" value="3"> Quase todos os dias
                        </label>
                    </div>
                </div>
            `;
        } else if (q.type === "textarea") {
            container.innerHTML += `
                <div class="form-group">
                    <label class="form-label">${q.label}</label>
                    <textarea class="form-control" name="ans_${q.key}" rows="3" required></textarea>
                </div>
            `;
        } else {
            container.innerHTML += `
                <div class="form-group">
                    <label class="form-label">${q.label}</label>
                    <input type="text" class="form-control" name="ans_${q.key}" required>
                </div>
            `;
        }
    });
    
    openModal("modalFormFiller");
}

function saveFormResponse(event) {
    event.preventDefault();
    
    const type = document.getElementById("formFillerType").value;
    const clientId = document.getElementById("formFillerClient").value;
    const date = document.getElementById("formFillerDate").value;
    
    if (!clientId) {
        alert("Por favor, selecione um paciente.");
        return;
    }
    
    const questions = QUESTIONS_DB[type];
    const answers = {};
    let score = 0;
    
    // Parse answers
    questions.forEach(q => {
        if (q.type === "scale") {
            const val = document.querySelector(`input[name="ans_${q.key}"]:checked`)?.value;
            answers[q.key] = val || "0";
            score += parseInt(val || "0", 10);
        } else {
            const val = document.querySelector(`[name="ans_${q.key}"]`)?.value;
            answers[q.key] = val || "";
        }
    });
    
    let summary = "";
    if (type === "ansiedade") {
        let severity = "Leve";
        if (score >= 15) severity = "Grave";
        else if (score >= 10) severity = "Moderada";
        else if (score >= 5) severity = "Leve";
        else severity = "Mínima";
        summary = `Score: ${score} (Ansiedade ${severity})`;
    } else {
        summary = "Anamnese Registrada";
    }
    
    const newResponse = {
        id: "fr-" + Date.now(),
        clientId: clientId,
        date: date,
        type: type,
        title: type === "anamnese" ? "Anamnese Geral Adulto" : "Inventário de Ansiedade (GAD-7)",
        summary: summary,
        answers: answers
    };
    
    appState.formResponses.push(newResponse);
    saveToStorage();
    
    closeModal("modalFormFiller");
    document.getElementById("formFillerSubmit").reset();
    
    renderForms();
    showToast("Formulário clínico registrado com sucesso!");
}

function viewFormResponse(responseId) {
    const resp = appState.formResponses.find(r => r.id === responseId);
    if (!resp) return;
    
    const client = appState.clients.find(c => c.id === resp.clientId);
    document.getElementById("responseViewClient").innerText = client ? client.name : "Paciente Excluído";
    document.getElementById("responseViewDate").innerText = formatDate(resp.date);
    document.getElementById("responseViewTitle").innerText = resp.title;
    
    const container = document.getElementById("responseViewQuestions");
    container.innerHTML = "";
    
    const questions = QUESTIONS_DB[resp.type];
    
    questions.forEach(q => {
        const ansValue = resp.answers[q.key];
        let displayAns = ansValue;
        
        if (q.type === "scale") {
            const scaleLabels = ["Nenhuma vez (0)", "Vários dias (1)", "Mais da metade dos dias (2)", "Quase todos os dias (3)"];
            displayAns = scaleLabels[parseInt(ansValue, 10)] || ansValue;
        }
        
        container.innerHTML += `
            <div style="background-color: var(--bg-primary); padding: 0.95rem; border-radius: var(--radius-md); border-left: 3px solid var(--primary);">
                <div style="font-size:0.8rem; font-weight:700; color: var(--text-muted);">${q.label}</div>
                <div style="font-size:0.9rem; font-weight:600; color: var(--text-main); margin-top: 0.35rem;">${displayAns}</div>
            </div>
        `;
    });
    
    if (resp.type === "ansiedade") {
        container.innerHTML += `
            <div style="background-color: var(--primary-light); color: var(--primary-text); padding: 1.25rem; border-radius: var(--radius-md); font-weight:700; text-align:center;">
                Diagnóstico de Ansiedade / Resultado: ${resp.summary}
            </div>
        `;
    }
    
    openModal("modalFormResponseView");
}

// ==========================================
// SERVICES CATALOG MANAGEMENT
// ==========================================

function renderServices() {
    const grid = document.getElementById("servicesGrid");
    grid.innerHTML = "";
    
    appState.services.forEach(serv => {
        grid.innerHTML += `
            <div class="service-card">
                <div class="service-header">
                    <div class="service-icon">
                        <i data-lucide="handshake"></i>
                    </div>
                    <span class="service-price">R$ ${serv.price}</span>
                </div>
                <h3 class="service-title">${serv.name}</h3>
                <p class="service-desc">${serv.description || 'Sem descrição cadastrada.'}</p>
                <div class="service-footer">
                    <div class="service-duration">
                        <i data-lucide="clock" style="width:14px;"></i> ${serv.duration} Minutos
                    </div>
                    <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem; border-color:var(--danger);" onclick="deleteService('${serv.id}')">Excluir</button>
                </div>
            </div>
        `;
    });
    lucide.createIcons();
}

function saveService(event) {
    event.preventDefault();
    
    const newService = {
        id: "s-" + Date.now(),
        name: document.getElementById("srvName").value.trim(),
        price: parseInt(document.getElementById("srvPrice").value, 10),
        duration: parseInt(document.getElementById("srvDuration").value, 10),
        description: document.getElementById("srvDesc").value.trim()
    };
    
    appState.services.push(newService);
    saveToStorage();
    
    closeModal("modalAddService");
    document.getElementById("formAddService").reset();
    
    renderServices();
    showToast("Serviço adicionado com sucesso!");
}

function deleteService(srvId) {
    if (!confirm("Excluir este tipo de serviço?")) return;
    
    appState.services = appState.services.filter(s => s.id !== srvId);
    saveToStorage();
    
    renderServices();
    showToast("Serviço removido.");
}

// ==========================================
// FINANCIAL LEDGER MANAGEMENT
// ==========================================

function renderFinancial() {
    // 1. Calculate Summary Widgets
    const nowMonth = new Date().getMonth(); // Simulating current month totals
    const paidTotal = appState.payments
        .filter(p => p.status === "pago")
        .reduce((sum, p) => sum + p.value, 0);
        
    const pendingTotal = appState.payments
        .filter(p => p.status === "pendente")
        .reduce((sum, p) => sum + p.value, 0);
        
    const delayedTotal = appState.payments
        .filter(p => p.status === "atrasado")
        .reduce((sum, p) => sum + p.value, 0);
        
    document.getElementById("finTotalReceived").innerText = `R$ ${paidTotal}`;
    document.getElementById("finTotalPending").innerText = `R$ ${pendingTotal}`;
    document.getElementById("finTotalDelayed").innerText = `R$ ${delayedTotal}`;

    // 2. Render Financial Ledger Table
    const tbody = document.getElementById("paymentsTableBody");
    tbody.innerHTML = "";
    
    const list = appState.payments.sort((a,b) => new Date(b.dueDate) - new Date(a.dueDate));
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 3rem 0;">Sem lançamentos no livro financeiro.</td></tr>`;
        return;
    }
    
    list.forEach(pay => {
        const client = appState.clients.find(c => c.id === pay.clientId);
        const clientName = client ? client.name : "Paciente Deletado";
        
        let statusBadge = "";
        let actionBtn = "";
        
        if (pay.status === "pago") {
            statusBadge = '<span class="badge badge-paid">Pago</span>';
            actionBtn = `<button class="btn btn-secondary btn-icon-only" style="border-color:var(--danger); color:var(--danger);" onclick="deletePayment('${pay.id}')" title="Excluir Cobrança"><i data-lucide="trash" style="width:12px;"></i></button>`;
        } else if (pay.status === "pendente") {
            statusBadge = '<span class="badge badge-pending">Pendente</span>';
            actionBtn = `
                <button class="btn btn-secondary" style="padding: 2px 6px; font-size:0.7rem; border-color:var(--primary); color:var(--primary);" onclick="setPaymentStatus('${pay.id}', 'pago')">Marcar Pago</button>
                <button class="btn btn-secondary btn-icon-only" style="border-color:var(--danger); color:var(--danger);" onclick="deletePayment('${pay.id}')" title="Excluir"><i data-lucide="trash" style="width:12px;"></i></button>
            `;
        } else if (pay.status === "atrasado") {
            statusBadge = '<span class="badge badge-delayed">Atrasado</span>';
            actionBtn = `
                <button class="btn btn-secondary" style="padding: 2px 6px; font-size:0.7rem; border-color:var(--primary); color:var(--primary);" onclick="setPaymentStatus('${pay.id}', 'pago')">Marcar Pago</button>
                <button class="btn btn-secondary btn-icon-only" style="border-color:var(--danger); color:var(--danger);" onclick="deletePayment('${pay.id}')" title="Excluir"><i data-lucide="trash" style="width:12px;"></i></button>
            `;
        }
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${clientName}</strong></td>
                <td>${pay.serviceName}</td>
                <td>${formatDate(pay.dueDate)}</td>
                <td>R$ ${pay.value}</td>
                <td>${statusBadge}</td>
                <td style="text-align: right; display:flex; gap:0.25rem; justify-content:flex-end;">
                    ${actionBtn}
                </td>
            </tr>
        `;
    });
    lucide.createIcons();
}

function savePayment(event) {
    event.preventDefault();
    
    const clientId = document.getElementById("payClient").value;
    const serviceSelect = document.getElementById("payService");
    const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text.split(" (R$")[0];
    
    const newPay = {
        id: "p-" + Date.now(),
        clientId: clientId,
        serviceName: serviceName,
        dueDate: document.getElementById("payDate").value,
        value: parseInt(document.getElementById("payValue").value, 10),
        status: document.getElementById("payStatus").value
    };
    
    appState.payments.push(newPay);
    saveToStorage();
    
    closeModal("modalAddPayment");
    document.getElementById("formAddPayment").reset();
    
    renderFinancial();
    showToast("Lançamento financeiro adicionado!");
}

function setPaymentStatus(payId, newStatus) {
    const pay = appState.payments.find(p => p.id === payId);
    if (!pay) return;
    
    pay.status = newStatus;
    saveToStorage();
    
    if (activeView === "financial") renderFinancial();
    else if (activeView === "clients") renderProfileFinancial();
    else if (activeView === "dashboard") renderDashboard();
    
    showToast(`Cobrança atualizada para status: ${newStatus.toUpperCase()}`);
}

function deletePayment(payId) {
    if (!confirm("Excluir este lançamento financeiro permanentemente?")) return;
    
    appState.payments = appState.payments.filter(p => p.id !== payId);
    saveToStorage();
    
    renderFinancial();
    showToast("Lançamento deletado.");
}

// ==========================================
// TASKS & KANBAN MANAGEMENT
// ==========================================

function renderTasks() {
    const cols = {
        todo: document.getElementById("col-todo"),
        inprogress: document.getElementById("col-inprogress"),
        done: document.getElementById("col-done")
    };
    
    // Clear Columns
    cols.todo.innerHTML = "";
    cols.inprogress.innerHTML = "";
    cols.done.innerHTML = "";
    
    const counts = { todo: 0, inprogress: 0, done: 0 };
    
    appState.tasks.forEach(task => {
        counts[task.status]++;
        
        const client = appState.clients.find(c => c.id === task.clientId);
        const clientLabel = client ? `<span class="task-tag">${client.name}</span>` : "";
        
        let priorityStyle = "background-color: var(--border-color); color: var(--text-muted);";
        if (task.priority === "Alta") priorityStyle = "background-color: var(--danger-light); color: var(--danger-text);";
        else if (task.priority === "Média") priorityStyle = "background-color: var(--warning-light); color: var(--warning-text);";
        
        let quickActions = "";
        if (task.status === "todo") {
            quickActions = `<button class="btn btn-secondary" style="padding: 2px 6px; font-size: 0.65rem;" onclick="moveTask('${task.id}', 'inprogress')">Mover →</button>`;
        } else if (task.status === "inprogress") {
            quickActions = `
                <button class="btn btn-secondary" style="padding: 2px 6px; font-size: 0.65rem;" onclick="moveTask('${task.id}', 'todo')">← Voltar</button>
                <button class="btn btn-secondary" style="padding: 2px 6px; font-size: 0.65rem; border-color:var(--primary); color:var(--primary);" onclick="moveTask('${task.id}', 'done')">Concluir ✓</button>
            `;
        } else if (task.status === "done") {
            quickActions = `<button class="btn btn-secondary" style="padding: 2px 6px; font-size: 0.65rem;" onclick="moveTask('${task.id}', 'inprogress')">← Reabrir</button>`;
        }
        
        const cardHTML = `
            <div class="task-card" draggable="true" ondragstart="handleDragStart(event, '${task.id}')">
                <div class="task-title">${task.title}</div>
                <div class="task-desc">${task.desc || ''}</div>
                <div class="task-meta" style="margin-bottom: 0.5rem;">
                    <span style="font-size:0.7rem; padding: 2px 6px; border-radius:4px; font-weight:700; ${priorityStyle}">${task.priority}</span>
                    ${clientLabel}
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; border-top: 1px solid var(--border-color); padding-top:0.5rem; margin-top:0.5rem;">
                    ${quickActions}
                    <button class="btn btn-secondary btn-icon-only" style="border:none; color:var(--danger); background:none; height:24px; width:24px;" onclick="deleteTask('${task.id}')" title="Excluir">
                        <i data-lucide="trash-2" style="width:12px;"></i>
                    </button>
                </div>
            </div>
        `;
        
        if (cols[task.status]) {
            cols[task.status].innerHTML += cardHTML;
        }
    });
    
    // Render column counts
    document.getElementById("count-todo").innerText = counts.todo;
    document.getElementById("count-inprogress").innerText = counts.inprogress;
    document.getElementById("count-done").innerText = counts.done;
    
    lucide.createIcons();
}

function saveTask(event) {
    event.preventDefault();
    
    const newTask = {
        id: "t-" + Date.now(),
        title: document.getElementById("tskTitle").value.trim(),
        desc: document.getElementById("tskDesc").value.trim(),
        priority: document.getElementById("tskPriority").value,
        status: "todo",
        clientId: document.getElementById("tskClient").value || null
    };
    
    appState.tasks.push(newTask);
    saveToStorage();
    
    closeModal("modalAddTask");
    document.getElementById("formAddTask").reset();
    
    renderTasks();
    showToast("Tarefa agendada!");
}

function moveTask(taskId, newStatus) {
    const task = appState.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    task.status = newStatus;
    saveToStorage();
    renderTasks();
}

function deleteTask(taskId) {
    if (!confirm("Remover esta tarefa?")) return;
    
    appState.tasks = appState.tasks.filter(t => t.id !== taskId);
    saveToStorage();
    renderTasks();
    showToast("Tarefa deletada.");
}

// ==========================================
// DRAG & DROP FOR KANBAN
// ==========================================

let draggedTaskId = null;

function handleDragStart(event, taskId) {
    draggedTaskId = taskId;
    event.dataTransfer.effectAllowed = "move";
}

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event, status) {
    event.preventDefault();
    if (!draggedTaskId) return;
    
    const task = appState.tasks.find(t => t.id === draggedTaskId);
    if (task) {
        task.status = status;
        saveToStorage();
        renderTasks();
    }
    draggedTaskId = null;
}

// ==========================================
// MODAL GENERAL CONTROLLERS
// ==========================================

function openModal(modalId) {
    const backdrop = document.getElementById(modalId);
    if (backdrop) {
        // Pre-load dynamic list fields inside forms if required
        if (modalId === "modalAddSession") {
            const select = document.getElementById("sesClient");
            select.innerHTML = "";
            appState.clients.forEach(c => {
                select.innerHTML += `<option value="${c.id}">${c.name}</option>`;
            });
            document.getElementById("sesDate").value = new Date().toISOString().split('T')[0];
        } else if (modalId === "modalAddPayment") {
            const clientSelect = document.getElementById("payClient");
            clientSelect.innerHTML = "";
            appState.clients.forEach(c => {
                clientSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
            });
            
            const serviceSelect = document.getElementById("payService");
            serviceSelect.innerHTML = "";
            appState.services.forEach(s => {
                serviceSelect.innerHTML += `<option value="${s.id}">${s.name} (R$ ${s.price})</option>`;
            });
            
            document.getElementById("payDate").value = new Date().toISOString().split('T')[0];
            document.getElementById("payValue").value = appState.services[0]?.price || 180;
            
            // Set up auto service-price autofill
            serviceSelect.onchange = function() {
                const selected = appState.services.find(s => s.id === this.value);
                if (selected) {
                    document.getElementById("payValue").value = selected.price;
                }
            };
        } else if (modalId === "modalAddTask") {
            const select = document.getElementById("tskClient");
            select.innerHTML = `<option value="">Sem vínculo</option>`;
            appState.clients.forEach(c => {
                select.innerHTML += `<option value="${c.id}">${c.name}</option>`;
            });
        }
        
        backdrop.classList.add("active");
    }
}

function closeModal(modalId) {
    const backdrop = document.getElementById(modalId);
    if (backdrop) {
        backdrop.classList.remove("active");
    }
}

function closeModalOnBackdrop(event) {
    if (event.target === event.currentTarget) {
        event.currentTarget.classList.remove("active");
    }
}

// ==========================================
// GENERAL HELPERS
// ==========================================

function formatDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function toggleTheme() {
    const html = document.body.parentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    html.setAttribute("data-theme", newTheme);
    
    // Update labels and icon
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");
    
    if (newTheme === "dark") {
        themeIcon.setAttribute("data-lucide", "sun");
        themeText.innerText = "Modo Claro";
    } else {
        themeIcon.setAttribute("data-lucide", "moon");
        themeText.innerText = "Modo Escuro";
    }
    
    lucide.createIcons();
    
    // Re-render chart since grid lines must adapt to the new theme colors
    if (activeView === "dashboard") {
        renderFinancialChart();
    }
}

function showToast(message) {
    // Create standard floating toast dynamically
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "2rem";
    toast.style.right = "2rem";
    toast.style.backgroundColor = "var(--primary)";
    toast.style.color = "white";
    toast.style.padding = "0.9rem 1.5rem";
    toast.style.borderRadius = "var(--radius-md)";
    toast.style.boxShadow = "var(--shadow-lg)";
    toast.style.zIndex = "10000";
    toast.style.fontSize = "0.875rem";
    toast.style.fontWeight = "700";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    
    toast.innerText = message;
    
    document.body.appendChild(toast);
    
    // Trigger transition
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 10);
    
    // Fade out after 3 seconds
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ==========================================
// SYSTEM INITS
// ==========================================

window.addEventListener("DOMContentLoaded", () => {
    initData();
    checkAuth();
    lucide.createIcons();
    
    // Initialize Dashboard automatically if logged in
    if (localStorage.getItem("mentesa_logged_in") === "true") {
        switchView("dashboard");
    }
});
