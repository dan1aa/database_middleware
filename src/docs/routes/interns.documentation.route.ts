import j2s from 'joi-to-swagger';
import { 
    createInternsScheme, 
    updateInternScheme, 
} from '@request-schemas/intern.request-schema';

const createInterns = {
    tags: ['Interns'],
    operationId: 'createInterns',
    requestBody: {
        content: {
            'application/json': {
                schema: j2s(createInternsScheme).swagger,
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Intern created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            explorerId: { type: 'string', example: 'explorerId' },
                            explorerMail: { type: 'string', example: 'explorerId@gmail.com' },
                            explorerPassword: { type: 'string', example: 'password123' },
                            discordNickname: { type: 'string', example: 'discordNickname' },
                            discordId: { type: 'string', example: 'someDiscordId' },
                            cohort: { type: 'string', example: 'SEP 2023' },
                            contactId: { type: 'number', example: 34 }
                        }
                    }
                },
            },
        },
        '400': {
            description: 'You try to create existing intern with unique field',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Intern with explorerId testId already exist'
                            }
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try to create intern with not contact existing contact id',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Contact with id 34 doesn`t exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const getInternById = {
    tags: ['Interns'],
    operationId: 'getInternById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Intern id',
            required: true,
            type: 'number',
        },
    ],
    responses: {
        '200': {
            description: 'Intern retrived successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            explorerId: { type: 'string', example: 'explorerId' },
                            explorerMail: { type: 'string', example: 'explorerId@gmail.com' },
                            explorerPassword: { type: 'string', example: 'password123' },
                            discordNickname: { type: 'string', example: 'discordNickname' },
                            discordId: { type: 'string', example: 'someDiscordId' },
                            cohort: { type: 'string', example: 'SEP 2023' },
                            contactId: { type: 'number', example: 34 }
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try access intern with not existing id',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Intern with id 34 doesn`t exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const updateInternById = {
    tags: ['Interns'],
    operationId: 'updateInternById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Intern id',
            required: true,
            type: 'number',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: j2s(updateInternScheme).swagger,
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Intern updated successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            explorerId: { type: 'string', example: 'explorerId' },
                            explorerMail: { type: 'string', example: 'explorerId@gmail.com' },
                            explorerPassword: { type: 'string', example: 'password123' },
                            discordNickname: { type: 'string', example: 'discordNickname' },
                            discordId: { type: 'string', example: 'someDiscordId' },
                            cohort: { type: 'string', example: 'SEP 2023' },
                            contactId: { type: 'number', example: 34 }
                        }
                    }
                },
            },
        },
        '400': {
            description: 'You try to update unique field that already exist',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Intern with explorerId testId already exist'
                            }
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try access intern with not existing id',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Intern with id 34 doesn`t exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const deleteInternById = {
    tags: ['Interns'],
    operationId: 'deleteInternById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Intern id',
            required: true,
            type: 'number',
        },
    ],
    responses: {
        '200': {
            description: 'Intern deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            explorerId: { type: 'string', example: 'explorerId' },
                            explorerMail: { type: 'string', example: 'explorerId@gmail.com' },
                            explorerPassword: { type: 'string', example: 'password123' },
                            discordNickname: { type: 'string', example: 'discordNickname' },
                            discordId: { type: 'string', example: 'someDiscordId' },
                            cohort: { type: 'string', example: 'SEP 2023' },
                            contactId: { type: 'number', example: 34 }
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try to delete not existing intern',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Intern with id 34 doesn`t exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }  
    },
};

const getListOfInterns = {
    tags: ['Interns'],
    operationId: 'getListOfInterns',
    parameters: [
        {
            name: 'cohort',
            in: 'path',
            description: 'To filter interns by the cohort in which they began their internship',
            required: false,
            type: 'string',
        },
        {
            name: 'courseCipher',
            in: 'path',
            description: 'To filter interns by courses they are taking part in',
            required: false,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Successful Retrieve list of interns',
            content: {
                'application/json': {
                    example: [
                        {
                            id: 12345,
                            explorerId: 'johndoe123',
                            explorerMail: 'johndoe@gmail.com',
                            explorerPassword: 'securePassword123',
                            discordNickname: 'JohnDoe#1234',
                            discordId: '123456789012345678',
                            cohort: 'SEP 2023',
                            contactId: 5678
                        },
                        {
                            id: 67890,
                            explorerId: 'janedoe456',
                            explorerMail: 'janedoe@gmail.com',
                            explorerPassword: 'strongPassword456',
                            discordNickname: 'JaneDoe#5678',
                            discordId: '987654321098765432',
                            cohort: 'SEP 2023',
                            contactId: 9876
                        },
                    ]
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const routes = {
    '/api/interns': {
        get: getListOfInterns,
        post: createInterns
    },
    '/api/interns/:id': {
        get: getInternById,
        put: updateInternById,
        delete: deleteInternById
    },
};

export default routes;