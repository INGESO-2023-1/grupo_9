create table messages (
    id bigserial primary key,
    user_id bigserial NOT null REFERENCES users(user_id),
    message VARCHAR(255) null,
    recipient_id bigserial NOT null REFERENCES users(user_id),
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP 

);