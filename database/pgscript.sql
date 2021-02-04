-- SCHEMA
CREATE TABLE items (
  itemid int,
  description VARCHAR(50),
  PRIMARY KEY(itemid)
);

CREATE TABLE pictures (
  picid int,
  fkitemid int ,
  largePics TEXT,
  thumbnails TEXT,
  PRIMARY KEY(picid),
  CONSTRAINT fk_itemid
    FOREIGN KEY(fkitemid)
      REFERENCES items(itemid)
);

--Index the Foreign Key for faster search
CREATE INDEX pictures_fkitemid_index
on pictures ("fkitemid" desc);

-- NEED TO WRITE THE CSV FIRST FOR GENERATING BULK SET OF DATA--

-- This script is for generating db--
COPY items(itemid, description)
FROM '/Users/hezki96/dev/Picture-Service/database/csv/items.csv'
CSV HEADER;

COPY pictures(picid, fkitemid, largePics, thumbnails)
FROM '/Users/hezki96/dev/Picture-Service/database/csv/pictures.csv'
CSV HEADER;

--GET REQUEST QUERY--

SELECT description, largePics, thumbnails FROM items INNER JOIN pictures ON itemid = fkitemid WHERE itemid = 1;