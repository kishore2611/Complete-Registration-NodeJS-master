const router = require('express').Router()
const { Router } = require('express')

const { verifyToken } = require('../middlewares/authentication')
const { upload } = require('../middlewares/multer')
const { authorizeRoles } = require('../middlewares/authorizeRoles')

const { register, login, verifyUser, logOut, resendCode, forgotPassword, verifyCode, resetPassword, updatePassword, socialLogin } = require('../controllers/authController')




//Authentication
router.post('/register', upload.single('profilePicture'), register)
router.post('/verifyUser', verifyUser)
router.post('/resendCode', resendCode)
router.post('/login', login)
router.post('/forgotPassword', forgotPassword)
router.post('/verifyCode', verifyCode)
router.post('/resetPassword', resetPassword)
router.post('/updatePassword', verifyToken, updatePassword)
router.post('/logOut', verifyToken, logOut)
router.post('/socialLogin', socialLogin)


module.exports = router;