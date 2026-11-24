USE BAWAdb;

-- users
INSERT INTO users (
    user_id,
    username,
    email,
    password,
    created_at,
    account_status
)
VALUES (
    1,
    'test dummy',
    'testdummy@gmail.com',
    '1234@1234',
    '2026-11-09 10:00:00',
    'Active'
);


-- profiles
INSERT INTO user_profiles (
    profile_id,
    user_id,
    first_name,
    last_name,
    phone_number,
    profile_picture,
    address,
    city,
    postal_code,
    country
)
VALUES (
    1,
    1,
    'dummy',
    'test',
    '+358 44 2223456',
    'cutiepie.png',
    'twinstreet',
    'TwinCity',
    '01666',
    'Finland'
);


-- categorys
INSERT INTO categories (category_id, category_name)
VALUES(1, 'medieval');


-- items
INSERT INTO items (
    item_id,
    seller_id,
    category_id,
    title,
    description,
    `condition`,
    brand,
    model,
    created_at,
    updated_at,
    deletet_at
)
VALUES (
    1,
    1,
    1,
    'Catapult',
    'This catapult shoots dummies',
    'Very good',
    'LockheadMartin',
    'Dummyblaster 01',
    '2026-11-09 10:00:00',
    '2026-11-10 10:00:00',
    NULL
);


-- item images
INSERT INTO item_images (image_id, item_id, image_url, is_primary, uploaded_at)
VALUES (1, 1, 'https://jambo.png', TRUE, '2026-11-11 10:00:00');


-- auctions
INSERT INTO auctions (
    auction_id,
    product_id,
    winner_id,
    starting_price,
    current_price,
    minimum_increment,
    reserve_price,
    start_time,
    end_time,
    status
)
VALUES (
    1,
    1,
    NULL,
    50.00,
    67.00,
    1.00,
    100.00,
    NOW(),
    DATE_ADD(NOW(), INTERVAL 1 DAY),
    'active'
);


-- bids
INSERT INTO bids (
    bid_id,
    auction_id,
    bidder_id,
    bid_amount,
    amount_of_bids,
    status
)
VALUES (
    1,
    1,
    1,
    67.00,
    1,
    'active'
);


-- wathclist
INSERT INTO watchlist (watchlist_id, user_id, auction_id)
VALUES (1, 1, 1 );


-- AI config
INSERT INTO ai_configuration (
    config_id,
    user_id,
    provider,
    model,
    encrypted_api_key,
    created_at,
    deletet_at
)
VALUES (
    1,
    1,
    'Claude',
    '',
    '',
    '2026-11-11 10:00:00',
    NULL
);


-- AI conv
INSERT INTO ai_conversations (conversation_id, user_id, title)
VALUES (1, 1, 'Help me navigate this website');


-- AI messages
INSERT INTO ai_messages ( message_id, conversation_id)
VALUES (1, 1 );


-- Notifications
INSERT INTO notifications (
    notification_id,
    user_id,
    title,
    message,
    type,
    is_read
)
VALUES (
    1,
    1,
    'Email address confirmation',
    'Confirm your email address!',
    'warning',
    TRUE
);


-- Transactions
INSERT INTO transactions (
    transaction_id,
    auction_id,
    buyer_id,
    seller_id,
    amount,
    payment_status,
    created_at,
    paid_at
)
VALUES (
    1,
    1,
    1,
    1,
    77.00,
    'Successful',
    '2026-11-11 10:27:00',
    '2026-11-11 10:30:00'
); 