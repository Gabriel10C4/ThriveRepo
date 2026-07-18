// ==============================
// Tabs principales: Login / Registro
// ==============================
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");
const loginSection = document.getElementById("loginSection");
const registerSection = document.getElementById("registerSection");

tabLogin.addEventListener("click", () => {
  loginSection.classList.remove("hidden");
  registerSection.classList.add("hidden");

  tabLogin.classList.add("bg-[#0077B6]", "text-white");
  tabLogin.classList.remove("text-gray-700");

  tabRegister.classList.remove("bg-[#0077B6]", "text-white");
  tabRegister.classList.add("text-gray-700");
});

tabRegister.addEventListener("click", () => {
  loginSection.classList.add("hidden");
  registerSection.classList.remove("hidden");

  tabRegister.classList.add("bg-[#0077B6]", "text-white");
  tabRegister.classList.remove("text-gray-700");

  tabLogin.classList.remove("bg-[#0077B6]", "text-white");
  tabLogin.classList.add("text-gray-700");
});

// ==============================
// Tabs de registro: Cliente / Emprendedor
// ==============================
const clientTab = document.getElementById("clientTab");
const entrepreneurTab = document.getElementById("entrepreneurTab");
const clientRegister = document.getElementById("clientRegister");
const entrepreneurRegister = document.getElementById("entrepreneurRegister");

clientTab.addEventListener("click", () => {
  clientRegister.classList.remove("hidden");
  entrepreneurRegister.classList.add("hidden");

  clientTab.classList.add("bg-[#00B4D8]", "text-white");
  clientTab.classList.remove("text-gray-700");

  entrepreneurTab.classList.remove("bg-[#00B4D8]", "text-white");
  entrepreneurTab.classList.add("text-gray-700");
});

entrepreneurTab.addEventListener("click", () => {
  clientRegister.classList.add("hidden");
  entrepreneurRegister.classList.remove("hidden");

  entrepreneurTab.classList.add("bg-[#00B4D8]", "text-white");
  entrepreneurTab.classList.remove("text-gray-700");

  clientTab.classList.remove("bg-[#00B4D8]", "text-white");
  clientTab.classList.add("text-gray-700");
});

// ==============================
// Pasos del emprendedor
// ==============================
const entrepreneurStep1 = document.getElementById("entrepreneurStep1");
const entrepreneurStep2 = document.getElementById("entrepreneurStep2");
const step1Indicator = document.getElementById("step1Indicator");
const step2Indicator = document.getElementById("step2Indicator");
const entrepreneurFormStep1 = document.getElementById("entrepreneurFormStep1");
const backStepBtn = document.getElementById("backStepBtn");

function nextEntrepreneurStep() {
  entrepreneurStep1.classList.add("hidden");
  entrepreneurStep2.classList.remove("hidden");

  step1Indicator.classList.remove("bg-[#0077B6]", "text-white");
  step1Indicator.classList.add("bg-gray-200", "text-gray-600");

  step2Indicator.classList.remove("bg-gray-200", "text-gray-600");
  step2Indicator.classList.add("bg-[#0077B6]", "text-white");
}

function prevEntrepreneurStep() {
  entrepreneurStep2.classList.add("hidden");
  entrepreneurStep1.classList.remove("hidden");

  step2Indicator.classList.remove("bg-[#0077B6]", "text-white");
  step2Indicator.classList.add("bg-gray-200", "text-gray-600");

  step1Indicator.classList.remove("bg-gray-200", "text-gray-600");
  step1Indicator.classList.add("bg-[#0077B6]", "text-white");
}

// Evento del formulario paso 1
entrepreneurFormStep1.addEventListener("submit", (event) => {
  event.preventDefault();
  nextEntrepreneurStep();
});

// Botón atrás del paso 2
backStepBtn.addEventListener("click", () => {
  prevEntrepreneurStep();
});
