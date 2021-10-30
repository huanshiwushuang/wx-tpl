<?php

return [
    'kv7p8t8q' => [
        'type' => 'object',
        'properties' => [
            // websocket 客户端id
            'client_id' => [
                'type' => 'string',
                'minLength' => 1,
            ],
            // 用户唯一 id
            'uid' => [
                'type' => 'string',
                'minLength' => 1,
            ],
        ],
        'required' => ['client_id', 'uid'],
    ]
];