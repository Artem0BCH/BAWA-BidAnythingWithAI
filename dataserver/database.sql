drop DATABASE IF EXISTS BAWAdb;
CREATE DATABASE BAWAdb;

use BAWAdb;

CREATE TABLE users(
    user_id integer not null primary key,
    username varchar(20) not null,
    email varchar(50) not null,
    password integer not null,
    created_at varchar(50) not null,
    account_status varchar(50) not null
);
CREATE TABLE user_profiles(
    profile_id integer not null primary key,
    user_id foreign key users.user_id,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    phone_number varchar(15) not null,
    profile_picture not null,
    address varchar(60) not null,
    city varchar(20) not null,
    postal_code varchar(20) not null,
    country varchar(50) not null
);


CREATE TABLE items(
    item_id integer not null primary key,
    seller_id foreign key users.user_id,
    category_id foreign key categories.category_id,
    title varchar(30) not null,
    description varchar(500) not null,
    condition not null,
    brand varchar(30) not null,
    model varchar (30) not null,
    created_at varchar(20) not null,
    updated_at varchar(20) not null,
    deletet_at varchar(20) not null
);
CREATE TABLE categories(
    category_id integer not null primary key,
    category_name varchar(20) not null
);
CREATE TABLE item_images(
    image_id integer not null primary key,
    item_id foreign key items.item_id,
    image_url varchar(100) not null,
    is_primary varchar(20) not null,
    uploaded_at varchar(20) not null
);


CREATE TABLE auctions(
    auction_id integer not null primary key,
    product_id foreign key items.item_id,
    winner_id foreign key users.user_id,
    starting_price varchar(20) not null,
    current price varchar(20) not null,
    minimum_increment varchar(20) not null,
    reserve_price varchar(20) not null,
    start_time varchar(20) not null,
    end_time varchar(20) not null,
    status varchar(50) not null
);
CREATE TABLE bids(
    bid_id integer not null primary key,
    auction_id foreign key auctions.auction_id,
    bidder_id foreign key users.user_id,
    bid_amount varchar(50) not null,
    amount_of_bids not null,
    status varchar(50) not null
);
CREATE TABLE watchlist(
    watchlist_id integer not null primary key,
    user_id foreign key users.user_id,
    auction_id foreign key auctions.auction_id
);


CREATE TABLE ai_configuration(
    config_id integer not null primary key,
    user_id foreign key users.user_id,
    provider varchar(30) not null,
    model varchar(20) not null,
    encrypted_api_key integer varchar (200) not null,
    created_at varchar(20) not null,
    deletet_at varchar(20) not null
);
CREATE TABLE ai_conversations(
    conversation_id integer not null primary key,
    user_id foreign key users.user_id,
    title varchar(50) not null
);
CREATE TABLE ai_messages(
    message_id integer not null primary key,
    conversation_id foreign key ai_conversations.conversation_id
);


CREATE TABLE notifications(
    notification_id integer not null primary key,
    user_id foreign key users.user_id,
    title varchar(15),
    message ,
    type varchar(15),
    is_read varchar(10)
);


CREATE TABLE transactions(
    transaction_id integer not null primary key,
    auction_id foreign key auctions.auction_id,
    buyer_id foreign key users.user_id,
    seller_id foreign key users.user_id,
    amount integer varchar(50) not null,
    payment_status varchar(15) not null,
    created_at varchar(15) not null,
    paid_at varchar(15) not null 
);

