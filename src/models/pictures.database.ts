import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'EurekaDB', location: 'default'});
};

export const createTable = async () => {
  // create table if not exists
  const db = await getDBConnection();
  const query = `
  CREATE TABLE IF NOT EXISTS "pictures" (
  "id"	INTEGER,
  "path"	TEXT,
  "latitude"	TEXT,
  "longitude"	TEXT,
  PRIMARY KEY("id" AUTOINCREMENT)
  );`;
  await db.executeSql(query);
};

export const createPicture = async (
  picture: any,
  latitud: any,
  longitud: any,
) => {
  const db = await getDBConnection();
  const insertQuery = `INSERT INTO pictures(id, path, latitude, longitude) values (NULL, '${picture}', '${latitud}', '${longitud}')`;
  return db.executeSql(insertQuery);
};

export const getAllPictures = async () => {
  const db = await getDBConnection();
  const results = await db.executeSql(
    `SELECT * FROM pictures ORDER BY id DESC`,
  );
  const pictures: any = [];
  results.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      pictures.push(result.rows.item(index));
    }
  });
  return pictures;
};

export const getPicture = async (id: any) => {
  const db = await getDBConnection();
  const results = await db.executeSql(
    `SELECT * FROM pictures WHERE id = ${id}`,
  );
  return results;
};
