const crypto = require('crypto')
const bcrypt = require("bcrypt");

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

async function generateToken (text) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(text, saltRounds)
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(hash), cipher.final()]);
  return { 
    token, 
    tokenEncrypted: encrypted.toString('hex')
  }
}

async function decodeToken (token) {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(token, 'hex')), decipher.final()]);
  return decrpyted.toString();
}

module.exports = {
  generateToken,
  decodeToken
}
