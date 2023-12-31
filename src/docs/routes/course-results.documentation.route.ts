import j2s from 'joi-to-swagger';
import { createCourseResultsScheme, updateCourseResultScheme } from '@request-schemas/course-result.request-shema';

const createCourseResults = {
    tags: ['Course Results'],
    operationId: 'createCourseResults',
    requestBody: {
        content: {
            'application/json': {
                schema: j2s(createCourseResultsScheme).swagger,
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Course-result created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            courseId: { type: 'number', example: 14 },
                            internId: { type: 'number', example: 14 },
                            masteryResult: { type: 'string', example: 'Try again' },
                            englishLevel: { type: 'string', example: 'Amazing' },
                        }
                    }
                },
            },
        },
        '400': {
            description: 'You try to create record with not exising id in Intern-Course table',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Record in table Intern-Course with id ${internCourseId} doesn`t exist'
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

const getCourseResultById = {
    tags: ['Course Results'],
    operationId: 'getCourseResultById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Course-result id',
            required: true,
            type: 'number',
        },
    ],
    responses: {
        '200': {
            description: 'Course-result retrived successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            internId: { type: 'number', example: 14 },
                            courseId: { type: 'number', example: 14 },
                            masteryResult: { type: 'string', example: 'Try again' },
                            englishLevel: { type: 'string', example: 'Amazing' },
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try access to not existing course-result record',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course-result with id {id} doesn`t exist'
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

const updateCourseResultById = {
    tags: ['Course Results'],
    operationId: 'updateCourseResultById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Course-result id',
            required: true,
            type: 'number',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: j2s(updateCourseResultScheme).swagger,
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Course-result updated successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            internId: { type: 'number', example: 14 },
                            courseId: { type: 'number', example: 10 },
                            masteryResult: { type: 'string', example: 'Try again' },
                            englishLevel: { type: 'string', example: 'Amazing' },
                        }
                    }
                },
            },
        },
        '400': {
            description: 'You try update field internCourseId to value that dose`t exist',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Record in table Intern-Course with id ${internCourseId} doesn`t exist'
                            }
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try access to not existing course-result record',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course-result with id {id} doesn`t exist'
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

const deleteCourseResultById = {
    tags: ['Course Results'],
    operationId: 'deleteCourseResultById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Course-result id',
            required: true,
            type: 'number',
        },
    ],
    responses: {
        '200': {
            description: 'Course-result deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            internId: { type: 'number', example: 14 },
                            courseId: { type: 'number', example: 11 },
                            masteryResult: { type: 'string', example: 'Try again' },
                            englishLevel: { type: 'string', example: 'Amazing' },
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try to delete not existing course-result record',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course-result with id ${id} doesn`t exist'
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

const getListOfCourseResults = {
    tags: ['Course Results'],
    operationId: 'getListOfCourseResults',
    responses: {
        '200': {
            description: 'Successful Retrieve list of course-results',
            content: {
                'application/json': {
                    example: [
                        {
                            id: { type: 'number', example: 42 },
                            internId: { type: 'number', example: 14 },
                            courseId: { type: 'number', example: 14 },
                            masteryResult: { type: 'string', example: 'Try again' },
                            englishLevel: { type: 'string', example: 'Amazing' },
                        },
                        {
                            id: { type: 'number', example: 42 },
                            internId: { type: 'number', example: 14 },
                            courseId: { type: 'number', example: 12 },
                            masteryResult: { type: 'string', example: 'Try again' },
                            englishLevel: { type: 'string', example: 'Not bad' },
                        }
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
    '/api/course-results': {
        get: getListOfCourseResults,
        post: createCourseResults,
    },
    '/api/course-results/:id': {
        get: getCourseResultById,
        put: updateCourseResultById,
        delete: deleteCourseResultById
    }
};

export default routes;