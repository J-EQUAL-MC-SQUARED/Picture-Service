CREATE TABLE items (
  itemid int,
  description VARCHAR(50),
  PRIMARY KEY(itemid)
);

CREATE TABLE pictures (
  picid int,
  itemid int ,
  largePics VARCHAR(50),
  thumbnails VARCHAR(50),
  PRIMARY KEY(picid),
  CONSTRAINT fk_itemid
    FOREIGN KEY(itemid)
      REFERENCES items(itemid)
);

-- This script is for generating db
COPY items(itemid, description)
FROM '/Users/hezki96/dev/Picture-Service/test.csv'
CSV HEADER;

COPY pictures(picid, itemid, largePics, thumbnails)
FROM '/Users/hezki96/dev/Picture-Service/test2.csv'
CSV HEADER;