// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// Theme toggle (dark by default, remembered)
document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObserver.observe(el);
});

// Active nav link on scroll
const links = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => sectionObserver.observe(s));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== i18n: ID (default) / EN =====
const HTML_BLOCKS = {
  about: {
    id: document.querySelector('[data-i18n="about"]').innerHTML,
    en: `B.Eng. graduate in Telecommunication Engineering from <strong class="text-slate-900 dark:text-white">Telkom University</strong> (2022–2026, GPA 3.40) with interests in network infrastructure, systems analysis, <em>machine learning</em> and <em>speech processing</em>. Experienced in monitoring FTTH installations and COMBAT surveys at Telkom Infra, assisting Cyber Security &amp; Big Data practicums at MBC Lab, and leading student legislative oversight as Pimpinan I of DPA HMTT. My final project builds a voice-based student engagement detection system, from speaker verification to classification and API deployment.`
  },
  projdesc: {
    id: document.querySelector('[data-i18n="projdesc"]').innerHTML,
    en: `Designed and implemented an <em>end-to-end</em> audio processing system that automatically identifies speakers and measures student engagement during classroom interaction sessions.`
  }
};

// [English, Indonesian] pairs, matched against text nodes
const PAIRS = [
  ['About','Tentang'],['Skills','Keahlian'],['Project','Proyek'],['Experience','Pengalaman'],['Contact','Kontak'],
  ["Hello, I'm",'Halo, saya'],
  ['Telecommunication Engineering Graduate','Lulusan Teknik Telekomunikasi'],
  ['Network & Systems Analyst','Analis Jaringan & Sistem'],
  ['Data & AI Enthusiast','Peminat Data & AI'],
  ['“Bridging Telecommunication Networks with Data-Driven & AI Systems.”','“Menjembatani Jaringan Telekomunikasi dengan Sistem Berbasis Data & AI.”'],
  ['View Projects','Lihat Proyek'],['Contact Me','Hubungi Saya'],
  ['About Me','Tentang Saya'],['Technical Skills','Keahlian Teknis'],['Featured Project','Proyek Unggulan'],
  ['Experience & Leadership','Pengalaman & Kepemimpinan'],['Get In Touch','Mari Terhubung'],
  ['GPA, Telkom University','IPK, Telkom University'],
  ['Roles: Intern, Lab Assistant, Parliamentary Leader','Peran: Magang, Asisten Lab, Pimpinan Parlemen'],
  ['Network & Infra','Jaringan & Infrastruktur'],['Programming & AI','Pemrograman & AI'],['Tools & Platforms','Alat & Platform'],
  ['Fixed Broadband Systems','Sistem Fixed Broadband'],['STO Asset Audit','Audit Aset STO'],['COMBAT Survey','Survei COMBAT'],
  ['AI & Speech Processing','AI & Pemrosesan Suara'],['End-to-End System','Sistem End-to-End'],['Capstone','Tugas Akhir'],
  ['Voice Detection System for Analyzing Student Engagement in the Classroom','Sistem Deteksi Suara untuk Analisis Keterlibatan Mahasiswa di Kelas'],
  ['01 · Speaker Verification','01 · Verifikasi Pembicara'],['02 · Speech-to-Text','02 · Ucapan ke Teks'],
  ['03 · Classification','03 · Klasifikasi'],['MLP / LSTM + keyword lexicon weighting','MLP / LSTM + pembobotan leksikon kata kunci'],
  ['FastAPI inference backend','Backend inferensi FastAPI'],['Accuracy:','Akurasi:'],['View on GitHub →','Lihat di GitHub →'],
  ['Network & Infrastructure Engineering Intern','Magang Teknik Jaringan & Infrastruktur'],
  ['Practicum Assistant (Lab Assistant)','Asisten Praktikum (Asisten Lab)'],
  ['Monitored FTTH availability and installation from ODP to ONT.','Memantau ketersediaan dan instalasi FTTH dari ODP hingga ONT.'],
  ['Conducted field surveys for Cellular On Wheels (COMBAT) and physical asset audits at Sentral Telepon Otomat (STO) exchanges.','Survei lapangan Cellular On Wheels (COMBAT) dan audit aset fisik di Sentral Telepon Otomat (STO).'],
  ['Operated internal broadband management systems (KPRO, ACS, CIS, VALIN).','Mengoperasikan sistem pengelolaan broadband internal (KPRO, ACS, CIS, VALIN).'],
  ['Designed the workflow of an internal tracking tool to optimize asset monitoring.','Merancang alur kerja internal tracking tool untuk optimasi pemantauan aset.'],
  ['Guided students in technical practicum sessions and managed virtual environments using VMware.','Membimbing mahasiswa dalam sesi praktikum teknis dan mengelola lingkungan virtual menggunakan VMware.'],
  ['Managed technical evaluations and provided operational support for lab systems.','Mengelola evaluasi teknis dan memberikan dukungan operasional sistem laboratorium.'],
  ['Led parliamentary oversight of Commissions I, II, and III.','Memimpin pengawasan parlementer terhadap Komisi I, II, dan III.'],
  ["Orchestrated the amendment of HMTT's AD/ART (bylaws), successfully executing the organization's constitutional update after a delay of more than 2 years.",'Mengorkestrasi amandemen AD/ART HMTT, berhasil mengeksekusi pembaruan konstitusi organisasi setelah tertunda lebih dari 2 tahun.'],
  ["Open to opportunities in network engineering, systems analysis, and applied AI. Let's talk.",'Terbuka untuk peluang di bidang jaringan, analisis sistem, dan AI terapan. Mari berdiskusi.'],
  ['Email Me','Kirim Email'],
  ['Muhamad Fahri Muttaqin. All rights reserved.','Muhamad Fahri Muttaqin. Hak cipta dilindungi.'],
  ["Fresh Graduate 2026 · Open to opportunities","Fresh Graduate 2026 · Terbuka untuk peluang"],
  ["Download CV","Unduh CV"],
  ["Network Troubleshooting","Troubleshooting Jaringan"],
  ["Training & Languages","Pelatihan & Bahasa"],
  ["Indonesian · Native","Bahasa Indonesia · Native"],
  ["English · Basic","Inggris · Dasar"],
  ["Aug 2022 – Jul 2026","Agu 2022 – Jul 2026"],
  ["Bachelor of Telecommunication Engineering","S1 Teknik Telekomunikasi"],
  ["Telkom University · Bandung · GPA 3.40/4.0","Telkom University · Bandung · IPK 3.40/4.0"],
  ["Final project: “Audio-Based Student Engagement Detection System”, a voice detection and deep learning analysis system for evaluating classroom engagement.","Tugas akhir: “Audio-Based Student Engagement Detection System”, sistem deteksi suara dan analisis deep learning untuk menilai keterlibatan mahasiswa di kelas."],
  ["Jun 2025 – Aug 2025","Jun 2025 – Agu 2025"],
  ["Monitored field operations: new FTTH installations (ODP to ONT), aerial optical cable repairs, and site surveys for temporary cell tower (COMBAT) deployments.","Memantau operasional lapangan: instalasi FTTH baru (ODP hingga ONT), perbaikan kabel optik udara, dan survei lokasi menara seluler sementara (COMBAT)."],
  ["Assisted in Acceptance Testing of regional network infrastructure and conducted asset inventory audits across Central Office (STO) facilities.","Membantu Acceptance Testing infrastruktur jaringan regional dan melakukan audit inventaris aset di fasilitas Sentral Telepon Otomat (STO)."],
  ["Used Fixed Broadband operational systems (KPRO, ACS, CIS, VALIN) for network monitoring and supported routine maintenance of backup power units (generators, rectifiers, batteries).","Menggunakan sistem operasional Fixed Broadband (KPRO, ACS, CIS, VALIN) untuk pemantauan jaringan, serta mendukung perawatan rutin perangkat catu daya cadangan (genset, rectifier, baterai)."],
  ["Designed project flowcharts and database mockups for an internal tracking tool (SITRACK) and delivered final technical reports to division managers.","Merancang flowchart proyek dan mockup database untuk tracking tool internal (SITRACK), dan menyerahkan laporan teknis akhir kepada manajer divisi."],
  ["May 2025 – Mar 2026","Mei 2025 – Mar 2026"],
  ["Practicum Assistant, Practicum Management Division","Asisten Praktikum, Divisi Manajemen Praktikum"],
  ["Facilitated practical laboratory sessions on Cyber Security and Big Data for undergraduate students.","Memfasilitasi sesi praktikum Cyber Security dan Big Data untuk mahasiswa S1."],
  ["Guided students through hands-on technical exercises: virtual machine setup, database management, and network troubleshooting.","Membimbing mahasiswa dalam latihan teknis: setup lingkungan virtual machine, manajemen database, dan troubleshooting jaringan."],
  ["Managed daily laboratory operations, assistant shift scheduling, and technical infrastructure maintenance.","Mengelola operasional harian laboratorium, penjadwalan shift asisten, dan pemeliharaan infrastruktur teknis."],
  ["Supervised executive board operations, budget allocations, and performance metrics across divisions.","Mengawasi operasional badan eksekutif, alokasi anggaran, dan indikator kinerja lintas divisi."],
  ["Council Staff, DPA","Staf Dewan, DPA"],
  ["Audited executive board work programs and synthesized student feedback into quarterly evaluation reports.","Mengaudit program kerja badan eksekutif dan merangkum masukan mahasiswa menjadi laporan evaluasi triwulanan."],
  ["Committee Roles","Kepanitiaan"],
  ["Public Relations & Liaison Officer at GATRAK 2023: managed participant liaison, agenda, and communication for incoming engineering students.","Humas & Liaison Officer GATRAK 2023: mengelola komunikasi, agenda, dan penghubung peserta mahasiswa baru teknik."],
  ["Core Coordinator, Food & Serving Division at Asterisk Event HMTT: managed catering logistics, budget, and vendors.","Koordinator Inti Divisi Konsumsi Asterisk Event HMTT: mengelola logistik katering, anggaran, dan vendor."]
];
const norm = s => s.replace(/\s+/g, ' ').trim();
const LOOKUP = new Map();
PAIRS.forEach(([en, id]) => { LOOKUP.set(norm(en), { en, id }); LOOKUP.set(norm(id), { en, id }); });

function applyLang(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    if (n.parentElement.closest('script,style,[data-i18n]')) continue;
    const hit = LOOKUP.get(norm(n.nodeValue));
    if (!hit) continue;
    const lead = n.nodeValue.match(/^\s*/)[0], trail = n.nodeValue.match(/\s*$/)[0];
    n.nodeValue = lead + hit[lang] + trail;
  }
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = HTML_BLOCKS[el.dataset.i18n][lang]; });
  document.documentElement.lang = lang;
  document.getElementById('lang-toggle').textContent = lang === 'id' ? 'EN' : 'ID';
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

let currentLang = 'id';
try { currentLang = localStorage.getItem('lang') || 'id'; } catch (e) {}
applyLang(currentLang);
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  applyLang(currentLang);
});

// Scroll progress bar
const progress = document.getElementById('progress');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
};
addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
