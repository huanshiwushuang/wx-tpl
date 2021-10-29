<?php
return [
    'kv7k1qrh' => [
        'type' => 'object',
        'properties' => [
            'data' => [
                'type' => 'array',
                'minItems' => 1,
                'items' => [
                    'type' => 'object',
                    'properties' => [
                        'name' => [
                            'type' => 'string',
                        ],
                    ],
                    'required' => ['name'],
                ]
            ]
        ],
        'required' => ['data'],
    ],
];
