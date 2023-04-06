create table 'messages' (
    id bigserial primary key,
    user_id bigserial, not null,
    message VARCHAR(255) null,
    recipient_id bigserial, not null,
    time TIMESTAMP auto not null,
    
    CONSTRAINT fk_user_id
        FOREING KEY(user_id)
            REFERENCES users(user_id),
    
     CONSTRAINT fk_recipient_id
        FOREING KEY(recipient_id)
            REFERENCES users(user_id)


);