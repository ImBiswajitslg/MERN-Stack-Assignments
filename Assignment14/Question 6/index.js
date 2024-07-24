const fs = require('fs');
const tar = require('tar');
const zlib = require('zlib');
const path = require('path');

const filesToCompress = ['Hello.txt', 'Hi.txt', 'How.txt'];
const outputArchive = 'combined_files.tar.gz';

async function createArchive() {
  try {
    await tar.create({
      gzip: true,
      file: outputArchive
    }, filesToCompress);
    console.log('Archive created successfully:', outputArchive);
  } catch (err) {
    console.error('Error creating archive:', err);
  }
}

createArchive();
