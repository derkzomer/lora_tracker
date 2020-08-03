create table transmissions (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, s_t INT(11), ms_t INT(3), s_r INT(11), ms_r INT(3), rssi INT(5), snr FLOAT, freqErr INT(5), ts TIMESTAMP);

create table test_transmissions (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, uuid VARCHAR(13), unix_epoch INT(10), millis INT(3), repeat_signal INT(2), ts TIMESTAMP);