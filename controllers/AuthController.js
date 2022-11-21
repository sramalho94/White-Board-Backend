const { Student } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const student = await Student.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      student &&
      (await middleware.comparePassword(
        student.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: student.id,
        email: student.email
      }
      let token = middleware.createToken(payload)
      return res.send({ student: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized Student' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const student = await Student.create({ email, passwordDigest, name })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  CheckSession
}
