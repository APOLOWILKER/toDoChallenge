import fs from 'node:fs/promises'


// rota para o arquivo do DB
const databasePath = new URL('./db.json', import.meta.url)

export class Database {
  #database = {}

  // leitura e persistência de dados
  constructor() {
    fs.readFile(databasePath, 'utf-8')
    .then(data => {
      this.#database = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2))
  }

  select(table) {
    let data = this.#database[table] ?? []

    return data;
  }

  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist();

    return data;
  }
}
