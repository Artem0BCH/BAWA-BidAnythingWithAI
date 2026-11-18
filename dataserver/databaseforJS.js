import { createConnection } from "mariadb";

export default class Database {
    #connectioninfo;

    constructor(connectioninfo) {
        this.#connectioninfo = Object.freeze(connectioninfo);
    }

    get connection() {
        try {
            return createConnection(this.#connectioninfo);
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    closeConnection(connection) {
        try {
            if (connection) connection.end();
            return;
        } catch (error) {
            return false;
        }
    }

    perfomsurvey(sql, params, connection) {
        return new Promise(async (resolve, reject) => {
            let newConnection = false;
            try {
                if (!connection) {
                    connection = await this.connection;
                    if (connection) {
                        newConnection = true;
                    } else {
                        return reject({ message: "Connection didn't work" });
                    }
                }

                const surveyresult = await connection.query(sql, params);
                if (typeof surveyresult.affectedRows === "undefined") {
                    resolve({ surveyresult, resultset: true });
                } else {
                    resolve({
                        surveyresult: {
                            changedrowsLkm: Number(surveyresult.affectedRows),
                            addedNbr: Number(surveyresult.insertId),
                            status: Number(surveyresult.warningStatus),
                        },
                        resultset: false,
                    });
                }
            } catch (virhe) {
                reject({ message: `SQL-error ${virhe.message}` }); //debug
            } finally {
                if (connection && newConnection) connection.end();
            }
        });
    }
}
