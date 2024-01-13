const Database = require('./Database'); // Sesuaikan dengan path file Database Anda
const db = new Database('bannedUsers.json'); // Ganti 'bannedUsers.json' dengan nama berkas yang Anda inginkan

// Fungsi untuk menambahkan pengguna ke daftar dibanned
function addBannedUser(userId) {
  const bannedUsers = db.data.bannedUsers || [];
  if (!bannedUsers.includes(userId)) {
    bannedUsers.push(userId);
    db.data.bannedUsers = bannedUsers;
    db.save();
  }
}

// Fungsi untuk memeriksa apakah pengguna telah dibanned
function isBanned(userId) {
  const bannedUsers = db.data.bannedUsers || [];
  return bannedUsers.includes(userId);
}

// Fungsi untuk menghapus pengguna dari daftar dibanned
function unbanUser(userId) {
  const bannedUsers = db.data.bannedUsers || [];
  if (bannedUsers.includes(userId)) {
    const index = bannedUsers.indexOf(userId);
    bannedUsers.splice(index, 1);
    db.data.bannedUsers = bannedUsers;
    db.save();
  }
}

// Contoh penggunaan:
addBannedUser('user1'); // Menambahkan 'user1' ke daftar dibanned
addBannedUser('user2'); // Menambahkan 'user2' ke daftar dibanned
console.log(isBanned('user1')); // Output: true, karena 'user1' telah dibanned
console.log(isBanned('user3')); // Output: false, karena 'user3' tidak dibanned

unbanUser('user1'); // Menghapus 'user1' dari daftar dibanned
console.log(isBanned('user1')); // Output: false, karena 'user1' sudah tidak dibanned
