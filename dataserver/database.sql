DROP DATABASE IF EXISTS BAWAdb;
CREATE DATABASE BAWAdb;

USE BAWAdb;

CREATE TABLE users (
    user_id INTEGER NOT NULL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    account_status VARCHAR(50) NOT NULL
);

CREATE TABLE categories (
    category_id INTEGER NOT NULL PRIMARY KEY,
    category_name VARCHAR(20) NOT NULL
);

CREATE TABLE user_profiles (
    profile_id INTEGER NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    profile_picture VARCHAR(255) NOT NULL,
    address VARCHAR(60) NOT NULL,
    city VARCHAR(20) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE items (
    item_id INTEGER NOT NULL PRIMARY KEY,
    seller_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    title VARCHAR(30) NOT NULL,
    description VARCHAR(500) NOT NULL,
    `condition` VARCHAR(50) NOT NULL,
    brand VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletet_at DATETIME NULL DEFAULT NULL,
    FOREIGN KEY (seller_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE item_images (
    image_id INTEGER NOT NULL PRIMARY KEY,
    item_id INTEGER NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    is_primary TINYINT(1) NOT NULL,
    uploaded_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

CREATE TABLE auctions (
    auction_id INTEGER NOT NULL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    winner_id INTEGER,
    starting_price DECIMAL(10,2) NOT NULL,
    current_price DECIMAL(10,2) NOT NULL,
    minimum_increment DECIMAL(10,2) NOT NULL,
    reserve_price DECIMAL(10,2) NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES items(item_id),
    FOREIGN KEY (winner_id) REFERENCES users(user_id)
);

CREATE TABLE bids (
    bid_id INTEGER NOT NULL PRIMARY KEY,
    auction_id INTEGER NOT NULL,
    bidder_id INTEGER NOT NULL,
    bid_amount DECIMAL(10,2) NOT NULL,
    amount_of_bids INTEGER NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id),
    FOREIGN KEY (bidder_id) REFERENCES users(user_id)
);

CREATE TABLE watchlist (
    watchlist_id INTEGER NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    auction_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id)
);

CREATE TABLE ai_configuration (
    config_id INTEGER NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    provider VARCHAR(30) NOT NULL,
    model VARCHAR(20) NOT NULL,
    encrypted_api_key VARCHAR(200) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deletet_at DATETIME NULL DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE ai_conversations (
    conversation_id INTEGER NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE ai_messages (
    message_id INTEGER NOT NULL PRIMARY KEY,
    conversation_id INTEGER NOT NULL,
    FOREIGN KEY (conversation_id) REFERENCES ai_conversations(conversation_id)
);

CREATE TABLE notifications (
    notification_id INTEGER NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(100) NULL,
    message VARCHAR(500),
    type VARCHAR(15),
    is_read TINYINT(1) NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE transactions (
    transaction_id INTEGER NOT NULL PRIMARY KEY,
    auction_id INTEGER NOT NULL,
    buyer_id INTEGER NOT NULL,
    seller_id INTEGER NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_status VARCHAR(15) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    paid_at DATETIME NULL DEFAULT NULL,
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id),
    FOREIGN KEY (buyer_id) REFERENCES users(user_id),
    FOREIGN KEY (seller_id) REFERENCES users(user_id)
);

DROP USER IF EXISTS 'testuser'@'localhost';
CREATE USER 'testuser'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON BAWAdb.* TO 'testuser'@'localhost';
