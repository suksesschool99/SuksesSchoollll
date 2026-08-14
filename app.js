/**
 * Dino Mandarin Adventure - Main App Controller & Link Generator
 * Navigasi Tab, Audio Controls, Fitur Pembuat Link Tugas Guru, & Parser Tugas Siswa
 */

// Global Function untuk membuka & menutup Modal Link Tugas (Bisa dipanggil via onclick & listener)
window.openTeacherLinkModal = function() {
  const modal = document.getElementById('teacher-link-modal');
  if (modal) {
    modal.classList.add('show');
    modal.style.display = 'flex';
    if (typeof window.updateGeneratorForm === 'function') {
      window.updateGeneratorForm();
    }
    if (window.dinoAudio && typeof window.dinoAudio.playSfx === 'function') {
      window.dinoAudio.playSfx('pop');
    }
  }
};

window.closeTeacherLinkModal = function() {
  const modal = document.getElementById('teacher-link-modal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Modul-Modul Utama Aplikasi
  if (typeof DinoStrokeWriter !== 'undefined') {
    window.strokeWriterApp = new DinoStrokeWriter();
  }
  if (typeof DinoMatchGame !== 'undefined') {
    window.matchGameApp = new DinoMatchGame();
  }
  if (typeof DinoQuiz !== 'undefined') {
    window.quizApp = new DinoQuiz();
  }

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
      if (window.dinoAudio) window.dinoAudio.playSfx('pop');
    });
  });

  // 3. Sound Controls
  const btnToggleSfx = document.getElementById('btn-toggle-sfx');
  const btnToggleVoice = document.getElementById('btn-toggle-voice');

  if (btnToggleSfx) {
    btnToggleSfx.addEventListener('click', () => {
      if (!window.dinoAudio) return;
      const isEnabled = window.dinoAudio.toggleSfx();
      btnToggleSfx.classList.toggle('muted', !isEnabled);
      btnToggleSfx.innerHTML = isEnabled ? '🔊 Efek Suara: ON' : '🔇 Efek Suara: OFF';
      if (isEnabled) window.dinoAudio.playSfx('pop');
    });
  }

  if (btnToggleVoice) {
    btnToggleVoice.addEventListener('click', () => {
      if (!window.dinoAudio) return;
      const isEnabled = window.dinoAudio.toggleVoice();
      btnToggleVoice.classList.toggle('muted', !isEnabled);
      btnToggleVoice.innerHTML = isEnabled ? '🗣️ Suara Mandarin: ON' : '🤐 Suara Mandarin: OFF';
      if (isEnabled) window.dinoAudio.speakMandarin('你好');
    });
  }

  // Touch & Click sound wake-up for Web Audio API
  document.body.addEventListener('click', () => {
    if (window.dinoAudio) window.dinoAudio.ensureAudioContext();
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

  // Buka & Tutup Modal via Event Listener
  if (btnOpenModal) {
    btnOpenModal.addEventListener('click', (e) => {
      e.preventDefault();
      window.openTeacherLinkModal();
    });
  }

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', (e) => {
      e.preventDefault();
      window.closeTeacherLinkModal();
    });
  }

  if (modalLink) {
    modalLink.addEventListener('click', (e) => {
      if (e.target === modalLink) window.closeTeacherLinkModal();
    });
  }

  // Penyesuaian form dinamis berdasarkan modul yang dipilih
  window.updateGeneratorForm = function() {
    if (!genModSelect || !genBookSelect) return;
    const selectedMod = genModSelect.value;
    const bookVal = genBookSelect.value;

    if (selectedMod === 'stroke') {
      // Modul 1: Guratan
      if (genBookGroup) genBookGroup.style.display = 'block';
      if (genUnitGroup) genUnitGroup.style.display = 'block';
      if (genTargetGroup) genTargetGroup.style.display = 'block';
      if (genTargetLabel) genTargetLabel.textContent = '4. Target Repetisi Tulis:';
      if (genTargetSelect) {
        genTargetSelect.innerHTML = `
          <option value="3" selected>3 Kali Tulis (Standard)</option>
          <option value="4">4 Kali Tulis (Tantangan)</option>
          <option value="5">5 Kali Tulis (Master Dino)</option>
        `;
      }
      if (genTaskName && (!genTaskName.value || genTaskName.value.startsWith('Tugas') || genTaskName.value.startsWith('Kuis'))) {
        genTaskName.value = `PR Han Yu ${bookVal} Unit ${genUnitSelect ? genUnitSelect.value : '1'} - Menulis Guratan`;
      }
    } else if (selectedMod === 'match') {
      // Modul 2: Game Cocok Gambar
      if (genBookGroup) genBookGroup.style.display = 'block';
      if (genUnitGroup) genUnitGroup.style.display = 'none';
      if (genTargetGroup) genTargetGroup.style.display = 'block';
      if (genTargetLabel) genTargetLabel.textContent = '4. Jumlah Pasangan Kartu:';
      if (genTargetSelect) {
        genTargetSelect.innerHTML = `
          <option value="4">Bayi Dino (4 Pasang)</option>
          <option value="6" selected>Pemburu Fosil (6 Pasang)</option>
          <option value="8">Raja Rimba (8 Pasang)</option>
        `;
      }
      if (genTaskName && (!genTaskName.value || genTaskName.value.startsWith('PR') || genTaskName.value.startsWith('Kuis'))) {
        genTaskName.value = `Tugas Game Cocokkan Han Yu ${bookVal}`;
      }
    } else if (selectedMod === 'quiz') {
      // Modul 3: Kuis Guratan & Kosakata
      if (genBookGroup) genBookGroup.style.display = 'none';
      if (genUnitGroup) genUnitGroup.style.display = 'none';
      if (genTargetGroup) genTargetGroup.style.display = 'block';
      if (genTargetLabel) genTargetLabel.textContent = '4. Kategori Kuis:';
      if (genTargetSelect) {
        genTargetSelect.innerHTML = `
          <option value="stroke-only" selected>✍️ Khusus Jumlah Guratan (1, 3, 4, 5, 6, 7, 11)</option>
          <option value="book-1">📖 Han Yu 1 (Dasar & Angka 1-10)</option>
          <option value="book-2">📖 Han Yu 2 (Dinosaurus & Tubuh)</option>
          <option value="book-3-12">📚 Han Yu 3 s/d 12 (Tingkat Lanjut)</option>
          <option value="all">🌟 Semua Soal Campuran</option>
        `;
      }
      if (genTaskName) genTaskName.value = `Kuis Jumlah Guratan & Kosakata Han Yu`;
    }

    generateLiveUrl();
  };

  function generateLiveUrl() {
    if (!genLinkOutput || !genModSelect) return;

    const baseUrl = window.location.href.split('?')[0];
    const mod = genModSelect.value;
    const book = genBookSelect ? genBookSelect.value : '1';
    const unit = genUnitSelect ? genUnitSelect.value : '1';
    const target = genTargetSelect ? genTargetSelect.value : '3';
    const taskTitle = encodeURIComponent((genTaskName ? genTaskName.value.trim() : '') || 'Tugas Siswa');

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
  if (genModSelect) genModSelect.addEventListener('change', window.updateGeneratorForm);
  if (genBookSelect) genBookSelect.addEventListener('change', () => {
    if (genModSelect.value === 'stroke') {
      if (genTaskName) genTaskName.value = `PR Han Yu ${genBookSelect.value} Unit ${genUnitSelect ? genUnitSelect.value : '1'} - Menulis Guratan`;
    } else if (genModSelect.value === 'match') {
      if (genTaskName) genTaskName.value = `Tugas Game Cocokkan Han Yu ${genBookSelect.value}`;
    }
    generateLiveUrl();
  });
  if (genUnitSelect) genUnitSelect.addEventListener('change', () => {
    if (genModSelect.value === 'stroke') {
      if (genTaskName) genTaskName.value = `PR Han Yu ${genBookSelect ? genBookSelect.value : '1'} Unit ${genUnitSelect.value} - Menulis Guratan`;
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
          if (window.dinoAudio) window.dinoAudio.playSfx('correct');
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
      const taskName = (genTaskName ? genTaskName.value.trim() : '') || 'Tugas Bahasa Mandarin';
      const link = genLinkOutput ? genLinkOutput.value : window.location.href;
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
      window.closeTeacherLinkModal();
      if (genLinkOutput && genLinkOutput.value) {
        window.location.href = genLinkOutput.value;
      }
    });
  }

  // ==========================================================================
  // 5. PARSER LINK TUGAS SISWA OTOMATIS (ON PAGE LOAD)
  // ==========================================================================
  // 5. PARSER LINK TUGAS SISWA OTOMATIS (ON PAGE LOAD) - KHUSUS MURID SD KELAS 2-3
  // ==========================================================================
  function parseStudentTaskUrl() {
    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    if (!mod) return; // Mode normal jika tanpa parameter

    // Aktifkan Mode Khusus Murid (Kids Focus Mode)
    document.body.classList.add('student-mode');

    const brandSub = document.querySelector('.brand-sub-title');
    if (brandSub) {
      brandSub.textContent = '🎒 Mode Latihan Khusus Siswa SD Kelas 2-3 🌿';
    }

    const taskTitle = decodeURIComponent(params.get('task') || params.get('title') || 'Tugas Mandiri Han Yu');
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

    // Set judul di sertifikat
    const certTitle = document.getElementById('cert-task-title');
    if (certTitle) certTitle.textContent = taskTitle;

    if (btnDismissTask) {
      btnDismissTask.innerHTML = 'Mulai Belajar 🦖';
      btnDismissTask.addEventListener('click', () => {
        banner.style.display = 'none';
      });
    }

    if (mod === 'stroke') {
      switchTab('module-stroke');
      if (bannerDesc) bannerDesc.textContent = `• Han Yu ${book} Unit ${unit} (Target: Tulis Setiap Karakter ${reps}x Sampai Menetas 🥚➔🦖)`;

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
      if (bannerDesc) bannerDesc.textContent = `• Game Mencocokkan Han Yu ${book} (${pairs} Pasang Kartu Dino)`;

      const matchBookSel = document.getElementById('match-book-select');
      if (matchBookSel) matchBookSel.value = book;

      setTimeout(() => {
        if (window.matchGameApp) {
          window.matchGameApp.currentBook = book;
          window.matchGameApp.pairsCount = pairs;
          document.querySelectorAll('.diff-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.getAttribute('data-pairs')) === pairs);
          });
          window.matchGameApp.startNewGame();
        }
      }, 200);

    } else if (mod === 'quiz') {
      switchTab('module-quiz');
      if (bannerDesc) bannerDesc.textContent = `• Kuis Jumlah Guratan & Kosakata Han Yu`;

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
