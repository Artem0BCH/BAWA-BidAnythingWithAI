import { createConnection } from "mariadb";

export default class Database {
    #connectionInfo;

    constructor(connectionInfo) {
        this.#connectionInfo = Object.freeze(connectionInfo);
    }

    // Make a connection
    get connection() {
        try {
            return createConnection(this.#connectionInfo);
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    // Close the connection to the Database
    closeConnection(connection) {
        try {
            if (connection) {
                connection.end();
            }
        } catch (error) {
            return false;
        }
    }

    // Run SQL query
    runQuery(sql, parameters, connection) {
        return new Promise(async (resolve, reject) => {
            let newConnection = false;

            try {
                // Creating new connection incase there wasn't one
                if (!connection) {
                    //if connection "opposite"

                    connection = await this.connection;

                    if (connection) {
                        newConnection = true;
                    } else {
                        return reject({
                            msg: "FAILED TO CONNECT!!!",
                        });
                    }
                }

                // Running an SQL query
                const queryResult = await connection.query(sql, parameters);

                // Checking if result set or change request is in question
                if (typeof queryResult.affectedRows === "undefined") {
                    resolve({
                        queryResult,
                        resultSet: true,
                    });
                } else {
                    resolve({
                        queryResult: {
                            changedRowsAmount: Number(queryResult.affectedRows),
                            addedNum: Number(queryResult.insertId),
                            status: Number(queryResult.warningStatus),
                        },

                        resultSet: false,
                    });
                }
            } catch (error) {
                reject({
                    msg: `SQL-error ${error.message}`,
                });
            } finally {
                // Closing connection if the function had made a new one
                if (connection && newConnection) {
                    connection.end();
                }
            }
        });
    }
}
