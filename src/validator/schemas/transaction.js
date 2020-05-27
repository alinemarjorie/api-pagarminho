const Joi = require('@hapi/joi');

module.exports.transactionValidate = Joi.object({
  body: Joi.object({
    amount: Joi.number().required(),
    describe: Joi.string().required(),
    payment_method: Joi.string().required().valid('debit_card', 'credit_card'),
    card_number: Joi.string().required(),
    card_name: Joi.string().required(),
    card_validate: Joi.string().required(),
    card_cvv: Joi.string().required(),
  })
}).unknown(true)
