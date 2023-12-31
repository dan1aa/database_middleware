import Joi from 'joi';

export const createFeedbackOnInternScheme = Joi.object({
    attendance: Joi.boolean().required(),
    techCheck:  Joi.string().required(),
    participationActivity: Joi.string().required(),
    comment: Joi.string(),
    internId: Joi.number().required(),
    classEventId: Joi.number().required()
});

export const updateFeedbackOnInternScheme = Joi.object({
    attendance: Joi.boolean(),
    techCheck:  Joi.string(),
    participationActivity: Joi.string(),
    comment: Joi.string(),
    internId: Joi.number(),
    classEventId: Joi.number()
});