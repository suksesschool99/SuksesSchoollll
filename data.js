/**
 * Dino Mandarin Adventure - Data Module
 * Kosakata Lengkap Per-Unit Buku PDF HAN YU 1 sampai HAN YU 12 (12 Buku x 10 Unit)
 * Dilengkapi Pinyin Berharakat, Arti Bahasa Indonesia, Jumlah Guratan, & Ilustrasi Vektor
 */

const DINO_DATA = {
  // Metadata Buku Han Yu 1 s/d Han Yu 12
  books: [
    { id: 1, title: 'Han Yu 1 (汉语 第一册)', desc: 'Angka, Alam Dasar, Anggota Tubuh, Sapaan, Keluarga & Arah' },
    { id: 2, title: 'Han Yu 2 (汉语 第二册)', desc: 'Waktu, Pakaian, Warna, Hewan, Buah-buahan & Sekolah' },
    { id: 3, title: 'Han Yu 3 (汉语 第三册)', desc: 'Ruang Kelas, Kegiatan Harian, Lokasi, Kebun Binatang & Belanja' },
    { id: 4, title: 'Han Yu 4 (汉语 第四册)', desc: 'Olahraga, Cuaca, 4 Musim, Transportasi, Supermarket & Liburan' },
    { id: 5, title: 'Han Yu 5 (汉语 第五册)', desc: 'Hobi, Memasak, Komunikasi, Museum, Lingkungan & Festival' },
    { id: 6, title: 'Han Yu 6 (汉语 第六册)', desc: 'Teknologi, Tempat Bersejarah, Antariksa, Fabel & Cita-cita' },
    { id: 7, title: 'Han Yu 7 (汉语 第七册)', desc: 'Cerita Idiom (成语), Asal Usul Hanzi & Budaya Kuliner' },
    { id: 8, title: 'Han Yu 8 (汉语 第八册)', desc: 'Geografi Tiongkok, Tokoh Bersejarah & 4 Penemuan Besar' },
    { id: 9, title: 'Han Yu 9 (汉语 第九册)', desc: 'Seni Tradisional (Kaligrafi, Opera) & Karya Sastra Klasik' },
    { id: 10, title: 'Han Yu 10 (汉语 第十册)', desc: 'Ekonomi, Jalur Sutra, Komunikasi Antarbudaya & Ekologi' },
    { id: 11, title: 'Han Yu 11 (汉语 第十一册)', desc: 'Filsafat Tiongkok, Sejarah & Inovasi Teknologi Masa Depan' },
    { id: 12, title: 'Han Yu 12 (汉语 第十二册)', desc: 'Aplikasi Bahasa Lanjutan, Pidato, Penulisan Esai & Wawasan Global' }
  ],

  // Metadata Judul Topik Unit Buku Han Yu 1 s/d Han Yu 12 (10 Unit Lengkap per Buku)
  unitTitles: {
    1: {
      1: 'Angka 1-10',
      2: 'Alam & Tubuh Dasar',
      3: 'Sapaan & Kata Ganti',
      4: 'Keluarga',
      5: 'Ukuran & Satuan',
      6: 'Arah & Posisi',
      7: 'Cuaca & Benda Alam',
      8: 'Benda Kelas & Rumah',
      9: 'Makanan & Minuman',
      10: 'Gerakan & Aktivitas'
    },
    2: {
      1: 'Waktu & Sekolah',
      2: 'Identitas Diri & Sapaan',
      3: 'Usia & Kelas',
      4: 'Anggota Tubuh',
      5: 'Pakaian & Warna',
      6: 'Hewan & Dinosaurus',
      7: 'Buah & Sayuran',
      8: 'Hari & Tempat',
      9: 'Aktivitas Sehari-hari',
      10: 'Transportasi & Liburan'
    },
    3: {
      1: 'Teman & Kelas',
      2: 'Alat Tulis & Ruangan',
      3: 'Jam & Waktu',
      4: 'Rumah & Kamar Tidur',
      5: 'Kebun Binatang',
      6: 'Profesi & Pekerjaan',
      7: 'Belanja & Uang',
      8: 'Cuaca & Suhu',
      9: 'Hobi & Musik',
      10: 'Restoran & Menu Makanan'
    },
    4: {
      1: 'Olahraga & Permainan Bola',
      2: 'Transportasi Kota',
      3: 'Empat Musim',
      4: 'Supermarket & Belanja',
      5: 'Kesehatan & Rumah Sakit',
      6: 'Pesta Ulang Tahun & Hadiah',
      7: 'Wisata & Liburan',
      8: 'Lingkungan Alam & Hutan',
      9: 'Surat & Komunikasi',
      10: 'Hewan Peliharaan'
    },
    5: {
      1: 'Kesenian & Bakat',
      2: 'Alat Elektronik & Media',
      3: 'Penghijauan & Pelestarian Alam',
      4: 'Festival Tradisional',
      5: 'Cerita Dongeng & Fabel',
      6: 'Memasak & Dapur',
      7: 'Museum & Peninggalan Sejarah',
      8: 'Sahabat Pena & Surat',
      9: 'Tata Krama & Kesantunan',
      10: 'Rencana Masa Depan & Cita-cita'
    },
    6: {
      1: 'Teknologi & Internet',
      2: 'Tembok Besar & Kota Kuno',
      3: 'Festival Perahu Naga',
      4: 'Eksplorasi Antariksa & Roket',
      5: 'Fabel Kuno & Hikmah',
      6: 'Kerajinan Tangan & Seni Kertas',
      7: 'Kesehatan & Kebersihan',
      8: 'Ekspedisi & Geografi',
      9: 'Profesi Masa Kini',
      10: 'Perjuangan & Kesuksesan'
    },
    7: {
      1: 'Cerita Idiom Chengyu (成语)',
      2: 'Asal Usul Karakter Hanzi',
      3: 'Budaya Kuliner & Teh Tiongkok',
      4: 'Arsitektur Tradisional Siheyuan',
      5: 'Jalur Sutra Kuno & Kafilah',
      6: 'Puisi Klasik Dinasti Tang',
      7: 'Alat Musik Tradisional (Guzheng, Erhu)',
      8: 'Bambu & Filosofi Keteguhan',
      9: 'Nilai Kekeluargaan & Budi Pekerti',
      10: 'Persahabatan Sejati & Harmoni'
    },
    8: {
      1: 'Sungai Besar Yangtze & Kuning',
      2: '4 Penemuan Besar Kuno Tiongkok',
      3: 'Pengobatan Herbal Tradisional TCM',
      4: 'Tahun Baru Imlek & Festival Musim Semi',
      5: 'Legenda Mitologi Kuno (Nuwa, Houyi)',
      6: 'Tokoh Pahlawan Sejarah',
      7: 'Seni Keramik & Porselen Biru Putih',
      8: 'Seni Bela Diri Wushu & Tai Chi',
      9: 'Astronomi Kuno & Kalender',
      10: 'Warisan Dunia UNESCO (Prajurit Terakota)'
    },
    9: {
      1: 'Seni Kaligrafi Shufa (Kuasa & Tinta)',
      2: 'Opera Tradisional Beijing (Jingju)',
      3: '4 Karya Sastra Utama Klasik',
      4: 'Lukisan Pemandangan Alam Shan Shui',
      5: 'Taman Klasik Suzhou & Paviliun',
      6: 'Tenun Sutra & Sulaman Indah',
      7: 'Filosofi Kuno Yin Yang & Lima Elemen',
      8: 'Petuah Bijak & Pepatah Kehidupan',
      9: 'Pesta Tradisi Budaya & Jamuan',
      10: 'Konservasi Fauna Langka (Panda & Bangau)'
    },
    10: {
      1: 'Ekonomi & Pasar Perdagangan Modern',
      2: 'Peduli Bumi & Kehidupan Rendah Karbon',
      3: 'Pertukaran Antarbudaya & Bahasa Global',
      4: 'Energi Bersih Terbarukan (Surya & Angin)',
      5: 'Transportasi Kereta Cepat Masa Depan',
      6: 'Tata Kota Hijau Ramah Lingkungan',
      7: 'Keanekaragaman Hayati & Cagar Alam',
      8: 'Teknologi Digital & Kecerdasan Buatan',
      9: 'Kerja Sama Internasional & Persahabatan',
      10: 'Pembangunan Berkelanjutan Generasi Maju'
    },
    11: {
      1: 'Filsafat Konfusius & Moral Kebajikan',
      2: 'Inovasi Sains Terdepan & Bioteknologi',
      3: 'Eksplorasi Laut Dalam & Kutub Bumi',
      4: 'Media Informasi & Komunikasi Digital',
      5: 'Hubungan Diplomatik Antarbangsa',
      6: 'Pengembangan Karakter & Ketangguhan',
      7: 'Manajemen Waktu & Produktivitas Belajar',
      8: 'Sastra & Puisi Kontemporer Modern',
      9: 'Wawasan Finansial Mandiri & Kewirausahaan',
      10: 'Kepemimpinan & Visi Pemuda Masa Depan'
    },
    12: {
      1: 'Seni Pidato & Retorika Bahasa Lanjutan',
      2: 'Penulisan Esai Kritis & Analisis',
      3: 'Wawasan Warga Global & Multikultural',
      4: 'Strategi Negosiasi & Komunikasi Efektif',
      5: 'Apresiasi Seni & Estetika Peradaban',
      6: 'Etika Digital & Keamanan Informasi',
      7: 'Studi Kasus Bisnis & Inovasi Kreatif',
      8: 'Mitigasi Perubahan Iklim Global',
      9: 'Transformasi Pendidikan & Sains Modern',
      10: 'Visi Indonesia-Tiongkok & Masa Depan Emas'
    }
  },

  // Daftar Kosakata Lengkap Terstruktur Per Buku (Han Yu 1 s/d 12) & Per Unit (Unit 1 s/d 10)
  vocabList: [
    // =========================================================================
    // HAN YU 1
    // =========================================================================
    // Unit 1: Angka 1-10
    { char: '一', pinyin: 'yī', meaning: 'Satu (1)', book: 1, unit: 1, strokes: 1, category: 'numbers', tip: 'Satu garis mendatar (横) dari kiri ke kanan.', svgId: 'num1' },
    { char: '二', pinyin: 'èr', meaning: 'Dua (2)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Dua garis mendatar, garis bawah dibuat lebih panjang.', svgId: 'num2' },
    { char: '三', pinyin: 'sān', meaning: 'Tiga (3)', book: 1, unit: 1, strokes: 3, category: 'numbers', tip: 'Tiga garis mendatar: atas pendek, tengah terpendek, bawah terpanjang.', svgId: 'num3' },
    { char: '四', pinyin: 'sì', meaning: 'Empat (4)', book: 1, unit: 1, strokes: 5, category: 'numbers', tip: 'Buat bingkai luar dulu, isi bagian dalam, lalu tutup bawahnya.', svgId: 'num4' },
    { char: '五', pinyin: 'wǔ', meaning: 'Lima (5)', book: 1, unit: 1, strokes: 4, category: 'numbers', tip: 'Melambangkan lima jari cakar dinosaurus yang kokoh!', svgId: 'num5' },
    { char: '六', pinyin: 'liù', meaning: 'Enam (6)', book: 1, unit: 1, strokes: 4, category: 'numbers', tip: 'Titik di atas disusul garis mendatar dan dua titik di bawah.', svgId: 'num6' },
    { char: '七', pinyin: 'qī', meaning: 'Tujuh (7)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Garis mendatar lalu garis tegak melengkung ke kanan (竖弯钩).', svgId: 'num7' },
    { char: '八', pinyin: 'bā', meaning: 'Delapan (8)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Sapuan kiri (撇) dan sapuan kanan (捺) terbuka seperti kaki dino.', svgId: 'num8' },
    { char: '九', pinyin: 'jiǔ', meaning: 'Sembilan (9)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Sapuan miring kiri disusul tekukan berlekuk (横折弯钩).', svgId: 'num9' },
    { char: '十', pinyin: 'shí', meaning: 'Sepuluh (10)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Garis mendatar disilangkan dengan garis tegak lurus (十).', svgId: 'num10' },

    // Unit 2: Alam & Tubuh Dasar
    { char: '人', pinyin: 'rén', meaning: 'Orang / Manusia', book: 1, unit: 2, strokes: 2, category: 'body', tip: 'Dua langkah: sapuan kiri (撇) lalu sapuan kanan (捺).', svgId: 'person' },
    { char: '口', pinyin: 'kǒu', meaning: 'Mulut', book: 1, unit: 2, strokes: 3, category: 'body', tip: 'Kotak mulut dino yang siap mengunyah daun atau berteriak ROAR!', svgId: 'mouth' },
    { char: '日', pinyin: 'rì', meaning: 'Matahari / Hari', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Kotak persegi panjang dengan garis horisontal di tengah.', svgId: 'sun' },
    { char: '月', pinyin: 'yuè', meaning: 'Bulan', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Bulan sabit yang bersinar di langit malam prasejarah.', svgId: 'moon' },
    { char: '山', pinyin: 'shān', meaning: 'Gunung', book: 1, unit: 2, strokes: 3, category: 'nature', tip: 'Tiga puncak gunung tinggi tempat habitat dinosaurus.', svgId: 'mountain' },
    { char: '水', pinyin: 'shuǐ', meaning: 'Air', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Mulai dari guratan tengah (竖钩), lalu bagian kiri dan kanan.', svgId: 'water' },
    { char: '木', pinyin: 'mù', meaning: 'Kayu / Pohon', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Garis mendatar, tegak lurus ke bawah, lalu sapuan kiri & kanan.', svgId: 'tree' },
    { char: '田', pinyin: 'tián', meaning: 'Sawah / Ladang', book: 1, unit: 2, strokes: 5, category: 'nature', tip: 'Kotak persegi yang dibagi menjadi empat petak di dalamnya.', svgId: 'field' },
    { char: '火', pinyin: 'huǒ', meaning: 'Api / Lahar', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Titik kiri dan kanan dulu, lalu karakter 人 di tengahnya.', svgId: 'volcano' },

    // Unit 3: Sapaan & Kata Ganti
    { char: '你', pinyin: 'nǐ', meaning: 'Kamu', book: 1, unit: 3, strokes: 7, category: 'basic', tip: 'Radikal orang (亻) di sebelah kiri disusul bagian kanan (尔).', svgId: 'friend' },
    { char: '我', pinyin: 'wǒ', meaning: 'Saya / Aku', book: 1, unit: 3, strokes: 7, category: 'basic', tip: 'Terdiri dari 7 guratan yang seimbang dan indah.', svgId: 'me' },
    { char: '他', pinyin: 'tā', meaning: 'Dia (Laki-laki)', book: 1, unit: 3, strokes: 5, category: 'basic', tip: 'Radikal orang (亻) di kiri dan karakter 也 di kanan.', svgId: 'he' },
    { char: '她', pinyin: 'tā', meaning: 'Dia (Perempuan)', book: 1, unit: 3, strokes: 6, category: 'basic', tip: 'Radikal wanita (女) di kiri dan karakter 也 di kanan.', svgId: 'she' },
    { char: '好', pinyin: 'hǎo', meaning: 'Baik / Bagus', book: 1, unit: 3, strokes: 6, category: 'basic', tip: 'Gabungan wanita (女) dan anak (子) menjadi sesuatu yang baik!', svgId: 'good' },
    { char: '见', pinyin: 'jiàn', meaning: 'Melihat / Bertemu', book: 1, unit: 3, strokes: 4, category: 'basic', tip: 'Menyerupai mata dan kaki untuk berjalan bertemu teman.', svgId: 'see' },

    // Unit 4: Keluarga
    { char: '爸', pinyin: 'bà', meaning: 'Ayah', book: 1, unit: 4, strokes: 8, category: 'family', tip: 'Bagian atas radikal ayah (父) dan bagian bawah (巴).', svgId: 'father' },
    { char: '妈', pinyin: 'mā', meaning: 'Ibu', book: 1, unit: 4, strokes: 6, category: 'family', tip: 'Radikal wanita (女) di kiri dan kuda (马) sebagai pelafalan.', svgId: 'mother' },
    { char: '哥', pinyin: 'gē', meaning: 'Kakak Laki-laki', book: 1, unit: 4, strokes: 10, category: 'family', tip: 'Dua bentuk 可 yang disusun bertumpuk dari atas ke bawah.', svgId: 'brother' },
    { char: '姐', pinyin: 'jiě', meaning: 'Kakak Perempuan', book: 1, unit: 4, strokes: 8, category: 'family', tip: 'Radikal wanita (女) di sebelah kiri disusul 且 di kanan.', svgId: 'sister' },
    { char: '弟', pinyin: 'dì', meaning: 'Adik Laki-laki', book: 1, unit: 4, strokes: 7, category: 'family', tip: 'Titik dan garis atas dulu, lalu lekukan berulang di bawahnya.', svgId: 'younger_bro' },
    { char: '妹', pinyin: 'mèi', meaning: 'Adik Perempuan', book: 1, unit: 4, strokes: 8, category: 'family', tip: 'Radikal wanita (女) di kiri dan 未 di sebelah kanan.', svgId: 'younger_sis' },
    { char: '家', pinyin: 'jiā', meaning: 'Rumah / Keluarga', book: 1, unit: 4, strokes: 10, category: 'family', tip: 'Atap rumah (宀) di atas melindungi seluruh keluarga di bawah!', svgId: 'home' },

    // Unit 5: Ukuran & Satuan
    { char: '大', pinyin: 'dà', meaning: 'Besar', book: 1, unit: 5, strokes: 3, category: 'size', tip: 'Seperti Dino T-Rex yang membentangkan tangannya lebar-lebar!', svgId: 'big' },
    { char: '小', pinyin: 'xiǎo', meaning: 'Kecil', book: 1, unit: 5, strokes: 3, category: 'size', tip: 'Guratan tengah (竖钩) dibuat dulu, lalu titik kiri dan titik kanan.', svgId: 'small' },
    { char: '多', pinyin: 'duō', meaning: 'Banyak', book: 1, unit: 5, strokes: 6, category: 'size', tip: 'Dua karakter 夕 (malam/bulan) yang bertumpuk atas-bawah.', svgId: 'many' },
    { char: '少', pinyin: 'shǎo', meaning: 'Sedikit', book: 1, unit: 5, strokes: 4, category: 'size', tip: 'Bentuk 小 dengan tambahan sapuan panjang miring ke kiri.', svgId: 'few' },
    { char: '头', pinyin: 'tóu', meaning: 'Kepala / Ekor (Satuan Hewan Besar)', book: 1, unit: 5, strokes: 5, category: 'body', tip: 'Dua titik atas, garis mendatar, sapuan kiri, dan titik kanan.', svgId: 'head' },
    { char: '只', pinyin: 'zhī', meaning: 'Ekor (Satuan Hewan Kecil)', book: 1, unit: 5, strokes: 5, category: 'basic', tip: 'Kotak 口 di atas disusul sapuan kiri (撇) dan titik kanan (点).', svgId: 'unit_animal' },
    { char: '个', pinyin: 'gè', meaning: 'Buah / Orang (Satuan Umum)', book: 1, unit: 5, strokes: 3, category: 'basic', tip: 'Sapuan kiri, sapuan kanan seperti payung, lalu garis tegak lurus.', svgId: 'unit_general' },

    // Unit 6: Arah & Posisi
    { char: '上', pinyin: 'shàng', meaning: 'Atas / Naik', book: 1, unit: 6, strokes: 3, category: 'direction', tip: 'Garis tegak, garis pendek di kanan, dan garis mendatar panjang di dasar.', svgId: 'up' },
    { char: '下', pinyin: 'xià', meaning: 'Bawah / Turun', book: 1, unit: 6, strokes: 3, category: 'direction', tip: 'Garis mendatar panjang di atas, garis tegak, lalu titik di kanan.', svgId: 'down' },
    { char: '左', pinyin: 'zuǒ', meaning: 'Kiri', book: 1, unit: 6, strokes: 5, category: 'direction', tip: 'Garis mendatar, sapuan kiri panjang, lalu karakter 工 di bawahnya.', svgId: 'left' },
    { char: '右', pinyin: 'yòu', meaning: 'Kanan', book: 1, unit: 6, strokes: 5, category: 'direction', tip: 'Garis mendatar, sapuan kiri panjang, lalu kotak 口 di bawahnya.', svgId: 'right' },
    { char: '中', pinyin: 'zhōng', meaning: 'Tengah / Pusat', book: 1, unit: 6, strokes: 4, category: 'direction', tip: 'Kotak 口 di tengah yang ditembus garis vertikal tegak lurus.', svgId: 'center' },

    // Unit 7: Cuaca & Benda Alam
    { char: '天', pinyin: 'tiān', meaning: 'Langit / Hari', book: 1, unit: 7, strokes: 4, category: 'nature', tip: 'Garis mendatar atas pendek, garis bawah panjang, lalu kaki 人.', svgId: 'sky' },
    { char: '地', pinyin: 'dì', meaning: 'Bumi / Tanah', book: 1, unit: 7, strokes: 6, category: 'nature', tip: 'Radikal tanah (土) di kiri dan 也 di sebelah kanan.', svgId: 'earth' },
    { char: '雨', pinyin: 'yǔ', meaning: 'Hujan', book: 1, unit: 7, strokes: 8, category: 'nature', tip: 'Atap langit di atas meneteskan 4 butir air hujan di dalamnya.', svgId: 'rain' },
    { char: '风', pinyin: 'fēng', meaning: 'Angin', book: 1, unit: 7, strokes: 4, category: 'nature', tip: 'Lengkungan bingkai luar seperti angin berhembus kencang.', svgId: 'wind' },
    { char: '云', pinyin: 'yún', meaning: 'Awan', book: 1, unit: 7, strokes: 4, category: 'nature', tip: 'Dua garis mendatar lalu tekukan melengkung seperti gumpalan awan.', svgId: 'cloud' },
    { char: '雪', pinyin: 'xuě', meaning: 'Salju', book: 1, unit: 7, strokes: 11, category: 'nature', tip: 'Radikal hujan (雨) di atas disusul karakter 山 atau sapuan di bawah.', svgId: 'snow' },

    // Unit 8: Benda Kelas & Rumah
    { char: '门', pinyin: 'mén', meaning: 'Pintu', book: 1, unit: 8, strokes: 3, category: 'object', tip: 'Bentuk daun pintu sederhana dengan 3 guratan ringkas.', svgId: 'door' },
    { char: '窗', pinyin: 'chuāng', meaning: 'Jendela', book: 1, unit: 8, strokes: 12, category: 'object', tip: 'Atap lubang (穴) di atas dengan bingkai jendela di bawah.', svgId: 'window' },
    { char: '桌', pinyin: 'zhuō', meaning: 'Meja', book: 1, unit: 8, strokes: 10, category: 'object', tip: 'Bagian atas 卜, 日 di tengah, dan kayu (木) sebagai kaki meja.', svgId: 'desk' },
    { char: '椅', pinyin: 'yǐ', meaning: 'Kursi', book: 1, unit: 8, strokes: 12, category: 'object', tip: 'Radikal kayu (木) di kiri dan 奇 di sebelah kanan.', svgId: 'chair' },
    { char: '书', pinyin: 'shū', meaning: 'Buku', book: 1, unit: 8, strokes: 4, category: 'object', tip: 'Buku catatan dino yang berisi 4 guratan mudah diingat!', svgId: 'book' },
    { char: '笔', pinyin: 'bǐ', meaning: 'Pena / Pensil', book: 1, unit: 8, strokes: 10, category: 'object', tip: 'Batang bambu (竹) di bagian atas dan bulu kuas (毛) di bawah.', svgId: 'pencil' },

    // Unit 9: Makanan & Minuman
    { char: '吃', pinyin: 'chī', meaning: 'Makan', book: 1, unit: 9, strokes: 6, category: 'food', tip: 'Radikal mulut (口) di kiri dan 乞 di sebelah kanan.', svgId: 'eat' },
    { char: '喝', pinyin: 'hē', meaning: 'Minum', book: 1, unit: 9, strokes: 12, category: 'food', tip: 'Radikal mulut (口) di kiri disusul 日 dan 匃 di kanan.', svgId: 'drink' },
    { char: '饭', pinyin: 'fàn', meaning: 'Nasi / Makanan', book: 1, unit: 9, strokes: 7, category: 'food', tip: 'Radikal makanan (饣) di kiri dan 反 di sebelah kanan.', svgId: 'rice' },
    { char: '茶', pinyin: 'chá', meaning: 'Teh', book: 1, unit: 9, strokes: 9, category: 'food', tip: 'Daun teh (艹) di atas, 人 di tengah, dan kayu (木) di bawah.', svgId: 'tea' },
    { char: '果', pinyin: 'guǒ', meaning: 'Buah', book: 1, unit: 9, strokes: 8, category: 'food', tip: 'Bentuk buah bulat (日) di atas pohon kayu (木).', svgId: 'fruit' },

    // Unit 10: Gerakan & Aktivitas
    { char: '走', pinyin: 'zǒu', meaning: 'Berjalan', book: 1, unit: 10, strokes: 7, category: 'action', tip: 'Bagian atas 土 dan bagian bawah sapuan kaki melangkah.', svgId: 'walk' },
    { char: '跑', pinyin: 'pǎo', meaning: 'Berlari', book: 1, unit: 10, strokes: 12, category: 'action', tip: 'Radikal kaki (足) di kiri dan 包 di sebelah kanan.', svgId: 'run' },
    { char: '跳', pinyin: 'tiào', meaning: 'Melompat', book: 1, unit: 10, strokes: 13, category: 'action', tip: 'Radikal kaki (足) di kiri dan 兆 di sebelah kanan.', svgId: 'jump' },
    { char: '看', pinyin: 'kàn', meaning: 'Melihat', book: 1, unit: 10, strokes: 9, category: 'action', tip: 'Tangan (手) memayungi mata (目) saat memandang jauh.', svgId: 'look' },
    { char: '听', pinyin: 'tīng', meaning: 'Mendengar', book: 1, unit: 10, strokes: 7, category: 'action', tip: 'Radikal mulut (口) di kiri dan 斤 di sebelah kanan.', svgId: 'listen' },
    { char: '说', pinyin: 'shuō', meaning: 'Berbicara', book: 1, unit: 10, strokes: 9, category: 'action', tip: 'Radikal bahasa (讠) di kiri dan 兑 di sebelah kanan.', svgId: 'speak' },

    // =========================================================================
    // HAN YU 2
    // =========================================================================
    // Unit 1: Waktu & Sekolah
    { char: '早', pinyin: 'zǎo', meaning: 'Pagi / Awal', book: 2, unit: 1, strokes: 6, category: 'time', tip: 'Matahari (日) baru terbit di atas angka sepuluh (十).', svgId: 'morning' },
    { char: '晚', pinyin: 'wǎn', meaning: 'Malam / Terlambat', book: 2, unit: 1, strokes: 11, category: 'time', tip: 'Matahari (日) di kiri dan 免 di sebelah kanan.', svgId: 'night' },
    { char: '老', pinyin: 'lǎo', meaning: 'Tua / Pengajar', book: 2, unit: 1, strokes: 6, category: 'school', tip: 'Guru dino yang bijaksana dan dihormati!', svgId: 'old' },
    { char: '师', pinyin: 'shī', meaning: 'Guru / Ahli', book: 2, unit: 1, strokes: 6, category: 'school', tip: 'Bagian dari kata 老师 (lǎoshī) = Guru.', svgId: 'teacher' },

    // Unit 2: Identitas Diri & Sapaan
    { char: '名', pinyin: 'míng', meaning: 'Nama', book: 2, unit: 2, strokes: 6, category: 'basic', tip: 'Bulan (夕) di atas mulut (口) untuk menyebutkan nama.', svgId: 'name' },
    { char: '字', pinyin: 'zì', meaning: 'Karakter Hanzi / Tulisan', book: 2, unit: 2, strokes: 6, category: 'basic', tip: 'Atap rumah (宀) melindungi anak (子) yang tekun belajar.', svgId: 'character' },
    { char: '叫', pinyin: 'jiào', meaning: 'Dipanggil / Bernama', book: 2, unit: 2, strokes: 5, category: 'basic', tip: 'Mulut (口) berseru memanggil teman dino!', svgId: 'call' },
    { char: '是', pinyin: 'shì', meaning: 'Adalah / Benar / Ya', book: 2, unit: 2, strokes: 9, category: 'basic', tip: 'Matahari (日) di atas dan 正 di bawahnya.', svgId: 'is' },
    { char: '生', pinyin: 'shēng', meaning: 'Murid / Tumbuh / Lahir', book: 2, unit: 2, strokes: 5, category: 'school', tip: 'Tanaman kecil bertunas tumbuh mekar dari tanah.', svgId: 'student' },

    // Unit 3: Usia & Kelas
    { char: '岁', pinyin: 'suì', meaning: 'Tahun Usia / Umur', book: 2, unit: 3, strokes: 6, category: 'time', tip: 'Gunung (山) di atas dan 夕 di sebelah bawah.', svgId: 'age' },
    { char: '几', pinyin: 'jǐ', meaning: 'Berapa (jumlah kecil)', book: 2, unit: 3, strokes: 2, category: 'basic', tip: 'Hanya 2 guratan melengkung yang ringkas.', svgId: 'how_many' },
    { char: '年', pinyin: 'nián', meaning: 'Tahun', book: 2, unit: 3, strokes: 6, category: 'time', tip: 'Enam guratan teratur untuk merayakan tahun baru!', svgId: 'year' },

    // Unit 4: Anggota Tubuh
    { char: '眼', pinyin: 'yǎn', meaning: 'Mata', book: 2, unit: 4, strokes: 11, category: 'body', tip: 'Radikal mata (目) di kiri disusul 艮 di sebelah kanan.', svgId: 'eye' },
    { char: '耳', pinyin: 'ěr', meaning: 'Telinga', book: 2, unit: 4, strokes: 6, category: 'body', tip: 'Bentuk daun telinga dino yang peka mendengar suara!', svgId: 'ear' },
    { char: '鼻', pinyin: 'bí', meaning: 'Hidung', book: 2, unit: 4, strokes: 14, category: 'body', tip: 'Karakter 14 guratan melambangkan hidung mancung.', svgId: 'nose' },
    { char: '手', pinyin: 'shǒu', meaning: 'Tangan', book: 2, unit: 4, strokes: 4, category: 'body', tip: 'Empat guratan seperti telapak dan cakar dino yang kuat.', svgId: 'hand' },
    { char: '长', pinyin: 'cháng', meaning: 'Panjang', book: 2, unit: 4, strokes: 4, category: 'size', tip: 'Seperti leher dinosaurus Brachiosaurus yang sangat panjang!', svgId: 'long' },

    // Unit 5: Pakaian & Warna
    { char: '衣', pinyin: 'yī', meaning: 'Pakaian / Baju', book: 2, unit: 5, strokes: 6, category: 'clothes', tip: 'Bentuk kerah dan lipatan mantel baju yang hangat.', svgId: 'clothes' },
    { char: '红', pinyin: 'hóng', meaning: 'Merah', book: 2, unit: 5, strokes: 6, category: 'color', tip: 'Radikal sutra (纟) di kiri dan 工 di sebelah kanan.', svgId: 'red' },
    { char: '黄', pinyin: 'huáng', meaning: 'Kuning', book: 2, unit: 5, strokes: 11, category: 'color', tip: 'Warna kuning cerah seperti telur dan matahari pagi.', svgId: 'yellow' },
    { char: '蓝', pinyin: 'lán', meaning: 'Biru', book: 2, unit: 5, strokes: 13, category: 'color', tip: 'Warna biru cerah seperti langit laut prasejarah.', svgId: 'blue' },
    { char: '绿', pinyin: 'lǜ', meaning: 'Hijau', book: 2, unit: 5, strokes: 11, category: 'color', tip: 'Warna hijau daun segar makanan dinosaurus herbivora!', svgId: 'green' },
    { char: '白', pinyin: 'bái', meaning: 'Putih', book: 2, unit: 5, strokes: 5, category: 'color', tip: 'Titik sapuan di atas disusul kotak 日 yang bersinar putih.', svgId: 'white' },

    // Unit 6: Hewan Populer & Dinosaurus
    { char: '龙', pinyin: 'lóng', meaning: 'Naga / Dinosaurus', book: 2, unit: 6, strokes: 5, category: 'animals', tip: 'Karakter naga purba 5 guratan dengan ekor melengkung gagah!', svgId: 'dino' },
    { char: '蛋', pinyin: 'dàn', meaning: 'Telur', book: 2, unit: 6, strokes: 11, category: 'animals', tip: 'Telur dinosaurus 11 guratan yang siap menetas!', svgId: 'egg' },
    { char: '鸟', pinyin: 'niǎo', meaning: 'Burung / Pterodactyl', book: 2, unit: 6, strokes: 5, category: 'animals', tip: 'Menyerupai burung purba yang membentangkan sayap lebar.', svgId: 'bird' },
    { char: '鱼', pinyin: 'yú', meaning: 'Ikan', book: 2, unit: 6, strokes: 8, category: 'animals', tip: 'Kepala ikan, badan bersisik, dan ekor berenang di danau.', svgId: 'fish' },
    { char: '猫', pinyin: 'māo', meaning: 'Kucing', book: 2, unit: 6, strokes: 11, category: 'animals', tip: 'Radikal hewan (犭) di kiri dan 苗 di sebelah kanan.', svgId: 'cat' },
    { char: '狗', pinyin: 'gǒu', meaning: 'Anjing', book: 2, unit: 6, strokes: 8, category: 'animals', tip: 'Radikal hewan (犭) di kiri dan 句 di sebelah kanan.', svgId: 'dog' },
    { char: '象', pinyin: 'xiàng', meaning: 'Gajah / Mammoth', book: 2, unit: 6, strokes: 11, category: 'animals', tip: 'Menyerupai belalai dan tubuh gajah raksasa purba.', svgId: 'elephant' },

    // Unit 7: Buah-buahan & Sayuran
    { char: '苹', pinyin: 'píng', meaning: 'Apel (苹果)', book: 2, unit: 7, strokes: 8, category: 'food', tip: 'Radikal tanaman (艹) di atas dan 平 di bawahnya.', svgId: 'apple' },
    { char: '蕉', pinyin: 'jiāo', meaning: 'Pisang (香蕉)', book: 2, unit: 7, strokes: 15, category: 'food', tip: 'Radikal tanaman (艹) di atas dan 焦 di bawahnya.', svgId: 'banana' },
    { char: '瓜', pinyin: 'guā', meaning: 'Semangka / Melon', book: 2, unit: 7, strokes: 5, category: 'food', tip: 'Bentuk buah manis yang menggelantung pada sulur rambat.', svgId: 'watermelon' },
    { char: '菜', pinyin: 'cài', meaning: 'Sayur / Masakan', book: 2, unit: 7, strokes: 11, category: 'food', tip: 'Radikal tanaman (艹) di atas dan 采 di bawahnya.', svgId: 'vegetable' },

    // Unit 8: Hari & Tempat
    { char: '期', pinyin: 'qī', meaning: 'Periode / Minggu (星期)', book: 2, unit: 8, strokes: 12, category: 'time', tip: 'Karakter 其 di sebelah kiri dan bulan (月) di kanan.', svgId: 'calendar' },
    { char: '今', pinyin: 'jīn', meaning: 'Sekarang / Hari Ini', book: 2, unit: 8, strokes: 4, category: 'time', tip: 'Atap payung 人 di atas dan sapuan garis mendatar di bawah.', svgId: 'today' },
    { char: '明', pinyin: 'míng', meaning: 'Terang / Besok', book: 2, unit: 8, strokes: 8, category: 'time', tip: 'Matahari (日) dan bulan (月) bersama memancarkan cahaya terang.', svgId: 'tomorrow' },
    { char: '校', pinyin: 'xiào', meaning: 'Sekolah (学校)', book: 2, unit: 8, strokes: 10, category: 'school', tip: 'Radikal kayu (木) di kiri dan 交 di sebelah kanan.', svgId: 'school' },

    // Unit 9: Aktivitas Sehari-hari
    { char: '起', pinyin: 'qǐ', meaning: 'Bangun / Mulai (起床)', book: 2, unit: 9, strokes: 10, category: 'action', tip: 'Berjalan (走) di kiri dan 已 di kanan.', svgId: 'wake' },
    { char: '睡', pinyin: 'shuì', meaning: 'Tidur (睡觉)', book: 2, unit: 9, strokes: 13, category: 'action', tip: 'Radikal mata (目) di kiri dan 垂 di sebelah kanan.', svgId: 'sleep' },
    { char: '玩', pinyin: 'wán', meaning: 'Bermain', book: 2, unit: 9, strokes: 8, category: 'action', tip: 'Radikal permata (王) di kiri dan 元 di kanan.', svgId: 'play' },
    { char: '洗', pinyin: 'xǐ', meaning: 'Mencuci (洗手)', book: 2, unit: 9, strokes: 9, category: 'action', tip: 'Radikal air (氵) di kiri dan 先 di kanan.', svgId: 'wash' },

    // Unit 10: Transportasi & Liburan
    { char: '车', pinyin: 'chē', meaning: 'Mobil / Kendaraan', book: 2, unit: 10, strokes: 4, category: 'transport', tip: 'Bentuk roda dan gandar gerobak kendaraan.', svgId: 'car' },
    { char: '船', pinyin: 'chuán', meaning: 'Kapal / Perahu', book: 2, unit: 10, strokes: 11, category: 'transport', tip: 'Radikal perahu (舟) di kiri dan 几, 口 di kanan.', svgId: 'boat' },
    { char: '飞', pinyin: 'fēi', meaning: 'Terbang (飞机)', book: 2, unit: 10, strokes: 3, category: 'transport', tip: 'Menyerupai sayap burung terbang membumbung tinggi.', svgId: 'fly' },
    { char: '骑', pinyin: 'qí', meaning: 'Mengendarai / Menunggang', book: 2, unit: 10, strokes: 11, category: 'transport', tip: 'Kuda (马) di kiri dan 奇 di sebelah kanan.', svgId: 'ride' },

    // =========================================================================
    // HAN YU 3
    // =========================================================================
    // Unit 1: Teman & Kelas
    { char: '学', pinyin: 'xué', meaning: 'Belajar', book: 3, unit: 1, strokes: 8, category: 'school', tip: 'Atap belajar di atas dan anak (子) yang tekun membaca.', svgId: 'study' },
    { char: '同', pinyin: 'tóng', meaning: 'Sama / Teman (同学)', book: 3, unit: 1, strokes: 6, category: 'school', tip: 'Bingkai luar 冂 diisi garis mendatar dan kotak 口.', svgId: 'together' },
    { char: '朋', pinyin: 'péng', meaning: 'Teman (朋友)', book: 3, unit: 1, strokes: 8, category: 'school', tip: 'Dua karakter bulan (月) berdampingan saling menyinari.', svgId: 'friend' },
    { char: '班', pinyin: 'bān', meaning: 'Kelas (班级)', book: 3, unit: 1, strokes: 10, category: 'school', tip: 'Dua batu giok (王) dipisah oleh pedang (刂) di tengah.', svgId: 'class' },

    // Unit 2: Alat Tulis & Ruangan
    { char: '室', pinyin: 'shì', meaning: 'Ruangan (教室)', book: 3, unit: 2, strokes: 9, category: 'school', tip: 'Atap rumah (宀) di atas dan 至 di bawahnya.', svgId: 'room' },
    { char: '包', pinyin: 'bāo', meaning: 'Tas (书包)', book: 3, unit: 2, strokes: 5, category: 'object', tip: 'Lekukan luar membungkus benda berharga di dalam tas.', svgId: 'backpack' },
    { char: '尺', pinyin: 'chǐ', meaning: 'Penggaris', book: 3, unit: 2, strokes: 4, category: 'object', tip: 'Empat guratan lurus membentuk mistar ukur.', svgId: 'ruler' },
    { char: '皮', pinyin: 'pí', meaning: 'Karet Penghapus (橡皮)', book: 3, unit: 2, strokes: 5, category: 'object', tip: 'Bentuk kulit lentur penghapus tulisan pensil.', svgId: 'eraser' },

    // Unit 3: Jam & Waktu
    { char: '点', pinyin: 'diǎn', meaning: 'Jam / Titik', book: 3, unit: 3, strokes: 9, category: 'time', tip: 'Bagian atas 占 dan empat titik api/air (灬) di dasarnya.', svgId: 'clock' },
    { char: '分', pinyin: 'fēn', meaning: 'Menit / Membagi', book: 3, unit: 3, strokes: 4, category: 'time', tip: 'Delapan (八) di atas pisau (刀) yang membagi waktu.', svgId: 'minute' },
    { char: '半', pinyin: 'bàn', meaning: 'Setengah (30 Menit)', book: 3, unit: 3, strokes: 5, category: 'time', tip: 'Titik kiri kanan, dua garis horisontal dan tiang tengah.', svgId: 'half' },
    { char: '现', pinyin: 'xiàn', meaning: 'Sekarang (现在)', book: 3, unit: 3, strokes: 8, category: 'time', tip: 'Permata (王) di kiri dan melihat (见) di kanan.', svgId: 'now' },

    // Unit 4: Rumah & Kamar Tidur
    { char: '房', pinyin: 'fáng', meaning: 'Kamar / Rumah (房间)', book: 3, unit: 4, strokes: 8, category: 'home', tip: 'Pintu (户) di atas dan 方 di bawahnya.', svgId: 'room_home' },
    { char: '床', pinyin: 'chuáng', meaning: 'Tempat Tidur / Ranjang', book: 3, unit: 4, strokes: 7, category: 'object', tip: 'Radikal dinding rumah (广) dengan kasur kayu (木) di dalamnya.', svgId: 'bed' },
    { char: '灯', pinyin: 'dēng', meaning: 'Lampu', book: 3, unit: 4, strokes: 6, category: 'object', tip: 'Api (火) di kiri dan 丁 di sebelah kanan.', svgId: 'lamp' },

    // Unit 5: Kebun Binatang
    { char: '园', pinyin: 'yuán', meaning: 'Taman (动物园)', book: 3, unit: 5, strokes: 7, category: 'animals', tip: 'Pagar luar 囗 melingkupi tanaman 元 di dalamnya.', svgId: 'zoo' },
    { char: '虎', pinyin: 'hǔ', meaning: 'Harimau', book: 3, unit: 5, strokes: 8, category: 'animals', tip: 'Raja hutan yang gagah dengan loreng yang berwibawa.', svgId: 'tiger' },
    { char: '猴', pinyin: 'hóu', meaning: 'Monyet / Kera', book: 3, unit: 5, strokes: 12, category: 'animals', tip: 'Radikal hewan (犭) di kiri dan 侯 di kanan.', svgId: 'monkey' },

    // Unit 6: Profesi & Pekerjaan
    { char: '工', pinyin: 'gōng', meaning: 'Kerja / Tukang (工作)', book: 3, unit: 6, strokes: 3, category: 'profession', tip: 'Tiga guratan kokoh membentuk alat kerja pertukangan.', svgId: 'work' },
    { char: '医', pinyin: 'yī', meaning: 'Dokter / Medis (医生)', book: 3, unit: 6, strokes: 7, category: 'profession', tip: 'Kotak pelindung 匚 diisi panah pengobatan (矢).', svgId: 'doctor' },
    { char: '护', pinyin: 'hù', meaning: 'Perawat (护士)', book: 3, unit: 6, strokes: 7, category: 'profession', tip: 'Tangan (扌) merawat dan melindungi 戸 orang sakit.', svgId: 'nurse' },

    // Unit 7: Belanja & Uang
    { char: '买', pinyin: 'mǎi', meaning: 'Membeli', book: 3, unit: 7, strokes: 6, category: 'shopping', tip: 'Bentuk keranjang belanjaan dengan 6 guratan.', svgId: 'buy' },
    { char: '卖', pinyin: 'mài', meaning: 'Menjual', book: 3, unit: 7, strokes: 8, category: 'shopping', tip: 'Karakter 十 di atas 买 (menjual barang).', svgId: 'sell' },
    { char: '钱', pinyin: 'qián', meaning: 'Uang', book: 3, unit: 7, strokes: 10, category: 'shopping', tip: 'Radikal logam/emas (钅) di kiri dan 戋 di kanan.', svgId: 'money' },

    // Unit 8: Cuaca & Suhu
    { char: '晴', pinyin: 'qíng', meaning: 'Cerah', book: 3, unit: 8, strokes: 12, category: 'nature', tip: 'Matahari (日) bersinar terang di langit biru (青).', svgId: 'sunny' },
    { char: '冷', pinyin: 'lěng', meaning: 'Dingin', book: 3, unit: 8, strokes: 7, category: 'nature', tip: 'Titik es (冫) di kiri dan 令 di sebelah kanan.', svgId: 'cold' },
    { char: '热', pinyin: 'rè', meaning: 'Panas', book: 3, unit: 8, strokes: 10, category: 'nature', tip: 'Tanah 执 di atas api membara (灬) di bawah.', svgId: 'hot' },

    // Unit 9: Hobi & Musik
    { char: '歌', pinyin: 'gē', meaning: 'Lagu / Menyanyi (唱歌)', book: 3, unit: 9, strokes: 14, category: 'arts', tip: 'Dua karakter 哥 di kiri dan menguap/bernapas (欠) di kanan.', svgId: 'sing' },
    { char: '舞', pinyin: 'wǔ', meaning: 'Menari (跳舞)', book: 3, unit: 9, strokes: 14, category: 'arts', tip: 'Gerakan kaki dan selendang penari yang anggun meliuk.', svgId: 'dance' },
    { char: '画', pinyin: 'huà', meaning: 'Melukis (画画)', book: 3, unit: 9, strokes: 8, category: 'arts', tip: 'Kuas menggambar batas ladang dan pemandangan alam.', svgId: 'paint' },

    // Unit 10: Restoran & Menu
    { char: '馆', pinyin: 'guǎn', meaning: 'Restoran (饭馆)', book: 3, unit: 10, strokes: 11, category: 'food', tip: 'Makanan (饣) di kiri dan 官 di sebelah kanan.', svgId: 'restaurant' },
    { char: '肉', pinyin: 'ròu', meaning: 'Daging', book: 3, unit: 10, strokes: 6, category: 'food', tip: 'Potongan daging bergizi dalam 6 guratan seimbang.', svgId: 'meat' },
    { char: '汤', pinyin: 'tāng', meaning: 'Sup / Kuah', book: 3, unit: 10, strokes: 9, category: 'food', tip: 'Air (氵) di kiri dan 昜 di sebelah kanan.', svgId: 'soup' },

    // =========================================================================
    // HAN YU 4
    // =========================================================================
    // Unit 1: Olahraga
    { char: '球', pinyin: 'qiú', meaning: 'Bola (足球, 篮球)', book: 4, unit: 1, strokes: 11, category: 'sports', tip: 'Radikal batu permata (王/玉) di kiri dan 求 di kanan.', svgId: 'ball' },
    { char: '踢', pinyin: 'tī', meaning: 'Menendang (踢球)', book: 4, unit: 1, strokes: 15, category: 'sports', tip: 'Kaki (足) di kiri dan 易 di sebelah kanan.', svgId: 'kick' },
    { char: '赛', pinyin: 'sài', meaning: 'Pertandingan (比赛)', book: 4, unit: 1, strokes: 14, category: 'sports', tip: 'Atap 宀, tiga garis, dan kulit kerang berharga (贝).', svgId: 'match_sport' },

    // Unit 2: Transportasi Kota
    { char: '公', pinyin: 'gōng', meaning: 'Umum / Bus (公交车)', book: 4, unit: 2, strokes: 4, category: 'transport', tip: 'Delapan (八) di atas dan 厶 di bawahnya.', svgId: 'bus' },
    { char: '站', pinyin: 'zhàn', meaning: 'Stasiun / Halte (车站)', book: 4, unit: 2, strokes: 10, category: 'transport', tip: 'Berdiri (立) di kiri dan 占 di kanan.', svgId: 'station' },
    { char: '票', pinyin: 'piào', meaning: 'Tiket / Karcis (车票)', book: 4, unit: 2, strokes: 11, category: 'transport', tip: 'Barat (覀) di atas dan 示 di bawahnya.', svgId: 'ticket' },

    // Unit 3: Empat Musim
    { char: '春', pinyin: 'chūn', meaning: 'Musim Semi', book: 4, unit: 3, strokes: 9, category: 'seasons', tip: 'Tiga garis mendatar, orang (人), dan matahari (日).', svgId: 'spring' },
    { char: '夏', pinyin: 'xià', meaning: 'Musim Panas', book: 4, unit: 3, strokes: 10, category: 'seasons', tip: 'Sepuluh guratan indah menggambarkan kehangatan musim panas.', svgId: 'summer' },
    { char: '秋', pinyin: 'qiū', meaning: 'Musim Gugur', book: 4, unit: 3, strokes: 9, category: 'seasons', tip: 'Batang gandum (禾) matang berwarna keemasan di samping api (火).', svgId: 'autumn' },
    { char: '冬', pinyin: 'dōng', meaning: 'Musim Dingin', book: 4, unit: 3, strokes: 5, category: 'seasons', tip: 'Sapuan atap di atas dan dua titik butiran es beku di bawah.', svgId: 'winter' },

    // Unit 4: Supermarket & Buah
    { char: '超', pinyin: 'chāo', meaning: 'Supermarket (超市)', book: 4, unit: 4, strokes: 12, category: 'shopping', tip: 'Berjalan (走) di kiri dan 召 di kanan.', svgId: 'supermarket' },
    { char: '市', pinyin: 'shì', meaning: 'Pasar / Kota', book: 4, unit: 4, strokes: 5, category: 'shopping', tip: 'Titik dan garis atas, lalu 巾 di bawahnya.', svgId: 'market' },
    { char: '袋', pinyin: 'dài', meaning: 'Kantong / Tas Belanja', book: 4, unit: 4, strokes: 11, category: 'shopping', tip: 'Radikal 代 di atas dan pakaian (衣) di bawah.', svgId: 'bag' },

    // Unit 5: Kesehatan & Rumah Sakit
    { char: '病', pinyin: 'bìng', meaning: 'Sakit / Penyakit (看病)', book: 4, unit: 5, strokes: 10, category: 'health', tip: 'Radikal penyakit (疒) di luar dan 丙 di dalamnya.', svgId: 'sick' },
    { char: '疼', pinyin: 'téng', meaning: 'Nyeri / Sakit', book: 4, unit: 5, strokes: 10, category: 'health', tip: 'Radikal penyakit (疒) dan 冬 di dalamnya.', svgId: 'pain' },
    { char: '药', pinyin: 'yào', meaning: 'Obat', book: 4, unit: 5, strokes: 9, category: 'health', tip: 'Herbal (艹) di atas dan 约 di bawahnya.', svgId: 'medicine' },

    // Unit 6: Ulang Tahun & Hadiah
    { char: '祝', pinyin: 'zhù', meaning: 'Selamat / Mendoakan (祝贺)', book: 4, unit: 6, strokes: 9, category: 'celebration', tip: 'Radikal berkah (礻) di kiri dan 兄 di kanan.', svgId: 'wish' },
    { char: '糕', pinyin: 'gāo', meaning: 'Kue / Tart (蛋糕)', book: 4, unit: 6, strokes: 16, category: 'food', tip: 'Beras (米) di kiri dan 羔 di kanan.', svgId: 'cake' },
    { char: '礼', pinyin: 'lǐ', meaning: 'Hadiah / Kado (礼物)', book: 4, unit: 6, strokes: 5, category: 'celebration', tip: 'Radikal berkah (礻) di kiri dan 乚 di kanan.', svgId: 'gift' },

    // Unit 7: Wisata & Liburan
    { char: '假', pinyin: 'jià', meaning: 'Liburan (放假)', book: 4, unit: 7, strokes: 11, category: 'travel', tip: 'Orang (亻) di kiri dan 叚 di sebelah kanan.', svgId: 'holiday' },
    { char: '旅', pinyin: 'lǚ', meaning: 'Bepergian / Wisata (旅游)', book: 4, unit: 7, strokes: 10, category: 'travel', tip: 'Bendera 方 di kiri dan 𠂉, 氏 di kanan.', svgId: 'travel' },
    { char: '景', pinyin: 'jǐng', meaning: 'Pemandangan (风景)', book: 4, unit: 7, strokes: 12, category: 'travel', tip: 'Matahari (日) di atas dan 京 di bawahnya.', svgId: 'scenery' },

    // Unit 8: Lingkungan Alam
    { char: '河', pinyin: 'hé', meaning: 'Sungai', book: 4, unit: 8, strokes: 8, category: 'nature', tip: 'Air (氵) di kiri dan 可 di sebelah kanan.', svgId: 'river_small' },
    { char: '海', pinyin: 'hǎi', meaning: 'Laut / Samudra', book: 4, unit: 8, strokes: 10, category: 'nature', tip: 'Air (氵) di kiri dan 每 di sebelah kanan.', svgId: 'sea' },
    { char: '林', pinyin: 'lín', meaning: 'Hutan Rindang', book: 4, unit: 8, strokes: 8, category: 'nature', tip: 'Dua pohon kayu (木 + 木) membentuk hutan lebat.', svgId: 'forest' },

    // Unit 9: Surat & Komunikasi
    { char: '信', pinyin: 'xìn', meaning: 'Surat / Percaya (写信)', book: 4, unit: 9, strokes: 9, category: 'communication', tip: 'Orang (亻) di kiri dan kata (言) di kanan.', svgId: 'letter' },
    { char: '封', pinyin: 'fēng', meaning: 'Amplop / Helai Surat', book: 4, unit: 9, strokes: 9, category: 'communication', tip: 'Dua pohon 土 di kiri dan 寸 di kanan.', svgId: 'envelope' },
    { char: '邮', pinyin: 'yóu', meaning: 'Pos / Kantor Pos (邮局)', book: 4, unit: 9, strokes: 7, category: 'communication', tip: 'Sawah (由) di kiri dan bukit (阝) di kanan.', svgId: 'post' },

    // Unit 10: Hewan Peliharaan
    { char: '宠', pinyin: 'chǒng', meaning: 'Hewan Peliharaan (宠物)', book: 4, unit: 10, strokes: 8, category: 'animals', tip: 'Atap rumah (宀) melindungi naga kecil (龙).', svgId: 'pet' },
    { char: '物', pinyin: 'wù', meaning: 'Benda / Hewan (动物)', book: 4, unit: 10, strokes: 8, category: 'animals', tip: 'Sapi (牛) di kiri dan 勿 di kanan.', svgId: 'creature' },
    { char: '养', pinyin: 'yǎng', meaning: 'Memelihara / Merawat', book: 4, unit: 10, strokes: 9, category: 'animals', tip: 'Kambing (羊) di atas dan kaki di bawahnya.', svgId: 'raise' },

    // =========================================================================
    // HAN YU 5 s/d HAN YU 12 (Comprehensive Curriculum Core Vocabulary)
    // =========================================================================
    // Han Yu 5 (Unit 1 to 10)
    { char: '艺', pinyin: 'yì', meaning: 'Seni / Kesenian (艺术)', book: 5, unit: 1, strokes: 4, category: 'arts', tip: 'Tanaman (艹) di atas dan 乙 di bawah.', svgId: 'art' },
    { char: '术', pinyin: 'shù', meaning: 'Teknik / Keterampilan', book: 5, unit: 1, strokes: 5, category: 'arts', tip: 'Pohon (木) dengan satu titik di tengahnya.', svgId: 'technique' },
    { char: '电', pinyin: 'diàn', meaning: 'Listrik / Komputer (电脑)', book: 5, unit: 2, strokes: 5, category: 'tech', tip: 'Kilatan petir yang bertenaga besar.', svgId: 'electric' },
    { char: '脑', pinyin: 'nǎo', meaning: 'Otak / Pintar (电脑)', book: 5, unit: 2, strokes: 10, category: 'tech', tip: 'Daging (月) di kiri dan 㐫 di kanan.', svgId: 'brain' },
    { char: '植', pinyin: 'zhí', meaning: 'Menanam (植物, 植树)', book: 5, unit: 3, strokes: 12, category: 'nature', tip: 'Kayu (木) di kiri dan 直 di kanan.', svgId: 'plant_action' },
    { char: '庆', pinyin: 'qìng', meaning: 'Merayakan (庆祝)', book: 5, unit: 4, strokes: 6, category: 'culture', tip: 'Dinding (广) di luar dan 大 di dalamnya.', svgId: 'celebrate' },
    { char: '童', pinyin: 'tóng', meaning: 'Anak / Dongeng (童话)', book: 5, unit: 5, strokes: 12, category: 'literature', tip: 'Berdiri (立) di atas dan 里 di bawahnya.', svgId: 'fairytale' },
    { char: '烹', pinyin: 'pēng', meaning: 'Memasak (烹饪)', book: 5, unit: 6, strokes: 11, category: 'food', tip: 'Karakter 亨 di atas empat titik api (灬).', svgId: 'cook' },
    { char: '古', pinyin: 'gǔ', meaning: 'Kuno / Sejarah (古代)', book: 5, unit: 7, strokes: 5, category: 'history', tip: 'Sepuluh (十) di atas mulut (口).', svgId: 'ancient' },
    { char: '联', pinyin: 'lián', meaning: 'Menghubungi (联系)', book: 5, unit: 8, strokes: 12, category: 'communication', tip: 'Telinga (耳) di kiri dan 关 di kanan.', svgId: 'connect' },
    { char: '貌', pinyin: 'mào', meaning: 'Sopan Santun (礼貌)', book: 5, unit: 9, strokes: 14, category: 'character', tip: 'Radikal 豸 di kiri dan 皃 di kanan.', svgId: 'polite' },
    { char: '算', pinyin: 'suàn', meaning: 'Berencana / Menghitung (打算)', book: 5, unit: 10, strokes: 14, category: 'future', tip: 'Bambu (⺮) di atas, 目 di tengah, dan 廾 di dasar.', svgId: 'plan' },

    // Han Yu 6 (Unit 1 to 10)
    { char: '网', pinyin: 'wǎng', meaning: 'Jaringan / Internet (网络)', book: 6, unit: 1, strokes: 6, category: 'tech', tip: 'Jaring yang menghubungkan seluruh dunia.', svgId: 'internet' },
    { char: '城', pinyin: 'chéng', meaning: 'Tembok Besar / Kota (长城)', book: 6, unit: 2, strokes: 9, category: 'history', tip: 'Tanah (土) di kiri dan 成 di kanan.', svgId: 'great_wall' },
    { char: '舟', pinyin: 'zhōu', meaning: 'Perahu Naga (龙舟)', book: 6, unit: 3, strokes: 6, category: 'culture', tip: 'Bentuk perahu naga yang melaju kencang.', svgId: 'dragon_boat' },
    { char: '宇', pinyin: 'yǔ', meaning: 'Antariksa (宇宙)', book: 6, unit: 4, strokes: 6, category: 'space', tip: 'Atap (宀) di atas dan 于 di bawah.', svgId: 'space' },
    { char: '寓', pinyin: 'yù', meaning: 'Fabel / Makna Kiasan (寓言)', book: 6, unit: 5, strokes: 12, category: 'fable', tip: 'Atap (宀) di atas dan 禺 di bawah.', svgId: 'fable' },
    { char: '剪', pinyin: 'jiǎn', meaning: 'Gunting / Seni Kertas (剪纸)', book: 6, unit: 6, strokes: 11, category: 'craft', tip: 'Depan (前) di atas pisau (刀) di bawah.', svgId: 'scissors' },
    { char: '卫', pinyin: 'wèi', meaning: 'Kebersihan / Menjaga (卫生)', book: 6, unit: 7, strokes: 3, category: 'health', tip: 'Tiga guratan ringkas pelindung kesehatan.', svgId: 'hygiene' },
    { char: '险', pinyin: 'xiǎn', meaning: 'Petualangan / Bahaya (探险)', book: 6, unit: 8, strokes: 9, category: 'adventure', tip: 'Bukit (阝) di kiri dan 佥 di kanan.', svgId: 'adventure' },
    { char: '程', pinyin: 'chéng', meaning: 'Pemrograman / Tahap (编程)', book: 6, unit: 9, strokes: 12, category: 'career', tip: 'Gandum (禾) di kiri dan 呈 di kanan.', svgId: 'program' },
    { char: '志', pinyin: 'zhì', meaning: 'Cita-cita / Tekad (志向)', book: 6, unit: 10, strokes: 7, category: 'future', tip: 'Teguh (士) di atas hati (心) bertekad maju.', svgId: 'ambition' },

    // Han Yu 7 (Unit 1 to 10)
    { char: '语', pinyin: 'yǔ', meaning: 'Idiom Pepatah (成语)', book: 7, unit: 1, strokes: 9, category: 'idiom', tip: 'Kata (讠) di kiri dan 五, 口 di kanan.', svgId: 'idiom' },
    { char: '骨', pinyin: 'gǔ', meaning: 'Tulang / Tulisan Kuno (甲骨文)', book: 7, unit: 2, strokes: 9, category: 'hanzi_history', tip: 'Bentuk tulang prasasti Hanzi kuno.', svgId: 'oracle_bone' },
    { char: '茶', pinyin: 'chá', meaning: 'Budaya Minum Teh (茶道)', book: 7, unit: 3, strokes: 9, category: 'tea_culture', tip: 'Herbal (艹) di atas, 人 di tengah, 木 di dasar.', svgId: 'tea_ceremony' },
    { char: '院', pinyin: 'yuàn', meaning: 'Pekarangan Rumah (四合院)', book: 7, unit: 4, strokes: 9, category: 'architecture', tip: 'Bukit (阝) di kiri dan 完 di kanan.', svgId: 'courtyard' },
    { char: '丝', pinyin: 'sī', meaning: 'Sutra Kuno (丝绸之路)', book: 7, unit: 5, strokes: 5, category: 'silk_road', tip: 'Dua ikatan benang sutra halus berkilau.', svgId: 'silk' },
    { char: '诗', pinyin: 'shī', meaning: 'Puisi Dinasti Tang (唐诗)', book: 7, unit: 6, strokes: 8, category: 'poetry', tip: 'Kata (讠) di kiri dan 寺 di kanan.', svgId: 'poetry' },
    { char: '琴', pinyin: 'qín', meaning: 'Alat Musik Petik (古琴)', book: 7, unit: 7, strokes: 12, category: 'music', tip: 'Dua giok (王) di atas dan 今 di bawah.', svgId: 'guzheng' },
    { char: '竹', pinyin: 'zhú', meaning: 'Bambu Teguh (竹节)', book: 7, unit: 8, strokes: 6, category: 'philosophy', tip: 'Dua batang bambu yang kokoh ditiup angin.', svgId: 'bamboo' },
    { char: '孝', pinyin: 'xiào', meaning: 'Berbakti pada Orang Tua (孝顺)', book: 7, unit: 9, strokes: 7, category: 'moral', tip: 'Orang tua (老) di atas anak (子) di bawah.', svgId: 'filial' },
    { char: '友', pinyin: 'yǒu', meaning: 'Sahabat Sejati (挚友)', book: 7, unit: 10, strokes: 4, category: 'friendship', tip: 'Dua tangan bersalaman hangat.', svgId: 'friendship' },

    // Han Yu 8 (Unit 1 to 10)
    { char: '江', pinyin: 'jiāng', meaning: 'Sungai Yangtze (长江)', book: 8, unit: 1, strokes: 6, category: 'river', tip: 'Air (氵) di kiri dan 工 di kanan.', svgId: 'yangtze' },
    { char: '针', pinyin: 'zhēn', meaning: 'Kompas Kuno (指南针)', book: 8, unit: 2, strokes: 7, category: 'invention', tip: 'Logam (钅) di kiri dan 十 di kanan.', svgId: 'compass' },
    { char: '医', pinyin: 'yī', meaning: 'Tabib TCM (中医药)', book: 8, unit: 3, strokes: 7, category: 'tcm', tip: 'Wadah obat herbal kuno pelindung.', svgId: 'tcm' },
    { char: '夕', pinyin: 'xī', meaning: 'Malam Imlek (除夕)', book: 8, unit: 4, strokes: 3, category: 'spring_festival', tip: 'Bulan sabit indah menyambut tahun baru.', svgId: 'new_year' },
    { char: '娲', pinyin: 'wā', meaning: 'Dewi Mitologi (女娲)', book: 8, unit: 5, strokes: 10, category: 'mythology', tip: 'Wanita (女) di kiri dan 呙 di kanan.', svgId: 'goddess' },
    { char: '岳', pinyin: 'yuè', meaning: 'Pahlawan Jenderal (岳飞)', book: 8, unit: 6, strokes: 8, category: 'hero', tip: 'Bukit (丘) di atas gunung (山) tinggi.', svgId: 'hero' },
    { char: '瓷', pinyin: 'cí', meaning: 'Porselen Keramik (陶瓷)', book: 8, unit: 7, strokes: 11, category: 'porcelain', tip: 'Karakter 次 di atas genting tembikar (瓦).', svgId: 'porcelain' },
    { char: '武', pinyin: 'wǔ', meaning: 'Seni Bela Diri (武术)', book: 8, unit: 8, strokes: 8, category: 'martial_arts', tip: 'Menghentikan (止) tombak senjata (戈).', svgId: 'kungfu' },
    { char: '晷', pinyin: 'guǐ', meaning: 'Jam Matahari Kuno (日晷)', book: 8, unit: 9, strokes: 12, category: 'astronomy', tip: 'Matahari (日) di atas dan 咎 di bawah.', svgId: 'sundial' },
    { char: '俑', pinyin: 'yǒng', meaning: 'Prajurit Terakota (兵马俑)', book: 8, unit: 10, strokes: 9, category: 'unesco', tip: 'Manusia (亻) di kiri dan 勇 di kanan.', svgId: 'terracotta' },

    // Han Yu 9 (Unit 1 to 10)
    { char: '墨', pinyin: 'mò', meaning: 'Tinta Kaligrafi Hitam (文房四宝)', book: 9, unit: 1, strokes: 15, category: 'shufa', tip: 'Hitam (黑) di atas tanah (土) di dasar.', svgId: 'ink' },
    { char: '谱', pinyin: 'pǔ', meaning: 'Topeng Opera Beijing (脸谱)', book: 9, unit: 2, strokes: 14, category: 'opera', tip: 'Kata (讠) di kiri dan 普 di kanan.', svgId: 'opera_mask' },
    { char: '游', pinyin: 'yóu', meaning: 'Kera Sakti Kembara (西游记)', book: 9, unit: 3, strokes: 12, category: 'classics', tip: 'Air (氵), bendera 方, dan 子 di kanan.', svgId: 'monkey_king' },
    { char: '水', pinyin: 'shuǐ', meaning: 'Lukisan Pemandangan (山水画)', book: 9, unit: 4, strokes: 4, category: 'shanshui', tip: 'Goresan kuas air yang mengalir tenang.', svgId: 'water_art' },
    { char: '林', pinyin: 'lín', meaning: 'Taman Klasik Suzhou (园林)', book: 9, unit: 5, strokes: 8, category: 'gardens', tip: 'Dua pohon rindang di tepi paviliun.', svgId: 'suzhou_garden' },
    { char: '绣', pinyin: 'xiù', meaning: 'Sulaman Sutra Indah (刺绣)', book: 9, unit: 6, strokes: 10, category: 'embroidery', tip: 'Sutra (纟) di kiri dan 秀 di kanan.', svgId: 'embroidery' },
    { char: '阴', pinyin: 'yīn', meaning: 'Yin & Yang Filosofi (阴阳)', book: 9, unit: 7, strokes: 6, category: 'yinyang', tip: 'Bukit (阝) di kiri dan 月 di kanan.', svgId: 'yin' },
    { char: '警', pinyin: 'jǐng', meaning: 'Petuah Bijak (警句)', book: 9, unit: 8, strokes: 19, category: 'wisdom', tip: 'Hormat (敬) di atas ucapan kata (言).', svgId: 'proverb' },
    { char: '阳', pinyin: 'yáng', meaning: 'Festival Perahu Naga (端阳节)', book: 9, unit: 9, strokes: 6, category: 'tradition', tip: 'Bukit (阝) di kiri dan 日 di kanan.', svgId: 'dragon_boat_fest' },
    { char: '鹤', pinyin: 'hè', meaning: 'Burung Bangau Langka (仙鹤)', book: 9, unit: 10, strokes: 15, category: 'fauna', tip: 'Karakter 隺 di kiri dan burung (鸟) di kanan.', svgId: 'crane' },

    // Han Yu 10 (Unit 1 to 10)
    { char: '贸', pinyin: 'mào', meaning: 'Perdagangan Global (贸易)', book: 10, unit: 1, strokes: 9, category: 'economy', tip: 'Karakter 卯 di atas kulit kerang (贝).', svgId: 'trade' },
    { char: '碳', pinyin: 'tàn', meaning: 'Rendah Karbon (低碳环保)', book: 10, unit: 2, strokes: 14, category: 'low_carbon', tip: 'Batu (石) di kiri dan 炭 di kanan.', svgId: 'carbon' },
    { char: '化', pinyin: 'huà', meaning: 'Budaya Global (跨文化)', book: 10, unit: 3, strokes: 4, category: 'intercultural', tip: 'Orang (亻) di kiri dan 匕 di kanan.', svgId: 'culture_cross' },
    { char: '能', pinyin: 'néng', meaning: 'Energi Bersih (新能源)', book: 10, unit: 4, strokes: 10, category: 'clean_energy', tip: 'Karakter 厶, 月 di kiri dan 匕, 匕 di kanan.', svgId: 'energy' },
    { char: '轨', pinyin: 'guǐ', meaning: 'Rel Kereta Cepat (高铁轨道)', book: 10, unit: 5, strokes: 6, category: 'bullet_train', tip: 'Kereta (车) di kiri dan 九 di kanan.', svgId: 'high_speed_rail' },
    { char: '居', pinyin: 'jū', meaning: 'Kota Hijau Nyaman (宜居城市)', book: 10, unit: 6, strokes: 8, category: 'green_city', tip: 'Tubuh (尸) di atas dan 古 di bawah.', svgId: 'green_city' },
    { char: '样', pinyin: 'yàng', meaning: 'Keanekaragaman Hayati (多样性)', book: 10, unit: 7, strokes: 10, category: 'biodiversity', tip: 'Kayu (木) di kiri dan 羊 di kanan.', svgId: 'biodiversity' },
    { char: '智', pinyin: 'zhì', meaning: 'Kecerdasan AI Pintar (人工智能)', book: 10, unit: 8, strokes: 12, category: 'ai_tech', tip: 'Mengetahui (知) di atas matahari (日).', svgId: 'ai' },
    { char: '赢', pinyin: 'yíng', meaning: 'Saling Menguntungkan (共赢)', book: 10, unit: 9, strokes: 17, category: 'cooperation', tip: 'Atap 亡, 口, 月, 贝, 凡 yang bersatu.', svgId: 'win_win' },
    { char: '展', pinyin: 'zhǎn', meaning: 'Berkelanjutan (可持续发展)', book: 10, unit: 10, strokes: 10, category: 'sustainable', tip: 'Tubuh (尸) di atas dan 𧰨 di bawah.', svgId: 'sustainability' },

    // Han Yu 11 (Unit 1 to 10)
    { char: '儒', pinyin: 'rú', meaning: 'Konfusianisme (儒家思想)', book: 11, unit: 1, strokes: 16, category: 'confucianism', tip: 'Orang (亻) di kiri dan 需 di kanan.', svgId: 'confucius' },
    { char: '研', pinyin: 'yán', meaning: 'Riset & Pengembangan (研发)', book: 11, unit: 2, strokes: 9, category: 'biotech', tip: 'Batu (石) di kiri dan 开 di kanan.', svgId: 'research' },
    { char: '潜', pinyin: 'qián', meaning: 'Kapal Selam Riset (潜水器)', book: 11, unit: 3, strokes: 15, category: 'ocean_explore', tip: 'Air (氵) di kiri dan 朁 di kanan.', svgId: 'submarine' },
    { char: '媒', pinyin: 'méi', meaning: 'Media Digital (多媒体)', book: 11, unit: 4, strokes: 12, category: 'digital_media', tip: 'Wanita (女) di kiri dan 某 di kanan.', svgId: 'media' },
    { char: '约', pinyin: 'yuē', meaning: 'Perjanjian Damai (条约)', book: 11, unit: 5, strokes: 6, category: 'diplomacy', tip: 'Sutra (纟) di kiri dan 勺 di kanan.', svgId: 'diplomacy' },
    { char: '毅', pinyin: 'yì', meaning: 'Keteguhan Hati (坚毅)', book: 11, unit: 6, strokes: 15, category: 'grit', tip: 'Karakter 豙 di kiri dan 殳 di kanan.', svgId: 'perseverance' },
    { char: '划', pinyin: 'huà', meaning: 'Perencanaan Waktu (规划)', book: 11, unit: 7, strokes: 6, category: 'time_management', tip: 'Bentuk 戈 di kiri dan pisau (刂) di kanan.', svgId: 'planning' },
    { char: '散', pinyin: 'sǎn', meaning: 'Prosa Sastra (散文)', book: 11, unit: 8, strokes: 12, category: 'literature_modern', tip: 'Bagian kiri 𢎘, 月 dan 攴 di kanan.', svgId: 'prose' },
    { char: '储', pinyin: 'chǔ', meaning: 'Tabungan Finansial (储蓄)', book: 11, unit: 9, strokes: 12, category: 'finance', tip: 'Orang (亻) di kiri dan 诸 di kanan.', svgId: 'saving' },
    { char: '导', pinyin: 'dǎo', meaning: 'Kepemimpinan (领导力)', book: 11, unit: 10, strokes: 6, category: 'leadership', tip: 'Ujung (巳) di atas dan jempol (寸) di bawah.', svgId: 'leadership' },

    // Han Yu 12 (Unit 1 to 10)
    { char: '辩', pinyin: 'biàn', meaning: 'Debat & Retorika (辩论)', book: 12, unit: 1, strokes: 16, category: 'speech', tip: 'Dua kata 辛 mengapit kata (言) di tengah.', svgId: 'debate' },
    { char: '论', pinyin: 'lùn', meaning: 'Esai Ilmiah (论文写作)', book: 12, unit: 2, strokes: 6, category: 'essay', tip: 'Kata (讠) di kiri dan 仑 di kanan.', svgId: 'essay' },
    { char: '容', pinyin: 'róng', meaning: 'Toleransi Warga Dunia (包容)', book: 12, unit: 3, strokes: 10, category: 'global_citizen', tip: 'Atap (宀) di atas dan lembah (谷) di bawah.', svgId: 'tolerance' },
    { char: '策', pinyin: 'cè', meaning: 'Strategi Negosiasi (策略)', book: 12, unit: 4, strokes: 12, category: 'negotiation', tip: 'Bambu (⺮) di atas dan 朿 di bawah.', svgId: 'strategy' },
    { char: '赏', pinyin: 'shǎng', meaning: 'Apresiasi Seni (鉴赏)', book: 12, unit: 5, strokes: 12, category: 'aesthetics', tip: 'Atap 尚 di atas kulit kerang emas (贝).', svgId: 'appreciation' },
    { char: '私', pinyin: 'sī', meaning: 'Privasi & Etika Digital (隐私)', book: 12, unit: 6, strokes: 7, category: 'digital_ethics', tip: 'Gandum (禾) di kiri dan 厶 di kanan.', svgId: 'privacy' },
    { char: '式', pinyin: 'shì', meaning: 'Model Bisnis Kreatif (模式)', book: 12, unit: 7, strokes: 6, category: 'business', tip: 'Bentuk 弋 di luar dan 工 di dalamnya.', svgId: 'business_model' },
    { char: '排', pinyin: 'pái', meaning: 'Pengurangan Emisi Iklim (减排)', book: 12, unit: 8, strokes: 11, category: 'climate', tip: 'Tangan (扌) di kiri dan 非 di kanan.', svgId: 'emission' },
    { char: '革', pinyin: 'gé', meaning: 'Transformasi Edukasi (教育变革)', book: 12, unit: 9, strokes: 9, category: 'education', tip: 'Sembilan guratan pembaruan peradaban.', svgId: 'transformation' },
    { char: '帆', pinyin: 'fān', meaning: 'Membentangkan Layar Masa Depan (扬帆)', book: 12, unit: 10, strokes: 6, category: 'vision', tip: 'Kain (巾) di kiri dan 凡 di kanan.', svgId: 'sail' }
  ],

  // Kosakata Bergambar untuk Game Mencocokkan (Dino Match Game)
  matchVocabItems: [
    {
      id: 'dino',
      hanzi: '恐龙',
      pinyin: 'kǒnglóng',
      meaning: 'Dinosaurus',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M75,30 C85,25 90,35 85,45 C80,55 70,52 65,48 L55,55 C55,55 60,75 52,85 C48,90 42,90 40,85 C38,80 42,75 42,70 L35,70 C33,75 30,85 25,85 C20,85 20,78 24,70 C15,65 10,50 15,35 C18,25 30,22 42,28 C50,22 62,20 70,25 Z" fill="#4CAF50"/>
        <circle cx="80" cy="35" r="3" fill="#FFFFFF"/><circle cx="81" cy="35" r="1.5" fill="#2E7D32"/>
        <path d="M78,42 Q83,45 80,48" stroke="#2E7D32" stroke-width="2" fill="none"/>
        <polygon points="65,22 68,15 72,23" fill="#81C784"/>
        <polygon points="55,20 58,12 62,21" fill="#81C784"/>
        <polygon points="45,22 48,15 52,24" fill="#81C784"/>
        <ellipse cx="48" cy="52" rx="14" ry="10" fill="#A5D6A7"/>
      </svg>`
    },
    {
      id: 'egg',
      hanzi: '恐龙蛋',
      pinyin: 'kǒnglóng dàn',
      meaning: 'Telur Dinosaurus',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <ellipse cx="50" cy="55" rx="30" ry="38" fill="#FFF9C4" stroke="#FBC02D" stroke-width="3"/>
        <ellipse cx="38" cy="45" rx="5" ry="7" fill="#81C784" opacity="0.8"/>
        <ellipse cx="60" cy="62" rx="6" ry="8" fill="#81C784" opacity="0.8"/>
        <ellipse cx="48" cy="72" rx="4" ry="5" fill="#81C784" opacity="0.8"/>
        <path d="M35,38 L45,45 L40,55 L55,50 L65,60" stroke="#F57F17" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M48,22 Q52,18 55,25" stroke="#FFE082" stroke-width="3" fill="none"/>
      </svg>`
    },
    {
      id: 'sun',
      hanzi: '太阳',
      pinyin: 'tàiyáng',
      meaning: 'Matahari',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <circle cx="50" cy="50" r="22" fill="#FFA726"/>
        <circle cx="50" cy="50" r="18" fill="#FFEB3B"/>
        <line x1="50" y1="10" x2="50" y2="20" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="50" y1="80" x2="50" y2="90" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="10" y1="50" x2="20" y2="50" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="80" y1="50" x2="90" y2="50" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="22" y1="22" x2="29" y2="29" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="71" y1="71" x2="78" y2="78" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="22" y1="78" x2="29" y2="71" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="71" y1="29" x2="78" y2="22" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <circle cx="44" cy="46" r="2.5" fill="#E65100"/>
        <circle cx="56" cy="46" r="2.5" fill="#E65100"/>
        <path d="M45,54 Q50,58 55,54" stroke="#E65100" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'moon',
      hanzi: '月亮',
      pinyin: 'yuèliang',
      meaning: 'Bulan',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M65,20 C40,20 25,40 25,60 C25,75 35,85 45,90 C30,80 28,55 45,35 C52,28 60,24 65,20 Z" fill="#FFF176" stroke="#FBC02D" stroke-width="2"/>
        <circle cx="38" cy="48" r="2" fill="#F57F17"/>
        <path d="M42,56 Q45,60 48,56" stroke="#F57F17" stroke-width="1.5" fill="none"/>
        <polygon points="75,25 77,20 79,25 84,26 80,29 81,34 77,31 73,34 74,29 70,26" fill="#FFEE58"/>
      </svg>`
    },
    {
      id: 'tree',
      hanzi: '大树',
      pinyin: 'dàshù',
      meaning: 'Pohon Rindang',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <rect x="44" y="55" width="12" height="35" rx="3" fill="#795548"/>
        <circle cx="50" cy="42" r="25" fill="#4CAF50"/>
        <circle cx="35" cy="48" r="16" fill="#66BB6A"/>
        <circle cx="65" cy="48" r="16" fill="#388E3C"/>
        <circle cx="50" cy="28" r="16" fill="#81C784"/>
      </svg>`
    },
    {
      id: 'volcano',
      hanzi: '火山',
      pinyin: 'huǒshān',
      meaning: 'Gunung Berapi',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <polygon points="20,85 50,28 80,85" fill="#8D6E63"/>
        <polygon points="42,28 50,42 58,28" fill="#FF5722"/>
        <path d="M48,22 Q50,10 52,22 Q54,12 56,24" stroke="#FF9800" stroke-width="3" fill="none"/>
        <polygon points="35,85 50,45 65,85" fill="#6D4C41"/>
      </svg>`
    },
    {
      id: 'water',
      hanzi: '河水',
      pinyin: 'héshuǐ',
      meaning: 'Air Sungai',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M15,45 Q30,35 45,45 T75,45 T100,45" stroke="#29B6F6" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M5,60 Q20,50 35,60 T65,60 T95,60" stroke="#0288D1" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M15,75 Q30,65 45,75 T75,75 T100,75" stroke="#4FC3F7" stroke-width="6" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'apple',
      hanzi: '苹果',
      pinyin: 'píngguǒ',
      meaning: 'Apel Merah',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <circle cx="42" cy="55" r="24" fill="#E53935"/>
        <circle cx="58" cy="55" r="24" fill="#E53935"/>
        <path d="M50,35 C48,25 54,20 54,20" stroke="#5D4037" stroke-width="4" fill="none" stroke-linecap="round"/>
        <ellipse cx="60" cy="26" rx="8" ry="4" fill="#4CAF50" transform="rotate(-25 60 26)"/>
      </svg>`
    }
  ],

  // Dataset Kuis Menanyakan Jumlah Guratan (Fokus hitungan 1, 3, 4, 5, 6, 7, 11) & Kosakata Han Yu 1-12
  strokeCountQuestions: [
    {
      id: 1,
      type: 'count-stroke',
      targetStrokeCount: 1,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "一" (yī - satu)?',
      hanzi: '一',
      pinyin: 'yī',
      audioText: '一',
      book: 1,
      options: [
        { text: '1 Guratan', isCorrect: true },
        { text: '2 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 一 (yī) hanya terdiri dari 1 guratan garis mendatar (横 - héng).',
      strokeSteps: ['1. 横 (héng)']
    },
    {
      id: 2,
      type: 'count-stroke',
      targetStrokeCount: 3,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "三" (sān - tiga)?',
      hanzi: '三',
      pinyin: 'sān',
      audioText: '三',
      book: 1,
      options: [
        { text: '3 Guratan', isCorrect: true },
        { text: '2 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 三 (sān) terdiri dari 3 guratan mendatar: atas pendek, tengah lebih pendek, bawah panjang.',
      strokeSteps: ['1. 横 (pendek)', '2. 横 (sedang)', '3. 横 (panjang)']
    },
    {
      id: 3,
      type: 'count-stroke',
      targetStrokeCount: 3,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "大" (dà - besar)?',
      hanzi: '大',
      pinyin: 'dà',
      audioText: '大',
      book: 1,
      options: [
        { text: '3 Guratan', isCorrect: true },
        { text: '4 Guratan', isCorrect: false },
        { text: '2 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 大 (dà) memiliki 3 guratan: 横 (mendatar), 撇 (sapuan miring kiri), 捺 (sapuan miring kanan).',
      strokeSteps: ['1. 横', '2. 撇', '3. 捺']
    },
    {
      id: 4,
      type: 'count-stroke',
      targetStrokeCount: 4,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "天" (tiān - langit / hari)?',
      hanzi: '天',
      pinyin: 'tiān',
      audioText: '天',
      book: 1,
      options: [
        { text: '4 Guratan', isCorrect: true },
        { text: '3 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 天 (tiān) memiliki 4 guratan: dua garis mendatar di atas disusul 人 di bawahnya.',
      strokeSteps: ['1. 横', '2. 横', '3. 撇', '4. 捺']
    },
    {
      id: 5,
      type: 'count-stroke',
      targetStrokeCount: 4,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "水" (shuǐ - air)?',
      hanzi: '水',
      pinyin: 'shuǐ',
      audioText: '水',
      book: 1,
      options: [
        { text: '4 Guratan', isCorrect: true },
        { text: '3 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 水 (shuǐ) memiliki 4 guratan: 竖钩 (tengah), 横撇 (kiri), 撇 (kanan atas), 捺 (kanan bawah).',
      strokeSteps: ['1. 竖钩', '2. 横撇', '3. 撇', '4. 捺']
    },
    {
      id: 6,
      type: 'count-stroke',
      targetStrokeCount: 5,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "龙" (lóng - dinosaurus / naga)?',
      hanzi: '龙',
      pinyin: 'lóng',
      audioText: '龙',
      book: 2,
      options: [
        { text: '5 Guratan', isCorrect: true },
        { text: '4 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 龙 (lóng) terdiri dari 5 guratan: 尤 dengan sapuan khas ekor naga/dinosaurus.',
      strokeSteps: ['1. 撇', '2. 横', '3. 竖折斜钩', '4. 撇', '5. 点']
    },
    {
      id: 7,
      type: 'count-stroke',
      targetStrokeCount: 5,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "四" (sì - empat)?',
      hanzi: '四',
      pinyin: 'sì',
      audioText: '四',
      book: 1,
      options: [
        { text: '5 Guratan', isCorrect: true },
        { text: '4 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 四 (sì) memiliki 5 guratan: bingkai luar (3 guratan), bagian dalam (1 guratan), dan penutup bawah.',
      strokeSteps: ['1. 竖', '2. 横折', '3. 撇', '4. 竖弯', '5. 横']
    },
    {
      id: 8,
      type: 'count-stroke',
      targetStrokeCount: 6,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "老" (lǎo - tua / pengajar)?',
      hanzi: '老',
      pinyin: 'lǎo',
      audioText: '老',
      book: 2,
      options: [
        { text: '6 Guratan', isCorrect: true },
        { text: '5 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: false },
        { text: '8 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 老 (lǎo) memiliki 6 guratan: 土 di atas, sapuan miring panjang 撇, dan 匕 di bawah.',
      strokeSteps: ['1. 横', '2. 竖', '3. 横', '4. 撇 (panjang)', '5. 撇', '6. 竖弯钩']
    },
    {
      id: 9,
      type: 'count-stroke',
      targetStrokeCount: 6,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "好" (hǎo - baik)?',
      hanzi: '好',
      pinyin: 'hǎo',
      audioText: '好',
      book: 1,
      options: [
        { text: '6 Guratan', isCorrect: true },
        { text: '5 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 好 (hǎo) memiliki 6 guratan: radikal 女 (3 guratan) + karakter 子 (3 guratan) = 6 guratan.',
      strokeSteps: ['1. 撇点', '2. 撇', '3. 提', '4. 横撇', '5. 弯钩', '6. 横']
    },
    {
      id: 10,
      type: 'count-stroke',
      targetStrokeCount: 7,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "你" (nǐ - kamu)?',
      hanzi: '你',
      pinyin: 'nǐ',
      audioText: '你',
      book: 1,
      options: [
        { text: '7 Guratan', isCorrect: true },
        { text: '6 Guratan', isCorrect: false },
        { text: '8 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 你 (nǐ) memiliki 7 guratan: radikal orang 亻 (2 guratan) + 尔 (5 guratan) = 7 guratan.',
      strokeSteps: ['1. 撇', '2. 竖', '3. 撇', '4. 横撇', '5. 竖钩', '6. 撇', '7. 点']
    },
    {
      id: 11,
      type: 'count-stroke',
      targetStrokeCount: 7,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "我" (wǒ - saya / aku)?',
      hanzi: '我',
      pinyin: 'wǒ',
      audioText: '我',
      book: 1,
      options: [
        { text: '7 Guratan', isCorrect: true },
        { text: '6 Guratan', isCorrect: false },
        { text: '8 Guratan', isCorrect: false },
        { text: '9 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 我 (wǒ) terdiri dari 7 guratan yang sangat harmonis.',
      strokeSteps: ['1. 撇', '2. 横', '3. 竖钩', '4. 提', '5. 斜钩', '6. 撇', '7. 点']
    },
    {
      id: 12,
      type: 'count-stroke',
      targetStrokeCount: 11,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "蛋" (dàn - telur dinosaurus)?',
      hanzi: '蛋',
      pinyin: 'dàn',
      audioText: '蛋',
      book: 2,
      options: [
        { text: '11 Guratan', isCorrect: true },
        { text: '10 Guratan', isCorrect: false },
        { text: '12 Guratan', isCorrect: false },
        { text: '9 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 蛋 (dàn) memiliki 11 guratan: 疋 di atas (5 guratan) + 虫 di bawah (6 guratan) = 11 guratan.',
      strokeSteps: ['1. 横折', '2. 横', '3. 竖', '4. 横', '5. 捺', '6. 竖', '7. 横折', '8. 横', '9. 竖', '10. 提', '11. 点']
    },
    {
      id: 13,
      type: 'count-stroke',
      targetStrokeCount: 11,
      question: 'Berapakah jumlah guratan dari karakter Hanzi "雪" (xuě - salju)?',
      hanzi: '雪',
      pinyin: 'xuě',
      audioText: '雪',
      book: 1,
      options: [
        { text: '11 Guratan', isCorrect: true },
        { text: '10 Guratan', isCorrect: false },
        { text: '8 Guratan', isCorrect: false },
        { text: '12 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 雪 (xuě) memiliki 11 guratan: radikal 雨 (8 guratan) + bagian bawah 彐 (3 guratan) = 11 guratan.',
      strokeSteps: ['1-8. 雨 (Hujan)', '9. 横折', '10. 横', '11. 横']
    },
    {
      id: 14,
      type: 'which-char-has-count',
      targetStrokeCount: 6,
      question: 'Manakah karakter Hanzi di bawah ini yang memiliki tepat 6 GURATAN?',
      options: [
        { text: '妈 (mā - ibu)', sub: '6 Guratan', isCorrect: true },
        { text: '大 (dà - besar)', sub: '3 Guratan', isCorrect: false },
        { text: '你 (nǐ - kamu)', sub: '7 Guratan', isCorrect: false },
        { text: '一 (yī - satu)', sub: '1 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 妈 (mā) terdiri dari 女 (3 guratan) + 马 (3 guratan) = 6 guratan.'
    },
    {
      id: 15,
      type: 'which-char-has-count',
      targetStrokeCount: 11,
      question: 'Manakah karakter Hanzi di bawah ini yang memiliki tepat 11 GURATAN?',
      options: [
        { text: '雪 (xuě - salju)', sub: '11 Guratan', isCorrect: true },
        { text: '水 (shuǐ - air)', sub: '4 Guratan', isCorrect: false },
        { text: '雨 (yǔ - hujan)', sub: '8 Guratan', isCorrect: false },
        { text: '风 (fēng - angin)', sub: '4 Guratan', isCorrect: false }
      ],
      explanation: '雪 (xuě) memiliki 11 guratan: radikal 雨 (8 guratan) + bagian bawah 彐 (3 guratan) = 11 guratan.'
    }
  ]
};

// Alias strokeQuizQuestions
DINO_DATA.strokeQuizQuestions = DINO_DATA.strokeCountQuestions;

// Pastikan data tersedia secara global di window
if (typeof window !== 'undefined') {
  window.DINO_DATA = DINO_DATA;
}
