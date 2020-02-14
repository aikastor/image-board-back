const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const fileDb = require('../fieDb');
const config = require('../config');

const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, config.uploadPath)
      },
      filename:  (req, file, cb) =>{
        cb(null, nanoid() + path.extname(file.originalname))
      }
});

const upload = multer({storage });

const router = express.Router();



router.get('/', async (req, res) => {
  const messages = await fileDb.getItems();
  res.send(messages);
});

router.post ('/', upload.single('image'), async (req, res) =>{
  const message = req.body;
  console.log(message);

  if (req.file) {
    message.image = req.file.filename;
  }
  await fileDb.addItem(message);

  res.send('sent');
});

module.exports = router;