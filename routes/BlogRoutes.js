const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');


router.get('/',BlogController.blog_index)
router.post('/',BlogController.blog_create_post)

router.get('/create',BlogController.blog_create_get)

router.get('/:id',BlogController.blog_details)
router.delete('/:id',BlogController.blog_delete)

module.exports = router;