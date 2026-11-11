use BAWAdb;

--HUOM! delete vaarallinen ilman where-osaa

delete from users;
delete from user_profiles;
delete from items;
delete from categories;
delete from item_images;
delete from auctions;
delete from bids;
delete from watchlist;
delete from ai_configuration;
delete from ai_conversations;
delete from ai_messages;
delete from notifications;
delete from transactions;

INSERT INTO users(user_id, username, email, password, created_at, account_status)
values( 1, "test dummy", "testdummy@gmail.com", "1234@1234", "9.11.2026", "Active");

INSERT INTO user_profiles(profile_id, first_name, last_name, phone_number, profile_picture, address, city, postal_code, country)
values(1, "dummy", "test", "+358 44 2223456", "cutiepie.png", "twinstreet", "TwinCity", "01666", "Finland");

INSERT INTO items(
    item_id,
    title,
    description,
    condition,
    brand,
    model,
    created_at,
    updated_at,
    deletet_at)
values(1, "Catapult", "This catapult shoots dummys", "Very good", "LockheadMartin", "Dummyblaster 01", "9.11.2026", "10.11.2026", "12.11.2026");

INSERT INTO categories(category_id, category_name)
values(1, "medievel");

INSERT INTO item_images(
    image_id,
    image_url,
    is_primary,
    updated_at)
values(1, "https://jambo.png", "true", "11.11.2026");

INSERT into auctions(
    auction_id,
    starting_price,
    current_price,
    minimum_increment,
    reserve_price,
    start_time,
    end_time,
    status
)
values(1, 50, 67, 1, 100, "11.11.2026 10:05", "12.11.2026 12:00", "active");

INSERT INTO bids(
    bid_id,
    bid_amount,
    amount_of_bids,
    status
)
values(1, 1, 1, "active");

INSERT INTO watchlist( watchlist_id,)
values(1);

INSERT INTO ai_configuration(
    config_id,
    provider,
    model,
    encrypted_api_key,
    created_at,
    deletet_at
)
values(1, "Claude", "oppus 5.5", "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
", "11.11.2026", "12.12.2026");

INSERT INTO ai_conversations( conversation_id, title)
values(1, "Help me to navigate in this website");

INSERT INTO ai_messages(ai_messages)
values(1);

INSERT INTO notifications(
    notification_id,
    title,
    message,
    type,
    is_read
)
values(1, "Email adress confirmation", "Confirm your email adress!", "warning", "True");

INSERT INTO transactions(
    transaction_id,
    amount,
    payment_status,
    created_at,
    paid_at
)
values(1, 77, "Succesful", "11.11.2026 10:27", "11.11.2026 10:30");