/**
 * Dino Mandarin Adventure - Main App Controller & Link Generator
 * Navigasi Tab, Audio Controls, Fitur Pembuat Link Tugas Guru, & Parser Tugas Siswa
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Modul-Modul Utama Aplikasi
  window.strokeWriterApp = new DinoStrokeWriter();
  window.matchGameApp = new DinoMatchGame();
  window.quizApp = new DinoQuiz();

  // 2. Tab Switching Logic
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  const modules = document.querySelectorAll('.app-module-section');

  function switchTab(targetModuleId) {
    navTabs.forEach(t => {
      const isTarget = t.getAttribute('data-target') === targetModuleId;
      t.classList.toggle('active', isTarget);
    });

    modules.forEach(mod => {
      const isTarget = mod.id === targetModuleId;
      mod.classList.toggle('active', isTarget);
    });

    // Jika membuka modul Guratan, reload ukuran canvas
    if (targetModuleId === 'module-stroke' && window.strokeWriterApp) {
      setTimeout(() => window.strokeWriterApp.reloadWriter(), 150);
    }
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetModule = tab.getAttribute('data-target');
      switchTab(targetModule);
      window.dinoAudio.playSfx('pop');
    });
  });

  // 3. Sound Controls
  const btnToggleSfx = document.getElementById('btn-toggle-sfx');
  const btnToggleVoice = document.getElementById('btn-toggle-voice');

  if (btnToggleSfx) {
    btnToggleSfx.addEventListener('click', () => {
      const isEnabled = window.dinoAudio.toggleSfx();
      btnToggleSfx.classList.toggle('muted', !isEnabled);
      btnToggleSfx.innerHTML = isEnabled ? '🔊 Efek Suara: ON' : '🔇 Efek Suara: OFF';
      if (isEnabled) window.dinoAudio.playSfx('pop');
    });
  }

  if (btnToggleVoice) {
    btnToggleVoice.addEventListener('click', () => {
      const isEnabled = window.dinoAudio.toggleVoice();
      btnToggleVoice.classList.toggle('muted', !isEnabled);
      btnToggleVoice.innerHTML = isEnabled ? '🗣️ Suara Mandarin: ON' : '🤐 Suara Mandarin: OFF';
      if (isEnabled) window.dinoAudio.speakMandarin('你好');
    });
  }

  // Touch & Click sound wake-up for Web Audio API
  document.body.addEventListener('click', () => {
    window.dinoAudio.ensureAudioContext();
  }, { once: true });

  // ==========================================================================
  // 4. FITUR PEMBUAT LINK TUGAS BERTAHAP (TEACHER LINK GENERATOR)
  // ==========================================================================
  const modalLink = document.getElementById('teacher-link-modal');
  const btnOpenModal = document.getElementById('btn-open-link-generator');
  const btnCloseModal = document.getElementById('btn-close-link-modal');

  const genModSelect = document.getElementById('gen-module-select');
  const genBookSelect = document.getElementById('gen-book-select');
  const genUnitSelect = document.getElementById('gen-unit-select');
  const genTargetSelect = document.getElementById('gen-target-select');
  const genTargetLabel = document.getElementById('gen-target-label');
  const genTaskName = document.getElementById('gen-task-name');
  const genLinkOutput = document.getElementById('gen-link-output');

  const genBookGroup = document.getElementById('gen-book-group');
  const genUnitGroup = document.getElementById('gen-unit-group');
  const genTargetGroup = document.getElementById('gen-target-group');

  const btnCopyLink = document.getElementById('btn-copy-gen-link');
  const btnShareWA = document.getElementById('btn-share-whatsapp');
  const btnTestLink = document.getElementById('btn-test-gen-link');

  // Buka & Tutup Modal
  if (btnOpenModal && modalLink) {
    btnOpenModal.addEventListener('click', () => {
      modalLink.classList.add('show');
      updateGeneratorForm();
      window.dinoAudio.playSfx('pop');
    });
  }

  if (btnCloseModal && modalLink) {
    btnCloseModal.addEventListener('click', () => {
      modalLink.classList.remove('show');
    });
  }

  if (modalLink) {
    modalLink.addEventListener('click', (e) => {
      if (e.target === modalLink) modalLink.classList.remove('show');
    });
  }

  // Penyesuaian form dinamis berdasarkan modul yang dipilih
  function updateGeneratorForm() {
    const selectedMod = genModSelect.value;
    const bookVal = genBookSelect.value;

    if (selectedMod === 'stroke') {
      // Modul 1: Guratan
      genBookGroup.style.display = 'block';
      genUnitGroup.style.display = 'block';
      genTargetGroup.style.display = 'block';
      genTargetLabel.textContent = '4. Target Repetisi Tulis:';
      genTargetSelect.innerHTML = `
        <option value="3">3 Kali Tulis (Standard)</option>
        <option value="4">4 Kali Tulis (Tantangan)</option>
        <option value="5">5 Kali Tulis (Master Dino)</option>
      `;
      if (!genTaskName.value || genTaskName.value.startsWith('Tugas')) {
        genTaskName.value = `PR Han Yu ${bookVal} Unit ${genUnitSelect.value} - Menulis Guratan`;
      }
    } else if (selectedMod === 'match') {
      // Modul 2: Game Cocok Gambar
      genBookGroup.style.display = 'block';
      genUnitGroup.style.display = 'none';
      genTargetGroup.style.display = 'block';
      genTargetLabel.textContent = '4. Jumlah Pasangan Kartu:';
      genTargetSelect.innerHTML = `
        <option value="4">Bayi Dino (4 Pasang)</option>
        <option value="6" selected>Pemburu Fosil (6 Pasang)</option>
        <option value="8">Raja Rimba (8 Pasang)</option>
      `;
      if (!genTaskName.value || genTaskName.value.startsWith('PR')) {
        genTaskName.value = `Tugas Game Cocokkan Han Yu ${bookVal}`;
      }
    } else if (selectedMod === 'quiz') {
      // Modul 3: Kuis Guratan & Kosakata
      genBookGroup.style.display = 'none';
      genUnitGroup.style.display = 'none';
      genTargetGroup.style.display = 'block';
      genTargetLabel.textContent = '4. Kategori Kuis:';
      genTargetSelect.innerHTML = `
        <option value="stroke-only" selected>✍️ Khusus Jumlah Guratan (1, 3, 4, 5, 6, 7, 11)</option>
        <option value="book-1">📖 Han Yu 1 (Dasar & Angka 1-10)</option>
        <option value="book-2">📖 Han Yu 2 (Dinosaurus & Tubuh)</option>
        <option value="book-3-12">📚 Han Yu 3 s/d 12 (Tingkat Lanjut)</option>
        <option value="all">🌟 Semua Soal Campuran</option>
      `;
      genTaskName.value = `Kuis Jumlah Guratan & Kosakata Han Yu`;
    }

    generateLiveUrl();
  }

  function generateLiveUrl() {
    if (!genLinkOutput) return;

    const baseUrl = window.location.href.split('?')[0];
    const mod = genModSelect.value;
    const book = genBookSelect.value;
    const unit = genUnitSelect.value;
    const target = genTargetSelect.value;
    const taskTitle = encodeURIComponent(genTaskName.value.trim() || 'Tugas Siswa');

    let query = `?mod=${mod}&task=${taskTitle}`;

    if (mod === 'stroke') {
      query += `&book=${book}&unit=${unit}&reps=${target}`;
    } else if (mod === 'match') {
      query += `&book=${book}&pairs=${target}`;
    } else if (mod === 'quiz') {
      query += `&qmode=${target}`;
    }

    const fullUrl = baseUrl + query;
    genLinkOutput.value = fullUrl;
  }

  // Event Listeners Generator
  if (genModSelect) genModSelect.addEventListener('change', updateGeneratorForm);
  if (genBookSelect) genBookSelect.addEventListener('change', () => {
    // Sesuaikan nama tugas
    if (genModSelect.value === 'stroke') {
      genTaskName.value = `PR Han Yu ${genBookSelect.value} Unit ${genUnitSelect.value} - Menulis Guratan`;
    } else if (genModSelect.value === 'match') {
      genTaskName.value = `Tugas Game Cocokkan Han Yu ${genBookSelect.value}`;
    }
    generateLiveUrl();
  });
  if (genUnitSelect) genUnitSelect.addEventListener('change', () => {
    if (genModSelect.value === 'stroke') {
      genTaskName.value = `PR Han Yu ${genBookSelect.value} Unit ${genUnitSelect.value} - Menulis Guratan`;
    }
    generateLiveUrl();
  });
  if (genTargetSelect) genTargetSelect.addEventListener('change', generateLiveUrl);
  if (genTaskName) genTaskName.addEventListener('input', generateLiveUrl);

  // Salin Link ke Clipboard
  if (btnCopyLink) {
    btnCopyLink.addEventListener('click', () => {
      if (genLinkOutput) {
        genLinkOutput.select();
        navigator.clipboard.writeText(genLinkOutput.value).then(() => {
          btnCopyLink.innerHTML = '✅ Link Tersalin!';
          window.dinoAudio.playSfx('correct');
          setTimeout(() => {
            btnCopyLink.innerHTML = '<span>📋</span> Salin Link';
          }, 2000);
        }).catch(() => {
          document.execCommand('copy');
          btnCopyLink.innerHTML = '✅ Link Tersalin!';
          setTimeout(() => {
            btnCopyLink.innerHTML = '<span>📋</span> Salin Link';
          }, 2000);
        });
      }
    });
  }

  // Kirim ke WhatsApp
  if (btnShareWA) {
    btnShareWA.addEventListener('click', () => {
      const taskName = genTaskName.value.trim() || 'Tugas Bahasa Mandarin';
      const link = genLinkOutput.value;
      const message = `🦖 *DINO MANDARIN ADVENTURE - TUGAS SISWA*\n\n` +
                      `Halo semuanya! Silakan buka tautan berikut untuk mengerjakan:\n` +
                      `📌 *${taskName}*\n\n` +
                      `🔗 *Link Latihan:* ${link}\n\n` +
                      `Selamat belajar dan kumpulkan telur dinosaurusnya! 🦕✨`;
      
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }

  // Uji Buka Link Ini Sekarang
  if (btnTestLink) {
    btnTestLink.addEventListener('click', () => {
      if (modalLink) modalLink.classList.remove('show');
      window.location.href = genLinkOutput.value;
    });
  }

  // ==========================================================================
  // 5. PARSER LINK TUGAS SISWA OTOMATIS (ON PAGE LOAD)
  // ==========================================================================
  function parseStudentTaskUrl() {
    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    if (!mod) return; // Mode normal jika tanpa parameter

    const taskTitle = params.get('task') || params.get('title') || 'Tugas Mandiri';
    const book = parseInt(params.get('book')) || 1;
    const unit = parseInt(params.get('unit')) || 1;
    const reps = parseInt(params.get('reps')) || 3;
    const pairs = parseInt(params.get('pairs')) || 4;
    const qmode = params.get('qmode') || 'all';

    const banner = document.getElementById('student-task-banner');
    const bannerTitle = document.getElementById('task-banner-title');
    const bannerDesc = document.getElementById('task-banner-desc');
    const btnDismissTask = document.getElementById('btn-dismiss-task');

    if (banner) banner.style.display = 'block';
    if (bannerTitle) bannerTitle.textContent = taskTitle;

    if (btnDismissTask) {
      btnDismissTask.addEventListener('click', () => {
        banner.style.display = 'none';
      });
    }

    if (mod === 'stroke') {
      switchTab('module-stroke');
      if (bannerDesc) bannerDesc.textContent = `• Han Yu ${book} Unit ${unit} (Target: ${reps}x Tulis Telur Dino)`;

      // Set Dropdowns Modul 1
      const bookSel = document.getElementById('stroke-book-select');
      const unitSel = document.getElementById('stroke-unit-select');
      const repsSel = document.getElementById('stroke-reps-target');

      if (bookSel) bookSel.value = book;
      if (repsSel) repsSel.value = reps;

      setTimeout(() => {
        if (window.strokeWriterApp) {
          window.strokeWriterApp.targetReps = reps;
          if (unitSel) unitSel.value = unit;
          window.strokeWriterApp.loadBookUnit(book, unit);
        }
      }, 200);

    } else if (mod === 'match') {
      switchTab('module-match');
      if (bannerDesc) bannerDesc.textContent = `• Game Mencocokkan Han Yu ${book} (${pairs} Pasang Kartu)`;

      const matchBookSel = document.getElementById('match-book-select');
      if (matchBookSel) matchBookSel.value = book;

      setTimeout(() => {
        if (window.matchGameApp) {
          window.matchGameApp.currentBook = book;
          window.matchGameApp.pairsCount = pairs;
          // Set active button diff
          document.querySelectorAll('.diff-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.getAttribute('data-pairs')) === pairs);
          });
          window.matchGameApp.startNewGame();
        }
      }, 200);

    } else if (mod === 'quiz') {
      switchTab('module-quiz');
      if (bannerDesc) bannerDesc.textContent = `• Kuis Guratan & Kosakata Mandarin`;

      const quizFilterSel = document.getElementById('quiz-filter-select');
      if (quizFilterSel) quizFilterSel.value = qmode;

      setTimeout(() => {
        if (window.quizApp) {
          window.quizApp.currentFilter = qmode;
          window.quizApp.startQuiz();
        }
      }, 200);
    }
  }

  // Jalankan parser saat halaman dimuat
  parseStudentTaskUrl();
});
